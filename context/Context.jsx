import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const delaypara=(index,nextword)=>{

  }
  const [input, setInput] = useState("");
  const [recentPromt, setRecentPromt] = useState("")
  const [previousPromt, setPreviousPromt] = useState([]);
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState("")
 
  const onSend= async(prompt) => {
  
     setResultData("")
     setRecentPromt(input)
    setLoading(true)
     setShowResult(true)
    const response=await  main(input)
    let responseArray=response.split("**");
    let newArray;
    for (let i=0;i<responseArray.length;i++) {
      if (i===0||i%2!==1) {
        newArray+=responseArray[i]
      }
      else{
        newArray+="<b>"+responseArray[i]+"</b>"
      }
    }
    let newArray2=newArray.split("*").join("</br>")
    setResultData(newArray2)
    setLoading(false)
    setInput("")
     
  }

  const contextValue = {
      input,setInput,recentPromt,setRecentPromt,setPreviousPromt,setShowResult,setLoading,previousPromt,showResult,loading,onSend,resultData
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
