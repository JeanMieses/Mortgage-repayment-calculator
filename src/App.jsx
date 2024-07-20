import { useState } from 'react';
import classes from './App.module.css';
import Form from './Components/Form';
import Result from './Components/Result';

function App() {
  const[repayment, setRepayment] = useState(0)
  const [mortgatePayment, setMortgatePayment] = useState({
    mortgateAmount: '',
    terms: '',
    interestRate: ''
  })

  function calculateRepayment() {
    const {mortgateAmount, terms, interestRate} = mortgatePayment
    let repayment =  mortgateAmount * (interestRate / 100 / 12) * (Math.pow(1 + (interestRate / 100 / 12), terms * 12)) / (Math.pow(1 + (interestRate / 100 / 12), terms * 12) - 1);
    setRepayment(repayment.toFixed(2))
  }

  return (
    <main>
      <Form
        calculateRepayment={calculateRepayment}
        calculatorStyle={classes.calculator} 
        mortgatePayment={mortgatePayment}
        setMortgatePayment={setMortgatePayment}/>
      <Result repayment={repayment} />
    </main>
  )
}

export default App
