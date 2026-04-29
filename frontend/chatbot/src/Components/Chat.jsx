import { Send } from 'lucide-react'
import React from 'react'

function Chat({input,setInput,sendMessages}) {
  return (
   <>
   <div className="input h-16 bottom-0 fixed w-full flex items-center p-4  bg-olive-200">
    <input value={input} 
    onChange={(e)=>setInput(e.target.value)} 
    onKeyDown={(e)=>{e.key === "Enter" && sendMessages()}}
    className='w-full h-full rounded-xl p-2 border-none outline-none' type="text" placeholder="Type your message..." />
    <button className='p-2 bg-green-500 rounded-lg '>
        <Send size={24} color='blue' />
    </button>
   </div>
   </>
  )
}

export default Chat
