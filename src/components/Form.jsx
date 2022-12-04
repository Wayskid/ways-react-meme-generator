import { useContext } from "react"
import MemeGenContext from "../context/MemeGenContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Form() {

    const { handleTopTextInput, 
            handleBottomTextInput,  
            topText,
            bottomText,
            handleGenerateMeme,
            setTopText,
            setBottomText
        } = useContext(MemeGenContext)

    
    //Clear Input Field
    function clearInput(setFieldText) {
        setFieldText("")
    }

  return (
    <form className="grid gap-3 px-5">
        <div className="flex items-center border-black border-2 gap-2 px-2 rounded-lg">
            <input
                type="text"
                onChange={handleTopTextInput}
                value={topText}
                className="bg-transparent w-full text-xl py-1 focus:outline-none text-Fuchsia
                -900"
            />
            {topText && <FontAwesomeIcon 
                icon={faXmark} className="text-xl cursor-pointer" 
                onClick={()=>{clearInput(setTopText)}}
            />}
        </div>
        <div className="flex items-center border-black border-2 gap-2 px-2 rounded-lg">
            <input
                type="text"
                onChange={handleBottomTextInput}
                value={bottomText}
                className="bg-transparent w-full text-xl py-1 focus:outline-none text-Fuchsia
                -900"
            />
            {bottomText && <FontAwesomeIcon 
                icon={faXmark} className="text-xl cursor-pointer" 
                onClick={()=>{clearInput(setBottomText)}}
            />}
        </div>
        <button 
            type="button" 
            className="bg-[#340251] text-white py-2 rounded-lg text-xl hover:bg-purple-900 transition" 
            onClick={handleGenerateMeme}
        >Generate New Meme</button>
    </form>
  )
}
