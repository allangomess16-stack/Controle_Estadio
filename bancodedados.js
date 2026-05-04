// ==============================================================================
// ARQUIVO: bancodedados.js
// Banco de dados de elencos da Série A (Auto-preenchimento da Controladora)
// ==============================================================================

const bancoDeElencos = {
    "BOTAFOGO": [
        // 11 TITULARES (Baseado no campinho do jogo)
        { numero: "22", nome: "NETO" }, { numero: "2", nome: "VITINHO" }, { numero: "5", nome: "FERRARESI" },
        { numero: "20", nome: "ALEXANDER BARBOZA" }, { numero: "13", nome: "ALEX TELLES" }, { numero: "8", nome: "DANILO" },
        { numero: "88", nome: "EDENÍLSON" }, { numero: "25", nome: "ALLAN" }, { numero: "7", nome: "JÚNIOR SANTOS" },
        { numero: "11", nome: "MATHEUS MARTINS" }, { numero: "19", nome: "ARTHUR CABRAL" },
        // 15 RESERVAS
        { numero: "24", nome: "LÉO LINCK" }, { numero: "1", nome: "RAUL" }, { numero: "15", nome: "BASTOS" },
        { numero: "4", nome: "MATEO PONTE" }, { numero: "27", nome: "CAIO ROQUE" }, { numero: "77", nome: "VILLALBA" },
        { numero: "28", nome: "NEWTON" }, { numero: "10", nome: "MONTORO" }, { numero: "23", nome: "SANTI RODRÍGUEZ" },
        { numero: "14", nome: "BARRERA" }, { numero: "30", nome: "JOAQUIN CORREA" }, { numero: "37", nome: "KADIR" },
        { numero: "9", nome: "CHRIS RAMOS" }, { numero: "16", nome: "NATHAN FERNANDES" }, { numero: "75", nome: "HUGUINHO" }
    ],
    "CHAPECOENSE": [
        // 11 TITULARES (Baseado no campinho do jogo)
        { numero: "1", nome: "RAFAEL SANTOS" }, { numero: "2", nome: "MARCOS VINÍCIUS" }, { numero: "3", nome: "EDUARDO DOMA" },
        { numero: "33", nome: "BRUNO LEONARDO" }, { numero: "91", nome: "BRUNO PACHECO" }, { numero: "22", nome: "HIGOR MERITÃO" },
        { numero: "5", nome: "JOÃO VITOR" }, { numero: "20", nome: "JEAN CARLOS" }, { numero: "7", nome: "MARCINHO" },
        { numero: "11", nome: "BOLASIE" }, { numero: "19", nome: "DAVID" },
        // 15 RESERVAS
        { numero: "98", nome: "ANDERSON" }, { numero: "25", nome: "VICTOR CAETANO" }, { numero: "4", nome: "JOÃO PAULO" },
        { numero: "37", nome: "WALTER CLAR" }, { numero: "17", nome: "VINÍCIUS BALIEIRO" }, { numero: "27", nome: "CAMILO" },
        { numero: "99", nome: "RAFAEL CARVALHEIRA" }, { numero: "77", nome: "ÍTALO" }, { numero: "31", nome: "GARCEZ" },
        { numero: "97", nome: "ÊNIO" }, { numero: "18", nome: "NETO PESSOA" }, { numero: "70", nome: "RUBENS" },
        { numero: "12", nome: "TIEPO" }, { numero: "8", nome: "TÁRIK" }, { numero: "9", nome: "MÁRIO SÉRGIO" }
    ],
    "INTERNACIONAL": [
        // 11 TITULARES (Exatamente como no campinho)
        { numero: "12", nome: "ANTHONI" }, { numero: "15", nome: "B. GOMES" }, { numero: "4", nome: "F. TORRES" },
        { numero: "35", nome: "B. AGUIRRE" }, { numero: "5", nome: "R. VILLAGRA" }, { numero: "41", nome: "V. GABRIEL" },
        { numero: "27", nome: "PAULINHO" }, { numero: "31", nome: "ALLEX" }, { numero: "10", nome: "A. PATRICK ©" },
        { numero: "28", nome: "VITINHO" }, { numero: "19", nome: "R. BORRÉ" },
        
        // RESERVAS (Exatamente a lista de substituições da imagem)
        { numero: "7", nome: "JOHAN CARBONERO" }, { numero: "17", nome: "BRUNO TABATA" }, { numero: "9", nome: "ALERRANDRO" },
        { numero: "29", nome: "THIAGO MAIA" }, { numero: "11", nome: "KAYKY" }, { numero: "22", nome: "KAUAN" },
        { numero: "20", nome: "CLAYTON SAMPAIO" }, { numero: "18", nome: "JUNINHO" }, { numero: "30", nome: "ALISSON" },
        { numero: "44", nome: "JOÃO VICTOR" }, { numero: "33", nome: "BENJAMIN ARHIN" }, { numero: "8", nome: "BRUNO HENRIQUE" }
    ],
    
    "MIRASSOL": [
        // 11 TITULARES (Exatamente como no campinho)
        { numero: "22", nome: "WALTER" }, { numero: "2", nome: "L. OLIVEIRA" }, { numero: "3", nome: "W. MACHADO" },
        { numero: "32", nome: "IGOR FORMIGA" }, { numero: "34", nome: "J. VICTOR ©" }, { numero: "7", nome: "SHAYLON" },
        { numero: "8", nome: "DENILSON" }, { numero: "21", nome: "J. ALDO" }, { numero: "6", nome: "REINALDO" },
        { numero: "77", nome: "ALESSON" }, { numero: "99", nome: "A. LUIS" },
        
        // RESERVAS (Exatamente a lista de substituições da imagem)
        { numero: "25", nome: "NETO MOURA" }, { numero: "96", nome: "CARLOS EDUARDO" }, { numero: "95", nome: "EDSON CARIOCA" },
        { numero: "12", nome: "VICTOR LUIS" }, { numero: "9", nome: "NATHAN FOGAÇA" }, { numero: "23", nome: "ALEX MURALHA" },
        { numero: "20", nome: "DANIEL BORGES" }, { numero: "97", nome: "RODRIGUES" }, { numero: "27", nome: "ANTONIO GALEANO" },
        { numero: "10", nome: "CHICO" }, { numero: "29", nome: "TIQUINHO SOARES" }, { numero: "17", nome: "EVERTON GALDINO" }
    ],

    
    "GREMIO": [
        { numero: "1", nome: "WEVERTON" }, { numero: "7", nome: "PAVÓN" }, { numero: "6", nome: "GUSTAVO MARTINS" },
        { numero: "44", nome: "VIERY" }, { numero: "54", nome: "PEDRO GABRIEL" }, { numero: "38", nome: "CAIO PAULISTA" },
        { numero: "19", nome: "NORIEGA" }, { numero: "5", nome: "NARDONI" }, { numero: "8", nome: "ARTHUR MELO" },
        { numero: "9", nome: "AMUZU" }, { numero: "37", nome: "GABRIEL MEC" },
        { numero: "95", nome: "CARLOS VINÍCIUS" }, { numero: "22", nome: "BRAITHWAITE" }, { numero: "21", nome: "TETÊ" },
        { numero: "99", nome: "ENAMORADO" }, { numero: "12", nome: "GABRIEL GRANDO" }, { numero: "14", nome: "MARCOS ROCHA" },
        { numero: "2", nome: "BALBUENA" }, { numero: "4", nome: "KANNEMANN" }, { numero: "17", nome: "DODI" },
        { numero: "33", nome: "LEONEL PÉREZ" }, { numero: "11", nome: "MONSALVE" }, { numero: "47", nome: "ROGER" }
    ],
    "ATHLETICO PR": [
        { numero: "23", nome: "SANTOS" }, { numero: "2", nome: "GILBERTO" }, { numero: "33", nome: "AGUIRRE" },
        { numero: "4", nome: "ARTHUR DIAS" }, { numero: "37", nome: "ESQUIVEL" }, { numero: "27", nome: "PORTILLA" },
        { numero: "10", nome: "ZAPELLI" }, { numero: "14", nome: "LUIZ GUSTAVO" }, { numero: "53", nome: "DUDU" },
        { numero: "8", nome: "JOÃO CRUZ" }, { numero: "20", nome: "JULIMAR" },
        { numero: "48", nome: "BRUNINHO" }, { numero: "7", nome: "MENDOZA" }, { numero: "5", nome: "FELIPINHO" },
        { numero: "9", nome: "VIVEROS" }, { numero: "70", nome: "RENAN PEIXOTO" }, { numero: "1", nome: "MYCAEL" },
        { numero: "3", nome: "LÉO" }, { numero: "6", nome: "LÉO DERIK" }, { numero: "26", nome: "CLAUDINHO" },
        { numero: "16", nome: "JADSON" }, { numero: "11", nome: "ISAAC" }, { numero: "21", nome: "LEOZINHO" }
    ],
    
    "SANTOS": [
        { numero: "77", nome: "GABRIEL BRAZÃO" }, { numero: "18", nome: "IGOR VINÍCIUS" }, { numero: "4", nome: "LUCAS VERÍSSIMO" },
        { numero: "14", nome: "LUAN PERES" }, { numero: "31", nome: "ESCOBAR" }, { numero: "15", nome: "WILLIAN ARÃO" },
        { numero: "48", nome: "GUSTAVO HENRIQUE" }, { numero: "28", nome: "OLIVA" }, { numero: "49", nome: "GABRIEL BONTEMPO" },
        { numero: "16", nome: "THACIANO" }, { numero: "10", nome: "NEYMAR" },
        { numero: "11", nome: "RONY" }, { numero: "21", nome: "MOISÉS" }, { numero: "9", nome: "GABRIEL" },
        { numero: "19", nome: "LAUTARO DÍAZ" }, { numero: "1", nome: "DIÓGENES" }, { numero: "98", nome: "ADONIS FRÍAS" },
        { numero: "38", nome: "RAFAEL GONZAGA" }, { numero: "5", nome: "JOÃO SCHMIDT" }, { numero: "6", nome: "ZÉ RAFAEL" },
        { numero: "30", nome: "MIGUELITO" }, { numero: "32", nome: "ROLLHEISER" }, { numero: "7", nome: "ROBINHO JR." }
    ],
    "ATLETICO MG": [
        { numero: "22", nome: "EVERSON" }, { numero: "2", nome: "NATANAEL" }, { numero: "11", nome: "BERNARD" },
        { numero: "4", nome: "RUAN" }, { numero: "13", nome: "LYANCO" }, { numero: "16", nome: "RENAN LODI" },
        { numero: "25", nome: "TOMÁS PÉREZ" }, { numero: "5", nome: "ALEXSANDER" }, { numero: "21", nome: "ALAN FRANCO" },
        { numero: "30", nome: "VICTOR HUGO" }, { numero: "9", nome: "CASSIERRA" },
        { numero: "7", nome: "HULK" }, { numero: "92", nome: "DUDU" }, { numero: "19", nome: "REINIER" },
        { numero: "29", nome: "CAUÃ SOARES" }, { numero: "28", nome: "CUELLO" }, { numero: "1", nome: "GABRIEL DELFIM" },
        { numero: "6", nome: "JUNIOR ALONSO" }, { numero: "14", nome: "VITOR HUGO" }, { numero: "8", nome: "MAYCON" },
        { numero: "10", nome: "GUSTAVO SCARPA" }, { numero: "17", nome: "IGOR GOMES" }, { numero: "39", nome: "CISSÉ" }
    ],
    
    "BAHIA": [
        { numero: "22", nome: "LÉO VIEIRA" }, { numero: "5", nome: "ACEVEDO" }, { numero: "33", nome: "DAVID DUARTE" },
        { numero: "21", nome: "SANTIAGO MINGO" }, { numero: "46", nome: "LUCIANO JUBA" }, { numero: "8", nome: "CAIO ALEXANDRE" },
        { numero: "2", nome: "GILBERTO" }, { numero: "6", nome: "JEAN LUCAS" }, { numero: "10", nome: "EVERTON RIBEIRO" },
        { numero: "11", nome: "RODRIGO NESTOR" }, { numero: "99", nome: "CRISTIAN OLIVERA" },
        { numero: "16", nome: "ERICK PULGA" }, { numero: "7", nome: "ADEMIR" }, { numero: "23", nome: "SANABRIA" },
        { numero: "27", nome: "EVERALDO" }, { numero: "12", nome: "WILLIAN JOSÉ" }, { numero: "34", nome: "JOÃO PAULO" },
        { numero: "31", nome: "ROMÁN GÓMEZ" }, { numero: "3", nome: "GABRIEL XAVIER" }, { numero: "44", nome: "MARCOS VICTOR" },
        { numero: "25", nome: "IAGO" }, { numero: "14", nome: "ERICK" }, { numero: "15", nome: "MICHEL ARAÚJO" }
    ],
    "CRUZEIRO": [
        { numero: "31", nome: "MATHEUS CUNHA" }, { numero: "23", nome: "FAGNER" }, { numero: "2", nome: "KAUÃ MORAES" },
        { numero: "15", nome: "FABRÍCIO BRUNO" }, { numero: "34", nome: "JONATHAN JESUS" }, { numero: "25", nome: "VILLALBA" },
        { numero: "6", nome: "KAIKI BRUNO" }, { numero: "16", nome: "LUCAS SILVA" }, { numero: "8", nome: "MATHEUS HENRIQUE" },
        { numero: "11", nome: "GERSON" }, { numero: "88", nome: "CHRISTIAN" },
        { numero: "10", nome: "MATHEUS PEREIRA" }, { numero: "99", nome: "ARROYO" }, { numero: "94", nome: "WANDERSON" },
        { numero: "22", nome: "VILLARREAL" }, { numero: "9", nome: "BRUNO RODRIGUES" }, { numero: "81", nome: "OTÁVIO" },
        { numero: "12", nome: "WILLIAM" }, { numero: "43", nome: "JOÃO MARCELO" }, { numero: "36", nome: "KAUÃ PRATES" },
        { numero: "77", nome: "JAPA" }, { numero: "70", nome: "KAIQUE KENJI" }, { numero: "91", nome: "CHICO DA COSTA" }
    ],
    "BRAGANTINO": [
        { numero: "18", nome: "TIAGO VOLPI" }, { numero: "34", nome: "ANDRÉS HURTADO" }, { numero: "20", nome: "RODRIGUINHO" },
        { numero: "4", nome: "ALIX VINICIUS" }, { numero: "16", nome: "GUSTAVO MARQUES" }, { numero: "29", nome: "JUNINHO CAPIXABA" },
        { numero: "6", nome: "GABRIEL" }, { numero: "7", nome: "ERIC RAMIRES" }, { numero: "35", nome: "MATHEUS FERNANDES" },
        { numero: "22", nome: "GUSTAVINHO" }, { numero: "15", nome: "IGNACIO SOSA" },
        { numero: "52", nome: "RYAN AUGUSTO" }, { numero: "21", nome: "LUCAS BARBOSA" }, { numero: "9", nome: "ISIDRO PITTA" },
        { numero: "17", nome: "VINICINHO" }, { numero: "67", nome: "JHUAN NUNES" }, { numero: "1", nome: "CLEITON" },
        { numero: "56", nome: "GUSTAVO REIS" }, { numero: "14", nome: "PEDRO HENRIQUE" }, { numero: "51", nome: "CAUÊ" },
        { numero: "5", nome: "FABINHO" }, { numero: "28", nome: "YURI LELES" }, { numero: "57", nome: "MARCELINHO" }
    ],
    "FLUMINENSE": [
        { numero: "1", nome: "FÁBIO" }, { numero: "2", nome: "SAMUEL XAVIER" }, { numero: "23", nome: "GUGA" },
        { numero: "3", nome: "JEMMES" }, { numero: "22", nome: "FREYTES" }, { numero: "6", nome: "RENÊ" },
        { numero: "13", nome: "GUILHERME ARANA" }, { numero: "8", nome: "MARTINELLI" }, { numero: "11", nome: "SAVARINO" },
        { numero: "35", nome: "HÉRCULES" }, { numero: "32", nome: "LUCHO ACOSTA" },
        { numero: "10", nome: "GANSO" }, { numero: "17", nome: "CANOBBIO" }, { numero: "9", nome: "JOHN KENNEDY" },
        { numero: "19", nome: "RODRIGO CASTILLO" }, { numero: "90", nome: "SERNA" }, { numero: "98", nome: "VITOR EUDES" },
        { numero: "4", nome: "IGNÁCIO" }, { numero: "29", nome: "MILLÁN" }, { numero: "5", nome: "BERNAL" },
        { numero: "25", nome: "ALISSON" }, { numero: "94", nome: "OTÁVIO" }, { numero: "34", nome: "WESLEY NATÃ" }
    ],
    "FLAMENGO": [
        // TITULARES
        { numero: "1", nome: "ROSSI" }, 
        { numero: "2", nome: "VARELA" }, 
        { numero: "3", nome: "LÉO ORTIZ" },
        { numero: "4", nome: "LÉO PEREIRA" }, 
        { numero: "26", nome: "ALEX SANDRO" },
        { numero: "52", nome: "EVERTTON ARAÚJO" }, 
        { numero: "21", nome: "JORGINHO" }, 
        { numero: "10", nome: "ARRASCAETA" },
        { numero: "16", nome: "SAMUEL LINO" }, 
        { numero: "19", nome: "PLATA" },
        { numero: "9", nome: "PEDRO" }, 
        // RESERVAS
        { numero: "5", nome: "PULGAR" },
        { numero: "20", nome: "LUCAS PAQUETÁ" }, 
        { numero: "18", nome: "DE LA CRUZ" }, 
        { numero: "15", nome: "CARRASCAL" }, 
        { numero: "7", nome: "LUIZ ARAÚJO" },
        { numero: "13", nome: "DANILO" },
        { numero: "27", nome: "BRUNO HENRIQUE" }, 
        { numero: "42", nome: "ANDREW" },
        { numero: "49", nome: "DYOGO ALVES" }, 
        { numero: "22", nome: "EMERSON ROYAL" }, 
        { numero: "44", nome: "VITÃO" },
        { numero: "6", nome: "AYRTON LUCAS" }, 
        { numero: "75", nome: "LUIZ FELIPE" }, 
        { numero: "64", nome: "WALLACE YAN" },
        { numero: "8", nome: "SAÚL" }, 
        { numero: "11", nome: "EVERTON CEBOLINHA" }
],
    "VITORIA": [
        { numero: "1", nome: "LUCAS ARCANJO" }, { numero: "45", nome: "NATHAN MENDES" }, { numero: "25", nome: "CACÁ" },
        { numero: "36", nome: "LUAN CÂNDIDO" }, { numero: "13", nome: "RAMON" }, { numero: "95", nome: "CAÍQUE" },
        { numero: "88", nome: "ZÉ VITOR" }, { numero: "44", nome: "BARALHAS" }, { numero: "8", nome: "RONALD LOPES" },
        { numero: "6", nome: "EMMANUEL MARTÍNEZ" }, { numero: "10", nome: "MATHEUZINHO" },
        { numero: "91", nome: "RENÊ" }, { numero: "33", nome: "ERICK" }, { numero: "79", nome: "RENATO KAYZER" },
        { numero: "12", nome: "TARZIA" }, { numero: "22", nome: "GABRIEL" }, { numero: "5", nome: "RICCIELI" },
        { numero: "18", nome: "KAUAN COUTINHO" }, { numero: "17", nome: "CANTALAPIEDRA" }, { numero: "11", nome: "OSVALDO" },
        { numero: "20", nome: "LUCAS SILVA" }, { numero: "28", nome: "ANDERSON PATO" }, { numero: "31", nome: "RENZO LÓPEZ" }
    ],
    "SAO PAULO": [
        { numero: "23", nome: "RAFAEL" }, { numero: "19", nome: "LUCAS RAMON" }, { numero: "28", nome: "ALAN FRANCO" },
        { numero: "2", nome: "RAFAEL TOLÓI" }, { numero: "13", nome: "ENZO DÍAZ" }, { numero: "18", nome: "WENDELL" },
        { numero: "94", nome: "DANIELZINHO" }, { numero: "45", nome: "LUCCA" }, { numero: "8", nome: "MARCOS ANTÔNIO" },
        { numero: "80", nome: "CAULY" }, { numero: "21", nome: "CÉDRIC SOARES" },
        { numero: "37", nome: "ARTUR" }, { numero: "17", nome: "ANDRÉ SILVA" }, { numero: "14", nome: "TAPIA" },
        { numero: "11", nome: "FERREIRA" }, { numero: "34", nome: "TETÊ" }, { numero: "31", nome: "CORONEL" },
        { numero: "56", nome: "NICOLAS" }, { numero: "54", nome: "OSORIO" }, { numero: "4", nome: "DÓRIA" },
        { numero: "30", nome: "FELIPE NEGRUCCI" }, { numero: "33", nome: "LUAN" }, { numero: "46", nome: "PEDRO FERREIRA" }
    ],
       "PALMEIRAS": [
        // --- TITULARES (Os 11 primeiros) ---
        { numero: 1, nome: "Carlos Miguel" },
        { numero: 4, nome: "Agustín Giay" },
        { numero: 15, nome: "Gustavo Gómez" },
        { numero: 3, nome: "Bruno Fuchs" }, 
        { numero: 56, nome: "Arthur Gabriel" },
        { numero: 17, nome: "Marlon Freitas" },
        { numero: 40, nome: "Allan" },
        { numero: 8, nome: "Andreas Pereira" },
        { numero: 11, nome: "Jhon Arias" },
        { numero: 42, nome: "José López" },
        { numero: 19, nome: "Ramón Sosa" },

        // --- RESERVAS ---
        { numero: 9, nome: "Vitor Roque" },
        { numero: 10, nome: "Paulinho" },
        { numero: 31, nome: "Luighi Hanri" },
        { numero: 45, nome: "Erick Belé" },
        { numero: 18, nome: "Mauricio" },
        { numero: 7, nome: "Felipe Anderson" },
        { numero: 32, nome: "Emiliano Martínez" },
        { numero: 30, nome: "Lucas Evangelista" },
        { numero: 38, nome: "Vitor Figueiredo" },
        { numero: 50, nome: "Luis Pacheco" },
        { numero: 48, nome: "Larson" },
        { numero: 22, nome: "Joaquín Piquerez" },
        { numero: 26, nome: "Murilo" },
        { numero: 43, nome: "Luis Benedetti" },
        { numero: 12, nome: "Khellven" },
        { numero: 6, nome: "Jefté" },
        { numero: 14, nome: "Marcelo Lomba" },
        { numero: 24, nome: "Aranha" },
        { numero: 51, nome: "Luiz Sá" },
    ],
    "REMO": [
        // --- TITULARES ---
        { numero: 88, nome: "Marcelo Rangel" },
        { numero: 79, nome: "Marcelinho" },
        { numero: 13, nome: "Marllon" },
        { numero: 18, nome: "Duplexe Tchamba" },
        { numero: 98, nome: "Mayk" },
        { numero: 8, nome: "Patrick" },
        { numero: 28, nome: "Zé Welison" },
        { numero: 22, nome: "Yago Pikachu" },
        { numero: 55, nome: "Zé Ricardo" },
        { numero: 37, nome: "Jajá" },
        { numero: 99, nome: "Gabriel Poveda" },

        // --- RESERVAS ---
        { numero: 9, nome: "Carlinhos" },
        { numero: 11, nome: "Alef Manga" },
        { numero: 19, nome: "Gabriel Taliari" },
        { numero: 71, nome: "Rafael Monti" },
        { numero: 45, nome: "João Pedro Silva" },
        { numero: 39, nome: "Eduardo Melo" },
        { numero: 12, nome: "Patrick de Paula" },
        { numero: 33, nome: "Diego Hernández" },
        { numero: 15, nome: "Vitor Bueno" },
        { numero: 14, nome: "Leonel Picco" },
        { numero: 10, nome: "Jáderson" },
        { numero: 77, nome: "Panagiotis Tachtsidis" },
        { numero: 26, nome: "David Braga" },
        { numero: 7, nome: "Giovanni Pavani" },
        { numero: 23, nome: "Franco Catarozzi" },
        { numero: 35, nome: "Freitas" },
        { numero: 23, nome: "Guty" },
        { numero: 2, nome: "João Lucas" },
        { numero: 2, nome: "Matheus Alexandre" },
        { numero: 27, nome: "Kayky Almeida" },
        { numero: 24, nome: "Braian Cufré" },
        { numero: 3, nome: "Thalisson Gabriel" },
        { numero: 17, nome: "Cristian Gonzalez" },
        { numero: 5, nome: "Léo" },
        { numero: 97, nome: "Ivan" },
        { numero: 94, nome: "Ygor Vinhas" },
    ],

    "CORINTHIANS": [
        // --- TITULARES (Baseado no gráfico 4-2-3-1) ---
        { numero: 1, nome: "Hugo Souza" },
        { numero: 2, nome: "Matheuzinho" },
        { numero: 13, nome: "Gustavo Henrique" },
        { numero: 3, nome: "Gabriel Paulista" },
        { numero: 21, nome: "Matheus Bidu" },
        { numero: 14, nome: "Raniele" },
        { numero: 49, nome: "André Luiz" },
        { numero: 7, nome: "Breno Bidon" },
        { numero: 8, nome: "Rodrigo Garro" },
        { numero: 77, nome: "Jesse Lingard" },
        { numero: 9, nome: "Yuri Alberto" },

        // --- RESERVAS E DEMAIS RELACIONADOS ---
        { numero: 10, nome: "Memphis Depay" },
        { numero: 18, nome: "Pedro Raul" },
        { numero: 37, nome: "Kaio César" },
        { numero: 11, nome: "Vitinho" },
        { numero: 29, nome: "Allan" },
        { numero: 23, nome: "Matheus Pereira" },
        { numero: 80, nome: "Alex Santana" },
        { numero: 52, nome: "Zakaria Labyad" },
        { numero: 5, nome: "André Ramalho" },
        { numero: 20, nome: "Pedro Milans" },
        { numero: 32, nome: "Matheus Donelli" },
        { numero: 40, nome: "Felipe Longo" },
        { numero: 51, nome: "Kauê" },
        { numero: 56, nome: "Gui Negão" },
        { numero: 57, nome: "Nicolas Araujo" },
        { numero: 19, nome: "André Carrillo" },
        { numero: 35, nome: "Charles" },
        { numero: 31, nome: "Kayke Ferrari" },
        { numero: 61, nome: "Dieguinho" },
        { numero: 54, nome: "Luiz Gustavo Bahia" },
        { numero: 62, nome: "Guilherme Pellegrin" },
        { numero: 55, nome: "Luiz Eduardo" },
        { numero: 76, nome: "Guilherme Pires" },
        { numero: 75, nome: "Caragua" },
        { numero: 26, nome: "Fabrizio Angileri" },
        { numero: 4, nome: "João Pedro Tchoca" },
        { numero: 46, nome: "Hugo" },
        { numero: 59, nome: "João Vitor" },
        { numero: 41, nome: "Renato Santos" },
        { numero: 83, nome: "Yago Vitor de Veloso" }
    ],

    "VASCO": [
        // --- TITULARES (Baseado no gráfico 4-2-3-1) ---
        { numero: 1, nome: "Léo Jardim" },
        { numero: 2, nome: "Puma Rodríguez" },
        { numero: 43, nome: "Lucas Freitas" },
        { numero: 4, nome: "Alan Saldivia" },
        { numero: 6, nome: "Lucas Piton" },
        { numero: 25, nome: "Hugo Moura" },
        { numero: 83, nome: "Ramon Rique" },
        { numero: 10, nome: "Johan Rojas" },
        { numero: 17, nome: "Nuno Moreira" },
        { numero: 28, nome: "Adson" },
        { numero: 77, nome: "Claudio Spinelli" },

        // --- RESERVAS E DEMAIS RELACIONADOS ---
        { numero: 20, nome: "Brenner" },
        { numero: 7, nome: "David" },
        { numero: 11, nome: "Andrés Gómez" },
        { numero: 18, nome: "Marino Hinestroza" },
        { numero: 3, nome: "Tchê Tchê" },
        { numero: 23, nome: "Thiago Mendes" },
        { numero: 98, nome: "JP" },
        { numero: 88, nome: "Cauan Barros" },
        { numero: 96, nome: "Paulo Henrique" },
        { numero: 46, nome: "Carlos Cuesta" },
        { numero: 66, nome: "Cuiabano" },
        { numero: 30, nome: "Robert Renan" },
        { numero: 13, nome: "Daniel Fuzato" },
        { numero: 37, nome: "Pablo" },
        { numero: 40, nome: "Phillipe Gabriel" },
        { numero: 9, nome: "Matheus França" },
        { numero: 74, nome: "Andrey Fernandes" },
        { numero: 85, nome: "Mateus Carvalho" },
        { numero: 8, nome: "Jair" },
        { numero: 86, nome: "Lukas Zuccarello" },
        { numero: 58, nome: "Lucas Eduardo" },
        { numero: 70, nome: "Euder" },
        { numero: 60, nome: "João Vitor Silva" },
        { numero: 67, nome: "Samuel" },
        { numero: 50, nome: "Gustavo Guimaraes" },
        { numero: 64, nome: "Walace" },
        { numero: 82, nome: "Riquelme Avellar" },
        { numero: 87, nome: "Breno Vereza da Silva" },
        { numero: 80, nome: "Bruno André Azevedo Ribeiro" },
        { numero: 54, nome: "Alison De Nardi Araujo" }
    ],
};