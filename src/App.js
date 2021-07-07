import "./App.scss";

import Iphone from "./Components/Iphone/Iphone";
import Calculator from "./Components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <Iphone content={<Calculator />} />
    </div>
  );
}

export default App;
