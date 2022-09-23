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
      <div className="chooseColor">
        <p>Text Color:</p>
        <input type="radio"  name="color" className="white" value="white" onClick={chooseColor}/>
        <input type="radio"  name="color" className="red" value="red" onClick={chooseColor}/>
        <input type="radio"  name="color" className="green" value="green" onClick={chooseColor}/>
        <input type="radio"  name="color" className="blue" value="blue" onClick={chooseColor}/>
        <input type="radio"  name="color" className="black" value="black" onClick={chooseColor}/>
      </div>
      <section>
          <img src={memeUrl} className="memeImg" />
          <p className="topText" style={{color: textColor}}>{topText}</p>
          <p className="bottomText" style={{color: textColor}}>{bottomText}</p>
      </section>
    </>
  )
}
