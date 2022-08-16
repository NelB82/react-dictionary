import "./App.css";
import DictionarySearch from "./DictionarySearch";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <DictionarySearch defaultKeyword="variety" />
        <footer className="App-footer text-center ">
          <div>Coded by Nele Braun | open sourced on</div>

          <a
            href="https://github.com/NelB82/react-dictionary"
            className="githubLink"
          >
            githubs
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
