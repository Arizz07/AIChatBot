import React from 'react'

const Header = () => {
  return (
   <>
   <div className="nav top-0 w-full fixed bg-olive-200 h-16 p-4 flex items-center gap-2">
    <div className="logo rounded-xl h-8">
        <img height={30} width={30} className='rounded-3xl' src="/chatbot.png" alt="ChatBot Illustrations" />
    </div>
    <h1 className='font-bold'>AI Assistant</h1>
   </div>
   </>
  )
}

export default Header
