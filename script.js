// script.js — Controle de progresso

document.addEventListener('DOMContentLoaded', function() {

    // Carrega os dados salvos no navegador
    let dados = JSON.parse(localStorage.getItem('trilhaPolicial')) || {
        acertos: 0,
        erros: 0,
        materiasConcluidas: 0,
        questoesRespondidas: []
    };

    // Atualiza a interface com os dados carregados
    function atualizarDashboard() {
        const total = dados.acertos + dados.erros;
        const aproveitamento = total > 0 ? Math.round((dados.acertos / total) * 100) : 0;

        document.getElementById('acertos').textContent = dados.acertos;
        document.getElementById('erros').textContent = dados.erros;
        document.getElementById('aproveitamento').textContent = aproveitamento + '%';
        document.getElementById('materias').textContent = dados.materiasConcluidas;
    }

    // Salva os dados no navegador
    function salvarDados() {
        localStorage.setItem('trilhaPolicial', JSON.stringify(dados));
        atualizarDashboard();
    }

    // Função para registrar acerto/erro (será usada nas próximas páginas)
    window.registrarQuestao = function(acertou) {
        if (acertou) {
            dados.acertos++;
        } else {
            dados.erros++;
        }
        salvarDados();
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
