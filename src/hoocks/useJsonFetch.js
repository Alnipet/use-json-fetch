import {useState, useEffect} from 'react'

export default function useJsonFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          setData(data)
        } else {
          throw new Error(response.statusText);
        }
        setError(null)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [])


  return [data, isLoading, hasError]
}
