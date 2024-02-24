import { useState } from 'react'
// import './App.css'
import InputComponent from './InputComponent'
import logo from './assets/smiley-icon.svg'
import OutputComponent from './OutputComponent' 
const API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;
function App() {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  async function callAPI(){
    console.log("Calling API")
    const API_BODY=
        {
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              "role": "system",
              "content": "You will be provided with a piece of code, and your task is to explain it in a concise way. "
            },
            {
              "role": "user",
              "content": `${code}`
            }
          ],
          "temperature": 0.7,
          "max_tokens": 2000,
          "top_p": 1
        }
    
    await fetch('https://api.openai.com/v1/chat/completions',{
      method: "POST",
      headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(API_BODY)
    })
    .then((data)=>{
       return data.json})
    .then((data)=>{
      setOutput(data);
    }).catch((err)=>{
      console.log("Error: ", err)
    })
  }
  console.log(code);
  return (
    <div className='flex items-center '>
      <InputComponent setCode ={setCode} callAPI={callAPI}/>
      <img src={logo} className='h-40 w-40 m-12'/>
      <OutputComponent output={output}/>
    </div>
  )
}

export default App
