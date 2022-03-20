import './App.css';
import Heading from './components/Heading';
import Text from './components/Text';

function App() {
  return (
    <div className="App" >
      
      <Heading name='Andres' />
      
      <Heading name='Tommy' />
      
      <Text text='Welcome to The Innovation Hub!' />

    </div>
  );
}

export default App;