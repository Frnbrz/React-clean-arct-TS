import '@/App.css'
import { ButtonAppBar } from '@/components/ButtonAppBar'
import { AuthGuard, RoleGuard } from '@/guards'
import { PrivateRoutes, PublicRoutes, Roles } from '@/models'
import { Dashboard } from '@/pages/Private'
import store from '@/redux/store'
import { RoutesWithNotFound } from '@/utilities'
import { SnackbarProvider } from 'notistack'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { SnackbarUtilitiesConfigurator } from './utilities/snackbarManager'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <div className='App'>
      <SnackbarProvider>

        <SnackbarUtilitiesConfigurator />

        <Suspense fallback={<>Cargando</>}>
          <Provider store={store}>
            <BrowserRouter>
              <ButtonAppBar />
              <RoutesWithNotFound>
                <Route
                  path='/'
                  element={<Navigate to={PrivateRoutes.PRIVATE} />}
                />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard privateValidation />}>
                  <Route
                    path={`${PrivateRoutes.PRIVATE}/*`}
                    element={<Private />}
                  />
                </Route>
                <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                  <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </SnackbarProvider>
    </div>
  )
}

export default App
