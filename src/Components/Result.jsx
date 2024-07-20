import { useState } from 'react';
import classes from './Result.module.css';

function Result({repayment}) {
    const [showResult, setShowResult] = useState(false);
    


    return <div className={classes.result}>
        <div>
            <img src='./../assets/images/illustration-empty.svg' />
            <h2>Results shown here</h2>
            <p>Complete the form and click "calculate repayments" to</p>
            <p>see what your monthly repayments would be</p>
            <h1>{repayment}</h1>
        </div>
    </div>
}


export default Result;