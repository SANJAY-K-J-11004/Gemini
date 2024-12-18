import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'

// To do : enhance responsiveness and add transition


function Sidebar() {
    const [collapsed,setCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobileView = () => {
            setIsMobile(window.innerWidth <= 768)
           
            if (window.innerWidth <= 768) {
                setCollapsed(true)
            }
        }

        checkMobileView()
        window.addEventListener('resize', checkMobileView)


        return () => window.removeEventListener('resize', checkMobileView)
    }, [])


  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4 ">
        <div>
            <img onClick={()=>setCollapsed((prev)=>!prev)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer block' />
            <div className='inline-flex mt-10 items-center gap-2.5 py-2.5 px-4 cursor-pointer bg-[#e6eaf1] rounded-[50px] text-gray-500'>
                <img src={assets.plus_icon} alt="" className='w-5' />
                {collapsed?<p>New Chat</p>:null}
            </div>
            {collapsed?
            <div className='flex flex-col'>
                <p className='mt-8 mb-5'>Recent</p>
                <div className='flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <img src={assets.message_icon} alt="" className='w-5' />
                    <p>what is EVs...</p>
                </div>
            </div> : null}
        </div>
        <div className='flex flex-col gap-1 mb-2'>
            <div className='flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img src={assets.question_icon} alt="" className='w-5' />
                {collapsed?<p>Help</p>:null}
            </div>
            <div className='flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img src={assets.history_icon} alt="" className='w-5' />
                {collapsed?<p>Activity</p>:null}
            </div>
            <div className='flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img src={assets.setting_icon} alt="" className='w-5' />
                {collapsed?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar