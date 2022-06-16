import { createContext, ReactElement, useContext, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { GuestNavbar, Navbar } from '../components'
import {
  AboutScreen,
  DashboardScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen
} from '../containers'
import { PageWrap } from '../layouts'
import { fakeAuthProvider } from './auth'

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

let AuthContext = createContext<AuthContextType>(null!)

function useAuth() {
  return useContext(AuthContext)
}

function RequireAuth({ children }: { children: ReactElement }) {
  let auth = useAuth()

  let location = useLocation()

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null)

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null)
      callback()
    })
  }

  let value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function Navigation() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<GuestNavbar />}>
          <Route element={<PageWrap title="Core Suite" />}>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Route>
        </Route>
        <Route
          element={
            <RequireAuth>
              <Navbar />
            </RequireAuth>
          }
        >
          <Route element={<PageWrap title="Dashboard" />}>
            {/* TODO: Dynamic title */}
            <Route path="/protected/dashboard" element={<DashboardScreen />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default Navigation
