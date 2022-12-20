import './App.css'
import Editor from './screens/Editor';
import ResizeableMobile from './components/ResizeableMobile/ResizeableMobile';
import ComponentsScreen from './screens/ComponentsScreen';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ComponentsScreen/>} />
        <Route path="/editor" element={<Editor/>} />
      </Routes>
    </Router>
  )
}

export default App
