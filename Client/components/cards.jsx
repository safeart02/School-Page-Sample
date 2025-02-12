const cards = ({children, bg = 'bg-white'}) => {
  return (
    <div className={`${bg} rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl`}>{children}</div>
  )
}

export default cards