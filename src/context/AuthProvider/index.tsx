import { Center, Spinner } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import { createContext, ReactElement, useContext, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

type User = { email: string; firstName: string } | null

type AuthProviderProps = {
  isAuthenticated: boolean
  isAuthenticating: boolean
  user: User
  login: () => void
  logout: () => void
  register: VoidFunction
  useAuth: () => Partial<AuthProviderProps>
  children: React.ReactNode
}

const AuthContext = createContext<Partial<AuthProviderProps>>({})

export const useAuth = () => useContext(AuthContext)

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider = {
  isAuthenticated: false,
  login(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  logout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  }
}

export function RequireAuth({ children }: { children: JSX.Element }) {
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

function AuthProvider({ children }: { children: ReactElement }): ReactElement {
  let navigate = useNavigate()

  let [isAuthenticating, setIsAuthenticating] = useState(false)
  let [isAuthenticated, setIsAuthenticated] = useState(false)
  let [user, setUser] = useState<User>(null)

  // code for pre-loading the user's information if we have their token in
  // localStorage goes here

  useEffect(() => {
    if (fakeAuthProvider.isAuthenticated) {
      setIsAuthenticated(true)
    }
  }, [fakeAuthProvider])

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  if (isAuthenticating) {
    return (
      <Center width="100%" height="100vh">
        <Spinner />
      </Center>
    )
  }

  // TODO: Use these when syncing with the backend
  function login() {
    setIsAuthenticating(true)
    return fakeAuthProvider.login(() => {
      setUser({ email: faker.internet.exampleEmail(), firstName: faker.name.findName() })
      setIsAuthenticating(false)
      // this is where any newly logged in user should be navigated to
      navigate('/auth/dashboard')
    })
  }

  function logout() {
    return fakeAuthProvider.logout(() => {
      setUser(null)
    })
  }

  function register() {
    return // register the user
  }

  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return (
    <AuthContext.Provider value={{ user, login, logout, register, useAuth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
