// ============================================================
// FUTURO APROVADO — DADOS.JS
// Banco central de conteúdo da plataforma
// ============================================================

"use strict";

/*
|--------------------------------------------------------------------------
| ESTRUTURA DO BANCO
|--------------------------------------------------------------------------
|
| DADOS
| └── materias
|      └── materia-id
|           ├── nome
|           └── modulos
|                └── modulo-id
|                     ├── nome
|                     └── aulas
|                          └── aula-id
|                               ├── nome
|                               ├── resumo
|                               └── questoes
|
|--------------------------------------------------------------------------
*/

const DADOS = {

    materias: {

        // ========================================================
        // LÍNGUA PORTUGUESA
        // ========================================================

        "lingua-portuguesa": {

            nome: "Língua Portuguesa",

            modulos: {

                "modulo-1": {

                    nome: "Interpretação de Textos",

                    aulas: {

                        "aula-1": {

                            nome: "Compreensão e Interpretação",

                            resumo:
                                "Compreensão: explícito. Interpretação: inferência. " +
                                "Tipos: narrativo, descritivo, dissertativo, injuntivo. " +
                                "Coesão e coerência.",

                            questoes: [

                                {
                                    id: 1,
                                    enunciado: "Compreensão limita-se ao explícito.",
                                    resposta: "C",
                                    comentario: "CERTO."
                                },

                                {
                                    id: 2,
                                    enunciado: "Interpretação exige inferência.",
                                    resposta: "C",
                                    comentario: "CERTO."
                                },

                                {
                                    id: 3,
                                    enunciado: "Dissertativo tem sequência cronológica.",
                                    resposta: "E",
                                    comentario: "ERRADO. É narrativo."
                                }

                                // ...
                            ]
                        }
                    }
                }

                // Demais módulos permanecem aqui
            }
        },


        // ========================================================
        // DIREITO CONSTITUCIONAL
        // ========================================================

        "direito-constitucional": {

            nome: "Direito Constitucional",

            modulos: {

                "modulo-1": {

                    nome: "Teoria da Constituição",

                    aulas: {

                        "aula-1": {

                            nome:
                                "Conceito, Sentidos e Classificações",

                            resumo:
                                "Sentidos: Lassalle, Schmitt, Kelsen. " +
                                "CF/88: promulgada, rígida, escrita, " +
                                "dogmática, analítica.",

                            questoes: [

                                {
                                    id: 1,
                                    enunciado:
                                        "Lassalle: CF sem correspondência real é 'folha de papel'.",
                                    resposta: "C",
                                    comentario: "CERTO."
                                },

                                {
                                    id: 2,
                                    enunciado:
                                        "CF/88 é outorgada.",
                                    resposta: "E",
                                    comentario: "ERRADO. Promulgada."
                                }

                                // ...
                            ]
                        }
                    }
                }

                // Demais módulos permanecem aqui
            }
        }

        // ========================================================
        // DEMAIS MATÉRIAS
        // ========================================================
    }
};


// ============================================================
// BANCO DE ESTUDOS
// API CENTRAL DO SISTEMA
// ============================================================

const BancoEstudos = {

    // ----------------------------------------------------------
    // MATÉRIAS
    // ----------------------------------------------------------

    materias() {

        return Object.entries(
            DADOS?.materias || {}
        );
    },


    materia(id) {

        if (!id) return null;

        return (
            DADOS?.materias?.[id] ||
            null
        );
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


    modulo(materiaId, moduloId) {

        return (
            DADOS
                ?.materias?.[materiaId]
                ?.modulos?.[moduloId] ||
            null
        );
    },


    // ----------------------------------------------------------
    // AULAS
    // ----------------------------------------------------------

    aulas(materiaId, moduloId) {

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


    aula(
        materiaId,
        moduloId,
        aulaId
    ) {

        return (
            DADOS
                ?.materias?.[materiaId]
                ?.modulos?.[moduloId]
                ?.aulas?.[aulaId] ||
            null
        );
    },


    // ----------------------------------------------------------
    // QUESTÕES
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

        return Array.isArray(aula.questoes)
            ? aula.questoes
            : [];
    },


    // ----------------------------------------------------------
    // TODAS AS QUESTÕES
    // ----------------------------------------------------------

    todasQuestoes() {

        const resultado = [];

        for (
            const [materiaId, materia]
            of this.materias()
        ) {

            for (
                const [moduloId, modulo]
                of Object.entries(
                    materia.modulos || {}
                )
            ) {

                for (
                    const [aulaId, aula]
                    of Object.entries(
                        modulo.aulas || {}
                    )
                ) {

                    const questoes =
                        Array.isArray(aula.questoes)
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
                                materia.nome || "",

                            moduloId,

                            moduloNome:
                                modulo.nome || "",

                            aulaId,

                            aulaNome:
                                aula.nome || ""
                        });
                    }
                }
            }
        }

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
    // CONTADORES
    // ----------------------------------------------------------

    totalMaterias() {

        return this.materias().length;
    },


    totalModulos() {

        let total = 0;

        for (
            const [, materia]
            of this.materias()
        ) {

            total +=
                Object.keys(
                    materia.modulos || {}
                ).length;
        }

        return total;
    },


    totalAulas() {

        let total = 0;

        for (
            const [, materia]
            of this.materias()
        ) {

            for (
                const [, modulo]
                of Object.entries(
                    materia.modulos || {}
                )
            ) {

                total +=
                    Object.keys(
                        modulo.aulas || {}
                    ).length;
            }
        }

        return total;
    },


    totalQuestoes() {

        return this.todasQuestoes().length;
    },


    estatisticas() {

        return {

            materias:
                this.totalMaterias(),

            modulos:
                this.totalModulos(),

            aulas:
                this.totalAulas(),

            questoes:
                this.totalQuestoes()
        };
    },


    // ----------------------------------------------------------
    // BUSCA
    // ----------------------------------------------------------

    buscar(texto) {

        const termo =
            String(texto || "")
                .trim()
                .toLowerCase();

        if (!termo) return [];

        return this
            .todasQuestoes()
            .filter(questao => {

                const campos = [

                    questao.enunciado,

                    questao.comentario,

                    questao.pegadinha,

                    questao.materiaNome,

                    questao.moduloNome,

                    questao.aulaNome
                ];

                return campos.some(
                    campo =>
                        String(campo || "")
                            .toLowerCase()
                            .includes(termo)
                );
            });
    },


    // ----------------------------------------------------------
    // QUESTÕES POR MATÉRIA
    // ----------------------------------------------------------

    questoesDaMateria(materiaId) {

        return this
            .todasQuestoes()
            .filter(
                q =>
                    q.materiaId === materiaId
            );
    },


    // ----------------------------------------------------------
    // QUESTÕES POR MÓDULO
    // ----------------------------------------------------------

    questoesDoModulo(
        materiaId,
        moduloId
    ) {

        return this
            .todasQuestoes()
            .filter(
                q =>
                    q.materiaId === materiaId &&
                    q.moduloId === moduloId
            );
    },


    // ----------------------------------------------------------
    // QUESTÕES POR AULA
    // ----------------------------------------------------------

    questoesDaAulaCompletas(
        materiaId,
        moduloId,
        aulaId
    ) {

        return this
            .todasQuestoes()
            .filter(
                q =>
                    q.materiaId === materiaId &&
                    q.moduloId === moduloId &&
                    q.aulaId === aulaId
            );
    },


    // ----------------------------------------------------------
    // AULA ALEATÓRIA
    // ----------------------------------------------------------

    aulaAleatoria() {

        const aulas = [];

        for (
            const [materiaId, materia]
            of this.materias()
        ) {

            for (
                const [moduloId, modulo]
                of Object.entries(
                    materia.modulos || {}
                )
            ) {

                for (
                    const [aulaId, aula]
                    of Object.entries(
                        modulo.aulas || {}
                    )
                ) {

                    aulas.push({

                        materiaId,

                        materiaNome:
                            materia.nome,

                        moduloId,

                        moduloNome:
                            modulo.nome,

                        aulaId,

                        aulaNome:
                            aula.nome,

                        resumo:
                            aula.resumo || "",

                        questoes:
                            aula.questoes || []
                    });
                }
            }
        }

        if (!aulas.length) {
            return null;
        }

        return aulas[
            Math.floor(
                Math.random() *
                aulas.length
            )
        ];
    }
};


// ============================================================
// VALIDAÇÃO DO BANCO
// ============================================================

function validarBancoEstudos() {

    const erros = [];
    const avisos = [];

    if (
        typeof DADOS !== "object" ||
        DADOS === null
    ) {

        erros.push(
            "DADOS não foi definido corretamente."
        );

    }

    if (
        !DADOS.materias ||
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

        return {

            valido: false,

            erros,

            avisos,

            estatisticas: null
        };
    }


    let questoesSemEnunciado = 0;
    let questoesSemResposta = 0;
    let aulasSemQuestoes = 0;


    for (
        const [materiaId, materia]
        of BancoEstudos.materias()
    ) {

        if (!materia.nome) {

            avisos.push(
                `Matéria sem nome: ${materiaId}`
            );
        }


        if (
            !materia.modulos ||
            typeof materia.modulos !== "object"
        ) {

            avisos.push(
                `Matéria sem módulos: ${materiaId}`
            );

            continue;
        }


        for (
            const [moduloId, modulo]
            of Object.entries(
                materia.modulos
            )
        ) {

            if (!modulo.nome) {

                avisos.push(
                    `Módulo sem nome: ${materiaId}/${moduloId}`
                );
            }


            if (
                !modulo.aulas ||
                typeof modulo.aulas !== "object"
            ) {

                avisos.push(
                    `Módulo sem aulas: ${materiaId}/${moduloId}`
                );

                continue;
            }


            for (
                const [aulaId, aula]
                of Object.entries(
                    modulo.aulas
                )
            ) {

                const questoes =
                    Array.isArray(aula.questoes)
                        ? aula.questoes
                        : [];


                if (!questoes.length) {

                    aulasSemQuestoes++;

                    avisos.push(
                        `Aula sem questões: ${materiaId}/${moduloId}/${aulaId}`
                    );
                }


                for (
                    const questao
                    of questoes
                ) {

                    if (
                        !questao ||
                        !questao.enunciado
                    ) {

                        questoesSemEnunciado++;

                        console.warn(
                            "⚠️ Questão sem enunciado:",
                            materiaId,
                            moduloId,
                            aulaId,
                            questao?.id
                        );
                    }


                    if (
                        questao.resposta !== "C" &&
                        questao.resposta !== "E"
                    ) {

                        questoesSemResposta++;

                        console.warn(
                            "⚠️ Resposta inválida:",
                            materiaId,
                            moduloId,
                            aulaId,
                            questao?.id
                        );
                    }
                }
            }
        }
    }


    const estatisticas =
        BancoEstudos.estatisticas();


    const resultado = {

        valido:
            erros.length === 0,

        erros,

        avisos,

        estatisticas,

        detalhes: {

            questoesSemEnunciado,

            questoesSemResposta,

            aulasSemQuestoes
        }
    };


    console.log(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
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
        `⚠️ Sem enunciado: ${questoesSemEnunciado}`
    );

    console.log(
        `⚠️ Respostas inválidas: ${questoesSemResposta}`
    );

    console.log(
        `⚠️ Aulas sem questões: ${aulasSemQuestoes}`
    );

    console.log(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    );


    if (avisos.length) {

        console.warn(
            "⚠️ Avisos do banco:",
            avisos
        );
    }

    if (!questoesSemEnunciado &&
        !questoesSemResposta) {

        console.log(
            "✅ Banco de questões validado."
        );
    }


    return resultado;
}


// ============================================================
// ATALHOS ÚTEIS PARA A INTERFACE
// ============================================================

const EstatisticasEstudos = {

    resumo() {

        return BancoEstudos.estatisticas();
    },

    materias() {

        return BancoEstudos
            .materias()
            .map(
                ([id, materia]) => ({

                    id,

                    nome:
                        materia.nome,

                    totalModulos:
                        Object.keys(
                            materia.modulos || {}
                        ).length
                })
            );
    }
};


// ============================================================
// INICIALIZAÇÃO
// ============================================================

const STATUS_BANCO =
    validarBancoEstudos();


// ============================================================
// COMPATIBILIDADE
// ============================================================
//
// Mantém DADOS disponível para:
// index.html
// quiz.html
// outros scripts
//
// ============================================================

if (
    typeof window !== "undefined"
) {

    window.DADOS = DADOS;

    window.BancoEstudos =
        BancoEstudos;

    window.EstatisticasEstudos =
        EstatisticasEstudos;

    window.STATUS_BANCO =
        STATUS_BANCO;
}
