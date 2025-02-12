import React from 'react'

const upFAB = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-700 rounded-3xl text-white shadow-lg cursor-pointer transition-all hover:bg-green-900 flex items-center justify-center"
    >
      <span className="text-2xl">&#8593;</span>
    </div>
  )
}

export default upFAB
