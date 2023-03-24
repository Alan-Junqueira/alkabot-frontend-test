'use client'

import { useEffect } from 'react'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Erro({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <>
      <p>Ooops! Something went wrong!</p>
      <pre>{error.message}</pre>

      <button onClick={() => reset()}>Reset error</button>
    </>
  )
}
