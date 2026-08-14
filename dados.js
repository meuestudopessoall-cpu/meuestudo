// dados.js — EXPANSÃO MÁXIMA (180 questões)
// 12 matérias × 15 questões cada

const DADOS = {
  materias: {

    // ============================================================
    // 1. LÍNGUA PORTUGUESA — 15 QUESTÕES
    // ============================================================
    "lingua-portuguesa": {
      nome: "Língua Portuguesa",
      modulos: {
        "modulo-1": {
          nome: "Interpretação de Textos",
          aulas: {
            "aula-1": {
              nome: "Compreensão, Interpretação e Tipologias",
              resumo: "COMPREENSÃO: extração de informações explícitas. INTERPRETAÇÃO: inferência, captação de implícitos, pressupostos e subentendidos. TIPOLOGIAS TEXTUAIS: narrativo (fatos, cronologia), descritivo (características), dissertativo (tese, argumentos), injuntivo (instruções). MARCARDORES: 'portanto' (conclusão), 'contudo' (oposição), 'assim' (consequência). COESÃO: conexão entre partes (pronomes, conjunções). COERÊNCIA: lógica global do texto. ATENÇÃO: pressuposto é necessário para o sentido; subentendido é deduzível.",
              questoes: [
                { id: 1, enunciado: "A compreensão textual limita-se à identificação das informações explicitamente apresentadas pelo autor.", resposta: "C", comentario: "CERTO. Compreensão é extração do literal.", pegadinha: "Confundir com interpretação, que exige inferência." },
                { id: 2, enunciado: "A interpretação textual consiste em reproduzir mecanicamente as palavras do autor, sem qualquer acréscimo de sentido.", resposta: "E", comentario: "ERRADO. Interpretação exige inferência, ou seja, acréscimo de sentido.", pegadinha: "Reduzir interpretação a mera transcrição." },
                { id: 3, enunciado: "Textos dissertativos caracterizam-se por apresentar uma sequência de fatos em ordem cronológica.", resposta: "E", comentario: "ERRADO. Sequência cronológica é típica de narrativos. Dissertativo expõe ideias.", pegadinha: "Confundir tipologias textuais." },
                { id: 4, enunciado: "Palavras como 'portanto' e 'contudo' são marcadores textuais que indicam, respectivamente, conclusão e oposição.", resposta: "C", comentario: "CERTO. 'Portanto' conclui; 'contudo' traz oposição.", pegadinha: "Inverter as funções." },
                { id: 5, enunciado: "A inferência é um processo de interpretação que permite ao leitor deduzir informações implícitas no texto.", resposta: "C", comentario: "CERTO. Inferir é deduzir a partir de pistas do texto.", pegadinha: "Achar que inferência é invenção." },
                { id: 6, enunciado: "Textos injuntivos têm como principal finalidade defender um ponto de vista e convencer o leitor.", resposta: "E", comentario: "ERRADO. Finalidade do injuntivo é orientar, instruir. Dissertativo convence.", pegadinha: "Confundir injuntivo com dissertativo." },
                { id: 7, enunciado: "A frase 'O texto sugere que' indica que o leitor está fazendo uma interpretação, e não uma mera compreensão.", resposta: "C", comentario: "CERTO. 'Sugere' remete ao implícito, à interpretação.", pegadinha: "Palavras como 'sugere' e 'infere' pedem interpretação." },
                { id: 8, enunciado: "A coesão textual diz respeito aos mecanismos linguísticos que garantem a conexão entre as partes do texto, como pronomes e conjunções.", resposta: "C", comentario: "CERTO. Coesão são os fios que ligam o texto.", pegadinha: "Confundir coesão (conexão) com coerência (sentido lógico)." },
                { id: 9, enunciado: "A coerência textual está relacionada à possibilidade de o texto ser interpretado como um todo lógico e articulado, mesmo que haja erros gramaticais.", resposta: "C", comentario: "CERTO. Coerência é o sentido lógico. Erros gramaticais (coesão) não a destroem.", pegadinha: "Achar que qualquer erro gramatical quebra a coerência." },
                { id: 10, enunciado: "O pressuposto textual é uma informação que não está explícita, mas é necessária para que o texto faça sentido.", resposta: "C", comentario: "CERTO. Pressupostos são verdades implícitas que sustentam o texto.", pegadinha: "Confundir pressuposto com subentendido (que é inferível)." },
                { id: 11, enunciado: "A palavra 'embora' estabelece uma relação de conclusão entre as orações.", resposta: "E", comentario: "ERRADO. 'Embora' estabelece relação de concessão/oposição, não conclusão.", pegadinha: "Confundir conjunções concessivas com conclusivas." },
                { id: 12, enunciado: "Em textos narrativos, a estrutura básica é: apresentação, complicação, clímax e desfecho.", resposta: "C", comentario: "CERTO. Estrutura clássica da narração.", pegadinha: "Confundir com estrutura dissertativa (tese, argumentos, conclusão)." },
                { id: 13, enunciado: "A descrição objetiva tem como principal característica a subjetividade e a expressão de sentimentos do autor.", resposta: "E", comentario: "ERRADO. Descrição objetiva é impessoal, sem sentimentos. Subjetiva expressa emoções.", pegadinha: "Confundir descrição objetiva e subjetiva." },
                { id: 14, enunciado: "A tese é a opinião do autor sobre o tema, geralmente apresentada no início do texto dissertativo.", resposta: "C", comentario: "CERTO. Tese é a ideia central defendida.", pegadinha: "Confundir tese com argumento." },
                { id: 15, enunciado: "A leitura dinâmica é aquela em que o leitor faz pausas constantes para consultar o dicionário.", resposta: "E", comentario: "ERRADO. Leitura dinâmica é fluida e rápida, sem interrupções.", pegadinha: "Conceito invertido." }
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Redação Oficial",
          aulas: {
            "aula-1": {
              nome: "Características e Padrões",
              resumo: "REDAÇÃO OFICIAL: impessoal, clara, objetiva, concisa, formal e uniforme. Impessoalidade: uso de terceira pessoa, evitar pronomes de primeira pessoa. Clareza: frases curtas, vocabulário acessível. Formalidade: linguagem adequada ao ambiente administrativo. ATENÇÃO: a redação oficial não admite regionalismos, gírias ou marcas de oralidade.",
              questoes: [
                { id: 1, enunciado: "A redação oficial deve ser impessoal, utilizando-se a terceira pessoa do singular.", resposta: "C", comentario: "CERTO. Impessoalidade é uma das características.", pegadinha: "Usar primeira pessoa." },
                { id: 2, enunciado: "A redação oficial admite o uso de gírias e regionalismos para tornar o texto mais acessível.", resposta: "E", comentario: "ERRADO. Não admite, pois deve ser formal e uniforme.", pegadinha: "Confundir com textos jornalísticos." },
                { id: 3, enunciado: "A clareza é uma característica da redação oficial, exigindo frases curtas e vocabulário acessível.", resposta: "C", comentario: "CERTO. Clareza é fundamental.", pegadinha: "Achar que clareza admite ambiguidade." },
                { id: 4, enunciado: "A redação oficial deve ser concisa, ou seja, direta ao ponto, sem rodeios.", resposta: "C", comentario: "CERTO. Concisão é virtude.", pegadinha: "Confundir concisão com omissão de informações." },
                { id: 5, enunciado: "O padrão formal da redação oficial admite o uso de expressões coloquiais e marcas de oralidade.", resposta: "E", comentario: "ERRADO. Deve ser formal, sem coloquialismos.", pegadinha: "Achar que formalidade admite oralidade." },
                { id: 6, enunciado: "A impessoalidade na redação oficial exige o uso de pronomes como 'eu' e 'nós' para personalizar o texto.", resposta: "E", comentario: "ERRADO. Impessoalidade exige terceira pessoa.", pegadinha: "Usar primeira pessoa." },
                { id: 7, enunciado: "A uniformidade na redação oficial significa que todos os documentos devem seguir o mesmo padrão linguístico.", resposta: "C", comentario: "CERTO. Uniformidade garante padronização.", pegadinha: "Achar que uniformidade é monotonia." },
                { id: 8, enunciado: "A redação oficial admite o uso de neologismos e estrangeirismos sem restrição.", resposta: "E", comentario: "ERRADO. Deve-se evitar neologismos e estrangeirismos.", pegadinha: "Achar que é permitido." },
                { id: 9, enunciado: "O objetivo da redação oficial é informar com precisão, clareza e objetividade.", resposta: "C", comentario: "CERTO. É a finalidade principal.", pegadinha: "Achar que é convencer ou emocionar." },
                { id: 10, enunciado: "A redação oficial deve ser dirigida a um público específico, utilizando linguagem técnica e jargões.", resposta: "E", comentario: "ERRADO. Deve ser acessível a todos, evitando jargões.", pegadinha: "Confundir com textos técnicos." },
                { id: 11, enunciado: "A coesão na redação oficial é dispensável, pois a objetividade prevalece.", resposta: "E", comentario: "ERRADO. Coesão é essencial para a clareza.", pegadinha: "Menosprezar a coesão." },
                { id: 12, enunciado: "A redação oficial deve ser revisada para evitar erros gramaticais e de digitação.", resposta: "C", comentario: "CERTO. Revisão é fundamental.", pegadinha: "Achar que não precisa revisar." },
                { id: 13, enunciado: "O uso de linguagem rebuscada e culta é recomendado na redação oficial.", resposta: "E", comentario: "ERRADO. Deve-se evitar rebuscamento; prefere-se simplicidade.", pegadinha: "Confundir formalidade com rebuscamento." },
                { id: 14, enunciado: "A redação oficial admite a repetição desnecessária de palavras para dar ênfase.", resposta: "E", comentario: "ERRADO. Repetição desnecessária fere a concisão.", pegadinha: "Achar que repetição é ênfase." },
                { id: 15, enunciado: "A redação oficial deve ser clara, objetiva e impessoal, garantindo a eficácia da comunicação administrativa.", resposta: "C", comentario: "CERTO. É a essência da redação oficial.", pegadinha: "Esquecer algum requisito." }
              ]
            }
          }
        }
      }
    },

    // ============================================================
    // 2. DIREITO CONSTITUCIONAL — 30 QUESTÕES (4 módulos)
    // ============================================================
    "direito-constitucional": {
      nome: "Direito Constitucional",
      modulos: {
        "modulo-1": {
          nome: "Teoria da Constituição",
          aulas: {
            "aula-1": {
              nome: "Conceito, Sentidos e Classificações",
              resumo: "SENTIDOS: Lassalle (fatores reais), Schmitt (decisão política), Kelsen (norma pura). CF/88: promulgada, rígida, escrita, dogmática, analítica. Macete: PEDRO É FERA. ATENÇÃO: NÃO é semi-rígida.",
              questoes: [
                { id: 1, enunciado: "Lassalle: CF sem correspondência real é 'folha de papel'.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com Kelsen." },
                { id: 2, enunciado: "CF/88 é outorgada.", resposta: "E", comentario: "ERRADO. É promulgada.", pegadinha: "Origem." },
                { id: 3, enunciado: "CF/88 é semi-rígida.", resposta: "E", comentario: "ERRADO. Totalmente rígida.", pegadinha: "Semi-rígida." },
                { id: 4, enunciado: "Kelsen: CF é fundamento de validade.", resposta: "C", comentario: "CERTO.", pegadinha: "Sentido sociológico." },
                { id: 5, enunciado: "Schmitt: CF é decisão política fundamental.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com Lassalle." },
                { id: 6, enunciado: "CF/88 é analítica.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é sintética." },
                { id: 7, enunciado: "CF/88 é dogmática.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é histórica." },
                { id: 8, enunciado: "CF/88 é escrita.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é não escrita." },
                { id: 9, enunciado: "CF/88 é formal e material.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é apenas formal." },
                { id: 10, enunciado: "Sentido sociológico: fatores reais de poder.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com decisão política." },
                { id: 11, enunciado: "Sentido político: decisão política fundamental.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com fatores reais." },
                { id: 12, enunciado: "Sentido jurídico: norma pura.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com sociológico." },
                { id: 13, enunciado: "A CF/88 é flexível.", resposta: "E", comentario: "ERRADO. É rígida.", pegadinha: "Confundir flexível com rígida." },
                { id: 14, enunciado: "A CF/88 foi outorgada por D. Pedro I.", resposta: "E", comentario: "ERRADO. A de 1824 foi outorgada; a de 1988 é promulgada.", pegadinha: "Confundir constituições." },
                { id: 15, enunciado: "A CF/88 é a primeira Constituição promulgada do Brasil.", resposta: "E", comentario: "ERRADO. A de 1891 foi a primeira promulgada.", pegadinha: "Confundir com a de 1988." }
              ]
            }
          }
        },
        "modulo-2": {
          nome: "Poder Constituinte",
          aulas: {
            "aula-1": {
              nome: "Poder Constituinte Originário e Derivado",
              resumo: "ORIGINÁRIO: INILA. DERIVADO: reformador (EC), decorrente (Estados), difuso (municípios). Cláusulas pétreas: forma federativa, voto, separação, direitos individuais. Povo não pode propor PEC.",
              questoes: [
                { id: 1, enunciado: "PCO é incondicionado.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é limitado." },
                { id: 2, enunciado: "Povo pode propor PEC.", resposta: "E", comentario: "ERRADO. Não pode.", pegadinha: "Iniciativa popular." },
                { id: 3, enunciado: "Cláusulas pétreas são inabolíveis.", resposta: "C", comentario: "CERTO.", pegadinha: "Dizer que são imutáveis." },
                { id: 4, enunciado: "DF exerce poder decorrente.", resposta: "E", comentario: "ERRADO. Tem Lei Orgânica.", pegadinha: "Achar que DF tem Constituição." },
                { id: 5, enunciado: "EC exige 3/5 em dois turnos.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir quórum." },
                { id: 6, enunciado: "Poder reformador é derivado.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é originário." },
                { id: 7, enunciado: "Poder decorrente é dos Estados.", resposta: "C", comentario: "CERTO.", pegadinha: "Atribuir aos municípios." },
                { id: 8, enunciado: "Poder difuso é dos municípios.", resposta: "C", comentario: "CERTO.", pegadinha: "Atribuir aos Estados." },
                { id: 9, enunciado: "Poder revisor já foi exercido.", resposta: "C", comentario: "CERTO. Em 1994.", pegadinha: "Achar que ainda vigora." },
                { id: 10, enunciado: "Limites circunstanciais: intervenção, estado de defesa, sítio.", resposta: "C", comentario: "CERTO.", pegadinha: "Esquecer algum." },
                { id: 11, enunciado: "Limites formais: procedimento do art. 60.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é apenas material." },
                { id: 12, enunciado: "Cláusulas pétreas: forma federativa, voto, separação, direitos individuais.", resposta: "C", comentario: "CERTO.", pegadinha: "Incluir direitos sociais." },
                { id: 13, enunciado: "Voto secreto é cláusula pétrea.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é apenas direto." },
                { id: 14, enunciado: "Direitos sociais são cláusulas pétreas expressas.", resposta: "E", comentario: "ERRADO. Apenas individuais.", pegadinha: "Confundir com direitos individuais." },
                { id: 15, enunciado: "O Presidente pode propor PEC.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que não pode." }
              ]
            }
          }
        },
        "modulo-3": {
          nome: "Princípios Fundamentais",
          aulas: {
            "aula-1": {
              nome: "Arts. 1º a 4º — Fundamentos, Objetivos e Relações Internacionais",
              resumo: "FUNDAMENTOS: soberania, cidadania, dignidade, valores sociais, pluralismo. OBJETIVOS: construir, garantir, erradicar, reduzir, promover. RELAÇÕES INTERNACIONAIS: não intervenção, paz, direitos humanos, etc.",
              questoes: [
                { id: 1, enunciado: "Dignidade humana é fundamento.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com objetivo." },
                { id: 2, enunciado: "Erradicar pobreza é fundamento.", resposta: "E", comentario: "ERRADO. É objetivo.", pegadinha: "Trocar." },
                { id: 3, enunciado: "Soberania é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Também é fundamento." },
                { id: 4, enunciado: "Não intervenção é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Confundir com art. 34." },
                { id: 5, enunciado: "Defesa da paz é objetivo interno.", resposta: "E", comentario: "ERRADO. É internacional.", pegadinha: "Misturar." },
                { id: 6, enunciado: "Pluralismo político é fundamento.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é objetivo." },
                { id: 7, enunciado: "Cidadania é fundamento.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é direito." },
                { id: 8, enunciado: "Construir sociedade livre é objetivo.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é fundamento." },
                { id: 9, enunciado: "Garantir desenvolvimento é objetivo.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é princípio internacional." },
                { id: 10, enunciado: "Reduzir desigualdades é objetivo.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é fundamento." },
                { id: 11, enunciado: "Promover bem de todos é objetivo.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é princípio internacional." },
                { id: 12, enunciado: "Autodeterminação dos povos é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é interno." },
                { id: 13, enunciado: "Repúdio ao terrorismo é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é interno." },
                { id: 14, enunciado: "Cooperação entre os povos é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é econômico." },
                { id: 15, enunciado: "Integração econômica é princípio internacional.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é objetivo." }
              ]
            }
          }
        },
        "modulo-4": {
          nome: "Direitos e Garantias Fundamentais (Art. 5º)",
          aulas: {
            "aula-1": {
              nome: "Direitos Individuais e Coletivos",
              resumo: "ART. 5º: direitos e garantias fundamentais. DIREITOS: vida, igualdade, liberdade, segurança, propriedade. GARANTIAS: habeas corpus, mandado de segurança, etc. PRINCÍPIOS: isonomia, legalidade, devido processo legal. ATENÇÃO: os direitos fundamentais são cláusulas pétreas (art. 60, §4º).",
              questoes: [
                { id: 1, enunciado: "O art. 5º da CF trata dos direitos e garantias fundamentais.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é o art. 1º." },
                { id: 2, enunciado: "O direito à vida é garantido no art. 5º.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é no art. 1º." },
                { id: 3, enunciado: "O princípio da igualdade está no caput do art. 5º.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é no art. 3º." },
                { id: 4, enunciado: "O habeas corpus é uma garantia constitucional.", resposta: "C", comentario: "CERTO.", pegadinha: "Achar que é um direito." },
                { id: 5, enunciado: "O mandado de
