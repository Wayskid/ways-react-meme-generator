import { useContext, useState } from "react"
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
    <form>
        <div>
            <input
                placeholder="Top Text"
                type="text"
                onChange={handleTopTextInput}
                value={topText}
            />
            {topText && <FontAwesomeIcon 
                icon={faXmark} className="clearBtn" 
                onClick={()=>{clearInput(setTopText)}}
            />}
        </div>
        <div>
            <input
                placeholder="Bottom Text"
                type="text"
                onChange={handleBottomTextInput}
                value={bottomText}
            />
            {bottomText && <FontAwesomeIcon 
                icon={faXmark} className="clearBtn" 
                onClick={()=>{clearInput(setBottomText)}}
            />}
        </div>
        <button 
            type="button" 
            className="generateBtn" 
            onClick={handleGenerateMeme}
        >Generate New Meme</button>
    </form>
  )
}
