import { useState } from 'react';
import classes from './Result.module.css';

function Result({ repayment, showResult, terms }) {
    
    let repaymentInDollar = new Intl.NumberFormat().format(repayment);
    let TotalRepaymentInDollar = new Intl.NumberFormat().format((12*terms) * repayment);

    return <div className={classes.result}>
        {!showResult && <div>
            <img src='./../assets/images/illustration-empty.svg' />
            <h2>Results shown here</h2>
            <p>Complete the form and click "calculate repayments" to</p>
            <p>see what your monthly repayments would be</p>

        </div>}

        {showResult && <div>
            <h2>Your results</h2>
            <p>Your result are shown below based on the information</p>
            <p>you provided. To adjust the result, edit the form and</p>
            <p>click "calculate repayments" again.</p>
            <br/>

            <div>
                <div>
                    <p>Your monthly repayment</p>
                    <h3>${repaymentInDollar}</h3>
                </div>

                <div>
                    <p>Total you'll repay over the term</p>
                    <h3>{TotalRepaymentInDollar}</h3>
                </div>

            </div>
        </div>}

    </div>
}


export default Result;