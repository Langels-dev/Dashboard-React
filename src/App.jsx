import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RighSide from "./components/RightSide/RighSide";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RighSide />
      </div>
    </div>
  );
}

export default App;
