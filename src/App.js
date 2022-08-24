import "./App.css";
import DictionarySearch from "./DictionarySearch";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <DictionarySearch defaultKeyword="variety" />
        <footer className="App-footer text-center ">
          Coded by Nele Braun | open source on
          <a
            href="https://github.com/NelB82/react-dictionary"
            className="githubLink"
          >
            {" "}
            github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
