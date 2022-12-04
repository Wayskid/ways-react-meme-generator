import { useContext, useState } from "react"
import MemeGenContext from "../context/MemeGenContext"

export default function MemeGenerated() {

    const {
        memeUrl,
        topText,
        bottomText
    } = useContext(MemeGenContext)

    //Choose Text Color
    const [textColor, setTextColor] = useState("black")

    function chooseColor(e) {
      setTextColor(e.target.value)
    }
    
  return (
    <>
      <div className="flex gap-2 justify-center">
        <p>Text Color:</p>
        <input type="radio"  name="color" className="appearance-none w-5 h-5 bg-white rounded-full cursor-pointer checked:scale-125" value="white" onClick={chooseColor}/>
        <input type="radio"  name="color" className="appearance-none w-5 h-5 bg-red-600 rounded-full cursor-pointer checked:scale-125" value="red" onClick={chooseColor}/>
        <input type="radio"  name="color" className="appearance-none w-5 h-5 bg-green-600 rounded-full cursor-pointer checked:scale-125" value="green" onClick={chooseColor}/>
        <input type="radio"  name="color" className="appearance-none w-5 h-5 bg-blue-600 rounded-full cursor-pointer checked:scale-125" value="blue" onClick={chooseColor}/>
        <input type="radio"  name="color" className="appearance-none w-5 h-5 bg-black rounded-full cursor-pointer checked:scale-125" value="black" onClick={chooseColor}/>
      </div>
      <section className="flex justify-center px-2 relative h-96">
          <img src={memeUrl} className="w-full" alt="meme"/>
          <p className="absolute top-0 text-3xl font-bold" style={{color: textColor}}>{topText}</p>
          <p className="absolute bottom-0 text-3xl font-bold" style={{color: textColor}}>{bottomText}</p>
      </section>
    </>
  )
}
