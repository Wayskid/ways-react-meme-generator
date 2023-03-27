import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ closeModal }) {
  return (
    <div
      className="modal absolute top-0 left-0 w-full h-full grid content-center bg-[#100018]/40 transition-all"
      onClick={closeModal}
    >
      <div className="instruction grid gap-4 bg-[#e7d0f0] w-82 mb-20 md:mb-0 md:w-96 justify-self-center relative p-5 text-slate-900 font-normal">
        <p className="text-xl  font-medium">Instructions</p>
        <button className="text-lg absolute top-2 right-3">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-xl cursor-pointer"
            onClick={closeModal}
          />
        </button>
        <ul className="grid gap-2 list-disc list-inside text-md">
          <li className="">Select preferred meme</li>
          <li className="">Add top and bottom texts</li>
          <li className="">Drags texts to their preferred position</li>
          <li className="">Choose text color</li>
          <li className="">Increase or decrease text size</li>
          <li className="">Download meme</li>
        </ul>
      </div>
    </div>
  );
}
