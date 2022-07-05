import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Hello from App
      <ul>
        <li>
          <Link to = "/WaldoMain"> Waldo Page </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
