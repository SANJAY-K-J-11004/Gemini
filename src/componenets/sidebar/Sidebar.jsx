import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import '../../index.css';

function Sidebar() {
    const [expanded, setExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const { prevPrompt, setPrevPrompt, onSent, setRecentPrompt, recentPrompt, showResult, loading, resultData, input, setInput, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    // useEffect(() => {
    //     const checkMobileView = () => {
    //         const isMobileView = window.innerWidth <= 768;
    //         setIsMobile(isMobileView);
    //         setExpanded(!isMobileView);
    //     };

    //     checkMobileView();
    //     window.addEventListener('resize', checkMobileView);

    //     return () => window.removeEventListener('resize', checkMobileView);
    // }, []);

    return (
        <div className={`sidebar min-h-screen transition-all duration-300 inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4 ${expanded ? 'w-64' : 'w-16'}`}>
            <div>
                <img 
                    onClick={() => setExpanded(prev => !prev)} 
                    src={assets.menu_icon} 
                    alt="" 
                    className='w-5 cursor-pointer block'
                />
                <div onClick={() => newChat()} className='inline-flex mt-10 items-center gap-2.5 py-2.5 px-4 cursor-pointer bg-[#e6eaf1] rounded-[50px] text-gray-500'>
                    <img src={assets.plus_icon} alt="" className='w-5' />
                    {expanded && <p>New Chat</p>}
                </div>
                {expanded && (
                    <div className='flex flex-col'>
                        <p className='mt-8 mb-5'>Recent</p>
                        {prevPrompt.map((prompt, index) => (
                            <div 
                                key={index}
                                onClick={() => loadPrompt(prompt)} 
                                className='flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'
                            >
                                <img src={assets.message_icon} alt="" className='w-5' />
                                <p className="truncate">{prompt}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-1 mb-2'>
                {['Help', 'Activity', 'Settings'].map((item, index) => (
                    <div key={index} className='flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                        <img 
                            src={assets[item.toLowerCase() === 'help' ? 'question_icon' : 
                                    item.toLowerCase() === 'activity' ? 'history_icon' : 'setting_icon']} 
                            alt="" 
                            className='w-5' 
                        />
                        {expanded && <p>{item}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;