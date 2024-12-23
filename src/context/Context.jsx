import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{
    
    const [input,setInput] = useState("")
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPrompt,setPrevPrompt] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")

    const delaypPara = (index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index)
    }

    const newChat = ()=>{
        setShowResult(false)
        setResultData("")
        setLoading(false)
    }

    const card_func = (prompt)=>{
        setInput(prompt)
        onSent(prompt)
        setPrevPrompt(prev=>[...prev,prompt])
        setRecentPrompt(prompt)
    }

    const onSent = async (prompt)=>{
        setResultData("")
        setLoading(true)
        setShowResult(true) 
        let response;
        if(prompt!==undefined){
            response = await run(prompt)
            setRecentPrompt(prompt)   
        }else{
            setPrevPrompt(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        // setRecentPrompt(input)
        // setPrevPrompt(prev=>[...prev,input])
        // const response = await run(input)
        let response_arr = response.split("**")
        let newArray="";
        for(let i = 0;i < response_arr.length;i++){
            if(i === 0 || i%2 !== 1){
                newArray += response_arr[i]
            }else{
                newArray += "<b>" + response_arr[i] + "</b>"
            }
        }
        let new_response = newArray.split("*").join("<br/>")
        let new_response_2 = new_response.split(" ")
        for (let index = 0; index < new_response_2.length; index++) {
            const element = new_response_2[index];
            delaypPara(index,element+" ")
            
        }
        // setResultData(new_response)
        setLoading(false)
        setInput("")

    }
    
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,recentPrompt,
        showResult,
        loading,resultData,
        input,
        setInput,
        newChat,
        card_func
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider