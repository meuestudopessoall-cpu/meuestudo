// dados.js — Todas as 12 matérias com conteúdo resumido e questões
// Total: 12 matérias, 180 questões (15 por matéria)

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
              resumo: `Compreensão: extrair informações explícitas. Interpretação: captar intenções, inferências. Tipos: narrativo, descritivo, dissertativo, injuntivo. Cuidado com marcadores textuais (portanto, contudo). A banca cobra diferença entre pressuposto e subentendido.`,
              questoes: [
                { id: 1, enunciado: "Compreensão textual limita-se ao que está explícito.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com interpretação." },
                { id: 2, enunciado: "Interpretação é mera cópia do texto.", resposta: "E", comentario: "ERRADO. Envolve inferência.", pegadinha: "Reduzir interpretação a transcrição." },
                { id: 3, enunciado: "Textos dissertativos expõem ideias e argumentos.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com narrativo." },
                { id: 4, enunciado: "'Portanto' indica oposição.", resposta: "E", comentario: "ERRADO. Indica conclusão.", pegadinha: "Trocar função." },
                { id: 5, enunciado: "Inferir é deduzir informações implícitas.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é invenção." },
                { id: 6, enunciado: "Texto injuntivo defende um ponto de vista.", resposta: "E", comentario: "ERRADO. Orienta/instrui.", pegadinha: "Confundir com dissertativo." },
                { id: 7, enunciado: "'O texto sugere' indica interpretação.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é compreensão." },
                { id: 8, enunciado: "Narração tem: apresentação, complicação, clímax, desfecho.", resposta: "C", comentario: "CERTO.", pegadinha: "Estrutura típica." },
                { id: 9, enunciado: "Tese é a opinião do autor.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com argumento." },
                { id: 10, enunciado: "Descrição objetiva expressa sentimentos.", resposta: "E", comentario: "ERRADO. É impessoal.", pegadinha: "Subjetividade." },
                { id: 11, enunciado: "Pressuposto é informação implícita necessária.", resposta: "C", comentario: "CERTO.", pegadinha: "Diferenciar de subentendido." },
                { id: 12, enunciado: "'Embora' indica conclusão.", resposta: "E", comentario: "ERRADO. Indica concessão.", pegadinha: "Confundir conjunções." },
                { id: 13, enunciado: "Leitura dinâmica é com pausas para dicionário.", resposta: "E", comentario: "ERRADO. É fluida.", pegadinha: "Conceito invertido." },
                { id: 14, enunciado: "Coesão são mecanismos de conexão textual.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com coerência." },
                { id: 15, enunciado: "Coerência é sentido lógico do texto.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que gramática quebra coerência." }
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
              resumo: `Sentidos: Lassalle (fatores reais), Schmitt (decisão política), Kelsen (norma pura). CF/88: promulgada, rígida, escrita, dogmática, analítica. Macete: PEDRO É FERA. Atenção: não é semi-rígida.`,
              questoes: [
                { id: 1, enunciado: "Lassalle: CF sem correspondência real é 'folha de papel'.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com Kelsen." },
                { id: 2, enunciado: "CF/88 é outorgada.", resposta: "E", comentario: "ERRADO. É promulgada.", pegadinha: "Origem." },
                { id: 3, enunciado: "CF/88 é semi-rígida.", resposta: "E", comentario: "ERRADO. Totalmente rígida.", pegadinha: "Semi-rígida." },
                { id: 4, enunciado: "Kelsen: CF é fundamento de validade.", resposta: "C", comentario: "CERTO.", pegadinha: "Sentido sociológico." },
                { id: 5, enunciado: "Schmitt: CF é decisão política fundamental.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com Lassalle." }
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Poder Constituinte",
          aulas: {
            "aula-1": {
              nome: "Poder Constituinte Originário e Derivado",
              resumo: `Originário (PCO): inicial, incondicionado, ilimitado, autônomo (INILA). Derivado: reformador (EC, 3/5, dois turnos), decorrente (Estados, simetria), difuso (municípios). Cláusulas pétreas: forma federativa, voto, separação, direitos individuais.`,
              questoes: [
                { id: 1, enunciado: "PCO é incondicionado.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é limitado." },
                { id: 2, enunciado: "Povo pode propor PEC.", resposta: "E", comentario: "ERRADO. Não pode.", pegadinha: "Iniciativa popular." },
                { id: 3, enunciado: "Cláusulas pétreas são inabolíveis.", resposta: "C", comentario: "CERTO.", pegadinha: "Dizer que são imutáveis (não, podem ser modificadas)." },
                { id: 4, enunciado: "DF exerce poder decorrente.", resposta: "E", comentario: "ERRADO. Tem Lei Orgânica.", pegadinha: "Achar que DF tem Constituição." },
                { id: 5, enunciado: "EC exige 3/5 em dois turnos.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir quórum." }
              ]
            }
          }
        },
        "modulo-3": {
          nome: "Princípios Fundamentais",
          aulas: {
            "aula-1": {
              nome: "Arts. 1º a 4º",
              resumo: `Fundamentos (art. 1º): soberania, cidadania, dignidade, valores sociais, pluralismo. Objetivos (art. 3º): construir, garantir, erradicar, reduzir, promover. Relações internacionais (art. 4º): independência, direitos humanos, autodeterminação, não intervenção, igualdade, paz, repúdio ao terrorismo, cooperação, integração.`,
              questoes: [
                { id: 1, enunciado: "Dignidade humana é fundamento.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com objetivo." },
                { id: 2, enunciado: "Erradicar pobreza é fundamento.", resposta: "E", comentario: "ERRADO. É objetivo.", pegadinha: "Trocar." },
                { id: 3, enunciado: "Soberania é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Também é fundamento." },
                { id: 4, enunciado: "Não intervenção é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com art. 34." },
                { id: 5, enunciado: "Defesa da paz é objetivo interno.", resposta: "E", comentario: "ERRADO. É internacional.", pegadinha: "Misturar." }
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
          nome: "Princípios da Administração",
          aulas: {
            "aula-1": {
              nome: "Princípios Constitucionais (LIMPE)",
              resumo: `Legalidade: só o que a lei autoriza. Impessoalidade: objetividade, vedação ao nepotismo. Moralidade: probidade, boa-fé. Publicidade: divulgação (com exceções). Eficiência: economicidade, celeridade (EC 19/98).`,
              questoes: [
                { id: 1, enunciado: "Legalidade pública: só o que a lei autoriza.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com direito privado." },
                { id: 2, enunciado: "Eficiência foi inserida pela EC 19/98.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que sempre existiu." },
                { id: 3, enunciado: "Publicidade é absoluta.", resposta: "E", comentario: "ERRADO. Há sigilo.", pegadinha: "Absolutizar." },
                { id: 4, enunciado: "Impessoalidade proíbe nepotismo.", resposta: "C", comentario: "CERTO.", pegadinha: "Restringir a parentes." },
                { id: 5, enunciado: "Moralidade é desvinculada da ética.", resposta: "E", comentario: "ERRADO. Exige ética.", pegadinha: "Separar." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 4. DIREITO PENAL
    // ============================================================
    "direito-penal": {
      nome: "Direito Penal",
      modulos: {
        "modulo-1": {
          nome: "Teoria do Crime",
          aulas: {
            "aula-1": {
              nome: "Conceito e Elementos (TIC)",
              resumo: `Fato típico (conduta, nexo, resultado, tipicidade), ilicitude (antijuridicidade, afastada por excludentes: legítima defesa, estado de necessidade), culpabilidade (imputabilidade, potencial consciência, exigibilidade).`,
              questoes: [
                { id: 1, enunciado: "Toda conduta típica é ilícita.", resposta: "E", comentario: "ERRADO. Há excludentes.", pegadinha: "Absolutizar." },
                { id: 2, enunciado: "Legítima defesa exclui a ilicitude.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com excludente de culpabilidade." },
                { id: 3, enunciado: "A culpabilidade exige imputabilidade.", resposta: "C", comentario: "CERTO.", pegadinha: "Esquecer elemento." },
                { id: 4, enunciado: "Estado de necessidade exclui a tipicidade.", resposta: "E", comentario: "ERRADO. Exclui a ilicitude.", pegadinha: "Confundir com atipicidade." },
                { id: 5, enunciado: "Crime é fato típico, ilícito e culpável.", resposta: "C", comentario: "CERTO.", pegadinha: "Conceito analítico." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 5. DIREITO PROCESSUAL PENAL
    // ============================================================
    "direito-processual-penal": {
      nome: "Direito Processual Penal",
      modulos: {
        "modulo-1": {
          nome: "Inquérito Policial",
          aulas: {
            "aula-1": {
              nome: "IP (Arts. 4º a 23 do CPP)",
              resumo: `Procedimento administrativo, inquisitivo, escrito, dispensável, sigiloso (OIEDSS). Prazos: preso 30d, solto 10d. Delegado não arquiva (art. 28). Advogado tem acesso.`,
              questoes: [
                { id: 1, enunciado: "IP é obrigatório.", resposta: "E", comentario: "ERRADO. Dispensável.", pegadinha: "Obrigatoriedade." },
                { id: 2, enunciado: "Delegado pode arquivar IP.", resposta: "E", comentario: "ERRADO. Só juiz.", pegadinha: "Atribuir poder." },
                { id: 3, enunciado: "IP é inquisitivo.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com contraditório." },
                { id: 4, enunciado: "Advogado não tem acesso ao IP sigiloso.", resposta: "E", comentario: "ERRADO. Tem acesso.", pegadinha: "Sigilo absoluto." },
                { id: 5, enunciado: "Prazo para preso: 30 dias.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com solto (10d)." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 6. LEGISLAÇÃO PENAL ESPECIAL
    // ============================================================
    "legislacao-penal-especial": {
      nome: "Legislação Penal Especial",
      modulos: {
        "modulo-1": {
          nome: "Lei de Drogas",
          aulas: {
            "aula-1": {
              nome: "Lei 11.343/06 (Arts. 28 e 33)",
              resumo: `Art. 28: porte para consumo (crime sem prisão, penas alternativas). Art. 33: tráfico (5 a 15 anos, hediondo). Diferença: tráfico exige mercantilidade (oferecer, vender, fornecer). Não há quantidade mínima.`,
              questoes: [
                { id: 1, enunciado: "Art. 28 é crime com prisão.", resposta: "E", comentario: "ERRADO. Sem prisão.", pegadinha: "Confundir penas." },
                { id: 2, enunciado: "Tráfico é hediondo.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que porte é hediondo." },
                { id: 3, enunciado: "A lei estabelece quantidade mínima para tráfico.", resposta: "E", comentario: "ERRADO. Não há.", pegadinha: "Existência de quantidade." },
                { id: 4, enunciado: "Oferecer droga gratuitamente é tráfico.", resposta: "C", comentario: "CERTO. Art. 33.", pegadinha: "Achar que exige lucro." },
                { id: 5, enunciado: "Art. 28 admite liberdade provisória.", resposta: "E", comentario: "ERRADO. Não cabe prisão.", pegadinha: "Aplicar regime de prisão." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 7. DIREITOS HUMANOS
    // ============================================================
    "direitos-humanos": {
      nome: "Direitos Humanos",
      modulos: {
        "modulo-1": {
          nome: "Tratados Internacionais",
          aulas: {
            "aula-1": {
              nome: "Hierarquia e Incorporação",
              resumo: `Tratados de DH aprovados com quórum de emenda (3/5, dois turnos) têm status de emenda constitucional (art. 5º, §3º). Os demais têm status supralegal (superior à lei, inferior à CF). Ex.: Convenção Americana (Pacto de San José) é supralegal.`,
              questoes: [
                { id: 1, enunciado: "Tratado de DH aprovado com quórum de emenda é EC.", resposta: "C", comentario: "CERTO. Art. 5º, §3º.", pegadinha: "Achar que é lei ordinária." },
                { id: 2, enunciado: "Tratado de DH sem quórum de emenda é infraconstitucional.", resposta: "E", comentario: "ERRADO. É supralegal.", pegadinha: "Status de lei ordinária." },
                { id: 3, enunciado: "Pacto de San José tem status supralegal.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com EC." },
                { id: 4, enunciado: "Tratado de DH pode ser denunciado pelo Presidente.", resposta: "C", comentario: "CERTO, com aval do Congresso.", pegadinha: "Achar que é irrevogável." },
                { id: 5, enunciado: "DH são cláusulas pétreas implícitas.", resposta: "C", comentario: "CERTO.", pegadinha: "Não estão no art. 60, §4º." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 8. RACIOCÍNIO LÓGICO-MATEMÁTICO
    // ============================================================
    "raciocinio-logico": {
      nome: "Raciocínio Lógico-Matemático",
      modulos: {
        "modulo-1": {
          nome: "Lógica Proposicional",
          aulas: {
            "aula-1": {
              nome: "Conectivos Lógicos e Tabela-Verdade",
              resumo: `Conectivos: ∧ (e, conjunção), ∨ (ou, disjunção), → (se...então, condicional), ↔ (se e somente se, bicondicional), ¬ (negação). Tabela-verdade: V e V = V; V e F = F; F e V = F; F e F = F. Condicional: só é falsa quando V→F. Bicondicional: verdadeira quando valores iguais.`,
              questoes: [
                { id: 1, enunciado: "A conjunção é verdadeira apenas quando ambas proposições são verdadeiras.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com disjunção." },
                { id: 2, enunciado: "A condicional é falsa apenas quando antecedente V e consequente F.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com bicondicional." },
                { id: 3, enunciado: "A disjunção é falsa quando ambas são falsas.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com conjunção." },
                { id: 4, enunciado: "A bicondicional é verdadeira quando os valores lógicos são diferentes.", resposta: "E", comentario: "ERRADO. É verdadeira quando iguais.", pegadinha: "Inverter." },
                { id: 5, enunciado: "A negação de 'p e q' é 'não p ou não q'.", resposta: "C", comentario: "CERTO. Lei de De Morgan.", pegadinha: "Esquecer a lei." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 9. INFORMÁTICA
    // ============================================================
    "informatica": {
      nome: "Informática",
      modulos: {
        "modulo-1": {
          nome: "Sistemas Operacionais e Pacote Office",
          aulas: {
            "aula-1": {
              nome: "Windows, Linux e Word/Excel",
              resumo: `Windows: sistema operacional gráfico. Linux: open-source (Ubuntu, Debian). Word: processador de texto (formatação, tabelas). Excel: planilhas (fórmulas: SOMA, MÉDIA, SE, PROCV). Atalhos: Ctrl+C copiar, Ctrl+V colar, Ctrl+Z desfazer.`,
              questoes: [
                { id: 1, enunciado: "Linux é um sistema operacional de código aberto.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é Windows." },
                { id: 2, enunciado: "Ctrl+Z refaz a última ação.", resposta: "E", comentario: "ERRADO. Desfaz.", pegadinha: "Confundir com Ctrl+Y." },
                { id: 3, enunciado: "A função PROCV no Excel procura valores verticalmente.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com PROCH." },
                { id: 4, enunciado: "O Word é um editor de planilhas.", resposta: "E", comentario: "ERRADO. É processador de texto.", pegadinha: "Confundir com Excel." },
                { id: 5, enunciado: "O Ubuntu é uma distribuição Linux.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é Windows." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 10. LEI ORGÂNICA DO DF (LODF)
    // ============================================================
    "lodf": {
      nome: "Lei Orgânica do DF",
      modulos: {
        "modulo-1": {
          nome: "Organização do DF",
          aulas: {
            "aula-1": {
              nome: "Estrutura e Competências",
              resumo: `DF é ente federativo sui generis (não é estado, não é município). Organização: Governador, Vice, Deputados Distritais, Tribunal de Contas (TCDF). Competências legislativas residuais (art. 8º, §3º da CF). Lei Orgânica é a 'Constituição' do DF.`,
              questoes: [
                { id: 1, enunciado: "O DF é um ente federativo com características de estado e município.", resposta: "C", comentario: "CERTO. É sui generis.", pegadinha: "Achar que é estado ou município." },
                { id: 2, enunciado: "A LODF é a Constituição do DF.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é lei ordinária." },
                { id: 3, enunciado: "O DF tem Tribunal de Contas próprio.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é o TCU." },
                { id: 4, enunciado: "O DF pode legislar sobre todos os assuntos como um estado.", resposta: "E", comentario: "ERRADO. Tem competências residuais.", pegadinha: "Achar que é pleno." },
                { id: 5, enunciado: "A LODF é promulgada pela Câmara Legislativa.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com CF." }
              ]
              
