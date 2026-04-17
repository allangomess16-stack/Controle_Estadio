// ==============================================================================
// ARQUIVO: bancodedados.js
// Banco de dados de elencos da Série A (Auto-preenchimento da Controladora)
// ==============================================================================

const bancoDeElencos = {
    "BOTAFOGO": [
        { numero: "1", nome: "Léo Linck" }, { numero: "4", nome: "Alexander Barboza" }, { numero: "33", nome: "Bastos" },
        { numero: "21", nome: "Fernando Marçal" }, { numero: "22", nome: "Vitinho" }, { numero: "5", nome: "Allan" },
        { numero: "8", nome: "Danilo" }, { numero: "10", nome: "Santiago Rodríguez" }, { numero: "11", nome: "Júnior Santos" },
        { numero: "7", nome: "Júnior Santos" }, { numero: "9", nome: "Arthur Cabral" },
        // Reservas (A partir do 12º)
        { numero: "12", nome: "Neto" }, { numero: "97", nome: "Raul Steffens" }, { numero: "3", nome: "Philipe Sampaio" },
        { numero: "13", nome: "Alex Telles" }, { numero: "20", nome: "Cristian Medina" }, { numero: "47", nome: "Jeffinho" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "INTERNACIONAL": [
        { numero: "1", nome: "Sergio Rochet" }, { numero: "25", nome: "Gabriel Mercado" }, { numero: "4", nome: "Félix Torres" },
        { numero: "6", nome: "Bernabei" }, { numero: "26", nome: "Matheus Bahia" }, { numero: "29", nome: "Thiago Maia" },
        { numero: "8", nome: "Bruno Henrique" }, { numero: "10", nome: "Alan Patrick" }, { numero: "15", nome: "Bruno Gomes" },
        { numero: "19", nome: "Rafael Borré" }, { numero: "31", nome: "Alerrandro" },
        // Reservas
        { numero: "22", nome: "Ivan" }, { numero: "24", nome: "Anthoni" }, { numero: "11", nome: "Johan Carbonero" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "PALMEIRAS": [
        { numero: "21", nome: "Weverton" }, { numero: "2", nome: "Marcos Rocha" }, { numero: "15", nome: "Gustavo Gómez" },
        { numero: "26", nome: "Murilo" }, { numero: "22", nome: "Piquerez" }, { numero: "8", nome: "Zé Rafael" },
        { numero: "27", nome: "Richard Ríos" }, { numero: "23", nome: "Raphael Veiga" }, { numero: "10", nome: "Rony" },
        { numero: "7", nome: "Dudu" }, { numero: "42", nome: "Flaco López" },
        { numero: "14", nome: "Marcelo Lomba" }, { numero: "11", nome: "Bruno Rodrigues" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "SAO PAULO": [
        { numero: "23", nome: "Rafael" }, { numero: "13", nome: "Rafinha" }, { numero: "5", nome: "Arboleda" },
        { numero: "4", nome: "Diego Costa" }, { numero: "6", nome: "Welington" }, { numero: "29", nome: "Pablo Maia" },
        { numero: "25", nome: "Alisson" }, { numero: "27", nome: "Wellington Rato" }, { numero: "7", nome: "Lucas Moura" },
        { numero: "10", nome: "Luciano" }, { numero: "9", nome: "Calleri" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "CORINTHIANS": [
        { numero: "1", nome: "Cássio" }, { numero: "23", nome: "Fagner" }, { numero: "3", nome: "Félix Torres" },
        { numero: "13", nome: "Gustavo Henrique" }, { numero: "46", nome: "Hugo" }, { numero: "14", nome: "Raniele" },
        { numero: "27", nome: "Breno Bidon" }, { numero: "10", nome: "Rodrigo Garro" }, { numero: "11", nome: "Romero" },
        { numero: "9", nome: "Yuri Alberto" }, { numero: "20", nome: "Pedro Raul" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "SANTOS": [
        { numero: "1", nome: "João Paulo" }, { numero: "4", nome: "Gil" }, { numero: "6", nome: "Joaquim" },
        { numero: "3", nome: "Hayner" }, { numero: "2", nome: "Aderlan" }, { numero: "5", nome: "João Schmidt" },
        { numero: "8", nome: "Diego Pituca" }, { numero: "10", nome: "Giuliano" }, { numero: "11", nome: "Guilherme" },
        { numero: "7", nome: "Pedrinho" }, { numero: "9", nome: "Furch" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "FLAMENGO": [
        { numero: "1", nome: "Rossi" }, { numero: "2", nome: "Varela" }, { numero: "15", nome: "Fabrício Bruno" },
        { numero: "4", nome: "Léo Pereira" }, { numero: "6", nome: "Ayrton Lucas" }, { numero: "5", nome: "Erick Pulgar" },
        { numero: "8", nome: "Gerson" }, { numero: "14", nome: "De Arrascaeta" }, { numero: "11", nome: "Everton Cebolinha" },
        { numero: "27", nome: "Bruno Henrique" }, { numero: "9", nome: "Pedro" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "FLUMINENSE": [
        { numero: "1", nome: "Fábio" }, { numero: "2", nome: "Samuel Xavier" }, { numero: "3", Thiago: "Santos" },
        { numero: "30", nome: "Felipe Melo" }, { numero: "12", nome: "Marcelo" }, { numero: "7", nome: "André" },
        { numero: "8", nome: "Martinelli" }, { numero: "10", nome: "Ganso" }, { numero: "21", nome: "Arias" },
        { numero: "11", nome: "Keno" }, { numero: "14", nome: "Cano" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "VASCO": [
        { numero: "1", nome: "Léo Jardim" }, { numero: "2", nome: "Puma Rodríguez" }, { numero: "4", nome: "Maicon" },
        { numero: "3", nome: "Léo" }, { numero: "6", nome: "Lucas Piton" }, { numero: "8", nome: "Jair" },
        { numero: "10", nome: "Payet" }, { numero: "21", nome: "Praxedes" }, { numero: "7", nome: "David" },
        { numero: "11", nome: "Adson" }, { numero: "99", nome: "Vegetti" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "ATLETICO-MG": [
        { numero: "22", nome: "Everson" }, { numero: "26", nome: "Saravia" }, { numero: "3", nome: "Bruno Fuchs" },
        { numero: "4", nome: "Mauricio Lemos" }, { numero: "13", nome: "Guilherme Arana" }, { numero: "21", nome: "Battaglia" },
        { numero: "15", nome: "Zaracho" }, { numero: "14", nome: "Igor Gomes" }, { numero: "10", nome: "Paulinho" },
        { numero: "7", nome: "Hulk" }, { numero: "9", nome: "Deyverson" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "CRUZEIRO": [
        { numero: "1", nome: "Rafael Cabral" }, { numero: "12", nome: "William" }, { numero: "3", nome: "Marlon" },
        { numero: "5", nome: "Zé Ivaldo" }, { numero: "21", nome: "Kaiki" }, { numero: "8", nome: "Lucas Silva" },
        { numero: "16", nome: "Lucas Romero" }, { numero: "10", nome: "Matheus Pereira" }, { numero: "11", nome: "Arthur Gomes" },
        { numero: "30", nome: "Gabriel Veron" }, { numero: "9", nome: "Dinenno" },
        { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "AMERICA-MG": [
        { numero: "1", nome: "Goleiro" }, { numero: "2", nome: "Lateral Dir" }, { numero: "3", nome: "Zagueiro 1" }, { numero: "4", nome: "Zagueiro 2" }, { numero: "6", nome: "Lateral Esq" }, { numero: "5", nome: "Volante 1" }, { numero: "8", nome: "Volante 2" }, { numero: "10", nome: "Meia" }, { numero: "7", nome: "Ponta Dir" }, { numero: "11", nome: "Ponta Esq" }, { numero: "9", nome: "Centroavante" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "ATHLETICO-PR": [
        { numero: "1", nome: "Bento" }, { numero: "2", nome: "Léo Godoy" }, { numero: "4", nome: "Thiago Heleno" }, { numero: "3", nome: "Gamarra" }, { numero: "6", nome: "Esquivel" }, { numero: "5", nome: "Fernandinho" }, { numero: "8", nome: "Erick" }, { numero: "10", nome: "Zapelli" }, { numero: "7", nome: "Cuello" }, { numero: "11", nome: "Canobbio" }, { numero: "9", nome: "Mastrialni" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "BAHIA": [
        { numero: "22", nome: "Marcos Felipe" }, { numero: "2", nome: "Gilberto" }, { numero: "3", nome: "Kanu" }, { numero: "4", nome: "Victor Cuesta" }, { numero: "6", nome: "Luciano Juba" }, { numero: "5", nome: "Caio Alexandre" }, { numero: "8", nome: "Jean Lucas" }, { numero: "10", nome: "Everton Ribeiro" }, { numero: "7", nome: "Cauly" }, { numero: "11", nome: "Thaciano" }, { numero: "9", nome: "Everaldo" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "BRAGANTINO": [
        { numero: "1", nome: "Cleiton" }, { numero: "2", nome: "Andrés Hurtado" }, { numero: "3", nome: "Léo Ortiz" }, { numero: "4", nome: "Luan Cândido" }, { numero: "6", nome: "Juninho Capixaba" }, { numero: "5", nome: "Jadsom" }, { numero: "8", nome: "Lucas Evangelista" }, { numero: "10", nome: "Lincoln" }, { numero: "7", nome: "Helinho" }, { numero: "11", nome: "Vitinho" }, { numero: "9", nome: "Eduardo Sasha" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "CORITIBA": [
         { numero: "1", nome: "Goleiro" }, { numero: "2", nome: "Lateral Dir" }, { numero: "3", nome: "Zagueiro 1" }, { numero: "4", nome: "Zagueiro 2" }, { numero: "6", nome: "Lateral Esq" }, { numero: "5", nome: "Volante 1" }, { numero: "8", nome: "Volante 2" }, { numero: "10", nome: "Meia" }, { numero: "7", nome: "Ponta Dir" }, { numero: "11", nome: "Ponta Esq" }, { numero: "9", nome: "Centroavante" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "FORTALEZA": [
        { numero: "1", nome: "João Ricardo" }, { numero: "2", nome: "Tinga" }, { numero: "3", nome: "Brítez" }, { numero: "4", nome: "Titi" }, { numero: "6", nome: "Bruno Pacheco" }, { numero: "5", nome: "Zé Welison" }, { numero: "8", nome: "Hércules" }, { numero: "10", nome: "Pochettino" }, { numero: "7", nome: "Pikachu" }, { numero: "11", nome: "Moisés" }, { numero: "9", nome: "Lucero" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "GREMIO": [
        { numero: "1", nome: "Marchesín" }, { numero: "2", nome: "João Pedro" }, { numero: "3", nome: "Geromel" }, { numero: "4", nome: "Kannemann" }, { numero: "6", nome: "Reinaldo" }, { numero: "5", nome: "Villasanti" }, { numero: "8", nome: "Pepê" }, { numero: "10", nome: "Cristaldo" }, { numero: "7", nome: "Soteldo" }, { numero: "11", nome: "Pavón" }, { numero: "9", nome: "Diego Costa" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "VITORIA": [
        { numero: "1", nome: "Lucas Arcanjo" }, { numero: "2", nome: "Zeca" }, { numero: "3", nome: "Camutanga" }, { numero: "4", nome: "Wagner Leonardo" }, { numero: "6", nome: "Lucas Esteves" }, { numero: "5", nome: "Willian Oliveira" }, { numero: "8", nome: "Dudu" }, { numero: "10", nome: "Matheuzinho" }, { numero: "7", nome: "Osvaldo" }, { numero: "11", nome: "Iury Castilho" }, { numero: "9", nome: "Alerrandro" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "CHAPECOENSE": [
        { numero: "1", nome: "Goleiro" }, { numero: "2", nome: "Lateral Dir" }, { numero: "3", nome: "Zagueiro 1" }, { numero: "4", nome: "Zagueiro 2" }, { numero: "6", nome: "Lateral Esq" }, { numero: "5", nome: "Volante 1" }, { numero: "8", nome: "Volante 2" }, { numero: "10", nome: "Meia" }, { numero: "7", nome: "Ponta Dir" }, { numero: "11", nome: "Ponta Esq" }, { numero: "9", nome: "Centroavante" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "CRICIUMA": [
        { numero: "1", nome: "Gustavo" }, { numero: "2", nome: "Claudinho" }, { numero: "3", nome: "Rodrigo" }, { numero: "4", nome: "Walisson Maia" }, { numero: "6", nome: "Marcelo Hermes" }, { numero: "5", nome: "Barreto" }, { numero: "8", nome: "Fellipe Mateus" }, { numero: "10", nome: "Marquinhos Gabriel" }, { numero: "7", nome: "Éder" }, { numero: "11", nome: "Felipe Vizeu" }, { numero: "9", nome: "Bolasie" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "CUIABA": [
        { numero: "1", nome: "Walter" }, { numero: "2", nome: "Matheus Alexandre" }, { numero: "3", nome: "Marllon" }, { numero: "4", nome: "Alan Empereur" }, { numero: "6", nome: "Rikelme" }, { numero: "5", nome: "Fernando Sobral" }, { numero: "8", nome: "Denilson" }, { numero: "10", nome: "Max Alves" }, { numero: "7", nome: "Jonathan Cafú" }, { numero: "11", nome: "Clayson" }, { numero: "9", nome: "Deyverson" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "JUVENTUDE": [
        { numero: "1", nome: "Gabriel" }, { numero: "2", nome: "João Lucas" }, { numero: "3", nome: "Zé Marcos" }, { numero: "4", nome: "Danilo Boza" }, { numero: "6", nome: "Alan Ruschel" }, { numero: "5", nome: "Jadson" }, { numero: "8", nome: "Mandaca" }, { numero: "10", nome: "Nenê" }, { numero: "7", nome: "Lucas Barbosa" }, { numero: "11", nome: "Erick Farias" }, { numero: "9", nome: "Gilberto" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "MIRASSOL": [
        { numero: "1", nome: "Muralha" }, { numero: "2", nome: "Lucas Ramon" }, { numero: "3", nome: "Luiz Otávio" }, { numero: "4", nome: "João Victor" }, { numero: "6", nome: "Marcelo" }, { numero: "5", nome: "Danielzinho" }, { numero: "8", nome: "Gabriel" }, { numero: "10", nome: "Chico Kim" }, { numero: "7", nome: "Negueba" }, { numero: "11", nome: "Fernandinho" }, { numero: "9", nome: "Dellatorre" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ],
    "REMO": [
        { numero: "1", nome: "Marcelo Rangel" }, { numero: "2", nome: "Vidal" }, { numero: "3", nome: "Ligger" }, { numero: "4", nome: "Ícaro" }, { numero: "6", nome: "Raimar" }, { numero: "5", nome: "Jaderson" }, { numero: "8", nome: "Pavani" }, { numero: "10", nome: "Matheus Anjos" }, { numero: "7", nome: "Kelvin" }, { numero: "11", nome: "Pedro Vitor" }, { numero: "9", nome: "Ytalo" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }, { numero: "0", nome: "" }
    ]
};