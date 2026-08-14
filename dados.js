// dados.js — Atualização 1: Conteúdo Expandido

const DADOS = {
  materias: {

    // ============================================================
    // 1. LÍNGUA PORTUGUESA — 12 QUESTÕES
    // ============================================================
    "lingua-portuguesa": {
      nome: "Língua Portuguesa",
      modulos: {
        "modulo-1": {
          nome: "Interpretação de Textos",
          aulas: {
            "aula-1": {
              nome: "Compreensão e Interpretação",
              resumo: "Compreensão: informações explícitas. Interpretação: inferências, ideias implícitas. Tipos textuais: narrativo (fatos, cronologia), descritivo (características), dissertativo (tese, argumentos), injuntivo (instruções). Cuidado com marcadores textuais: 'portanto' (conclusão), 'contudo' (oposição), 'assim' (conclusão/consequência). Pressuposto: ideia implícita necessária. Subentendido: ideia implícita deduzível.",
              questoes: [
                { id: 1, enunciado: "A compreensão textual limita-se à identificação das informações explicitamente apresentadas pelo autor.", resposta: "C", comentario: "CERTO. Compreensão é extração do que está literalmente escrito.", pegadinha: "Confundir com interpretação, que exige inferência." },
                { id: 2, enunciado: "A interpretação textual consiste em reproduzir mecanicamente as palavras do autor, sem qualquer acréscimo de sentido.", resposta: "E", comentario: "ERRADO. Interpretação exige inferência, ou seja, acréscimo de sentido a partir do texto.", pegadinha: "Reduzir interpretação a mera transcrição." },
                { id: 3, enunciado: "Textos dissertativos caracterizam-se por apresentar uma sequência de fatos em ordem cronológica.", resposta: "E", comentario: "ERRADO. Sequência cronológica é típica de textos narrativos. O dissertativo expõe ideias e argumentos.", pegadinha: "Confundir tipologias textuais." },
                { id: 4, enunciado: "Palavras como 'portanto' e 'contudo' são marcadores textuais que indicam, respectivamente, conclusão e oposição.", resposta: "C", comentario: "CERTO. 'Portanto' conclui; 'contudo' traz oposição/contraste.", pegadinha: "Inverter as funções." },
                { id: 5, enunciado: "A inferência é um processo de interpretação que permite ao leitor deduzir informações implícitas no texto.", resposta: "C", comentario: "CERTO. Inferir é deduzir a partir de pistas do texto.", pegadinha: "Achar que inferência é invenção ou suposição sem base." },
                { id: 6, enunciado: "Textos injuntivos têm como principal finalidade defender um ponto de vista e convencer o leitor.", resposta: "E", comentario: "ERRADO. A finalidade do injuntivo é orientar, instruir (manuais, receitas). O dissertativo convence.", pegadinha: "Confundir injuntivo com dissertativo." },
                { id: 7, enunciado: "A frase 'O texto sugere que' indica que o leitor está fazendo uma interpretação, e não uma mera compreensão.", resposta: "C", comentario: "CERTO. 'Sugere' remete ao implícito, à interpretação.", pegadinha: "Palavras como 'sugere' e 'infere' pedem interpretação." },
                { id: 8, enunciado: "A coesão textual diz respeito aos mecanismos linguísticos que garantem a conexão entre as partes do texto, como pronomes e conjunções.", resposta: "C", comentario: "CERTO. Coesão são os fios que ligam o texto.", pegadinha: "Confundir coesão (conexão) com coerência (sentido lógico)." },
                { id: 9, enunciado: "A coerência textual está relacionada à possibilidade de o texto ser interpretado como um todo lógico e articulado, mesmo que haja erros gramaticais.", resposta: "C", comentario: "CERTO. Coerência é o sentido lógico. Erros gramaticais (coesão) não a destroem se o sentido permanecer.", pegadinha: "Achar que qualquer erro gramatical quebra a coerência." },
                { id: 10, enunciado: "O pressuposto textual é uma informação que não está explícita, mas é necessária para que o texto faça sentido.", resposta: "C", comentario: "CERTO. Pressupostos são verdades implícitas que sustentam o texto.", pegadinha: "Confundir pressuposto com subentendido (que é inferível)." },
                { id: 11, enunciado: "A palavra 'embora' estabelece uma relação de conclusão entre as orações.", resposta: "E", comentario: "ERRADO. 'Embora' estabelece relação de concessão/oposição, não conclusão.", pegadinha: "Confundir conjunções concessivas com conclusivas." },
                { id: 12, enunciado: "Em textos narrativos, a estrutura básica é: apresentação, complicação, clímax e desfecho.", resposta: "C", comentario: "CERTO. Essa é a estrutura clássica da narração.", pegadinha: "Confundir com estrutura dissertativa (tese, argumentos, conclusão)." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 2. DIREITO CONSTITUCIONAL — 18 QUESTÕES (6 por módulo)
    // ============================================================
    "direito-constitucional": {
      nome: "Direito Constitucional",
      modulos: {
        "modulo-1": {
          nome: "Teoria da Constituição",
          aulas: {
            "aula-1": {
              nome: "Conceito, Sentidos e Classificações",
              resumo: "Sentidos: Lassalle (fatores reais de poder), Schmitt (decisão política fundamental), Kelsen (norma pura, fundamento de validade). CF/88: promulgada, rígida, escrita, dogmática, analítica. Atenção: não é semi-rígida. Macete: PEDRO É FERA.",
              questoes: [
                { id: 1, enunciado: "Segundo Lassalle, a Constituição escrita que não reflete os fatores reais de poder é mera 'folha de papel'.", resposta: "C", comentario: "CERTO. É a essência do sentido sociológico.", pegadinha: "Confundir com Kelsen (norma pura)." },
                { id: 2, enunciado: "A CF/88, quanto à origem, é outorgada.", resposta: "E", comentario: "ERRADO. É promulgada, pois foi elaborada por representantes eleitos.", pegadinha: "Outorgada é imposta (ex.: 1824, 1937)." },
                { id: 3, enunciado: "A CF/88 é semi-rígida, pois algumas normas podem ser alteradas por lei complementar.", resposta: "E", comentario: "ERRADO. É totalmente rígida, pois toda alteração exige o processo do art. 60.", pegadinha: "Existência de leis complementares não a torna semi-rígida." },
                { id: 4, enunciado: "Para Kelsen, a Constituição é o fundamento de validade de todo o ordenamento jurídico.", resposta: "C", comentario: "CERTO. É a norma hipotética fundamental.", pegadinha: "Confundir com Lassalle (fatores reais)." },
                { id: 5, enunciado: "Para Schmitt, a Constituição é a decisão política fundamental sobre a forma de Estado e de governo.", resposta: "C", comentario: "CERTO. É o sentido político.", pegadinha: "Confundir com o sentido sociológico." },
                { id: 6, enunciado: "A CF/88 classifica-se como sintética, pois trata apenas dos temas fundamentais.", resposta: "E", comentario: "ERRADO. É analítica, pois é extensa e regula muitas matérias.", pegadinha: "CF/88 é longa, portanto analítica." }
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Poder Constituinte",
          aulas: {
            "aula-1": {
              nome: "Poder Constituinte Originário e Derivado",
              resumo: "Originário (PCO): inicial, incondicionado, ilimitado, autônomo (INILA). Derivado: reformador (EC: 3/5, dois turnos), decorrente (Estados, simetria), difuso (municípios). Cláusulas pétreas (art. 60, §4º): forma federativa, voto (direto/secreto/universal/periódico), separação dos Poderes, direitos individuais. Povo não pode propor PEC.",
              questoes: [
                { id: 1, enunciado: "O Poder Constituinte Originário é incondicionado e ilimitado juridicamente.", resposta: "C", comentario: "CERTO. É a característica do PCO.", pegadinha: "Achar que está limitado pela CF anterior." },
                { id: 2, enunciado: "O povo pode propor emenda constitucional mediante iniciativa popular.", resposta: "E", comentario: "ERRADO. Só: 1/3 da Câmara, 1/3 do Senado, Presidente ou maioria das Assembleias.", pegadinha: "Iniciativa popular é para leis ordinárias, não PEC." },
                { id: 3, enunciado: "Cláusulas pétreas são inabolíveis, mas podem ser modificadas desde que não suprimam o núcleo essencial.", resposta: "C", comentario: "CERTO. A vedação é contra abolição, não contra modificação.", pegadinha: "Dizer que são imutáveis (totalmente imutáveis = errado)." },
                { id: 4, enunciado: "O Distrito Federal exerce poder constituinte decorrente ao elaborar sua Constituição.", resposta: "E", comentario: "ERRADO. O DF tem Lei Orgânica (art. 32 da CF), não poder decorrente.", pegadinha: "DF não é estado, mas ente sui generis." },
                { id: 5, enunciado: "A Emenda Constitucional exige quórum de 3/5 dos membros de cada Casa, em dois turnos de votação.", resposta: "C", comentario: "CERTO. Art. 60, §2º.", pegadinha: "Confundir com maioria absoluta ou simples." },
                { id: 6, enunciado: "Durante estado de sítio, é vedada a deliberação sobre emenda constitucional.", resposta: "C", comentario: "CERTO. Art. 60, §1º (também durante intervenção federal e estado de defesa).", pegadinha: "Achar que é permitido." }
              ]
            }
          }
        },
        "modulo-3": {
          nome: "Princípios Fundamentais",
          aulas: {
            "aula-1": {
              nome: "Arts. 1º a 4º da CF",
              resumo: "Fundamentos (art. 1º): soberania, cidadania, dignidade, valores sociais do trabalho/livre iniciativa, pluralismo. Objetivos (art. 3º): construir sociedade livre/justa/solidária, garantir desenvolvimento, erradicar pobreza, reduzir desigualdades, promover bem de todos. Relações internacionais (art. 4º): independência, direitos humanos, autodeterminação, não intervenção, igualdade, paz, repúdio ao terrorismo, cooperação, integração.",
              questoes: [
                { id: 1, enunciado: "A dignidade da pessoa humana é um dos fundamentos da República.", resposta: "C", comentario: "CERTO. Art. 1º, III.", pegadinha: "Confundir com objetivo." },
                { id: 2, enunciado: "Erradicar a pobreza é um fundamento da República.", resposta: "E", comentario: "ERRADO. É um objetivo (art. 3º, III).", pegadinha: "Trocar fundamento por objetivo." },
                { id: 3, enunciado: "A soberania é um princípio que rege o Brasil em suas relações internacionais.", resposta: "C", comentario: "CERTO. Art. 4º, I. (Também é fundamento do art. 1º).", pegadinha: "Soberania aparece nos dois lugares." },
                { id: 4, enunciado: "A não intervenção é um princípio das relações internacionais do Brasil.", resposta: "C", comentario: "CERTO. Art. 4º, IV.", pegadinha: "Confundir com não intervenção prevista no art. 34 (intervenção federal)." },
                { id: 5, enunciado: "A defesa da paz é um objetivo fundamental interno da República.", resposta: "E", comentario: "ERRADO. É princípio de relações internacionais (art. 4º, VI).", pegadinha: "Misturar objetivos internos com princípios internacionais." },
                { id: 6, enunciado: "O pluralismo político é um dos fundamentos da República.", resposta: "C", comentario: "CERTO. Art. 1º, V.", pegadinha: "Achar que é objetivo." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 3. DIREITO ADMINISTRATIVO — 12 QUESTÕES
    // ============================================================
    "direito-administrativo": {
      nome: "Direito Administrativo",
      modulos: {
        "modulo-1": {
          nome: "Princípios da Administração Pública",
          aulas: {
            "aula-1": {
              nome: "Princípios Constitucionais (LIMPE)",
              resumo: "Art. 37, caput: Legalidade (só o que a lei autoriza), Impessoalidade (objetividade, vedação ao nepotismo), Moralidade (probidade, boa-fé), Publicidade (divulgação, com exceções de sigilo), Eficiência (economicidade, celeridade — EC 19/98). Atenção: publicidade não é absoluta.",
              questoes: [
                { id: 1, enunciado: "O princípio da legalidade na Administração Pública significa que o administrador pode fazer tudo o que a lei não proíbe.", resposta: "E", comentario: "ERRADO. Na administração, só pode fazer o que a lei autoriza.", pegadinha: "Confundir com direito privado (onde se pode fazer o que a lei não proíbe)." },
                { id: 2, enunciado: "O princípio da eficiência foi introduzido na CF pela EC 19/98.", resposta: "C", comentario: "CERTO. A EC 19/98 acrescentou a eficiência ao caput do art. 37.", pegadinha: "Achar que sempre esteve na CF." },
                { id: 3, enunciado: "A publicidade dos atos administrativos é absoluta e não admite exceção.", resposta: "E", comentario: "ERRADO. Admite sigilo quando a segurança nacional ou interesse público exigirem.", pegadinha: "Absolutizar a publicidade." },
                { id: 4, enunciado: "A impessoalidade veda a promoção pessoal do agente público e o nepotismo.", resposta: "C", comentario: "CERTO. O ato deve ser imputado ao órgão, não à pessoa.", pegadinha: "Restringir a nepotismo apenas." },
                { id: 5, enunciado: "O princípio da moralidade exige conduta proba e honesta, aplicando-se à administração direta e indireta.", resposta: "C", comentario: "CERTO. Aplica-se a toda administração.", pegadinha: "Restringir à administração direta." },
                { id: 6, enunciado: "A eficiência exige que a administração atue com economicidade, reduzindo custos e otimizando resultados.", resposta: "C", comentario: "CERTO. Eficiência é também economicidade e qualidade.", pegadinha: "Reduzir eficiência a rapidez apenas." },
                { id: 7, enunciado: "A moralidade administrativa está desvinculada da moral comum, podendo o agente agir contra a ética se a lei permitir.", resposta: "E", comentario: "ERRADO. A moralidade administrativa exige padrão ético elevado.", pegadinha: "Separar moralidade de ética." },
                { id: 8, enunciado: "Os atos administrativos são sempre públicos, não havendo hipótese de sigilo.", resposta: "E", comentario: "ERRADO. A CF permite sigilo (art. 5º, XXXIII).", pegadinha: "Absolutizar a publicidade." },
                { id: 9, enunciado: "A impessoalidade é também conhecida como princípio da finalidade.", resposta: "C", comentario: "CERTO. O ato deve visar o interesse público, não o pessoal.", pegadinha: "Confundir com princípio da eficiência." },
                { id: 10, enunciado: "A administração pública indireta não está sujeita ao princípio da legalidade.", resposta: "E", comentario: "ERRADO. Toda administração está sujeita à legalidade.", pegadinha: "Restringir a legalidade." },
                { id: 11, enunciado: "O princípio da moralidade pode ser invocado para invalidar ato administrativo mesmo que ele seja legal.", resposta: "C", comentario: "CERTO. Um ato pode ser legal, mas imoral, sendo anulável.", pegadinha: "Achar que legalidade prevalece sobre moralidade." },
                { id: 12, enunciado: "A publicidade é requisito de eficácia dos atos administrativos, mas em regra não é requisito de validade.", resposta: "C", comentario: "CERTO. Salvo quando a lei exige expressamente.", pegadinha: "Dizer que publicidade é sempre requisito de validade." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 4. DIREITO PENAL — 12 QUESTÕES
    // ============================================================
    "direito-penal": {
      nome: "Direito Penal",
      modulos: {
        "modulo-1": {
          nome: "Teoria do Crime",
          aulas: {
            "aula-1": {
              nome: "Conceito e Elementos (TIC)",
              resumo: "Conceito analítico: Fato Típico (conduta, nexo, resultado, tipicidade), Ilicitude (antijuridicidade, excluída por legítima defesa, estado de necessidade, estrito cumprimento do dever legal, exercício regular de direito), Culpabilidade (imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa). Atenção: não confundir excludentes de ilicitude com excludentes de culpabilidade.",
              questoes: [
                { id: 1, enunciado: "Toda conduta típica é ilícita.", resposta: "E", comentario: "ERRADO. Há excludentes de ilicitude (legítima defesa, estado de necessidade).", pegadinha: "Absolutizar a tipicidade." },
                { id: 2, enunciado: "A legítima defesa exclui a ilicitude da conduta.", resposta: "C", comentario: "CERTO. É causa de exclusão da antijuridicidade.", pegadinha: "Confundir com excludente de culpabilidade." },
                { id: 3, enunciado: "A culpabilidade exige imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa.", resposta: "C", comentario: "CERTO. São os três elementos da culpabilidade.", pegadinha: "Esquecer um dos elementos." },
                { id: 4, enunciado: "O estado de necessidade exclui a tipicidade da conduta.", resposta: "E", comentario: "ERRADO. Exclui a ilicitude, não a tipicidade.", pegadinha: "Confundir com atipicidade." },
                { id: 5, enunciado: "O crime é definido como fato típico, ilícito e culpável.", resposta: "C", comentario: "CERTO. É o conceito analítico tripartite.", pegadinha: "Usar o conceito bipartite (típico e ilícito) sem culpabilidade." },
                { id: 6, enunciado: "A coação moral irresistível é uma excludente de ilicitude.", resposta: "E", comentario: "ERRADO. É excludente de culpabilidade (art. 22 do CP).", pegadinha: "Confundir com excludente de ilicitude." },
                { id: 7, enunciado: "O estrito cumprimento do dever legal exclui a tipicidade.", resposta: "E", comentario: "ERRADO. Exclui a ilicitude.", pegadinha: "Atribuir à tipicidade." },
                { id: 8, enunciado: "A imputabilidade é a capacidade de entender o caráter ilícito do fato e de determinar-se de acordo com esse entendimento.", resposta: "C", comentario: "CERTO. É o critério biopsicológico.", pegadinha: "Reduzir imputabilidade à idade (18 anos)." },
                { id: 9, enunciado: "O erro de tipo essencial exclui o dolo e a culpa.", resposta: "E", comentario: "ERRADO. Exclui o dolo, mas pode subsistir a culpa (art. 20, §1º, CP).", pegadinha: "Achar que exclui sempre o crime." },
                { id: 10, enunciado: "A legítima defesa putativa é uma excludente de ilicitude.", resposta: "E", comentario: "ERRADO. É excludente de culpabilidade (erro de proibição).", pegadinha: "Confundir com legítima defesa real." },
                { id: 11, enunciado: "O resultado é elemento do fato típico apenas nos crimes materiais.", resposta: "C", comentario: "CERTO. Nos crimes formais e de mera conduta, o resultado não é exigido.", pegadinha: "Achar que todo crime exige resultado." },
                { id: 12, enunciado: "A tentativa é punível em todos os crimes, sem exceção.", resposta: "E", comentario: "ERRADO. Crimes culposos e contravenções não admitem tentativa.", pegadinha: "Generalizar a punibilidade da tentativa." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 5. DIREITO PROCESSUAL PENAL — 12 QUESTÕES
    // ============================================================
    "direito-processual-penal": {
      nome: "Direito Processual Penal",
      modulos: {
        "modulo-1": {
          nome: "Inquérito Policial",
          aulas: {
            "aula-1": {
              nome: "Inquérito Policial (Arts. 4º a 23 do CPP)",
              resumo: "Procedimento administrativo, inquisitivo, escrito, dispensável, sigiloso (OIEDSS). Presidido pelo Delegado de Polícia. Prazo: preso 30 dias (prorrogável por +30), solto 10 dias (prorrogável p
