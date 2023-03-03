import logo from './logo.svg';
import './App.css';
import ComponentA from './components/componentA';
import { Contact } from './components/models/contact.class';

function App() {

  const datos = new Contact ('Brian', 'Grijalba', 'bkg@gmail.com', false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ComponentA contact={datos}></ComponentA>

      </header>
    </div>
  );
}

export default App;
