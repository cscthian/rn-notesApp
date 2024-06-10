
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [categoryContext, setCategoryContext] = useState('all')
  const [listGlobalNotes, setListGlobalNotes] = useState([])

  return(
    <GlobalContext.Provider value={{
      categoryContext,
      setCategoryContext,
      listGlobalNotes,
      setListGlobalNotes
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }