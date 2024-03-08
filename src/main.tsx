import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './components/Theme/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>

      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
