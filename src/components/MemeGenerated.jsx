import Draggable from "react-draggable";
import { useContext, useRef } from "react";
import MemeGenContext from "../context/MemeGenContext";

export default function MemeGenerated() {
  //Use context
  const { memeUrl, text, textColor, textSize, memeImg } =
    useContext(MemeGenContext);

  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);

  return (
    <section
      className="flex justify-center relative md:h-full h-[22rem] md:w-[60%]"
      ref={memeImg}
    >
      <img src={memeUrl} className="h-full w-full" alt="meme" />
      <Draggable nodeRef={nodeRef} bounds="parent">
        <p
          className={`absolute top-0 font-bold`}
          style={{ color: textColor, fontSize: `${textSize}px` }}
          ref={nodeRef}
        >
          {text.topText}
        </p>
      </Draggable>
      <Draggable nodeRef={nodeRef2} bounds="parent">
        <p
          className="absolute bottom-0  font-bold"
          style={{ color: textColor, fontSize: `${textSize}px` }}
          ref={nodeRef2}
        >
          {text.bottomText}
        </p>
      </Draggable>
    </section>
  );
}

//Instruction popup
