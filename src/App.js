import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';

function App() { //App isimli bir komponent arıyor.
  return ( 
    //className="App" ile app isminde bir css arıyor.
    <div className="App">  
      <Navi/>
      <Container className="main">
         <Dashboard/>
      </Container>    
    </div>
  );
}

export default App;

// div kısmına jsx deniyor. x=> xml den geliyor.
