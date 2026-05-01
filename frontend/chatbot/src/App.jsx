import React from 'react'
import Header from './Components/Header'
import Chat from './Components/Chat'
import Conversation from './Components/Conversation'
import { useState,useRef,useEffect } from 'react'

function App() {
  const [messages, setMessages] = useState([])
  const [input,setInput] = useState('')
  const [loading,setLoading] = useState(false)

   const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessages = async ()=>{
    if(!input.trim()) return
    setMessages(prev=>[...prev,{role:'user',text:input}])
    setInput('')
    setLoading(true)
    try{
      const response = await fetch('https://aichatbot-kj10.onrender.com/api/chat',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({message:input})

        })
        const data = await response.json()
        setMessages(prev=>[...prev,{role:'ai',text:data.reply}])
        setLoading(false)

    }catch(err){
      console.error("Error sending message:",err)
    }
    
    }
  
  return (
   <>
   <div className="flex-1 h-screen">
    <Header />
   
    <div className="flex-1 overflow-y-auto pt-16 pb-16">
    <Conversation messages={messages} loading={loading} />
    <div ref={bottomRef} /> 
   </div>
   <div className="flex-1">
    <Chat input={input} setInput={setInput} sendMessages={sendMessages} />
   </div>
    </div>
  
   </>
  )
}

export default App
