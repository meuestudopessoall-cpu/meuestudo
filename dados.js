// dados.js — Todos os dados do curso

const DADOS = {
  materias: {
    "direito-constitucional": {
      nome: "Direito Constitucional",
      modulos: {
        "modulo-1": {
          nome: "Teoria da Constituição",
          aulas: {
            "aula-1": {
              nome: "Conceito, Sentidos e Classificações",
              resumo: `A Constituição é a lei fundamental e suprema do Estado.

SENTIDOS DA CONSTITUIÇÃO:
- Sociológico (Lassalle): fatores reais de poder; "folha de papel".
- Político (Schmitt): decisão política fundamental.
- Jurídico (Kelsen): norma pura, fundamento de validade.

CLASSIFICAÇÕES DA CF/88:
- Origem: Promulgada.
- Estabilidade: Totalmente Rígida.
- Forma: Escrita.
- Conteúdo: Formal e Material.
- Modo de elaboração: Dogmática.
- Extensão: Analítica.

MACETE: "PEDRO É FERA" — Promulgada, Escrita, Dogmática, Rígida, Analítica, Formal.`,
              questoes: [
                {
                  id: 1,
                  enunciado: "Segundo a teoria de Ferdinand Lassalle, a Constituição escrita que não corresponde aos fatores reais de poder vigentes na sociedade é considerada mera folha de papel, desprovida de eficácia real.",
                  resposta: "C",
                  comentario: "CERTO. Lassalle defendia que a constituição escrita só tem valor se refletir o poder real da sociedade.",
                  pegadinha: "Não confunda com Kelsen (norma pura) ou Schmitt (decisão política)."
                },
                {
                  id: 2,
                  enunciado: "A Constituição Federal de 1988 classifica-se, quanto à sua origem, como outorgada, visto que foi imposta por uma Assembleia Constituinte restrita sem referendo prévio.",
                  resposta: "E",
                  comentario: "ERRADO. A CF/88 é promulgada, pois decorreu de representantes legítimos do povo eleitos para a Assembleia Constituinte.",
                  pegadinha: "Outorgada é imposta sem participação popular (ex.: CF/1824, CF/1937)."
                },
                {
                  id: 3,
                  enunciado: "A Constituição Federal de 1988 é considerada semi-rígida, pois algumas de suas normas podem ser alteradas por lei complementar, enquanto outras exigem o processo de emenda constitucional.",
                  resposta: "E",
                  comentario: "ERRADO. A CF/88 é totalmente rígida, pois qualquer alteração exige o processo do art. 60. A existência de diferentes espécies normativas não a torna semi-rígida.",
                  pegadinha: "Cuidado: a CF/88 NÃO é semi-rígida."
                },
                {
                  id: 4,
                  enunciado: "Para Hans Kelsen, a Constituição é uma norma que se situa no topo do ordenamento jurídico e serve como fundamento de validade para todas as demais normas do sistema.",
                  resposta: "C",
                  comentario: "CERTO. Essa é a definição kelseniana: a Constituição como norma pura, fundamento de validade de todo o sistema.",
                  pegadinha: "Sentido sociológico (Lassalle) fala em fatores reais de poder."
                },
                {
                  id: 5,
                  enunciado: "O sentido político da Constituição, defendido por Carl Schmitt, identifica a Constituição com a decisão política fundamental sobre a forma de Estado, a forma de governo e os direitos fundamentais.",
                  resposta: "C",
                  comentario: "CERTO. Carl Schmitt define a Constituição como decisão política fundamental.",
                  pegadinha: "Não confunda com Lassalle (fatores reais de poder)."
                }
              ]
            },
            "aula-2": {
              nome: "Constitucionalismo, Neoconstitucionalismo e Supremacia",
              resumo: `CONSTITUCIONALISMO: movimento para limitar o poder estatal e proteger direitos. Marcos: Magna Carta (1215), Bill of Rights (1689), Constituição dos EUA (1787), Declaração dos Direitos do Homem (1789).

NEOCONSTITUCIONALISMO: fase pós-1945. Características:
- Força normativa da Constituição.
- Centralidade dos princípios.
- Jurisdição constitucional forte (STF ativo).
- Reaproximação entre Direito e Moral.
- Eficácia horizontal dos direitos fundamentais.

SUPREMACIA CONSTITUCIONAL: CF no topo do ordenamento; leis contrárias são inválidas. Não se confunde com soberania popular.

MACETE NEOCONSTITUCIONALISMO: "PIF" — Princípios com força normativa, Interpretação moral, Fortalecimento do Judiciário.`,
              questoes: [
                {
                  id: 6,
                  enunciado: "O constitucionalismo, em sua origem histórica, tinha como principal objetivo fortalecer o poder do monarca e centralizar as decisões políticas.",
                  resposta: "E",
                  comentario: "ERRADO. O constitucionalismo surgiu exatamente para limitar o poder do monarca.",
                  pegadinha: "O constitucionalismo é movimento de limitação, não de fortalecimento do poder."
                },
                {
                  id: 7,
                  enunciado: "O neoconstitucionalismo caracteriza-se pela reaproximação entre direito e moral, conferindo força normativa direta aos princípios constitucionais e ampla proteção aos direitos fundamentais.",
                  resposta: "C",
                  comentario: "CERTO. Essa é a essência do neoconstitucionalismo.",
                  pegadinha: "É o oposto do positivismo kelseniano, que separava Direito e Moral."
                },
                {
                  id: 8,
                  enunciado: "Pelo princípio da supremacia constitucional, as leis infraconstitucionais encontram seu fundamento de validade na Constituição, sendo inválidas se com ela incompatíveis.",
                  resposta: "C",
                  comentario: "CERTO. Nenhuma lei sobrevive se ferir a Constituição.",
                  pegadinha: "Supremacia ≠ Soberania Popular."
                },
                {
                  id: 9,
                  enunciado: "No neoconstitucionalismo, o Parlamento detém a palavra final sobre a conformidade das leis com a Constituição, cabendo ao Judiciário apenas aplicar a lei aprovada de forma mecânica.",
                  resposta: "E",
                  comentario: "ERRADO. No neoconstitucionalismo, o Judiciário tem papel ativo, podendo invalidar leis.",
                  pegadinha: "O neoconstitucionalismo fortaleceu o Judiciário, não o Parlamento."
                },
                {
                  id: 10,
                  enunciado: "A supremacia constitucional é um princípio que se aplica apenas às leis federais, não vinculando os estados, municípios e o Distrito Federal.",
                  resposta: "E",
                  comentario: "ERRADO. A supremacia constitucional vincula todos os entes federativos.",
                  pegadinha: "A CF vincula União, estados, DF e municípios."
                },
                {
                  id: 11,
                  enunciado: "O constitucionalismo moderno tem como um de seus marcos a Declaração dos Direitos do Homem e do Cidadão, de 1789, que consagrou liberdades fundamentais.",
                  resposta: "C",
                  comentario: "CERTO. A Declaração de 1789 é um marco fundamental do constitucionalismo.",
                  pegadinha: "Junto com Magna Carta, Bill of Rights e Constituição dos EUA."
                },
                {
                  id: 12,
                  enunciado: "A eficácia horizontal dos direitos fundamentais, característica do neoconstitucionalismo, significa que os direitos fundamentais vinculam apenas o Estado nas relações com os cidadãos.",
                  resposta: "E",
                  comentario: "ERRADO. A eficácia horizontal significa que os direitos fundamentais vinculam também as relações privadas.",
                  pegadinha: "Não se limita ao Estado."
                },
                {
                  id: 13,
                  enunciado: "A soberania popular, prevista no art. 1º, parágrafo único da CF, confunde-se com a supremacia constitucional, sendo ambos conceitos idênticos.",
                  resposta: "E",
                  comentario: "ERRADO. Soberania popular é política; supremacia constitucional é jurídico-hierárquica.",
                  pegadinha: "Conceitos distintos."
                },
                {
                  id: 14,
                  enunciado: "No neoconstitucionalismo, a Constituição perde sua força normativa e passa a ser um documento meramente simbólico, sem aplicabilidade direta.",
                  resposta: "E",
                  comentario: "ERRADO. No neoconstitucionalismo, a Constituição ganha força normativa máxima.",
                  pegadinha: "É exatamente o oposto."
                },
                {
                  id: 15,
                  enunciado: "O STF, ao invalidar uma lei aprovada pelo Congresso por violação a um princípio fundamental, está agindo em conformidade com os postulados do neoconstitucionalismo.",
                  resposta: "C",
                  comentario: "CERTO. Essa é a essência do neoconstitucionalismo: jurisdição constitucional forte.",
                  pegadinha: "O STF é guardião da Constituição."
                }
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Poder Constituinte",
          aulas: {
            "aula-1": {
              nome: "Poder Constituinte Originário e Derivado",
              resumo: `PODER CONSTITUINTE ORIGINÁRIO (PCO):
- Cria a Constituição.
- Características: Inicial, Incondicionado, Ilimitado juridicamente, Autônomo.
- Titular: povo. Exercício: Assembleia Constituinte ou outorga.

PODER CONSTITUINTE DERIVADO (PCD):
- Subordinado à CF.
- Espécies:
  - Reformador: Emendas Constitucionais (3/5, dois turnos).
  - Decorrente: Estados criam suas Constituições (simetria).
  - Revisor: extinto (1994).
  - Difuso: municípios (Lei Orgânica).

MACETE PCO: "INILA" — Inicial, Não condicionado, Ilimitado, Livre, Autônomo.`,
              questoes: [
                {
                  id: 16,
                  enunciado: "O poder constituinte originário caracteriza-se por ser inicial, incondicionado e ilimitado juridicamente perante a ordem anterior.",
                  resposta: "C",
                  comentario: "CERTO. PCO é soberano.",
                  pegadinha: "Não se submete a limites jurídicos da CF anterior."
                },
                {
                  id: 17,
                  enunciado: "O poder constituinte derivado decorrente é exercido pelos estados-membros para elaborar suas próprias constituições, respeitando as normas da CF/88.",
                  resposta: "C",
                  comentario: "CERTO. O decorrente cria constituições estaduais sob simetria.",
                  pegadinha: "DF tem Lei Orgânica, não Constituição."
                },
                {
                  id: 18,
                  enunciado: "O poder constituinte originário é limitado pelas cláusulas pétreas da Constituição anterior.",
                  resposta: "E",
                  comentario: "ERRADO. PCO é ilimitado e incondicionado.",
                  pegadinha: "Cláusulas pétreas limitam o poder reformador, não o originário."
                },
                {
                  id: 19,
                  enunciado: "O povo é o titular do poder constituinte originário, mas seu exercício pode ser feito por uma Assembleia Constituinte.",
                  resposta: "C",
                  comentario: "CERTO. A titularidade é do povo, mas o exercício por representantes.",
                  pegadinha: "Titular ≠ exercício."
                },
                {
                  id: 20,
                  enunciado: "O poder constituinte derivado reformador pode emendar a Constituição desde que observados os limites formais, circunstanciais e materiais.",
                  resposta: "C",
                  comentario: "CERTO. São os três limites do poder reformador.",
                  pegadinha: "Limites formais (procedimento), circunstanciais (intervenção, estado de defesa, sítio) e materiais (cláusulas pétreas)."
                }
              ]
            },
            "aula-2": {
              nome: "Emendas Constitucionais e Cláusulas Pétreas",
              resumo: `EMENDAS CONSTITUCIONAIS (Art. 60):
- Iniciativa: 1/3 Câmara, 1/3 Senado, Presidente, maioria das Assembleias.
- Quórum: 3/5 em dois turnos em cada Casa.
- Limites:
  - Formais: procedimento especial.
  - Circunstanciais: não há emenda durante intervenção federal, estado de defesa, estado de sítio.
  - Materiais: cláusulas pétreas.

CLÁUSULAS PÉTREAS (Art. 60, §4º): não podem ser abolidas:
1. Forma federativa.
2. Voto direto, secreto, universal, periódico.
3. Separação dos Poderes.
4. Direitos e garantias individuais.

MACETE: "FOVISE" — Forma federativa, Voto, Separação, Direitos individuais.`,
              questoes: [
                {
                  id: 21,
                  enunciado: "São cláusulas pétreas, entre outras, a forma federativa de Estado, o voto direto e secreto, a separação dos Poderes e os direitos e garantias individuais.",
                  resposta: "C",
                  comentario: "CERTO. Art. 60, §4º.",
                  pegadinha: "Não inclui direitos sociais expressamente."
                },
                {
                  id: 22,
                  enunciado: "Uma emenda constitucional que propõe a extinção da separação dos Poderes é inconstitucional, pois viola cláusula pétrea.",
                  resposta: "C",
                  comentario: "CERTO. Separação dos Poderes é cláusula pétrea.",
                  pegadinha: "Inabolível."
                },
                {
                  id: 23,
                  enunciado: "O povo pode propor emenda constitucional mediante iniciativa popular, com assinaturas de 1% do eleitorado nacional.",
                  resposta: "E",
                  comentario: "ERRADO. O povo não pode propor PEC. Iniciativa popular é para lei ordinária ou complementar.",
                  pegadinha: "PEC só por 1/3 da Câmara, 1/3 do Senado, Presidente ou maioria das Assembleias."
                },
                {
                  id: 24,
                  enunciado: "O quórum para aprovação de emenda constitucional é de 3/5 dos membros de cada Casa do Congresso, em dois turnos de votação.",
                  resposta: "C",
                  comentario: "CERTO. Art. 60, §2º.",
                  pegadinha: "3/5 dos membros, não dos presentes."
                },
                {
                  id: 25,
                  enunciado: "Durante estado de defesa, é vedada a deliberação sobre emenda constitucional.",
                  resposta: "C",
                  comentario: "CERTO. Art. 60, §1º.",
                  pegadinha: "Vedação também para intervenção federal e estado de sítio."
                }
              ]
            }
          }
        }
      }
    }
  }
};
