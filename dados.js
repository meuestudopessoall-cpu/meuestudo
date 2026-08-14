// dados.js — VERSÃO COMPLETA (13 matérias, ~300 questões)
const DADOS = {
  materias: {

    // ============================================================
    // 1. LÍNGUA PORTUGUESA
    // ============================================================
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
        },
        "modulo-3": {
          nome: "Fonologia e Ortografia",
          aulas: {
            "aula-1": {
              nome: "Acentuação Gráfica e Divisão Silábica",
              resumo: "Regras de acentuação: oxítonas, paroxítonas, proparoxítonas. Hiatos, ditongos, tritongos. Uso do hífen. Novo Acordo Ortográfico.",
              questoes: [
                {id:1,enunciado:"Proparoxítonas são todas acentuadas.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Oxítonas terminadas em 'a' são acentuadas.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"Paroxítonas terminadas em 'r' não são acentuadas.",resposta:"E",comentario:"ERRADO. São acentuadas."},
                {id:4,enunciado:"O hiato 'i' tônico sozinho na sílaba é acentuado.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"O Novo Acordo Ortográfico eliminou o trema.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"Ditongo é o encontro de vogal e semivogal.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Tritongo é o encontro de três vogais.",resposta:"E",comentario:"ERRADO. É semivogal+vogal+semivogal."},
                {id:8,enunciado:"Acento diferencial ainda existe em 'pôr' e 'poder'.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"O hífen é usado em palavras compostas com 'bem'.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"Palavras oxítonas terminadas em 'em' são acentuadas.",resposta:"E",comentario:"ERRADO. Só se terminarem em 'a', 'e', 'o', 'em' com dois 'ens'?"},
                {id:11,enunciado:"Acentuam-se os monossílabos tônicos terminados em 'a', 'e', 'o'.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"O acento gráfico pode alterar o significado das palavras.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"A palavra 'ideia' perdeu o acento no Novo Acordo.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"A palavra 'voo' não tem mais acento.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"O trema ainda é usado em nomes próprios.",resposta:"C",comentario:"CERTO."}
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 2. DIREITO CONSTITUCIONAL
    // ============================================================
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
        },
        "modulo-5": {
          nome: "Organização do Estado",
          aulas: {
            "aula-1": {
              nome: "Arts. 18 a 36 — Federação",
              resumo: "Forma federativa, cláusula pétrea. União, Estados, DF, Municípios. Competências exclusivas, privativas, comuns e concorrentes. Intervenção federal.",
              questoes: [
                {id:1,enunciado:"A forma federativa é cláusula pétrea.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"O DF é um estado-membro da federação.",resposta:"E",comentario:"ERRADO. É ente sui generis."},
                {id:3,enunciado:"Competência privativa da União é indelegável.",resposta:"E",comentario:"ERRADO. Pode ser delegada."},
                {id:4,enunciado:"Intervenção federal é excepcional.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Os municípios são entes federativos autônomos.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"A União pode intervir nos Estados para garantir a ordem pública.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Os Estados podem legislar sobre todos os assuntos.",resposta:"E",comentario:"ERRADO. Competência residual."},
                {id:8,enunciado:"O DF é regido por lei orgânica, não por Constituição.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Competência concorrente permite que União, Estados e DF legislem.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"A intervenção federal depende de decreto do Presidente.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Os municípios têm autonomia para criar leis municipais.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"A União não pode intervir nos municípios.",resposta:"E",comentario:"ERRADO. Pode, em certos casos."},
                {id:13,enunciado:"Os Estados podem criar regiões metropolitanas.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"A competência comum é administrativa.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"A federação brasileira é indissolúvel.",resposta:"C",comentario:"CERTO."}
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 3. DIREITO ADMINISTRATIVO
    // ============================================================
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
                {id:10,
