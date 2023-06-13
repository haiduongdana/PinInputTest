import { PinInput } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <PinInput
        length={6}
        label="Pin Input"
        value=""
        allowedCharacters="numeric"
        error
        helperText="helper text"
      />
    </div>
  );
}

export default App;
