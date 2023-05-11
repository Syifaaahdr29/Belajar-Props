import Navbar from "./component/navbar"
import "./App.css"
import Card from "./component/Card"
import ListDigimon from "./component/ListDigimon"
import Profile from "./component/Profile"

function App() {
  return (
    <> 
    <Navbar />

    <Profile />

    <main>
      <ListDigimon />
    </main>

    <footer>

    </footer>
    </>
  )
}

export default App;
