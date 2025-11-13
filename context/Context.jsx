import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPromt, setRecentPromt] = useState("")
  const [previousPromt, setPreviousPromt] = useState([]);
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
 
  const onSend= async(prompt) => {
     main(input)
  }

  const contextValue = {
      input,setInput,recentPromt,setRecentPromt,setPreviousPromt,setShowResult,setLoading,previousPromt,showResult,loading,onSend
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
