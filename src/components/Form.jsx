import { exportComponentAsJPEG } from "react-component-export-image";
import { useContext, useRef } from "react";
import MemeGenContext from "../context/MemeGenContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  //Use Context
  const {
    text,
    setText,
    handleTextInput,
    handleGenerateMeme,
    chooseColor,
    memeImg,
    addSize,
    subSize,
  } = useContext(MemeGenContext);

  //Clear Input Field
  const topTextRef = useRef();
  const bottomTextRef = useRef();

  function clearTopInput() {
    setText((prev) => {
      return {
        ...prev,
        topText: "",
      };
    });
    topTextRef.current.focus();
  }

  function clearBottomInput() {
    setText((prev) => {
      return {
        ...prev,
        bottomText: "",
      };
    });
    bottomTextRef.current.focus();
  }

  return (
    <form className="grid gap-1 px-5 md:px-5 md:content-center md:w-[40%] py-2">
      <p className="text-center text-2xl font-semibold md:mb-5">
        Ways Meme Generator
      </p>
      <div className="flex items-center border-black border-[1.5px] gap-2 px-2">
        <input
          type="text"
          name="topText"
          onChange={handleTextInput}
          value={text.topText}
          ref={topTextRef}
          className="bg-transparent w-full text-lg focus:outline-none text-Fuchsia
                -900"
        />
        {text.topText && (
          <FontAwesomeIcon
            icon={faXmark}
            className="text-lg cursor-pointer"
            onClick={clearTopInput}
          />
        )}
      </div>
      <div className="flex items-center border-black border-[1.5px] gap-2 px-2">
        <input
          type="text"
          name="bottomText"
          onChange={handleTextInput}
          value={text.bottomText}
          ref={bottomTextRef}
          className="bg-transparent w-full text-lg focus:outline-none text-Fuchsia
                -900"
        />
        {text.bottomText && (
          <FontAwesomeIcon
            icon={faXmark}
            className="text-xl cursor-pointer"
            onClick={clearBottomInput}
          />
        )}
      </div>
      <button
        type="button"
        className="bg-[#340251] text-white text-md hover:bg-purple-900 transition py-1"
        onClick={handleGenerateMeme}
      >
        Generate New Meme
      </button>
      <div className="flex gap-2 justify-center text-md">
        <p>Text Color:</p>
        <input
          type="radio"
          name="color"
          className="appearance-none w-4 h-4 bg-white rounded-full cursor-pointer checked:scale-125"
          value="white"
          onClick={chooseColor}
        />
        <input
          type="radio"
          name="color"
          className="appearance-none w-4 h-4 bg-red-600 rounded-full cursor-pointer checked:scale-125"
          value="red"
          onClick={chooseColor}
        />
        <input
          type="radio"
          name="color"
          className="appearance-none w-4 h-4 bg-green-600 rounded-full cursor-pointer checked:scale-125"
          value="green"
          onClick={chooseColor}
        />
        <input
          type="radio"
          name="color"
          className="appearance-none w-4 h-4 bg-blue-600 rounded-full cursor-pointer checked:scale-125"
          value="blue"
          onClick={chooseColor}
        />
        <input
          type="radio"
          name="color"
          className="appearance-none w-4 h-4 bg-black rounded-full cursor-pointer checked:scale-125"
          value="black"
          onClick={chooseColor}
        />
      </div>
      <div className="flex gap-2 justify-center text-md items-center">
        <p className="">Text Size:</p>
        <button
          className="text-[#340251] text-lg hover:text-purple-900 transition px-2 py- inline"
          type="button"
        >
          <FontAwesomeIcon
            icon={faMinusSquare}
            className="text-lg cursor-pointer"
            onClick={subSize}
          />
        </button>
        <button
          className="text-[#340251] text-lg hover:text-purple-900 transition px-2 py- inline"
          type="button"
        >
          <FontAwesomeIcon
            icon={faPlusSquare}
            className="text-lg cursor-pointer"
            onClick={addSize}
          />
        </button>
      </div>
      <button
        className="bg-[#340251] text-white text-md hover:bg-purple-900 transition py-1"
        type="button"
        onClick={() => exportComponentAsJPEG(memeImg, { fileName: "newMeme" })}
      >
        Save Meme
      </button>
    </form>
  );
}
