import { useState, useEffect } from 'react'
import Starships from './components/Starships'




function App() {

  const [data, setData] = useState ([])
  
 
  useEffect(() => {
    

    async function getData () {
      
      const response = await fetch (`https://swapi.dev/api/starships/?format=json`)
      const data = await response.json()
      console.log(data)
      setData(data.results)
    
    
    
    }
    getData()

  },  [])

 

 

  return (
    <div>
    <h1>Star  Wars Ships</h1>

   <Starships data={data}/>
   </div>
  )
}

export default App
