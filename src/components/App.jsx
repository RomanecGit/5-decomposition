import '../App.css'
import MainPage from './MainPage';
function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <MainPage/>
        </div>
    )
}

export default App
