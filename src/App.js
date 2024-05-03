import { Link } from 'react-router-dom';
import './App.css'; // Import your custom CSS

function App() {
  return (
    <div className="App">
      <h1>Welcome to our Blog!!!</h1>
      <Link to="/dashboard" className="Link">
        Click here to view all blogs
      </Link>
    </div>
    
  );
}

export default App;
