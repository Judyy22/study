import logo from "./logo.svg";
import "./App.css";
import Heart from "./components/Heart";
import Character from "./components/Character";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <Heart /> */}
                <Character />
            </header>
        </div>
    );
}

export default App;
