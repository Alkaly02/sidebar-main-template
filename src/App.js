import Main from "./components/Main";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main>
        <h1>Je suis MAIN</h1>
      </Main>
    </div>
  );
}

export default App;
