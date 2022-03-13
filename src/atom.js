import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import moment from 'moment';

const days = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];

function buildMonth() {
    const month = {
        dom: [],
        lun: [],
        mar: [],
        mer: [],
        gio: [],
        ven: [],
        sab: [],
    }
    const wholeMonth = Array(moment().daysInMonth()).fill(1, 0, moment().daysInMonth()).map((_, index) => index)
    wholeMonth.map((day) => {
        var t = moment().startOf('month').add(day, 'd');
        month[days[t.weekday()]].push(t.date())
        return null
    })
    return month
}


const sectorWithDayMap = {
    '1-lun': 'S1',
    '2-lun': 'S6',
    '3-lun': 'S11',
    '4-lun': 'S16',
    '1-mar': 'S2',
    '2-mar': 'S7',
    '3-mar': 'S12',
    '4-mar': 'S17',
    '1-mer': 'S3',
    '2-mer': 'S8',
    '3-mer': 'S13',
    '4-mer': 'S18',
    '1-gio': 'S4',
    '2-gio': 'S9',
    '3-gio': 'S14',
    '4-gio': 'S19',
    '1-ven': 'S5',
    '2-ven': 'S10',
    '3-ven': 'S15',
    '4-ven': 'S20',
    '1-sab': 'C1',
    '2-sab': 'C2',
    '3-sab': 'C3',
}

export const sectorAndRoads = {
    'S1': ['TURATI', 'GRAMSCI', 'NENNI', 'S\'ARRULLONI', 'BEETHOVEN', 'SALIERI', 'STRAUSS', 'CHOPIN', 'PARIGI', 'LONDRA', 'ATENE', 'LISBONA', 'VARSAVIA'],
    'S6': ['ROSSINI','IS ARENAS','PAGANINI','STOCCOLMA','BONN','VIENNA','AUSTRIA','MONACO','PITZ\'E SERRA','CECOSLOVACCHIA','FRANCIA','ROMANIA','P.ZZA IV NOVEMBRE'],
    'S11': ['BOITO','PARINI','PETRARCA','STRADIVARI','MUSICA','ALBINONI','PONCHIELLI','MALIPIERO','PRAGA','MANARA','DE PRETIS','PERDALONGA','PIEMONTE'],
    'S16': ['CHERUBINI','PALESTRINA','BACH','MOZART','MONTEVERDI','SILESU','AMATI','PERDABONA','VICO','F.LLI BANDIERA','TRIESTE','P.IOLANDA'],
    'S2': ['CATALANI','CILEA','CASELLA','PIZZETTI','PEROSI','CORELLI','GABRIEL','COPERNICO','PESSINA','PANZINI','BUDAPEST','PAIS','CANELLES','CADORNA','P.ZA IV NOVEMBRE','CATALANI'],
    'S7': ['LEONCAVALLO','SCARLATTI','TASSO','PERGOLESI','PASCOLI','CIMAROSA','STRADELLA','MASCAGNI','VERDI','COLOMBO'],
    'S12': ['BIZET','BOCCHERINI','MERCADANTE','VOLTA','ROSAS','MEUCCI','B. SASSARI','SIENA','CAGLIARI','ELIGIO PORCU','VENEZIA','VIVALDI','PORRINO','GRANDI','RESPIGHI'],
    'S17': ['ZANDONAI','ALFIERI','SANTA CECILIA','LEOPARDI','FOSCOLO','DE AMICIS','ASPRONI','MILLELIRE','PINDEMONTE','ADA NEGRI','SELLA','RATTAZZI','ARIOSTO','POLONIA','BORSELLINO','NORVEGIA'],
    'S3': ['TOSCANINI','ALLEGRI','MADRID','OSLO','DUBLINO','TAZZOLI','FIERAMOSCA','MANNO','SETTEMBRINI','DONIZETTI','ROSSI VITELLI','ITALIA','ANDORRA'],
    'S8': ['BELLINI','FOGAZZARO','VESPUCCI','CABOTO','BONARIA','GORIZIA','VERGA','NOVARO','ZANELLA','GOZZANO','MACCHIAVELLI','SARPI','MARONCELLI','TUVERI','DANTE','FERMI','SEGRE\'','FIRENZE','RIZZO','CATTANEO','BIXIO'],
    'S13': ['PIRANDELLO','PUCCINI','DIAZ','LIVORNO','GIOTTO','FADDA','SAN FRANCESCO','S. MARIA','P.ZA S. MARIA','MILANO','PARMA'],
    'S18': ['RAVENNA','BARI','ANCONA','LOMBARDIA','CARDANO','D\'ANNUNZIO','MANIN','GUERRAZZI','CIMABUE','SICILIA','NAPOLI','D\'AZEGLIO','SOLFERINO','S. ANTONIO'],
    'S4': ['OLANDA','BELGIO','PORTOGALLO','GERMANIA','DANIMARCA','BULGARIA','SANZIO','CORRIDONI','GOZZI','ALGHERO','CIMITERO','DE GASPERI','DON MINZONI','SVEZIA','LIGURIA'],
    'S9': ['MARCONI','P.ZA AZUNI','PARROCCHIA','SANBENEDETTO'],
    'S14': ['R. VILLASANTA','BAYLLE','SANTAROSA','UMBRIA','ORSINI','MAZZINI','MERELLO','NIGRA','INGHILTERRA','SPAGNA','MALTA','IRLANDA','UNGHERIA','FINLANDIA','SCOZIA','GRECIA'],
    'S19': ['SAN SALVATORE','SCIESA','CRISPI','BOSA','MACOMER','MENOTTI','CIUSA','GIOBERTI','LANUSEI','OLBIA','SVIZZERA','LUSSEMBURGO','TIZIANO','CROCE','SARDEGNA','MAXIA','V. EMANUELE','REG. MARGHERITA','UMBERTO I','GALILEI','PISACANE','MENTANA'],
    'S5': ['AMENDOLA','MESSINA','PIO X','TOSCANA','BARLETTA','GENOVA','BOCCACCIO','CAVARO','PERUGINO','CARPACCIO','MONS. ANGIONI','BOTTICELLI','SALANDRA','FILZI','CALABRIA','MERCANTINI','PERRA','SANT\'IGNAZIO'],
    'S10': ['SANTA LUCIA','E. D\'ARBOREA','ORATORIO','ALAGON','LOI','LIVATINO','PIO LA TORRE','G.D. CHIESA','MAGELLANO','DON STURZO','TOTI','TELESIO','S. PELLICO','PRATI','GUICCIARDINI'],
    'S15': ['P.ZA S. ELENA','P.ZA S. STEFANO','P.ZA IV NOVEMBRE','P.ZA S. ANTONIO','P.ZA AZUNI CAPRA','P.ZA S. CUORE'],
    'S20': ['POETTO (PISTA CICLABILE)','PADRE PICCI','PIRASTU','SUOR MARIA ARESU','MELIS','ATTANASIO','MARCONI','MURGIA','ARTIGIANATO','SA SERRIXEDDA','ORRU','MAESTRI DEL LAVORO','COGONI'],
    'C1': ['GARIBALDI','ROMA','TRENTO','BERGAMO','CIALDINI','MARTINI','BOLOGNA','SPANO','CARDUCCI','PIRAS','IGLESIAS','OZIERI','CHIESA','ORISTANO','MONTENEGRO','TORINO','SPONTINI','OBERDAN','BUOZZI','ARQUER','DECRISTOFORIS','GIALETO','NUORO','SANTA CATERINA','FARA','ANGIUS','SIMBILIS','SULIS','PALERMO','LUSSU','ZARA'],
    'C2': ['BASCIU ','CAVALLERA ','CORSI ','ANGIOY ','XX SETTEMBRE + VICOLO ','SIRTORI ','DE CANDIA ','CASERMA ','SASSARI ','TEMPIO ','SIOTTO ','MANZONI ','AMSICORA ','TOLA ','FARINA','DELEDDA','SATTA','LA MARMORA','REGINA ELENA','SAURO','RISORGIMENTO','PITZOLO','CAPRERA','LA MADDALENA','TAVOLARA','FIUME'],
    'C3': ['TOMMASEO','BECCARIA','NIEVO','F. ROSSELLI','MONTI','GIORDANO','POLA','MAMELI','GOLDONI','PACINOTTI','MORI','V. VENETO','BATTISTI','P. AMEDEO'],
}

//   const sectorWithDayMapFn = (sectorWithDayMap) => (giornata) => sectorWithDayMap[giornata]
//   const sectorWithDayMapBoundedWithMap = sectorWithDayMapFn(sectorWithDayMap);

//   const getValue = (event) => event.target.value;

//   const findDay = (day) => Object.keys(buildMonth()).filter(key => month[key].includes(day))

//   const getOrdinality = (month) => (key) => (day) => month[key]?.indexOf(day) + 1;

//   const getFinalDayOrdinality = (value) => getOrdinality(month)(findDay(value))(value)

//   const giornata = (value) => `${getFinalDayOrdinality(value)}-${findDay(value)}`;

//   const getSectorFromActualDate = () => sectorWithDayMapBoundedWithMap(giornata(moment().date()))
//   const getSectorFromSelectedDate = (selectedDate) => sectorWithDayMapBoundedWithMap(giornata(selectedDate))


export const currentMonthCalendar = atom({
    key: 'currentMonthCalendar',
    default: buildMonth()
})

export const selectedDate = atom({
    key: 'selectedDate',
    default: '--, ---'
})