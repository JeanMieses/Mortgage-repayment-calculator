

function Form({ calculatorStyle }) {
    return <div className={calculatorStyle}>

        <div>
            <h1>Mortgage Calculator</h1>
            <button>Clear All</button>
        </div>

        <form>
            <label htmlFor="mortgateAmount">Mortgage Amount</label>
            <div><input id="mortgateAmount" type="number" /></div>

            <span>
                <label htmlFor="term">Mortgage Term</label>
                <input id="term" type="number" />
            </span>

            <span>
                <label htmlFor="rate">Interest Rate</label>
                <input id="rate" type="number" />
            </span>

            <div>
                <p>Mortgate Type </p>
                <br />
                <div>
                    <label htmlFor="repayment"></label>
                    <input id="repayment" name="mortgate-type" type="radio" value="repayment" />Repayment</div>

                <div>
                    <label htmlFor="interest"></label>
                    <input id="interest" name="mortgate-type" type="radio" value="interest" />Interest Only</div>

            </div>

            <button>Calculate Repayments</button>
        </form>
    </div>
}



export default Form;