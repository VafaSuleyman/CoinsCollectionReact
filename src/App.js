import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Coins from './Coins';
import Card from './component/Card'

function App() {
  return (
    <Router>
      <Routes>
          <Route  path="/" element={<Main/>} />
          <Route exact path="/coins" element={<Coins/>} />
          <Route path="/coins/:id" element={<Card/>} />
        </Routes>
    </Router>
  );
}

export default App;
