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
    '1-lun' : 'S1',
    '2-lun' : 'S6',
    '3-lun' : 'S11',
    '4-lun' : 'S16',
    '1-mar' : 'S2',
    '2-mar' : 'S7',
    '3-mar' : 'S12',
    '4-mar' : 'S17',
    '1-mer' : 'S3',
    '2-mer' : 'S8',
    '3-mer' : 'S13',
    '4-mer' : 'S18',
    '1-gio' : 'S4',
    '2-gio' : 'S9',
    '3-gio' : 'S14',
    '4-gio' : 'S19',
    '1-ven' : 'S5',
    '2-ven' : 'S10',
    '3-ven' : 'S15',
    '4-ven' : 'S20',
    '1-sab' : 'C1',
    '2-sab' : 'C2',
    '3-sab' : 'C3',
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