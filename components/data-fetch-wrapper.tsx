"use client"

import { useEffect, useState } from 'react'
import ErrorBoundary from './error-boundary'

interface DataFetchWrapperProps<T> {
  children: (data: T) => React.ReactNode
  fetch: () => Promise<T>
  loadingFallback?: React.ReactNode
  errorFallback?: React.ReactNode
}

function DataFetchWrapper<T>({ children, fetch, loadingFallback, errorFallback }: DataFetchWrapperProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch()
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [fetch])

  if (loading) return loadingFallback || <div>Loading...</div>
  if (error) return errorFallback || <div>Error: {error.message}</div>
  if (!data) return null

  return (
    <ErrorBoundary fallback={errorFallback || <div>Something went wrong</div>}>
      {children(data)}
    </ErrorBoundary>
  )
}

export default DataFetchWrapper

