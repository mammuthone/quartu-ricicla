

    var data;
    const days = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
    const month = {
      dom: [],
      lun: [],
      mar: [],
      mer: [],
      gio: [],
      ven: [],
      sab: [],
    }
    

    let settore = 'S1';
    let giorno = '1-LUN'
    // const map

    function showMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 39.24126236720698, lng: 9.18376670767132 }
      });

      settore = document.getElementById("settore-select").value

      let layerName;
      const d = giornata(giorno);
      console.log(d)
      layerName = `${settore}-${d}`.toUpperCase()
      console.log(layerName)
      const georssLayerUrl = `https://github.com/mammuthone/deviziaquarturoads/raw/main/${layerName}.kmz`
      // const georssLayerUrl = `https://github.com/mammuthone/deviziaquarturoads/raw/main/S1-1-LUN.kmz`
      console.log(georssLayerUrl)
      var georssLayer = new google.maps.KmlLayer({
        url: georssLayerUrl
      });
      georssLayer.setMap(map);

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

    const sectorWithDayMapFn = (sectorWithDayMap) => (giornata) => sectorWithDayMap[giornata]
    const sectorWithDayMapBoundedWithMap = sectorWithDayMapFn(sectorWithDayMap);

    const getValue = (event) => event.target.value;

    const findDay = (day) => Object.keys(month).filter(key => month[key].includes(day))

    const getOrdinality = (month) => (key) => (day) => month[key]?.indexOf(day) + 1;

    const getFinalDayOrdinality = (value) => getOrdinality(month)(findDay(value))(value)

    const giornata = (value) => `${getFinalDayOrdinality(value)}-${findDay(value)}`;

    const getSectorFromActualDate = () => sectorWithDayMapBoundedWithMap(giornata(moment().date()))
    const getSectorFromSelectedDate = (selectedDate) => sectorWithDayMapBoundedWithMap(giornata(selectedDate))

    getSectorFromActualDate()

    function initMap() {
      console.log('init map')
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 39.24126236720698, lng: 9.18376670767132 }
      });
      // var georssLayer = new google.maps.KmlLayer({
      //   // url: 'https://github.com/mammuthone/deviziaquarturoads/raw/main/S1-1-LUN.kmz'
      //   url: 'https://github.com/mammuthone/deviziaquarturoads/raw/main/S9-2-GIO.kmz'
      //   // url: 'https://github.com/mammuthone/deviziaquarturoads/raw/main/S6-2-LUN.kmz'
      // });
      // georssLayer.setMap(map);
    }

    document.getElementById("day-select").addEventListener('change', (event) => {
      giorno = Number(getValue(event))
      console.log(giorno)
      var options = {'weekday': 'long', 'month': 'long', 'day': '2-digit'};
      var date = new Date().toLocaleString('it-IT', options);
      document.getElementById('under-day').innerText = `Oggi è ${date}`
      document.getElementById("settore-select").value = getSectorFromSelectedDate(giorno)
    })

    document.getElementById("settore-select").addEventListener('change', (event) => {
      settore = getValue(event)
    })


    function buildMonth() {

      var startOfMonth = moment().startOf('month')
      var totalMonthDays = startOfMonth.daysInMonth();
      var day = days[startOfMonth.weekday() - 1];

      const ordinale = ['primo', 'secondo', 'terzo', 'quarto'];

      // month[day].push(startOfMonth.date());
      var initialDay = startOfMonth.date()
      const today = moment().date()

      const allMonth = Array(startOfMonth.daysInMonth()).fill(1, 0, startOfMonth.daysInMonth()).map((_, index) => index)
      var option = document.createElement("optgroup");
      option.label = `Settimana ${(1)}`;
      document.getElementById("day-select").append(option)
      allMonth.map((day, index) => {
        var t = moment().startOf('month').add(day, 'd');
        var dat = t.date();
        if((index +1) % 7 === 0) {
          createOptionGroup(index)
        }
        createOption(`${days[t.weekday()]}, ${t.date()}`);
        month[days[t.weekday()]].push(t.date())
      })

      const sel = document.getElementById("day-select")
      sel.value = sel.options[moment().date() - 1].value


      const todayWeekDay = Object.keys(month).filter(x => month[x].includes(moment().date()));
    }

    function createOptionGroup(index) {
      var option = document.createElement("optgroup");
      option.label = `Settimana ${((index+1) / 7) + 1}`;
      document.getElementById("day-select").append(option)
    }


    function createOption(val) {
      var option = document.createElement("option");
      option.value = val.split(" ")[1];
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      document.getElementById("day-select").append(option)
    }

    function getSecondMonday(startDate) {
      var startOfMonth = moment(startDate).utc().startOf('month').startOf('isoweek');
      var studyDate = moment(startDate).utc().startOf('month').startOf('isoweek').add(2, 'w');

      if (studyDate.month() == startOfMonth.month()) {
        studyDate = studyDate.subtract(1, 'w');
      }
      return studyDate;
    }

    function buildSectorOptions() {
      ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15', 'S16', 'S17', 'S18', 'S19', 'S20', 'C1', 'C2', 'C3'].map(settore => {
        var option = document.createElement("option");
        option.value = settore;
        option.text = settore;
        document.getElementById("settore-select").append(option)
      })
    }

    buildMonth()
    buildSectorOptions()
    document.getElementById("button_modal").click()
  