// script.js — Controle de progresso com histórico permanente

document.addEventListener('DOMContentLoaded', function() {

    // Inicializa os dados
    let dados = JSON.parse(localStorage.getItem('trilhaPolicial')) || {
        acertos: 0,
        erros: 0,
        materiasConcluidas: 0,
        questoesRespondidas: []
    };

    // Inicializa o histórico geral (nunca zera)
    let historico = JSON.parse(localStorage.getItem('trilhaHistorico')) || {
        totalAcertos: 0,
        totalErros: 0,
        sessao: 0
    };

    // Atualiza a interface com os dados carregados
    function atualizarDashboard() {
        const total = dados.acertos + dados.erros;
        const aproveitamento = total > 0 ? Math.round((dados.acertos / total) * 100) : 0;

        document.getElementById('acertos').textContent = dados.acertos;
        document.getElementById('erros').textContent = dados.erros;
        document.getElementById('aproveitamento').textContent = aproveitamento + '%';
        document.getElementById('materias').textContent = dados.materiasConcluidas;

        const histAcertos = document.getElementById('historicoAcertos');
        const histErros = document.getElementById('historicoErros');
        const histTotal = document.getElementById('historicoTotal');
        if (histAcertos) histAcertos.textContent = historico.totalAcertos;
        if (histErros) histErros.textContent = historico.totalErros;
        if (histTotal) histTotal.textContent = historico.totalAcertos + historico.totalErros;
    }

    // Salva os dados no navegador
    function salvarDados() {
        localStorage.setItem('trilhaPolicial', JSON.stringify(dados));
        localStorage.setItem('trilhaHistorico', JSON.stringify(historico));
        atualizarDashboard();
    }

    // Função para registrar acerto/erro
    window.registrarQuestao = function(acertou, materia, modulo, aula, questaoId) {
        if (acertou) {
            dados.acertos++;
            historico.totalAcertos++;
        } else {
            dados.erros++;
            historico.totalErros++;
        }
        if (questaoId) {
            dados.questoesRespondidas.push({
                materia: materia,
                modulo: modulo,
                aula: aula,
                questaoId: questaoId,
                acertou: acertou,
                data: new Date().toISOString()
            });
        }
        salvarDados();
    };

    // Função para zerar o desempenho atual (mantém histórico)
    window.zerarDesempenho = function() {
        if (confirm('Zerar seu desempenho atual? O histórico geral será mantido.')) {
            dados.acertos = 0;
            dados.erros = 0;
            dados.materiasConcluidas = 0;
            dados.questoesRespondidas = [];
            salvarDados();
            alert('Desempenho zerado! Histórico geral mantido.');
        }
    };

    // Função para exibir o histórico
    window.exibirHistorico = function() {
        return {
            totalAcertos: historico.totalAcertos,
            totalErros: historico.totalErros,
            totalQuestoes: historico.totalAcertos + historico.totalErros,
            sessao: historico.sessao
        };
    };

    // Função para concluir uma matéria
    window.concluirMateria = function() {
        dados.materiasConcluidas++;
        salvarDados();
    };

    // Inicializa o dashboard
    atualizarDashboard();

    console.log('✅ Trilha Policial 2026 — Sistema de progresso ativado!');
});
