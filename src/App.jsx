import classes from './App.module.css';
import Form from './Components/Form';
import Result from './Components/Result';

function App() {
  return (
    <main>
      <Form calculatorStyle={classes.calculator} />
      <Result resultStyle={classes.result} />
    </main>
  )
}

export default App
