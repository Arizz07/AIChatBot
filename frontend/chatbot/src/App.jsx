import React from 'react'
import Header from './Components/Header'
import Chat from './Components/Chat'
import Conversation from './Components/Conversation'
import { useState } from 'react'

function App() {
  const [messages, setMessages] = useState([])
  const [input,setInput] = useState('')
  const [loading,setLoading] = useState(false)

  const sendMessages = async ()=>{
    if(!input.trim()) return
    setMessages(prev=>[...prev,{role:'user',text:input}])
    setInput('')
    setLoading(true)
    try{
      const response = await fetch('http://localhost:3000/api/chat',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({message:input})

        })
        const data = await response.json()
        console.log('Received response:', data);
        setMessages(prev=>[...prev,{role:'ai',text:data.reply}])
        setLoading(false)

    }catch(err){
      console.error("Error sending message:",err)
    }
    
    }
  
  return (
   <>
   <div className="flex-1">
    <Header />
   </div>
    <div className="flex-1 max-h-full">
    <Conversation messages={messages} loading={loading} />
   </div>
   <div className="flex-1">
    <Chat input={input} setInput={setInput} sendMessages={sendMessages} />
   </div>
  
   </>
  )
}

export default App
