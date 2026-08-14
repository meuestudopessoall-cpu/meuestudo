// dados.js — versão estável

const DADOS = {
  materias: {
    "lingua-portuguesa": {
      nome: "Língua Portuguesa",
      modulos: {
        "modulo-1": {
          nome: "Interpretação de Textos",
          aulas: {
            "aula-1": {
              nome: "Compreensão e Interpretação",
              resumo: "Compreensão: explícito. Interpretação: implícito/inferência. Tipos: narrativo, descritivo, dissertativo, injuntivo. Cuidado com marcadores textuais.",
              questoes: [
                { id: 1, enunciado: "Compreensão textual limita-se ao que está explícito.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "Interpretação é mera cópia do texto.", resposta: "E", comentario: "ERRADO. Envolve inferência." }
              ]
            }
          }
        }
      }
    },
    "direito-constitucional": {
      nome: "Direito Constitucional",
      modulos: {
        "modulo-1": {
          nome: "Teoria da Constituição",
          aulas: {
            "aula-1": {
              nome: "Conceito, Sentidos e Classificações",
              resumo: "Lassalle, Schmitt, Kelsen. CF/88: promulgada, rígida, escrita, dogmática, analítica.",
              questoes: [
                { id: 1, enunciado: "Lassalle: CF sem correspondência real é 'folha de papel'.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "CF/88 é outorgada.", resposta: "E", comentario: "ERRADO. É promulgada." }
              ]
            }
          }
        }
      }
    },
    "direito-administrativo": {
      nome: "Direito Administrativo",
      modulos: {
        "modulo-1": {
          nome: "Princípios da Administração",
          aulas: {
            "aula-1": {
              nome: "Princípios (LIMPE)",
              resumo: "Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.",
              questoes: [
                { id: 1, enunciado: "Legalidade pública: só o que a lei autoriza.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "Publicidade é absoluta.", resposta: "E", comentario: "ERRADO. Há sigilo." }
              ]
            }
          }
        }
      }
    },
    "direito-penal": {
      nome: "Direito Penal",
      modulos: {
        "modulo-1": {
          nome: "Teoria do Crime",
          aulas: {
            "aula-1": {
              nome: "Conceito (TIC)",
              resumo: "Fato típico, ilicitude, culpabilidade. Excludentes: legítima defesa, estado de necessidade.",
              questoes: [
                { id: 1, enunciado: "Toda conduta típica é ilícita.", resposta: "E", comentario: "ERRADO. Há excludentes." },
                { id: 2, enunciado: "Legítima defesa exclui a ilicitude.", resposta: "C", comentario: "CERTO." }
              ]
            }
          }
        }
      }
    },
    "direito-processual-penal": {
      nome: "Direito Processual Penal",
      modulos: {
        "modulo-1": {
          nome: "Inquérito Policial",
          aulas: {
            "aula-1": {
              nome: "IP (CPP)",
              resumo: "Inquisitivo, escrito, dispensável, sigiloso. Delegado não arquiva.",
              questoes: [
                { id: 1, enunciado: "IP é obrigatório.", resposta: "E", comentario: "ERRADO. Dispensável." },
                { id: 2, enunciado: "Delegado pode arquivar IP.", resposta: "E", comentario: "ERRADO. Só juiz." }
              ]
            }
          }
        }
      }
    },
    "legislacao-penal-especial": {
      nome: "Legislação Penal Especial",
      modulos: {
        "modulo-1": {
          nome: "Lei de Drogas",
          aulas: {
            "aula-1": {
              nome: "Lei 11.343/06",
              resumo: "Art. 28: porte (crime sem prisão). Art. 33: tráfico (hediondo).",
              questoes: [
                { id: 1, enunciado: "Art. 28 é crime com prisão.", resposta: "E", comentario: "ERRADO. Sem prisão." },
                { id: 2, enunciado: "Tráfico é hediondo.", resposta: "C", comentario: "CERTO." }
              ]
            }
          }
        }
      }
    },
    "direitos-humanos": {
      nome: "Direitos Humanos",
      modulos: {
        "modulo-1": {
          nome: "Tratados Internacionais",
          aulas: {
            "aula-1": {
              nome: "Hierarquia",
              resumo: "Tratados com quórum de EC = emenda. Demais = supralegal.",
              questoes: [
                { id: 1, enunciado: "Tratado DH aprovado com quórum de emenda é EC.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "Tratado DH sem quórum de emenda é infraconstitucional.", resposta: "E", comentario: "ERRADO. É supralegal." }
              ]
            }
          }
        }
      }
    },
    "raciocinio-logico": {
      nome: "Raciocínio Lógico",
      modulos: {
        "modulo-1": {
          nome: "Lógica Proposicional",
          aulas: {
            "aula-1": {
              nome: "Conectivos",
              resumo: "Conjunção (∧), disjunção (∨), condicional (→), bicondicional (↔), negação (¬).",
              questoes: [
                { id: 1, enunciado: "Conjunção é verdadeira apenas quando ambas são V.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "Condicional é falsa apenas quando V→F.", resposta: "C", comentario: "CERTO." }
              ]
            }
          }
        }
      }
    },
    "informatica": {
      nome: "Informática",
      modulos: {
        "modulo-1": {
          nome: "Sistemas e Office",
          aulas: {
            "aula-1": {
              nome: "Windows, Linux, Excel",
              resumo: "Linux: open-source. Ctrl+Z desfaz. PROCV procura verticalmente.",
              questoes: [
                { id: 1, enunciado: "Linux é código aberto.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "Ctrl+Z refaz a última ação.", resposta: "E", comentario: "ERRADO. Desfaz." }
              ]
            }
          }
        }
      }
    },
    "lodf": {
      nome: "Lei Orgânica do DF",
      modulos: {
        "modulo-1": {
          nome: "Organização do DF",
          aulas: {
            "aula-1": {
              nome: "Estrutura e Competências",
              resumo: "DF é ente sui generis. Tem Lei Orgânica, não Constituição.",
              questoes: [
                { id: 1, enunciado: "DF é ente federativo sui generis.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "DF tem Constituição própria.", resposta: "E", comentario: "ERRADO. Tem Lei Orgânica." }
              ]
            }
          }
        }
      }
    },
    "ride": {
      nome: "RIDE",
      modulos: {
        "modulo-1": {
          nome: "Conceito",
          aulas: {
            "aula-1": {
              nome: "Características",
              resumo: "Criada pela LC 94/98. Abrange DF e municípios de GO/MG.",
              questoes: [
                { id: 1, enunciado: "RIDE criada por lei complementar federal.", resposta: "C", comentario: "CERTO." },
                { id: 2, enunciado: "RIDE abrange apenas o DF.", resposta: "E", comentario: "ERRADO. Abrange também GO e MG." }
              ]
            }
          }
        }
      }
    },
    "lc-840": {
      nome: "LC 840/2011",
      modulos: {
        "modulo-1": {
          nome: "Regime Jurídico",
          aulas: {
            "aula-1": {
              nome: "Direitos e Deveres",
              resumo: "Regime estatutário. Estabilidade após 3 anos.",
              questoes: [
                { id: 1, enunciado: "Servidor do DF é regido pela CLT.", resposta: "E", comentario: "ERRADO. Regime estatutário." },
                { id: 2, enunciado: "Estabilidade após 3 anos.", resposta: "C", comentario: "CERTO." }
              ]
            }
          }
        }
      }
    }
  }
};
