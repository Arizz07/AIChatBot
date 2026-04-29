import React,{useState,useEffect,useRef} from 'react'

function Conversation({messages,loading}) {
    console.log(messages);

     const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])
    
  if(messages.length === 0){
    return (
         <div className="bg-live-200 rounded-lg h-auto p-4">
            <span>Start a conversation with the AI assistant by typing your message below.</span>
        </div>
    
    )
  }

  return (
  <>
  <div className="chats top-16 -z-20 relative overflow-y-scroll flex flex-col justify-end ">
    {messages && messages.map((m,i)=>{
        return(
            <div key={i} className={`h-auto px-4 py-2 mx-2 my-2 rounded-lg w-fit max-w-md scroll-auto
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
   <div ref={bottomRef}>  {/* ← just add this at the very end */}
      </div>

  </div>
  </>
  )
}

export default Conversation