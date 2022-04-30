import { Route, Routes } from 'react-router-dom';
import { Container, Navbar } from './components';
import { Home, InProgress, NotFound, Setting } from './pages';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<InProgress />} />
        <Route path='/search' element={<InProgress />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
