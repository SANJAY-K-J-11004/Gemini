import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import '../../index.css';

function MainLayout() {
    const { prevPrompt, setPrevPrompt, onSent, setRecentPrompt, recentPrompt, showResult, loading, resultData, input, setInput, card_func } = useContext(Context);

    const cards = "h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea] transition-colors";
    const cards_img = "w-[35px] p-1.5 absolute bg-white rounded-[20px] bottom-[10px] right-[10px]";
    const cards_para = "text-[#585858] text-[17px]";
    const loading_hr = 'rounded-[4px] border-0 bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5 animate-pulse';

    return (
        <div className='flex-1 min-h-screen pb-[15vh] relative overflow-y-auto'>
            <div className='flex items-center justify-between text-[22px] p-5 text-[#585858]'>
                <p>Gemini</p>
                <img className='w-10 rounded-[50%]' src={assets.user_icon} alt="" />
            </div>
            <div className='max-w-4xl mx-auto px-4'>
                {!showResult ? (
                    <>
                        <div className='my-[25px] mx-0 text-[50px] text-[#c4c7c5] font-medium p-5'>
                            <p>
                                <span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-transparent bg-clip-text'>
                                    Hello, Dev...
                                </span>
                            </p>
                            <p>How can I help?</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
                            {[
                                {
                                    text: "Suggest beautiful places to see on an upcoming road trip",
                                    icon: assets.compass_icon
                                },
                                {
                                    text: "Summarize the concept: Nano Technology",
                                    icon: assets.bulb_icon
                                },
                                {
                                    text: "Brainstorm team bonding activities for our work retreat",
                                    icon: assets.message_icon
                                },
                                {
                                    text: "Improve the readability of the code",
                                    icon: assets.code_icon
                                }
                            ].map((card, index) => (
                                <div 
                                    key={index}
                                    onClick={(e) => card_func(e.currentTarget.querySelector("p").innerText)} 
                                    className={cards}
                                >
                                    <p className={cards_para}>{card.text}</p>
                                    <img src={card.icon} alt="" className={cards_img} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='py-0 px-[5%] max-h-[70vh] overflow-y-auto scrollbar-hide'>
                        <div className='my-10 mx-0 flex items-center gap-5'>
                            <img className='w-10 rounded-[50%]' src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='flex items-start gap-5'>
                            <img className='w-10 rounded-[50%]' src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className='w-full flex flex-col gap-2.5'>
                                    {[...Array(3)].map((_, i) => (
                                        <hr key={i} className={loading_hr} />
                                    ))}
                                </div>
                            ) : (
                                <div 
                                    className='text-[17px] font-light leading-[1.8]'
                                    dangerouslySetInnerHTML={{ __html: resultData }}
                                />
                            )}
                        </div>
                    </div>
                )}
                <div className='fixed bottom-0 w-full max-w-[900px] pt-0 pr-5 m-auto'>
                    <div className='search-box flex items-center justify-between gap-5 bg-[#f0f4f9] pt-2.5 pr-5 rounded-[50px]'>
                        <input 
                            type="text" 
                            onChange={(e) => setInput(e.target.value)} 
                            value={input} 
                            placeholder='Message Gemini'
                            className='main-bottom-input flex-1 bg-transparent border-none outline-none p-2 text-[18px] ml-[30px] mb-[10px]' 
                        />
                        <div className='flex flex-row items-center gap-[15px]'>
                            <img className='main-bottom-img w-6 cursor-pointer' src={assets.gallery_icon} alt="" />
                            <img className='main-bottom-img w-6 cursor-pointer' src={assets.mic_icon} alt="" />
                           {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" className='main-bottom-img w-6 cursor-pointer' />:null}
                        </div>
                    </div>
                    <p className='text-[13px] m-4 mx-auto text-center font-light'>
                        Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;