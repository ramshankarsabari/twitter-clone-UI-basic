import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widget from "./Widget";

function App() {
  return (
    //BEM convention className smaller_Case
    <div className="app">
      {/* SideBar */}
      <SideBar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widget />
    </div>
  );
}

export default App;
