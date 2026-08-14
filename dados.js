// dados.js — EXPANSÃO MÁXIMA (16 matérias, 405 questões)
const DADOS = {
  materias: {

    // ============================================================
    // 1. LÍNGUA PORTUGUESA (30 questões) — MANTIDO
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
        }
      }
    },

    // ============================================================
    // 2. DIREITO CONSTITUCIONAL — 75 questões (5 módulos)
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
          nome: "Organização do Estado (Arts. 18 a 36)",
          aulas: {
            "aula-1": {
              nome: "União, Estados, DF e Municípios",
              resumo: "Forma federativa. Competências administrativas e legislativas. Intervenção federal.",
              questoes: [
                {id:1,enunciado:"A União é o ente central da federação.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Os Estados têm autonomia para se organizar.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"O DF acumula competências estaduais e municipais.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"A intervenção federal é um mecanismo de exceção.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"Os municípios são entes da federação.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"A competência legislativa residual é da União.",resposta:"E",comentario:"ERRADO. É dos Estados."},
                {id:7,enunciado:"A União pode intervir nos Estados para garantir a ordem pública.",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"O DF não pode ser dividido em municípios.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"Os territórios federais são autônomos.",resposta:"E",comentario:"ERRADO. São administrados pela União."},
                {id:10,enunciado:"A forma federativa é cláusula pétrea.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"A União pode criar novos Estados.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"A intervenção federal é sempre por decreto do Presidente.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Os Estados podem incorporar municípios.",resposta:"E",comentario:"ERRADO. Depende de lei estadual e consulta."},
                {id:14,enunciado:"O DF é regido por lei orgânica.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Os territórios não integram a federação.",resposta:"C",comentario:"CERTO."}
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 3. DIREITO ADMINISTRATIVO — 45 questões (3 módulos)
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
                {id:10,enunciado:"Diálogo competitivo é para inovações.",resposta:"C",comentario:"CERTO."},
                {id:11,enunciado:"Habilitação verifica capacidade.",resposta:"C",comentario:"CERTO."},
                {id:12,enunciado:"Julgamento analisa propostas.",resposta:"C",comentario:"CERTO."},
                {id:13,enunciado:"Publicidade é requisito de validade.",resposta:"C",comentario:"CERTO."},
                {id:14,enunciado:"Empate: preferência para ME/EPP.",resposta:"C",comentario:"CERTO."},
                {id:15,enunciado:"Contrato pode ser alterado unilateralmente.",resposta:"C",comentario:"CERTO."}
              ]
            }
          }
        },
        "modulo-3": {
          nome: "Servidores Públicos (Lei 8.112/90)",
          aulas: {
            "aula-1": {
              nome: "Direitos, Deveres e Regime",
              resumo: "Regime estatutário (servidores civis). Estabilidade: 3 anos. Licenças, concessões, penalidades.",
              questoes: [
                {id:1,enunciado:"Servidor federal é regido pela Lei 8.112/90.",resposta:"C",comentario:"CERTO."},
                {id:2,enunciado:"Estabilidade: 3 anos de efetivo exercício.",resposta:"C",comentario:"CERTO."},
                {id:3,enunciado:"O servidor pode acumular cargos públicos, desde que compatíveis.",resposta:"C",comentario:"CERTO."},
                {id:4,enunciado:"Licença para capacitação é de 3 meses a cada 5 anos.",resposta:"C",comentario:"CERTO."},
                {id:5,enunciado:"A demissão é penalidade aplicada ao servidor.",resposta:"C",comentario:"CERTO."},
                {id:6,enunciado:"O servidor tem direito a férias de 30 dias.",resposta:"C",comentario:"CERTO."},
                {id:7,enunciado:"Aposentadoria voluntária: 35 anos de contribuição (homem).",resposta:"C",comentario:"CERTO."},
                {id:8,enunciado:"Aposentadoria compulsória: 70 anos.",resposta:"C",comentario:"CERTO."},
                {id:9,enunciado:"O servidor pode ser afastado para exercer mandato eletivo.",resposta:"C",comentario:"CERTO."},
                {id:10,enunciado:"A lei 8.112 aplica-se aos servidores estaduais.",resposta:"E",comentario:"ERRADO. Aplica-se aos federais."},
                {id:11,enunciado:"O servidor tem direito à licença gestante de 120 dias.",resp
