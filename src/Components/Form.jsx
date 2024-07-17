import classes from './Form.module.css';

function Form() {
    return <div className={classes.calculator}>

        <div className={classes.title}>
            <h1>Mortgage Calculator</h1>
            <button>Clear All</button>
        </div>

        <form>
            <div className={classes.amount}>

                <label htmlFor="mortgateAmount">Mortgage Amount</label>
                <br />
                <div>
                    <span>$</span>
                    <input placeholder='50,000' id="mortgateAmount" type="number" />
                </div>
            </div>

            <div className={classes.termAndRate}>
                <div>
                    <label htmlFor="term">Mortgage Term</label>
                    <div>
                        <input id="term" type="number" />
                        <p>years</p></div>
                </div>

                <div>
                    <label htmlFor="rate">Interest Rate</label>
                    <div>
                        <input id="rate" type="number" />
                        <p>%</p>
                    </div>


                </div>
            </div>



            <div className={classes.mortgateType}>
                <h2>Mortgate Type </h2>
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