import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./message";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Message></Message>
    </div>
  );
}

export default App;
