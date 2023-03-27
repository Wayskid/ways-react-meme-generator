import { MemeGenProvider } from "./context/MemeGenContext";
import Form from "./components/Form";
import MemeGenerated from "./components/MemeGenerated";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App() {
  //Instruction modal
  const [modalShown, setModalShown] = useState(true);

  function closeModal() {
    setModalShown(false);
  }

  return (
    <MemeGenProvider>
      <div className="grid md:flex md:h-[500px] bg-[#ba6ce7]">
        <Form />
        <MemeGenerated />
        {modalShown && <Modal closeModal={closeModal} />}
      </div>
    </MemeGenProvider>
  );
}
