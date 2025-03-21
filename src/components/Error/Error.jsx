import { useRouteError } from "react-router-dom"

export const Error = () => {
  const error = useRouteError()
  return (
    <div className="h-[100dvh] max-w-full w-full text-xs p-4 bg-base-200">
      <h1>Something went wrong!</h1>
      <p>We encountered an error while loading this page.</p>
      <pre>{error?.message || 'An unknown error occurred.'}</pre>
      {error?.stack && (
        <details className="bg-base-300 p-2 flex flex-col gap-4">
          <summary>Stack Trace</summary>
          <span className="flex flex-col gap-4">{error.stack}</span>
        </details>
      )}
    </div>
  )
}
