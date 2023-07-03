import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Detail from './Detail'
import Wrapper from './Wrapper'
import Col from './Col';
import Page from "./Page";


function App() {
  const sayHello = () => {
    alert('Hello World!')
  }
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home sayHello={sayHello} />} />
        <Route path='/page' element={<Wrapper>
          <Col />
          <Route path='/detail/:id' element={<Detail />} />
        </Wrapper>} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
