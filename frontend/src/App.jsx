import "./App.css";
import Moviecard from "./components/Moviecard";

function App() {
  return (
    <div>
      <Moviecard movie={{ title: "Tim's Film", release_date: "2024" }} />
    </div>
  );
}

export default App;
