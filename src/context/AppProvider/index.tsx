import { createContext, ReactElement, ReactNode, useContext, useState } from 'react'

type AppContextType = {
  drawerOpen: boolean
  toggleDrawer: VoidFunction
}

export const AppContext = createContext<AppContextType>({
  drawerOpen: false,
  toggleDrawer: () => null
})

export const useAppContext = (): AppContextType => useContext(AppContext)

function AppProvider({ children }: { children: ReactNode }): ReactElement {
  const [drawerOpen, setDrawerOpen] = useState(true)

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen)
  }

  return <AppContext.Provider value={{ drawerOpen, toggleDrawer }}>{children}</AppContext.Provider>
}

export default AppProvider
