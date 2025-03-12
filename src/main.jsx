import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Welcome } from './components/WelcomePage/Welcome.jsx'
import AllChat from './components/ChatPage/AllChat.jsx'
import { Error } from './components/Error/Error.jsx'
import { Chat } from './components/ChatPage/chat/chat.jsx'
import { Provider } from 'react-redux'
import {store, persistor}  from './features/store.js'
import { PersistGate } from 'redux-persist/integration/react'

// const Chat = lazy(() =>import('./components/ChatPage/chat/chat.jsx'))
// const Error = lazy(() =>import('./components/Error/Error.jsx'))



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
    {
      path:'/',
      element: <Welcome/>
    },
    {
      path:'/all-chats',
      element: <AllChat />
    },
    {
      path:'/chat/:chats',
      element:<Chat />
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>

          <StrictMode>
            <App />
          </StrictMode>

      </RouterProvider>
    </PersistGate>
  </Provider>
  ,
)
