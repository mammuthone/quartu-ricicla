import React from 'react';


const defaultContext = {
    days : ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
    month : {
      dom: [],
      lun: [],
      mar: [],
      mer: [],
      gio: [],
      ven: [],
      sab: [],
    },
    settore :'S1',
    giorno: '1-LUN',
    setMonth: () => {},
    setSettore: () => {},
    setGiorno: () => {},
}

export const GlobalContext = React.createContext(defaultContext)

function WithContext (props) {
    return (
        <GlobalContext.Provider value={defaultContext}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default WithContext;