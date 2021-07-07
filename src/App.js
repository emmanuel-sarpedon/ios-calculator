import "./App.scss";

import Iphone from "./Components/Iphone/Iphone";
import Calculator from "./Components/Calculator/Calculator";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Iphone content={<Calculator />} />
      <Footer />
    </div>
  );
}

export default App;
