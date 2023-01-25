import './App.css';

function App() {
  const handleClick = () => {
    console.log('Button Clicked');
  }
  return (
    <div className="App">
      <button onMouseMove={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
