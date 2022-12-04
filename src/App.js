import { MemeGenProvider } from "./context/MemeGenContext";
import Form from "./components/Form";
import MemeGenerated from "./components/MemeGenerated";


export default function App() {
  return (
    <MemeGenProvider>
      <div className="container grid gap-5 py-3">
        <h1 className="text-center text-3xl font-semibold">Ways Meme Generator</h1>
        <Form />
        <MemeGenerated />
      </div>
    </MemeGenProvider>
  );
}


