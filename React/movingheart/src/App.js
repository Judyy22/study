import logo from "./logo.svg";
import "./App.css";
import Heart from "./components/Heart";
import Character from "./components/Character";
import Test from "./components/Test";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <Heart /> */}
                <Character />
                {/* <Test /> */}
            </header>
        </div>
    );
}

export default App;
