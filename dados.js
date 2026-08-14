const DADOS = {
  materias: {

    // 1. LÍNGUA PORTUGUESA
    "lingua-portuguesa": {
      nome: "Língua Portuguesa",
      modulos: {
        "modulo-1": {
          nome: "Interpretação de Textos",
          aulas: {
            "aula-1": {
              nome: "Compreensão e Interpretação",
              resumo: "Compreensão: identificar informações explícitas. Interpretação: inferir, captar implícitos. Tipos textuais: narrativo, descritivo, dissertativo, injuntivo. Marcadores textuais: 'portanto' (conclusão), 'contudo' (oposição). Coesão: conexão entre partes. Coerência: lógica global.",
              questoes: [
                { id: 1, enunciado: "Compreensão textual limita-se ao que está explícito no texto.", resposta: "C", comentario: "CERTO. Compreensão é extração do literal.", pegadinha: "Confundir com interpretação." },
                { id: 2, enunciado: "Interpretação exige inferência, ou seja, acréscimo de sentido.", resposta: "C", comentario: "CERTO. É a definição de interpretação.", pegadinha: "Achar que interpretação é cópia." },
                { id: 3, enunciado: "Textos dissertativos são marcados por sequência cronológica.", resposta: "E", comentario: "ERRADO. A sequência cronológica é típica da narração.", pegadinha: "Confundir tipologias." },
                { id: 4, enunciado: "'Portanto' indica conclusão; 'contudo' indica oposição.", resposta: "C", comentario: "CERTO. São marcadores textuais.", pegadinha: "Inverter as funções." },
                { id: 5, enunciado: "Coesão e coerência são sinônimos.", resposta: "E", comentario: "ERRADO. Coesão é conexão (fios); coerência é lógica (sentido).", pegadinha: "Considerar iguais." }
              ]
            }
          }
        }
      }
    },

    // 2. DIREITO CONSTITUCIONAL
    "direito-constitucional": {
      nome: "Direito Constitucional",
      modulos: {
        "modulo-1": {
          nome: "Teoria da Constituição",
          aulas: {
            "aula-1": {
              nome: "Conceito, Sentidos e Classificações",
              resumo: "Sentidos: Lassalle (fatores reais), Schmitt (decisão política), Kelsen (norma pura). CF/88: promulgada, rígida, escrita, dogmática, analítica. Macete: PEDRO É FERA. Atenção: CF/88 não é semi-rígida.",
              questoes: [
                { id: 1, enunciado: "Lassalle: CF sem correspondência real é 'folha de papel'.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com Kelsen." },
                { id: 2, enunciado: "CF/88, quanto à origem, é outorgada.", resposta: "E", comentario: "ERRADO. É promulgada.", pegadinha: "Origem da CF." },
                { id: 3, enunciado: "CF/88 é semi-rígida.", resposta: "E", comentario: "ERRADO. Totalmente rígida.", pegadinha: "Semi-rígida." },
                { id: 4, enunciado: "Kelsen: CF é fundamento de validade do ordenamento.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com Lassalle." },
                { id: 5, enunciado: "Schmitt: CF é decisão política fundamental.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com sentido sociológico." }
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Poder Constituinte",
          aulas: {
            "aula-1": {
              nome: "Poder Constituinte Originário e Derivado",
              resumo: "Originário: INILA. Derivado: reformador (EC, 3/5), decorrente (Estados), difuso (municípios). Cláusulas pétreas: forma federativa, voto, separação, direitos individuais. Povo não pode propor PEC.",
              questoes: [
                { id: 1, enunciado: "PCO é incondicionado e ilimitado.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é limitado." },
                { id: 2, enunciado: "Povo pode propor PEC.", resposta: "E", comentario: "ERRADO. Só 1/3 Câmara, Senado, Presidente ou Assembleias.", pegadinha: "Iniciativa popular." },
                { id: 3, enunciado: "Cláusulas pétreas são inabolíveis.", resposta: "C", comentario: "CERTO.", pegadinha: "Dizer que são imutáveis." },
                { id: 4, enunciado: "DF exerce poder decorrente.", resposta: "E", comentario: "ERRADO. Tem Lei Orgânica.", pegadinha: "Achar que DF tem Constituição." },
                { id: 5, enunciado: "EC exige 3/5 em dois turnos.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com maioria absoluta." }
              ]
            }
          }
        },
        "modulo-3": {
          nome: "Princípios Fundamentais (Arts. 1º a 4º)",
          aulas: {
            "aula-1": {
              nome: "Fundamentos, Objetivos e Relações Internacionais",
              resumo: "Fundamentos: soberania, cidadania, dignidade, valores sociais, pluralismo. Objetivos: construir sociedade, garantir desenvolvimento, erradicar pobreza, reduzir desigualdades, promover bem. Relações internacionais: independência, direitos humanos, autodeterminação, não intervenção, paz, repúdio ao terrorismo.",
              questoes: [
                { id: 1, enunciado: "Dignidade humana é fundamento da República.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com objetivo." },
                { id: 2, enunciado: "Erradicar pobreza é fundamento da República.", resposta: "E", comentario: "ERRADO. É objetivo.", pegadinha: "Trocar fundamento por objetivo." },
                { id: 3, enunciado: "Soberania é princípio de relações internacionais.", resposta: "C", comentario: "CERTO.", pegadinha: "Também é fundamento." },
                { id: 4, enunciado: "Não intervenção é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com art. 34 (intervenção federal)." },
                { id: 5, enunciado: "Defesa da paz é objetivo interno.", resposta: "E", comentario: "ERRADO. É princípio internacional.", pegadinha: "Misturar." }
              ]
            }
          }
        }
      }
    },

    // 3. DIREITO ADMINISTRATIVO
    "direito-administrativo": {
      nome: "Direito Administrativo",
      modulos: {
        "modulo-1": {
          nome: "Princípios da Administração",
          aulas: {
            "aula-1": {
              nome: "Princípios Constitucionais (LIMPE)",
              resumo: "Legalidade (só o que a lei autoriza), Impessoalidade (objetividade, nepotismo), Moralidade (probidade), Publicidade (divulgação, com exceções), Eficiência (EC 19/98). Atenção: publicidade não é absoluta.",
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

    // 4. DIREITO PENAL
    "direito-penal": {
      nome: "Direito Penal",
      modulos: {
        "modulo-1": {
          nome: "Teoria do Crime",
          aulas: {
            "aula-1": {
              nome: "Conceito e Elementos (TIC)",
              resumo: "Fato típico (conduta, nexo, resultado, tipicidade), ilicitude (excluída por legítima defesa, estado de necessidade), culpabilidade (imputabilidade, consciência, exigibilidade).",
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

    // 5. DIREITO PROCESSUAL PENAL
    "direito-processual-penal": {
      nome: "Direito Processual Penal",
      modulos: {
        "modulo-1": {
          nome: "Inquérito Policial",
          aulas: {
            "aula-1": {
              nome: "IP (Arts. 4º a 23 do CPP)",
              resumo: "Procedimento administrativo, inquisitivo, escrito, dispensável, sigiloso. Delegado não arquiva (art. 28). Advogado tem acesso. Prazos: preso 30d, solto 10d.",
              questoes: [
                { id: 1, enunciado: "IP é obrigatório para ação penal.", resposta: "E", comentario: "ERRADO. Dispensável.", pegadinha: "Obrigatoriedade." },
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

    // 6. LEGISLAÇÃO PENAL ESPECIAL
    "legislacao-penal-especial": {
      nome: "Legislação Penal Especial",
      modulos: {
        "modulo-1": {
          nome: "Lei de Drogas (11.343/06)",
          aulas: {
            "aula-1": {
              nome: "Arts. 28 e 33 — Porte e Tráfico",
              resumo: "Art. 28: porte para consumo (crime sem prisão). Art. 33: tráfico (hediondo, 5 a 15 anos). Diferença: tráfico exige mercantilidade (oferecer, vender, fornecer). Não há quantidade mínima.",
              questoes: [
                { id: 1, enunciado: "Art. 28 é crime com prisão.", resposta: "E", comentario: "ERRADO. Sem prisão.", pegadinha: "Confundir penas." },
                { id: 2, enunciado: "Tráfico é hediondo.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que porte é hediondo." },
                { id: 3, enunciado: "A lei estabelece quantidade mínima.", resposta: "E", comentario: "ERRADO. Não há.", pegadinha: "Existência de quantidade." },
                { id: 4, enunciado: "Oferecer droga gratuitamente é tráfico.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que exige lucro." },
                { id: 5, enunciado: "Art. 28 admite liberdade provisória.", resposta: "E", comentario: "ERRADO. Não cabe prisão.", pegadinha: "Aplicar regime de prisão." }
              ]
            }
          }
        }
      }
    },

    // 7. DIREITOS HUMANOS
    "direitos-humanos": {
      nome: "Direitos Humanos",
      modulos: {
        "modulo-1": {
          nome: "Tratados Internacionais",
          aulas: {
            "aula-1": {
              nome: "Hierarquia e Incorporação",
              resumo: "Tratados DH com quórum de emenda = EC (art. 5º, §3º). Demais = supralegal. Pacto de San José é supralegal.",
              questoes: [
                { id: 1, enunciado: "Tratado DH aprovado com quórum de emenda é EC.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é lei ordinária." },
                { id: 2, enunciado: "Tratado DH sem quórum de emenda é infraconstitucional.", resposta: "E", comentario: "ERRADO. É supralegal.", pegadinha: "Status de lei ordinária." },
                { id: 3, enunciado: "Pacto de San José tem status supralegal.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com EC." },
                { id: 4, enunciado: "DH são cláusulas pétreas implícitas.", resposta: "C", comentario: "CERTO.", pegadinha: "Não estão no art. 60, §4º." },
                { id: 5, enunciado: "Tratado de DH pode ser denunciado pelo Presidente.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é irrevogável." }
              ]
            }
          }
        }
      }
    },

    // 8. RACIOCÍNIO LÓGICO
    "raciocinio-logico": {
      nome: "Raciocínio Lógico",
      modulos: {
        "modulo-1": {
          nome: "Lógica Proposicional",
          aulas: {
            "aula-1": {
              nome: "Conectivos e Tabela-Verdade",
              resumo: "Conectivos: ∧, ∨, →, ↔, ¬. Condicional só falsa quando V→F. Bicondicional verdadeira quando iguais. Lei de De Morgan.",
              questoes: [
                { id: 1, enunciado: "Conjunção é verdadeira apenas quando ambas são V.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com disjunção." },
                { id: 2, enunciado: "Condicional é falsa apenas quando V→F.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com bicondicional." },
                { id: 3, enunciado: "Disjunção é falsa quando ambas são F.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com conjunção." },
                { id: 4, enunciado: "Bicondicional é verdadeira quando diferentes.", resposta: "E", comentario: "ERRADO. É verdadeira quando iguais.", pegadinha: "Inverter." },
                { id: 5, enunciado: "Negação de 'p e q' é 'não p ou não q'.", resposta: "C", comentario: "CERTO. Lei de De Morgan.", pegadinha: "Esquecer a lei." }
              ]
            }
          }
        }
      }
    },

    // 9. INFORMÁTICA
    "informatica": {
      nome: "Informática",
      modulos: {
        "modulo-1": {
          nome: "Sistemas e Office",
          aulas: {
            "aula-1": {
              nome: "Windows, Linux, Word/Excel",
              resumo: "Linux: open-source. Ctrl+C copiar, Ctrl+V colar, Ctrl+Z desfazer. PROCV no Excel procura verticalmente.",
              questoes: [
                { id: 1, enunciado: "Linux é código aberto.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é Windows." },
                { id: 2, enunciado: "Ctrl+Z refaz a última ação.", resposta: "E", comentario: "ERRADO. Desfaz.", pegadinha: "Confundir com Ctrl+Y." },
                { id: 3, enunciado: "PROCV procura verticalmente.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com PROCH." },
                { id: 4, enunciado: "Word é editor de planilhas.", resposta: "E", comentario: "ERRADO. É processador de texto.", pegadinha: "Confundir com Excel." },
                { id: 5, enunciado: "Ubuntu é distribuição Linux.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é Windows." }
              ]
            }
          }
        }
      }
    },

    // 10. LODF
    "lodf": {
      nome: "Lei Orgânica do DF",
      modulos: {
        "modulo-1": {
          nome: "Organização do DF",
          aulas: {
            "aula-1": {
              nome: "Estrutura e Competências",
              resumo: "DF é ente sui generis. Tem Lei Orgânica (não Constituição). TCDF próprio. Competências residuais.",
              questoes: [
                { id: 1, enunciado: "DF é ente federativo sui generis.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é estado ou município." },
                { id: 2, enunciado: "A LODF é a Constituição do DF.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é lei ordinária." },
                { id: 3, enunciado: "O DF tem Tribunal de Contas próprio.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é o TCU." },
                { id: 4, enunciado: "DF pode legislar sobre todos os assuntos.", resposta: "E", comentario: "ERRADO. Tem competências residuais.", pegadinha: "Achar que é pleno." },
                { id: 5, enunciado: "LODF é promulgada pela Câmara Legislativa.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com CF." }
              ]
            }
          }
        }
      }
    },

    // 11. RIDE
    "ride": {
      nome: "RIDE",
      modulos: {
        "modulo-1": {
          nome: "Conceito e Funcionamento",
          aulas: {
            "aula-1": {
              nome: "Características da RIDE",
              resumo: "Criada pela LC 94/98. Abrange DF e municípios de GO/MG. Planejamento integrado de serviços públicos.",
              questoes: [
                { id: 1, enunciado: "RIDE criada por lei complementar federal.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é por lei estadual." },
                { id: 2, enunciado: "RIDE abrange apenas o DF.", resposta: "E", comentario: "ERRADO. Abrange DF e municípios de GO e MG.", pegadinha: "Restringir." },
                { id: 3, enunciado: "Objetivo: planejamento integrado de serviços.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é apenas econômico." },
                { id: 4, enunciado: "Gestão: Conselho Administrativo.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com conselho de estado." },
                { id: 5, enunciado: "RIDE é exclusivamente econômica.", resposta: "E", comentario: "ERRADO. Inclui serviços públicos.", pegadinha: "Reduzir a econômico." }
              ]
            }
          }
        }
      }
    },

    // 12. LC 840/2011
    "lc-840": {
      nome: "LC 840/2011",
      modulos: {
        "modulo-1": {
          nome: "Regime Jurídico dos Servidores do DF",
          aulas: {
            "aula-1": {
              nome: "Direitos e Deveres",
              resumo: "Regime estatutário. Estabilidade após 3 anos. Licenças: gestante, paternidade, capacitação. Penalidades: advertência, suspensão, demissão.",
              questoes: [
                { id: 1, enunciado: "Servidor do DF é regido pela CLT.", resposta: "E", comentario: "ERRADO. Regime estatutário.", pegadinha: "Aplicar CLT." },
                { id: 2, enunciado: "Estabilidade após 3 anos.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com 2 anos (CF)." },
                { id: 3, enunciado: "Tem direito a licença capacitação.", resposta: "C", comentario: "CERTO.", pegadinha: "Negar direito." },
                { id: 4, enunciado: "Demissão é aplicável por inassiduidade.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é apenas advertência." },
                { id: 5, enunciado: "Pode acumular cargos sem compatibilidade.", resposta: "E", comentario: "ERRADO. Exige compatibilidade.", pegadinha: "Negar requisito." }
              ]
            }
          }
        }
      }
    }

  }
};
