import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListArticles from "./components/ListArticles";
import AddArticles from "./components/AddArticles";
import EditArticles from "./components/EditArticles";
import ListCards from './components/clientSide/ListCards';
import Menu from "./components/Menu";

function App() { 
  return ( 
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<ListArticles />} />
        <Route path="/liste" element={<ListArticles />} />
        <Route path="/add" element={<AddArticles />} />
        <Route path="/edit/:id" element={<EditArticles />} /> 
        <Route path='/' element={<ListCards/>}/>
      </Routes>
    </Router>
  );
}

export default App;