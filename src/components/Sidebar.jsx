import React, { useState } from 'react'
import menu from '../assets/menu_icon.png'
import plus from '../assets/plus_icon.png'
import question from '../assets/question_icon.png'
import compass from '../assets/compass_icon.png'
import setting from '../assets/setting_icon.png'
const Sidebar = ({visiable, setVisiable}) => {

  return (
    <div className={`bg-slate-200 h-screen fixed ${visiable?"w-40":"w-20"}   p-5 flex flex-col justify-between `}>
     <div >
       <img src={menu}  alt="" className='w-5 cursor-pointer' onClick={()=>setVisiable(!visiable)} />
      <div className='flex items-center my-10 gap-2 cursor-pointer bg-gray-300 rounded-4xl p-2 justify-center '>
        <img src={plus} alt=""  className='w-4'/>
       {visiable? <p className='text-gray-400 text-sm'>New Chart</p>:null}
      </div>
      <div>
       {visiable? <p >Recent</p>:null}
      </div>
     </div>
     <div className='flex flex-col gap-4 px-2'>
      <div className='flex items-center   gap-2'>
        <img className='w-5' src={question} alt="" />
     
             {visiable? <p >Help</p>:null}
      </div>
      <div className='flex items-center    gap-2'>
        <img src={compass} alt="" className='w-5'/>
        
             {visiable? <p >Activity</p>:null}
      </div>
      <div className='flex items-center  gap-2'>
        <img src={setting} alt=""className='w-5' />
        
          {visiable? <p >Settings</p>:null}
      </div>
     </div>

    </div>
  )
}

export default Sidebar