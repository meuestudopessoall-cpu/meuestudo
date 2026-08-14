// ============================================================
// DADOS.JS — FUTURO APROVADO
// BANCO DE CONTEÚDO V3.1 REFINADO
// ============================================================

const DADOS = {
  materias: {

    // ========================================================
    // SEU CONTEÚDO ORIGINAL FICA AQUI
    // ========================================================
    // NÃO ALTERAR:
    //
    // matérias
    // módulos
    // aulas
    // resumos
    // questões
    // respostas
    // comentários
    //
    // ========================================================

  }
};


// ============================================================
// SISTEMA DE ACESSO AOS DADOS
// ============================================================

const BancoEstudos = {

  /**
   * Retorna todas as matérias.
   */
  materias() {
    return Object.entries(DADOS.materias || {});
  },

  /**
   * Retorna uma matéria pelo ID.
   */
  materia(id) {
    return DADOS.materias?.[id] || null;
  },

  /**
   * Retorna todos os módulos de uma matéria.
   */
  modulos(materiaId) {
    const materia = this.materia(materiaId);

    if (!materia) return [];

    return Object.entries(materia.modulos || {});
  },

  /**
   * Retorna um módulo específico.
   */
  modulo(materiaId, moduloId) {
    return DADOS
      .materias?.[materiaId]
      ?.modulos?.[moduloId] || null;
  },

  /**
   * Retorna todas as aulas de um módulo.
   */
  aulas(materiaId, moduloId) {
    const modulo = this.modulo(materiaId, moduloId);

    if (!modulo) return [];

    return Object.entries(modulo.aulas || {});
  },

  /**
   * Retorna uma aula específica.
   */
  aula(materiaId, moduloId, aulaId) {
    return DADOS
      .materias?.[materiaId]
      ?.modulos?.[moduloId]
      ?.aulas?.[aulaId] || null;
  },

  /**
   * Retorna as questões de uma aula.
   */
  questoesDaAula(materiaId, moduloId, aulaId) {
    const aula = this.aula(
      materiaId,
      moduloId,
      aulaId
    );

    return aula?.questoes || [];
  },

  /**
   * Retorna todas as questões do banco.
   */
  todasQuestoes() {

    const resultado = [];

    for (const [materiaId, materia] of this.materias()) {

      for (const [moduloId, modulo] of Object.entries(
        materia.modulos || {}
      )) {

        for (const [aulaId, aula] of Object.entries(
          modulo.aulas || {}
        )) {

          for (const questao of aula.questoes || []) {

            resultado.push({
              ...questao,

              materiaId,
              materiaNome: materia.nome,

              moduloId,
              moduloNome: modulo.nome,

              aulaId,
              aulaNome: aula.nome
            });

          }

        }

      }

    }

    return resultado;
  },

  /**
   * Retorna uma questão aleatória.
   */
  questaoAleatoria() {

    const questoes = this.todasQuestoes();

    if (!questoes.length) {
      return null;
    }

    const indice = Math.floor(
      Math.random() * questoes.length
    );

    return questoes[indice];
  },

  /**
   * Conta matérias.
   */
  totalMaterias() {
    return this.materias().length;
  },

  /**
   * Conta módulos.
   */
  totalModulos() {

    let total = 0;

    for (const [, materia] of this.materias()) {
      total += Object.keys(
        materia.modulos || {}
      ).length;
    }

    return total;
  },

  /**
   * Conta aulas.
   */
  totalAulas() {

    let total = 0;

    for (const [, materia] of this.materias()) {

      for (const [, modulo] of Object.entries(
        materia.modulos || {}
      )) {

        total += Object.keys(
          modulo.aulas || {}
        ).length;
      }

    }

    return total;
  },

  /**
   * Conta questões.
   */
  totalQuestoes() {
    return this.todasQuestoes().length;
  },

  /**
   * Retorna estatísticas completas do banco.
   */
  estatisticas() {

    return {
      materias: this.totalMaterias(),
      modulos: this.totalModulos(),
      aulas: this.totalAulas(),
      questoes: this.totalQuestoes()
    };

  },

  /**
   * Procura questões por texto.
   */
  buscar(texto) {

    const termo = String(texto || "")
      .trim()
      .toLowerCase();

    if (!termo) return [];

    return this.todasQuestoes().filter(questao => {

      const enunciado =
        String(questao.enunciado || "")
          .toLowerCase();

      const comentario =
        String(questao.comentario || "")
          .toLowerCase();

      return (
        enunciado.includes(termo) ||
        comentario.includes(termo)
      );

    });

  }

};


// ============================================================
// VALIDAÇÃO DO BANCO
// ============================================================

function validarBancoEstudos() {

  const erros = [];

  if (!DADOS || typeof DADOS !== "object") {
    erros.push("DADOS não foi definido.");
  }

  if (!DADOS.materias || typeof DADOS.materias !== "object") {
    erros.push("DADOS.materias não foi definido.");
  }

  if (erros.length) {

    console.error(
      "❌ Erro no banco de estudos:",
      erros
    );

    return false;
  }

  let questoesSemResposta = 0;
  let questoesSemEnunciado = 0;

  for (const [materiaId, materia] of BancoEstudos.materias()) {

    if (!materia.nome) {
      console.warn(
        `⚠️ Matéria sem nome: ${materiaId}`
      );
    }

    for (const [moduloId, modulo] of Object.entries(
      materia.modulos || {}
    )) {

      for (const [aulaId, aula] of Object.entries(
        modulo.aulas || {}
      )) {

        for (const questao of aula.questoes || []) {

          if (!questao.enunciado) {
            questoesSemEnunciado++;
            console.warn(
              "⚠️ Questão sem enunciado:",
              materiaId,
              moduloId,
              aulaId,
              questao.id
            );
          }

          if (
            questao.resposta !== "C" &&
            questao.resposta !== "E"
          ) {

            questoesSemResposta++;

            console.warn(
              "⚠️ Questão com resposta inválida:",
              materiaId,
              moduloId,
              aulaId,
              questao.id
            );

          }

        }

      }

    }

  }

  const estatisticas =
    BancoEstudos.estatisticas();

  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );

  console.log(
    "📚 FUTURO APROVADO — BANCO CARREGADO"
  );

  console.log(
    `📖 Matérias: ${estatisticas.materias}`
  );

  console.log(
    `📦 Módulos: ${estatisticas.modulos}`
  );

  console.log(
    `🎓 Aulas: ${estatisticas.aulas}`
  );

  console.log(
    `❓ Questões: ${estatisticas.questoes}`
  );

  console.log(
    `⚠️ Questões sem enunciado: ${questoesSemEnunciado}`
  );

  console.log(
    `⚠️ Questões com resposta inválida: ${questoesSemResposta}`
  );

  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );

  return true;
}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

validarBancoEstudos();
