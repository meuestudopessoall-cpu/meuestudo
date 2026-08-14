// dados.js — EXPANSÃO MÁXIMA (240 questões, 13 matérias)
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
              resumo: "Compreensão: explícito. Interpretação: inferência. Tipos: narrativo, descritivo, dissertativo, injuntivo. Coesão e coerência.",
              questoes: [
                {id:1,enunciado:"Compreensão limita-se ao explícito.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Interpretação exige inferência.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"Dissertativo tem sequência cronológica.",resposta:"E",comentario:"ERRADO. É narrativo."},
                {id:4,enunciado:"'Portanto' indica conclusão.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Inferir é deduzir implícitos.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"Injuntivo convence o leitor.",resposta:"E",comentario:"ERRADO. Orienta."},
                {id:7,enunciado:"'Sugere' indica interpretação.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Coesão é conexão textual.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Coerência é sentido lógico.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Pressuposto é necessário ao sentido.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"'Embora' indica conclusão.",resposta:"E",comentario:"ERRADO. Concessão."},
                {id:12,enunciado:"Narração: apresentação, complicação, clímax, desfecho.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Descrição objetiva expressa sentimentos.",resposta:"E",comentario:"ERRADO. Impessoal."},
                {id:14,enunciado:"Tese é opinião do autor.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Leitura dinâmica é com pausas.",resposta:"E",comentario:"ERRADO. Fluida."}
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Redação Oficial",
          aulas: {
            "aula-1": {
              nome: "Características",
              resumo: "Impessoal, clara, objetiva, concisa, formal, uniforme.",
              questoes: [
                {id:1,enunciado:"Redação oficial deve ser impessoal.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Admite gírias.",resposta:"E",comentario:"ERRADO."},
                {id:3,enunciado:"Clareza exige frases curtas.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"Concisão é direta ao ponto.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Admite coloquialismos.",resposta:"E",comentario:"ERRADO."},
                {id:6,enunciado:"Impessoalidade exige 'eu' e 'nós'.",resposta:"E",comentario:"ERRADO. Terceira pessoa."},
                {id:7,enunciado:"Uniformidade garante padronização.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Admite neologismos.",resposta:"E",comentario:"ERRADO."},
                {id:9,enunciado:"Objetivo é informar com precisão.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Deve usar jargões técnicos.",resposta:"E",comentario:"ERRADO."},
                {id:11,enunciado:"Coesão é dispensável.",resposta:"E",comentario:"ERRADO."},
                {id:12,enunciado:"Revisão é fundamental.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Linguagem rebuscada é recomendada.",resposta:"E",comentario:"ERRADO."},
                {id:14,enunciado:"Repetição desnecessária é ênfase.",resposta:"E",comentario:"ERRADO."},
                {id:15,enunciado:"Essência: clara, objetiva, impessoal.",resposta:"C",comentario:"CERTO."}
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
              resumo: "Sentidos: Lassalle, Schmitt, Kelsen. CF/88: promulgada, rígida, escrita, dogmática, analítica.",
              questoes: [
                {id:1,enunciado:"Lassalle: CF sem correspondência real é 'folha de papel'.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"CF/88 é outorgada.",resposta:"E",comentario:"ERRADO. Promulgada."},
                {id:3,enunciado:"CF/88 é semi-rígida.",resposta:"E",comentario:"ERRADO. Totalmente rígida."},
                {id:4,enunciado:"Kelsen: CF é fundamento de validade.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Schmitt: CF é decisão política fundamental.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"CF/88 é analítica.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"CF/88 é dogmática.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"CF/88 é escrita.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"CF/88 é formal e material.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Sentido sociológico: fatores reais de poder.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Sentido político: decisão política.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Sentido jurídico: norma pura.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"CF/88 é flexível.",resposta:"E",comentario:"ERRADO."},
                {id:14,enunciado:"CF/88 foi outorgada por D. Pedro I.",resposta:"E",comentario:"ERRADO."},
                {id:15,enunciado:"CF/88 é a primeira promulgada do Brasil.",resposta:"E",comentario:"ERRADO."}
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Poder Constituinte",
          aulas: {
            "aula-1": {
              nome: "Originário e Derivado",
              resumo: "Originário: INILA. Derivado: reformador, decorrente, difuso. Cláusulas pétreas.",
              questoes: [
                {id:1,enunciado:"PCO é incondicionado.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Povo pode propor PEC.",resposta:"E",comentario:"ERRADO."},
                {id:3,enunciado:"Cláusulas pétreas são inabolíveis.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"DF exerce poder decorrente.",resposta:"E",comentario:"ERRADO."},
                {id:5,enunciado:"EC exige 3/5 em dois turnos.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"Poder reformador é derivado.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Poder decorrente é dos Estados.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Poder difuso é dos municípios.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Poder revisor já foi exercido.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Limites circunstanciais: intervenção, estado de defesa, sítio.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Limites formais: procedimento do art. 60.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Cláusulas pétreas: forma federativa, voto, separação, direitos individuais.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Voto secreto é cláusula pétrea.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"Direitos sociais são cláusulas pétreas expressas.",resposta:"E",comentario:"ERRADO."},
                {id:15,enunciado:"Presidente pode propor PEC.",resposta:"C",comentario:"CERTO."}
              ]
            }
          }
        },
        "modulo-3": {
          nome: "Princípios Fundamentais",
          aulas: {
            "aula-1": {
              nome: "Arts. 1º a 4º",
              resumo: "Fundamentos, Objetivos e Relações Internacionais.",
              questoes: [
                {id:1,enunciado:"Dignidade humana é fundamento.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Erradicar pobreza é fundamento.",resposta:"E",comentario:"ERRADO. É objetivo."},
                {id:3,enunciado:"Soberania é princípio internacional.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"Não intervenção é princípio internacional.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Defesa da paz é objetivo interno.",resposta:"E",comentario:"ERRADO."},
                {id:6,enunciado:"Pluralismo político é fundamento.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Cidadania é fundamento.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Construir sociedade livre é objetivo.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Garantir desenvolvimento é objetivo.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Reduzir desigualdades é objetivo.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Promover bem de todos é objetivo.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Autodeterminação é internacional.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Repúdio ao terrorismo é internacional.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"Cooperação entre povos é internacional.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Integração econômica é internacional.",resposta:"C",comentario:"CERTO."}
              ]
            }
          }
        },
        "modulo-4": {
          nome: "Direitos Fundamentais (Art. 5º)",
          aulas: {
            "aula-1": {
              nome: "Direitos Individuais e Coletivos",
              resumo: "Vida, igualdade, liberdade, propriedade. Garantias: habeas corpus, mandado de segurança.",
              questoes: [
                {id:1,enunciado:"Art. 5º trata dos direitos fundamentais.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Direito à vida está no art. 5º.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"Igualdade está no caput do art. 5º.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"Habeas corpus é garantia.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Mandado de segurança é garantia.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"Direitos fundamentais são cláusulas pétreas.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Devido processo legal está no art. 5º.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Legalidade é direito fundamental.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Propriedade está no art. 5º.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Liberdade de expressão é direito fundamental.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Sigilo de correspondência é inviolável.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Prisão civil por dívida é admitida.",resposta:"E",comentario:"ERRADO."},
                {id:13,enunciado:"Habeas data protege dados.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"Mandado de injunção é garantia.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Ação popular é remédio constitucional.",resposta:"C",comentario:"CERTO."}
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
          nome: "Princípios e Atos",
          aulas: {
            "aula-1": {
              nome: "LIMPE e Requisitos",
              resumo: "Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência. Atributos: presunção, imperatividade, autoexecutoriedade.",
              questoes: [
                {id:1,enunciado:"Legalidade: só o que a lei autoriza.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Eficiência inserida pela EC 19/98.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"Publicidade é absoluta.",resposta:"E",comentario:"ERRADO."},
                {id:4,enunciado:"Impessoalidade proíbe nepotismo.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Moralidade é desvinculada da ética.",resposta:"E",comentario:"ERRADO."},
                {id:6,enunciado:"Atos têm presunção de legitimidade.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Imperatividade impõe obrigações.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Autoexecutoriedade: execução pela admin.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Requisitos: competência, forma, finalidade, motivo, objeto.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Forma do ato é sempre livre.",resposta:"E",comentario:"ERRADO."},
                {id:11,enunciado:"Motivo é situação de fato.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Finalidade: interesse público.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Objeto é conteúdo do ato.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"Competência é delegável.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Discricionariedade é absoluta.",resposta:"E",comentario:"ERRADO."}
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Licitações (Lei 14.133/2021)",
          aulas: {
            "aula-1": {
              nome: "Modalidades e Fases",
              resumo: "Modalidades: pregão, concorrência, leilão, diálogo. Fases: preparatória, habilitação, julgamento, adjudicação.",
              questoes: [
                {id:1,enunciado:"Modalidades: pregão, concorrência, leilão, diálogo.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Fase preparatória é a primeira.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"Adjudicação é a última fase.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"Pregão exige lances presenciais.",resposta:"E",comentario:"ERRADO."},
                {id:5,enunciado:"Concorrência exige ampla publicidade.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"Leilão: venda de bens.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Contrato formalizado por termo.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Fiscalização é dever da admin.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Extinção pode ser por acordo.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Diálogo competitivo é para inovações.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Habilitação verifica capacidade.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Julgamento analisa propostas.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Publicidade é requisito de validade.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"Empate: preferência para ME/EPP.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Contrato pode ser alterado unilateralmente.",resposta:"C",comentario:"CERTO."}
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
              nome: "TIC e Excludentes",
              resumo: "Fato típico, ilicitude, culpabilidade. Excludentes: legítima defesa, estado de necessidade.",
              questoes: [
                {id:1,enunciado:"Toda conduta típica é ilícita.",resposta:"E",comentario:"ERRADO."},
                {id:2,enunciado:"Legítima defesa exclui a ilicitude.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"Culpabilidade exige imputabilidade.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"Estado de necessidade exclui a tipicidade.",resposta:"E",comentario:"ERRADO."},
                {id:5,enunciado:"Crime é fato típico, ilícito e culpável.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"Erro de tipo essencial exclui o dolo.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Erro de proibição exclui a culpabilidade.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Tentativa é punível em todos os crimes.",resposta:"E",comentario:"ERRADO."},
                {id:9,enunciado:"Penas restritivas substituem a prisão.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Multa é pena pecuniária.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Regime fechado: segurança máxima.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Semiaberto: trabalho externo.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Aberto: prisão domiciliar.",resposta:"E",comentario:"ERRADO."},
                {id:14,enunciado:"Dolo exige vontade.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Culposo: sem vontade.",resposta:"C",comentario:"CERTO."}
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Crimes contra a pessoa e patrimônio",
          aulas: {
            "aula-1": {
              nome: "Homicídio, Lesão, Furto, Roubo",
              resumo: "Homicídio, lesão, furto, roubo. Qualificadoras e causas de aumento.",
              questoes: [
                {id:1,enunciado:"Homicídio simples: 6 a 20 anos.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Homicídio qualificado: motivo torpe.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"Lesão leve: 3 meses a 1 ano.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"Lesão grave: perda de membro.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Furto: subtração sem violência.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"Roubo: violência ou grave ameaça.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Furto qualificado: rompimento de obstáculo.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Roubo majorado: emprego de arma.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Homicídio culposo: sem intenção.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Lesão culposa: trânsito.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Furto noturno: causa de aumento.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Roubo com arma de fogo: majorado.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Homicídio privilegiado: motivo relevante.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"Lesão gravíssima: debilidade permanente.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Furto de coisa comum: é crime.",resposta:"C",comentario:"CERTO."}
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
              nome: "IP e Ação Penal",
              resumo: "IP: administrativo, inquisitivo, dispensável. Ação penal: pública e privada.",
              questoes: [
                {id:1,enunciado:"IP é obrigatório.",resposta:"E",comentario:"ERRADO."},
                {i
