import React,{useState} from 'react'

function Conversation({messages,loading}) {
    if(messages.length === 0)
         return(
        <div className="flex justify-center items-center mt-24">
    <div className="bg-live-200  md:w-1/2 flex flex-col items-center gap-4 rounded-lg  p-4">
            <span className='text-3xl text-center font-bold'>Start a conversation with  AI Assistant by typing your message below.</span>
             <span className="text-lg text-gray-500">- llama-3.1-8b-instant by <b>Groq</b></span>
        </div>
        </div>
         )

  return (
  <>
 
  <div className="chats min-h-full -z-20 relative flex flex-col m-2 gap-4 p-4 ">
    {messages && messages.map((m,i)=>{
        return(
            <div key={i} className={`px-4 py-2 h-auto rounded-xl justify-end shadow-2xl
        ${m.role === 'user' 
          ? 'bg-green-500 text-white self-end' 
          : 'bg-gray-200 text-black self-start'
        }`}>
                <span>{m.text}</span>
            </div>
        )
    })
       
}

{loading && (
    <div className="bg-live-200 rounded-lg h-auto p-4">
        <span>AI is typing...</span>
    </div>
)}


  


  </div>
  </>
  )
}

export default Conversation