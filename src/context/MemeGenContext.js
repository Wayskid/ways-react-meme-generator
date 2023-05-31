import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";

const MemeGenContext = createContext();

export function MemeGenProvider({ children }) {
  //Meme API
  const [memesData, setMemesData] = useState([]);
  const [memeUrl, setMemeUrl] = useState("https://i.imgflip.com/3si4.jpg");

  useEffect(() => {
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((response) => response.json())
    //   .then((data) => setMemesData(data));

    async function getMemes() {
      try {
        const { data } = await axios.get("https://api.imgflip.com/get_memes");
        setMemesData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getMemes();
  }, []);

  //Texts on Meme
  const [text, setText] = useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
  });

  function handleTextInput(e) {
    setText((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  //Generate Meme Button
  function handleGenerateMeme() {
    const randNum = Math.floor(Math.random() * 100);
    setMemeUrl(memesData.data.memes[randNum].url);
  }

  //Choose Text Color
  const [textColor, setTextColor] = useState("black");

  function chooseColor(e) {
    setTextColor(e.target.value);
  }

  //Choose Text Size
  const [textSize, setTextSize] = useState(25);

  function addSize() {
    if (textSize < 40) {
      setTextSize(textSize + 1);
    }
  }

  function subSize() {
    if (textSize > 14) {
      setTextSize(textSize - 1);
    }
  }

  //Download meme
  const memeImg = useRef();

  return (
    <MemeGenContext.Provider
      value={{
        memesData,
        text,
        setText,
        handleTextInput,
        memeUrl,
        handleGenerateMeme,
        chooseColor,
        textColor,
        memeImg,
        textSize,
        addSize,
        subSize,
      }}
    >
      {children}
    </MemeGenContext.Provider>
  );
}

export default MemeGenContext;
