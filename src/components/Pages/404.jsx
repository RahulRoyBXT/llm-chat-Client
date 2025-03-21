import { useParams } from "react-router-dom"

export const Error404 = () => {
    const params = useParams()
  return (
    <div className="h-screen bg-base-black text-base-content flex justify-center items-center text-2xl">
        Error 404 at <br />
        {Object.values(params)}
    </div>
  )
}

