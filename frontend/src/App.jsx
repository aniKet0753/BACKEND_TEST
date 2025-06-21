import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes').then((response)=>{
    setjokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})
  return (
    <>
    <div><h1>hi there i am frontend</h1></div>
    <p> Jokes: {jokes.length}</p>
    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h4>{joke.title}</h4>
        </div>
      ))
    }
    </>
  )
}

export default App
