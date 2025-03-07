import { useParams } from "react-router-dom"

export const Error = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>Error</div>
  )
}
