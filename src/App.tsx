import AddToDo from "./components/AddToDo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"


const App = () => {
  return (
    <main>
    <h1>TODO REACT + TYPESCRIPT</h1>
    <Navbar />
    <AddToDo/>
    <Todos />
    </main>
  )
}

export default App