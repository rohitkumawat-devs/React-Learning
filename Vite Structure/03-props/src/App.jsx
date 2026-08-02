import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
          <Card user="Rohit" age={21} img="https://images.pexels.com/photos/31284696/pexels-photo-31284696.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31284696.jpg&fm=jpg"/>
          <Card user="Karan" age={19} img ="https://media.craiyon.com/2025-04-15/yWxmZzOoS-GKRKUDUDiLCw.webp"/>
    </div>


  )
}

export default App