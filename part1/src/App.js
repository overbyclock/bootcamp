import './App.css';
import Msg from './Msg';

function App() {
  return (
    <div className="App">
      <Msg color="red" msg='Hello World'></Msg>
      <Msg color="green" msg='We are working'></Msg>
      <Msg color="grey" msg='in a course'></Msg>
      <Msg color="purple" msg='of the React framework'></Msg>
    </div>
  )
}

export default App;
