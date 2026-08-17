// ============================================================
// SCRIPT.JS — CONTROLE DE PROGRESSO & HISTÓRICO V3.1
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // Inicializa os dados com tratamento de erro e fallbacks seguros
    let dados;
    try {
        dados = JSON.parse(localStorage.getItem('trilhaPolicial')) || {
            acertos: 0,
            erros: 0,
            materiasConcluidas: 0,
            questoesRespondidas: []
        };
    } catch (e) {
        dados = {
            acertos: 0,
            erros: 0,
            materiasConcluidas: 0,
            questoesRespondidas: []
        };
    }

    // Inicializa o histórico geral (nunca zera)
    let historico;
    try {
        historico = JSON.parse(localStorage.getItem('trilhaHistorico')) || {
            totalAcertos: 0,
            totalErros: 0,
            sessao: 0
        };
    } catch (e) {
        historico = {
            totalAcertos: 0,
            totalErros: 0,
            sessao: 0
        };
    }

    // Atualiza a interface com os dados carregados de forma segura
    function atualizarDashboard() {
        const total = (dados.acertos || 0) + (dados.erros || 0);
        const aproveitamento = total > 0 ? Math.round(((dados.acertos || 0) / total) * 100) : 0;

        const elAcertos = document.getElementById('acertos');
        const elErros = document.getElementById('erros');
        const elAproveitamento = document.getElementById('aproveitamento');
        const elMaterias = document.getElementById('materias');

        if (elAcertos) elAcertos.textContent = dados.acertos || 0;
        if (elErros) elErros.textContent = dados.erros || 0;
        if (elAproveitamento) elAproveitamento.textContent = aproveitamento + '%';
        if (elMaterias) elMaterias.textContent = dados.materiasConcluidas || 0;

        const histAcertos = document.getElementById('historicoAcertos');
        const histErros = document.getElementById('historicoErros');
        const histTotal = document.getElementById('historicoTotal');

        if (histAcertos) histAcertos.textContent = historico.totalAcertos || 0;
        if (histErros) histErros.textContent = historico.totalErros || 0;
        if (histTotal) histTotal.textContent = (historico.totalAcertos || 0) + (historico.totalErros || 0);
    }

    // Salva os dados no navegador com persistência segura
    function salvarDados() {
        try {
            localStorage.setItem('trilhaPolicial', JSON.stringify(dados));
            localStorage.setItem('trilhaHistorico', JSON.stringify(historico));
            atualizarDashboard();
        } catch (e) {
            console.error('❌ Erro ao salvar dados no LocalStorage:', e);
        }
    }

    // Função para registrar acerto/erro
    window.registrarQuestao = function(acertou, materia, modulo, aula, questaoId) {
        if (acertou) {
            dados.acertos = (dados.acertos || 0) + 1;
            historico.totalAcertos = (historico.totalAcertos || 0) + 1;
        } else {
            dados.erros = (dados.erros || 0) + 1;
            historico.totalErros = (historico.totalErros || 0) + 1;
        }

        if (questaoId) {
            if (!Array.isArray(dados.questoesRespondidas)) {
                dados.questoesRespondidas = [];
            }
            dados.questoesRespondidas.push({
                materia: materia || 'Geral',
                modulo: modulo || 'Geral',
                aula: aula || 'Geral',
                questaoId: questaoId,
                acertou: !!acertou,
                data: new Date().toISOString()
            });
        }
        salvarDados();
    };

    // Função para zerar o desempenho atual (mantém histórico)
    window.zerarDesempenho = function() {
        if (confirm('Deseja zerar seu desempenho atual? O histórico geral será mantido.')) {
            dados.acertos = 0;
            dados.erros = 0;
            dados.materiasConcluidas = 0;
            dados.questoesRespondidas = [];
            salvarDados();
            
            // Suporte opcional a toasts personalizados se existirem na interface
            if (typeof showToast === 'function') {
                showToast('Desempenho atual zerado com sucesso!');
            } else {
                alert('Desempenho zerado! Histórico geral mantido.');
            }
        }
    };

    // Função para exibir o histórico
    window.exibirHistorico = function() {
        return {
            totalAcertos: historico.totalAcertos || 0,
            totalErros: historico.totalErros || 0,
            totalQuestoes: (historico.totalAcertos || 0) + (historico.totalErros || 0),
            sessao: historico.sessao || 0
        };
    };

    // Função para concluir uma matéria
    window.concluirMateria = function() {
        dados.materiasConcluidas = (dados.materiasConcluidas || 0) + 1;
        salvarDados();
    };

    // Inicializa o dashboard
    atualizarDashboard();

    console.log('✅ Trilha Policial 2026 — Sistema de progresso ativado!');
});
