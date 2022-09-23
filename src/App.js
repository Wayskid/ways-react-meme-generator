import { MemeGenProvider } from "./context/MemeGenContext";
import Form from "./components/Form";
import MemeGenerated from "./components/MemeGenerated";


export default function App() {
  return (
    <MemeGenProvider>
      <div className="containerBody">
        <h1>Ways Meme Generator</h1>
        <Form />
        <MemeGenerated />
      </div>
    </MemeGenProvider>
  );
}


