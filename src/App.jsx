import { Suspense } from "react"
import { Outlet } from "react-router-dom"
// import { UserDataProvider } from "./context/UserDataProvider"

const App = () => {
  return (

        <main>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet/>
          </Suspense>
        </main>
  )
}

export default App