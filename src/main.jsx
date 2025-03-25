import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WelcomeLogo } from './components/WelcomePage/WelcomeLogo.jsx'
import AllChat from './components/ChatPage/AllChat.jsx'
import { Error } from './components/Error/Error.jsx'
import { Chat } from './components/ChatPage/chat/chat.jsx'
import { Provider } from 'react-redux'
import {store}  from './features/store.js'
import LoginPage from './components/WelcomePage/LoginPage.jsx'
import RegisterPage from './components/Pages/RegisterPage.jsx'
import { WelcomePage } from './components/WelcomePage/Continue-agreement/WelcomePage.jsx'
import { Error404 } from './components/Pages/404.jsx'
import { SocketProvider } from './context/SocketContext'

// import { PersistGate } from 'redux-persist/integration/react'

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
      element: <WelcomeLogo/>
    },
    {
      path: 'welcome&agreement',
      element: <WelcomePage />
    },
    {
      path:'/all-chats',
      element: <AllChat />
    },
    {
      path:'/chat/:chats',
      element:<Chat />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path:'*',
      element: <Error404 />
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SocketProvider>
      <RouterProvider router={router}>
          <StrictMode>
            <App />
          </StrictMode>
      </RouterProvider>
      </SocketProvider>
  </Provider>
  ,
)
