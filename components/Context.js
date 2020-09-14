import { useState, useContext, createContext, useEffect } from 'react'

// Context
export const AppContext = createContext([])
// Provider
export const AppContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({})
  const state =
    {
      usuario,
      setUsuario
    }


  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

//
export function useAppContext () {
  const context = useContext(AppContext)

  if (!context) {
    console.error('Error deploying App Context!!!')
  }

  return context
}

export default useAppContext
