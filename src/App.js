import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SinglePage from './SinglePagePortfolio/SinglePage';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className='projectContainer'>
      <SinglePage />
    </Container>
  );
}

export default App;
