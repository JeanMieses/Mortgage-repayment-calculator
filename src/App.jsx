import { useState } from 'react';
import classes from './App.module.css';
import Form from './Components/Form';
import Result from './Components/Result';

function App() {

  const [mortgatePayment, setMortgatePayment] = useState({
    mortgateAmount: '',
    terms: '',
    interestRate: ''
  })


  console.log(mortgatePayment)

  return (
    <main>
      <Form
        calculatorStyle={classes.calculator} 
        mortgatePayment={mortgatePayment}
        setMortgatePayment={setMortgatePayment}/>
      <Result resultStyle={classes.result} />
    </main>
  )
}

export default App


