import React from 'react'
import { assets } from '../../assets/assets'

function MainLayout() {

    const cards = "h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]"
    const cards_img = "w-[35px] p-1.5 absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
    const cards_para = "text-[#585858] text-[17px] "
  return (
    <div  className='flex-1 min-h-screen pb-[15vh] relative'>
        <div className='flex items-center justify-between text-[22px] p-5 text-[#585858]'>
            <p>Gemini</p>
            <img className='w-10 rounded-[50%]' src={assets.user_icon} alt="" />
        </div>
            <div className='max-w-4xl ml-[18%]'>
                <div className='my-[25px] mx-0 text-[50px] text-[#c4c7c5] font-medium p-5' >
                    <p><span className='bg-[linear-gradient(16deg,#4b90ff,#ff5546)] text-transparent [background-clip:text]'>Hello, Dev...</span></p>
                    <p>How can I help ?</p>
                </div>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5  '>
                    <div className={cards}>
                        <p className={cards_para}>Suggest beautiful plcaces to see on a upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" className={cards_img}/>
                    </div>
                    <div className={cards}>
                        <p className={cards_para}>Summarize the concept : Nano Technology</p>
                        <img src={assets.bulb_icon} alt="" className={cards_img} />
                    </div>
                    <div className={cards}>
                        <p className={cards_para}>Brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" className={cards_img} />
                    </div>
                    <div className={cards}>
                        <p className={cards_para}>Improve the readability of the code</p>
                        <img className={cards_img} src={assets.code_icon } alt="" />
                    </div>
                </div>
                <div className='absolute bottom-0 w-[100%] max-w-[900px] pt-0 pr-5 m-auto'>
                    <div className='flex items-center justify-between gap-5 bg-[#f0f4f9] pt-2.5 pr-5 rounded-[50px]'>
                        <input type="text" placeholder='Message Gemini' className='flex-1 bg-transparent border-none outline-none p-2 text-[18px] ml-[30px] mb-[10px]'/>
                        <div className='flex flex-row items-center gap-[15px]'>
                            <img className='w-6 cursor-pointer' src={assets.gallery_icon} alt="" />
                            <img className='w-6 cursor-pointer' src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" className='w-6 cursor-pointer'/>
                        </div>
                    </div>
                    <p className='text-[13px] m-4 mx-auto text-center font-light'>
                    Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
    </div>
    )
}

export default MainLayout