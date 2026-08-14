// ============================================================
// DADOS.JS — FUTURO APROVADO V4
// BANCO DE CONTEÚDO + SISTEMA DE ACESSO
// ============================================================
//
// IMPORTANTE:
// O conteúdo de DADOS permanece o seu conteúdo original.
// Não altere:
// - matérias
// - módulos
// - aulas
// - resumos
// - questões
// - respostas
// - comentários
//
// Abaixo foi otimizado apenas o sistema de acesso aos dados.
// ============================================================


const DADOS = {

  materias: {

    // ========================================================
    // COLE AQUI EXATAMENTE O SEU CONTEÚDO ORIGINAL
    // ========================================================
    //
    // Exemplo da estrutura:
    //
    // "lingua-portuguesa": {
    //   nome: "Língua Portuguesa",
    //   modulos: {
    //     ...
    //   }
    // }
    //
    // NÃO MODIFIQUE O CONTEÚDO.
    //
  }

};


// ============================================================
// BANCO DE ESTUDOS
// ============================================================

const BancoEstudos = {

  // ----------------------------------------------------------
  // CACHE
  // ----------------------------------------------------------

  _cache: {
    todasQuestoes: null,
    estatisticas: null
  },


  // ----------------------------------------------------------
  // LIMPA CACHE
  // ----------------------------------------------------------

  limparCache() {

    this._cache.todasQuestoes = null;
    this._cache.estatisticas = null;

  },


  // ----------------------------------------------------------
  // MATÉRIAS
  // ----------------------------------------------------------

  materias() {

    return Object.entries(
      DADOS?.materias || {}
    );

  },


  // ----------------------------------------------------------
  // MATÉRIA
  // ----------------------------------------------------------

  materia(id) {

    if (!id) return null;

    return DADOS
      ?.materias
      ?.[
        id
      ] || null;

  },


  // ----------------------------------------------------------
  // MÓDULOS
  // ----------------------------------------------------------

  modulos(materiaId) {

    const materia =
      this.materia(materiaId);

    if (!materia) return [];

    return Object.entries(
      materia.modulos || {}
    );

  },


  // ----------------------------------------------------------
  // MÓDULO
  // ----------------------------------------------------------

  modulo(
    materiaId,
    moduloId
  ) {

    return DADOS
      ?.materias
      ?.[
        materiaId
      ]
      ?.modulos
      ?.[
        moduloId
      ] || null;

  },


  // ----------------------------------------------------------
  // AULAS
  // ----------------------------------------------------------

  aulas(
    materiaId,
    moduloId
  ) {

    const modulo =
      this.modulo(
        materiaId,
        moduloId
      );

    if (!modulo) return [];

    return Object.entries(
      modulo.aulas || {}
    );

  },


  // ----------------------------------------------------------
  // AULA
  // ----------------------------------------------------------

  aula(
    materiaId,
    moduloId,
    aulaId
  ) {

    return DADOS
      ?.materias
      ?.[
        materiaId
      ]
      ?.modulos
      ?.[
        moduloId
      ]
      ?.aulas
      ?.[
        aulaId
      ] || null;

  },


  // ----------------------------------------------------------
  // QUESTÕES DE UMA AULA
  // ----------------------------------------------------------

  questoesDaAula(
    materiaId,
    moduloId,
    aulaId
  ) {

    const aula =
      this.aula(
        materiaId,
        moduloId,
        aulaId
      );

    if (!aula) return [];

    return Array.isArray(
      aula.questoes
    )
      ? aula.questoes
      : [];

  },


  // ----------------------------------------------------------
  // TODAS AS QUESTÕES
  // ----------------------------------------------------------

  todasQuestoes() {

    if (
      Array.isArray(
        this._cache.todasQuestoes
      )
    ) {

      return this._cache.todasQuestoes;

    }


    const resultado = [];


    for (
      const [materiaId, materia]
      of this.materias()
    ) {

      const modulos =
        materia?.modulos || {};


      for (
        const [moduloId, modulo]
        of Object.entries(modulos)
      ) {

        const aulas =
          modulo?.aulas || {};


        for (
          const [aulaId, aula]
          of Object.entries(aulas)
        ) {

          const questoes =
            Array.isArray(aula?.questoes)
              ? aula.questoes
              : [];


          for (
            const questao
            of questoes
          ) {

            resultado.push({

              ...questao,

              materiaId,

              materiaNome:
                materia?.nome || "Sem nome",

              moduloId,

              moduloNome:
                modulo?.nome || "Sem nome",

              aulaId,

              aulaNome:
                aula?.nome || "Sem nome"

            });

          }

        }

      }

    }


    this._cache.todasQuestoes =
      resultado;


    return resultado;

  },


  // ----------------------------------------------------------
  // QUESTÃO ALEATÓRIA
  // ----------------------------------------------------------

  questaoAleatoria() {

    const questoes =
      this.todasQuestoes();


    if (!questoes.length) {

      return null;

    }


    const indice =
      Math.floor(
        Math.random() *
        questoes.length
      );


    return questoes[indice];

  },


  // ----------------------------------------------------------
  // QUESTÕES ALEATÓRIAS
  // ----------------------------------------------------------

  questoesAleatorias(
    quantidade = 10
  ) {

    const questoes =
      [...this.todasQuestoes()];


    if (!questoes.length) {

      return [];

    }


    const total =
      Math.max(
        1,
        Math.min(
          Number(quantidade) || 10,
          questoes.length
        )
      );


    // Fisher-Yates
    for (
      let i = questoes.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() *
          (i + 1)
        );


      [
        questoes[i],
        questoes[j]
      ] = [
        questoes[j],
        questoes[i]
      ];

    }


    return questoes.slice(
      0,
      total
    );

  },


  // ----------------------------------------------------------
  // TOTAL DE MATÉRIAS
  // ----------------------------------------------------------

  totalMaterias() {

    return this.materias().length;

  },


  // ----------------------------------------------------------
  // TOTAL DE MÓDULOS
  // ----------------------------------------------------------

  totalModulos() {

    let total = 0;


    for (
      const [, materia]
      of this.materias()
    ) {

      total += Object.keys(
        materia?.modulos || {}
      ).length;

    }


    return total;

  },


  // ----------------------------------------------------------
  // TOTAL DE AULAS
  // ----------------------------------------------------------

  totalAulas() {

    let total = 0;


    for (
      const [, materia]
      of this.materias()
    ) {

      for (
        const [, modulo]
        of Object.entries(
          materia?.modulos || {}
        )
      ) {

        total += Object.keys(
          modulo?.aulas || {}
        ).length;

      }

    }


    return total;

  },


  // ----------------------------------------------------------
  // TOTAL DE QUESTÕES
  // ----------------------------------------------------------

  totalQuestoes() {

    return this
      .todasQuestoes()
      .length;

  },


  // ----------------------------------------------------------
  // ESTATÍSTICAS
  // ----------------------------------------------------------

  estatisticas() {

    if (
      this._cache.estatisticas
    ) {

      return {
        ...this._cache.estatisticas
      };

    }


    const estatisticas = {

      materias:
        this.totalMaterias(),

      modulos:
        this.totalModulos(),

      aulas:
        this.totalAulas(),

      questoes:
        this.totalQuestoes()

    };


    this._cache.estatisticas =
      estatisticas;


    return {
      ...estatisticas
    };

  },


  // ----------------------------------------------------------
  // BUSCA
  // ----------------------------------------------------------

  buscar(texto) {

    const termo =
      String(
        texto ?? ""
      )
      .trim()
      .toLocaleLowerCase(
        "pt-BR"
      );


    if (!termo) {

      return [];

    }


    return this
      .todasQuestoes()
      .filter(
        questao => {

          const enunciado =
            String(
              questao?.enunciado || ""
            )
            .toLocaleLowerCase(
              "pt-BR"
            );


          const comentario =
            String(
              questao?.comentario || ""
            )
            .toLocaleLowerCase(
              "pt-BR"
            );


          return (
            enunciado.includes(termo) ||
            comentario.includes(termo)
          );

        }
      );

  },


  // ----------------------------------------------------------
  // BUSCA GERAL
  // ----------------------------------------------------------

  buscarEmConteudo(texto) {

    const termo =
      String(
        texto ?? ""
      )
      .trim()
      .toLocaleLowerCase(
        "pt-BR"
      );


    if (!termo) {

      return [];

    }


    const resultados = [];


    for (
      const [materiaId, materia]
      of this.materias()
    ) {

      const materiaNome =
        String(
          materia?.nome || ""
        );


      if (
        materiaNome
          .toLocaleLowerCase("pt-BR")
          .includes(termo)
      ) {

        resultados.push({

          tipo: "materia",

          materiaId,

          materiaNome

        });

      }


      for (
        const [moduloId, modulo]
        of Object.entries(
          materia?.modulos || {}
        )
      ) {

        const moduloNome =
          String(
            modulo?.nome || ""
          );


        if (
          moduloNome
            .toLocaleLowerCase("pt-BR")
            .includes(termo)
        ) {

          resultados.push({

            tipo: "modulo",

            materiaId,

            materiaNome,

            moduloId,

            moduloNome

          });

        }


        for (
          const [aulaId, aula]
          of Object.entries(
            modulo?.aulas || {}
          )
        ) {

          const aulaNome =
            String(
              aula?.nome || ""
            );


          const resumo =
            String(
              aula?.resumo || ""
            );


          const textoAula =
            (
              aulaNome +
              " " +
              resumo
            )
            .toLocaleLowerCase(
              "pt-BR"
            );


          if (
            textoAula.includes(
              termo
            )
          ) {

            resultados.push({

              tipo: "aula",

              materiaId,

              materiaNome,

              moduloId,

              moduloNome,

              aulaId,

              aulaNome,

              resumo

            });

          }

        }

      }

    }


    return resultados;

  },


  // ----------------------------------------------------------
  // PROCURAR POR ID
  // ----------------------------------------------------------

  encontrarQuestao(
    id
  ) {

    if (
      id === undefined ||
      id === null
    ) {

      return null;

    }


    return (
      this
        .todasQuestoes()
        .find(
          questao =>
            String(
              questao.id
            ) === String(id)
        )
    ) || null;

  },


  // ----------------------------------------------------------
  // QUESTÕES DE UMA MATÉRIA
  // ----------------------------------------------------------

  questoesDaMateria(
    materiaId
  ) {

    const materia =
      this.materia(
        materiaId
      );


    if (!materia) {

      return [];

    }


    const resultado = [];


    for (
      const [
        moduloId,
        modulo
      ]
      of Object.entries(
        materia.modulos || {}
      )
    ) {

      for (
        const [
          aulaId,
          aula
        ]
        of Object.entries(
          modulo.aulas || {}
        )
      ) {

        for (
          const questao
          of aula.questoes || []
        ) {

          resultado.push({

            ...questao,

            materiaId,

            materiaNome:
              materia.nome,

            moduloId,

            moduloNome:
              modulo.nome,

            aulaId,

            aulaNome:
              aula.nome

          });

        }

      }

    }


    return resultado;

  },


  // ----------------------------------------------------------
  // QUESTÕES DE UM MÓDULO
  // ----------------------------------------------------------

  questoesDoModulo(
    materiaId,
    moduloId
  ) {

    const modulo =
      this.modulo(
        materiaId,
        moduloId
      );


    if (!modulo) {

      return [];

    }


    const materia =
      this.materia(
        materiaId
      );


    const resultado = [];


    for (
      const [
        aulaId,
        aula
      ]
      of Object.entries(
        modulo.aulas || {}
      )
    ) {

      for (
        const questao
        of aula.questoes || []
      ) {

        resultado.push({

          ...questao,

          materiaId,

          materiaNome:
            materia?.nome || "",

          moduloId,

          moduloNome:
            modulo?.nome || "",

          aulaId,

          aulaNome:
            aula?.nome || ""

        });

      }

    }


    return resultado;

  },


  // ----------------------------------------------------------
  // RESUMO DE UMA AULA
  // ----------------------------------------------------------

  resumoDaAula(
    materiaId,
    moduloId,
    aulaId
  ) {

    const aula =
      this.aula(
        materiaId,
        moduloId,
        aulaId
      );


    return aula?.resumo || "";

  },


  // ----------------------------------------------------------
  // LISTA COMPLETA DE CONTEÚDO
  // ----------------------------------------------------------

  estruturaCompleta() {

    const resultado = [];


    for (
      const [materiaId, materia]
      of this.materias()
    ) {

      resultado.push({

        tipo: "materia",

        materiaId,

        nome:
          materia?.nome || ""

      });


      for (
        const [
          moduloId,
          modulo
        ]
        of Object.entries(
          materia?.modulos || {}
        )
      ) {

        resultado.push({

          tipo: "modulo",

          materiaId,

          moduloId,

          nome:
            modulo?.nome || ""

        });


        for (
          const [
            aulaId,
            aula
          ]
          of Object.entries(
            modulo?.aulas || {}
          )
        ) {

          resultado.push({

            tipo: "aula",

            materiaId,

            moduloId,

            aulaId,

            nome:
              aula?.nome || "",

            resumo:
              aula?.resumo || "",

            questoes:
              Array.isArray(
                aula?.questoes
              )
                ? aula.questoes.length
                : 0

          });

        }

      }

    }


    return resultado;

  },


  // ----------------------------------------------------------
  // VERIFICA SE EXISTE UMA MATÉRIA
  // ----------------------------------------------------------

  existeMateria(
    materiaId
  ) {

    return Boolean(
      this.materia(
        materiaId
      )
    );

  },


  // ----------------------------------------------------------
  // VERIFICA SE EXISTE UM MÓDULO
  // ----------------------------------------------------------

  existeModulo(
    materiaId,
    moduloId
  ) {

    return Boolean(
      this.modulo(
        materiaId,
        moduloId
      )
    );

  },


  // ----------------------------------------------------------
  // VERIFICA SE EXISTE UMA AULA
  // ----------------------------------------------------------

  existeAula(
    materiaId,
    moduloId,
    aulaId
  ) {

    return Boolean(
      this.aula(
        materiaId,
        moduloId,
        aulaId
      )
    );

  }

};


// ============================================================
// VALIDAÇÃO DO BANCO
// ============================================================

function validarBancoEstudos() {

  const erros = [];

  let materiasInvalidas = 0;
  let modulosInvalidos = 0;
  let aulasInvalidas = 0;

  let questoesSemResposta = 0;
  let questoesSemEnunciado = 0;


  // ----------------------------------------------------------
  // VALIDAÇÃO PRINCIPAL
  // ----------------------------------------------------------

  if (
    typeof DADOS !== "object" ||
    DADOS === null
  ) {

    erros.push(
      "DADOS não foi definido corretamente."
    );

  }


  if (
    !DADOS?.materias ||
    typeof DADOS.materias !== "object"
  ) {

    erros.push(
      "DADOS.materias não foi definido corretamente."
    );

  }


  if (erros.length) {

    console.error(
      "❌ FUTURO APROVADO — ERRO NO BANCO",
      erros
    );

    return false;

  }


  // ----------------------------------------------------------
  // PERCORRE BANCO
  // ----------------------------------------------------------

  for (
    const [
      materiaId,
      materia
    ]
    of BancoEstudos.materias()
  ) {


    if (
      !materia ||
      typeof materia !== "object"
    ) {

      materiasInvalidas++;

      console.warn(
        `⚠️ Matéria inválida: ${materiaId}`
      );

      continue;

    }


    if (!materia.nome) {

      console.warn(
        `⚠️ Matéria sem nome: ${materiaId}`
      );

    }


    if (
      !materia.modulos ||
      typeof materia.modulos !== "object"
    ) {

      modulosInvalidos++;

      console.warn(
        `⚠️ Matéria sem módulos: ${materiaId}`
      );

      continue;

    }


    for (
      const [
        moduloId,
        modulo
      ]
      of Object.entries(
        materia.modulos
      )
    ) {


      if (
        !modulo ||
        typeof modulo !== "object"
      ) {

        modulosInvalidos++;

        console.warn(
          `⚠️ Módulo inválido: ${materiaId}/${moduloId}`
        );

        continue;

      }


      if (!modulo.nome) {

        console.warn(
          `⚠️ Módulo sem nome: ${materiaId}/${moduloId}`
        );

      }


      if (
        !modulo.aulas ||
        typeof modulo.aulas !== "object"
      ) {

        aulasInvalidas++;

        console.warn(
          `⚠️ Módulo sem aulas: ${materiaId}/${moduloId}`
        );

        continue;

      }


      for (
        const [
          aulaId,
          aula
        ]
        of Object.entries(
          modulo.aulas
        )
      ) {


        if (
          !aula ||
          typeof aula !== "object"
        ) {

          aulasInvalidas++;

          console.warn(
            `⚠️ Aula inválida: ${materiaId}/${moduloId}/${aulaId}`
          );

          continue;

        }


        if (!aula.nome) {

          console.warn(
            `⚠️ Aula sem nome: ${materiaId}/${moduloId}/${aulaId}`
          );

        }


        if (
          !Array.isArray(
            aula.questoes
          )
        ) {

          console.warn(
            `⚠️ Aula sem questões: ${materiaId}/${moduloId}/${aulaId}`
          );

          continue;

        }


        // ----------------------------------------------------
        // QUESTÕES
        // ----------------------------------------------------

        for (
          const questao
          of aula.questoes
        ) {


          if (
            !questao ||
            typeof questao !== "object"
          ) {

            questoesSemEnunciado++;

            continue;

          }


          if (
            !questao.enunciado ||
            !String(
              questao.enunciado
            ).trim()
          ) {

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
              questao.id,
              questao.resposta
            );

          }

        }

      }

    }

  }


  // ----------------------------------------------------------
  // ESTATÍSTICAS
  // ----------------------------------------------------------

  const estatisticas =
    BancoEstudos.estatisticas();


  // ----------------------------------------------------------
  // CONSOLE
  // ----------------------------------------------------------

  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );

  console.log(
    "📚 FUTURO APROVADO — BANCO CARREGADO"
  );

  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
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
    `⚠️ Matérias inválidas: ${materiasInvalidas}`
  );

  console.log(
    `⚠️ Módulos inválidos: ${modulosInvalidos}`
  );

  console.log(
    `⚠️ Aulas inválidas: ${aulasInvalidas}`
  );

  console.log(
    `⚠️ Questões sem enunciado: ${questoesSemEnunciado}`
  );

  console.log(
    `⚠️ Questões com resposta inválida: ${questoesSemResposta}`
  );

  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );


  // ----------------------------------------------------------
  // STATUS
  // ----------------------------------------------------------

  const bancoOK =
    (
      materiasInvalidas === 0 &&
      modulosInvalidos === 0 &&
      aulasInvalidas === 0 &&
      questoesSemEnunciado === 0 &&
      questoesSemResposta === 0
    );


  if (bancoOK) {

    console.log(
      "✅ Banco validado com sucesso."
    );

  } else {

    console.warn(
      "⚠️ Banco carregado com avisos. Verifique os itens acima."
    );

  }


  return bancoOK;

}


// ============================================================
// INICIALIZAÇÃO SEGURA
// ============================================================

(function inicializarBanco() {

  try {

    validarBancoEstudos();

  } catch (erro) {

    console.error(
      "❌ FUTURO APROVADO — ERRO AO INICIALIZAR BANCO:",
      erro
    );

  }

})();


// ============================================================
// COMPATIBILIDADE
// ============================================================
//
// Mantém DADOS e BancoEstudos disponíveis para o index.html.
//
// ============================================================

if (
  typeof window !== "undefined"
) {

  window.DADOS =
    DADOS;

  window.BancoEstudos =
    BancoEstudos;

  window.validarBancoEstudos =
    validarBancoEstudos;

}
