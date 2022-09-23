import { createContext, useState, useEffect } from "react"

const MemeGenContext = createContext()

export function MemeGenProvider({ children }){

    const [ memesData, setMemesData ] = useState([])
    const [ topText, setTopText ] = useState("Top Text Here")
    const [ bottomText, setBottomText ] = useState("Bottom Text Here")
    const [ memeUrl, setMemeUrl ] = useState("https://i.imgflip.com/3si4.jpg")

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setMemesData(data))
    }, [])

    function handleTopTextInput(e) {
        setTopText(e.target.value);
    }

    function handleBottomTextInput(e) {
        setBottomText(e.target.value);
    }

    
    function handleGenerateMeme(){
    const randNum = Math.floor(Math.random() * 100)
    setMemeUrl(memesData.data.memes[randNum].url)
    }



    return <MemeGenContext.Provider 
            value={{
                memesData,
                topText,
                bottomText,
                memeUrl,
                handleTopTextInput,
                handleBottomTextInput,
                handleGenerateMeme,
                setTopText,
                setBottomText,
            }}
        >
            {children}
        </MemeGenContext.Provider>
}

export default MemeGenContext;

