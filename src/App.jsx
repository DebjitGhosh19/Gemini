import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const App = () => {
    const [visiable, setVisiable] = useState(true)
  return (
    <div className='flex '>
      <Sidebar  setVisiable={setVisiable}  visiable={visiable}/>
      <Main setVisiable={setVisiable} visiable={visiable}/>
    </div>
  )
}

export default App