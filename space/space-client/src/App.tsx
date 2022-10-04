
import './App.css';

function App() {
  const data = () => {
    fetch('http://localhost:3001/data',{}).then(response => response.json().then(data => console.log(data)));
  }
  data()
  return (
    <p>Check Console for Data</p>
  );
}

export default App;
