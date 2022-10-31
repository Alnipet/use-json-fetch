import './App.css'
import useJsonFetch from './hoocks/useJsonFetch'

function App() {
  const [data, isLoading, hasError] = useJsonFetch('http://localhost:7070/data')

  return (
    <div className="App">
    </div>
  )
}

export default App
