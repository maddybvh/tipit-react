import React, { useContext, useState, useEffect } from 'react';
import { CurrencyInput } from './CurrencyInput';
import { PercentInput } from './PercentInput';
import { Dashes } from './Dashes';
import { Results } from './Results';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';

let resultID = 0;

//Determine if a string is a palindrome
function palindrome(str) {
    var re = '.';
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr
      .split('')
      .reverse()
      .join('');
    return reverseStr === lowRegStr;
  }

// Returns an array of palindromes between numLow and numHigh
function palindromeArray(numLow, numHigh) {
  var palindromeArray = [];
  for (let i = numLow; i <= numHigh; i += 0.01) {
    let n = i.toFixed(2);
    if (palindrome(n.toString())) {
      palindromeArray.push(parseFloat(n));
    }
  }
  return palindromeArray;
}

//Output all possible palindromic tips within the given parameters.
function findPalTips(billAmount, tipPercentLow, tipPercentHigh) {
  const tipArray = palindromeArray(
    billAmount * tipPercentLow * 0.01,
    billAmount * tipPercentHigh * 0.01
  );
  return tipArray;
  }

//Create an array with all totals with palindrome tips
function arrayTipsAndTotals(billAmount, tipArray) {
  let i;
  var results = [];
  let stringBill = billAmount.toFixed(2).toString();
  for (i of tipArray) {
    let total = Number(i) + Number(billAmount);
    let stringTip = i.toFixed(2).toString();
    let stringTotal = total.toFixed(2).toString();
    var result = new Result (resultID.toString(), stringBill, stringTip, stringTotal)
    results.push(result)
    resultID += 1;
  }
  return results;
}

//Outputs an array of palindromic tips and their corresponding palindromic totals, if any exist.
function findPalTotals(billAmount, tipArray) {
  let i;
  var results = [];
  let stringBill = billAmount.toFixed(2).toString()
  for (i of tipArray) {
      let total = Number(billAmount) + Number(i);
      let stringTotal = total.toFixed(2).toString()
      let stringTip = i.toFixed(2).toString();
      if (palindrome(stringTotal)) {
          const result = new Result (resultID.toString(), stringBill, stringTip, stringTotal)
          results.push(result)
      }
      resultID += 1;
  }
  return results
}

function Result (id, bill, tip, total) {
    this.id = id
    this.bill = bill
    this.tip = tip
    this.total = total
}


export const Calculator = () => {
  const context = useContext(AppContext)
  const { colors } = context.useTheme()
  
  const [tipLow, setTipLow] = useState(context.defaultTipLow);
  const [tipHigh, setTipHigh] = useState(context.defaultTipHigh);
  const [bill, setBill] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  
  const handleBill = (text) => {
    setBill(text);
  }
  
  const handleTipLow = (text) => {
    setTipLow(text);
  }
  const handleTipHigh = (text) => {
    setTipHigh(text)
  }
  const clearTable = () => {
    setMessage('');
  }
  const clearAll = () => {
    setBill('');
    clearTable();
  }

  //Update the state based on the functions above
  const findResults = () => {
    const billFloat = parseFloat(bill);
    const tipLowFloat = parseFloat(tipLow);
    const tipHighFloat = parseFloat(tipHigh);

    if (billFloat && tipLowFloat && tipHighFloat && tipLowFloat <= tipHighFloat){

      const tipArray = findPalTips(billFloat, tipLowFloat, tipHighFloat);
      const allTotalArray = arrayTipsAndTotals(billFloat, tipArray);
      const palTotalArray = findPalTotals(billFloat, tipArray);
      
      if (palTotalArray && palTotalArray.length) { //both tip & total are arrays
          setMessage('Woot! There are ' + palTotalArray.length + ' ways for the tip AND total to be palindromes!');
          return palTotalArray
      } else if (tipArray && tipArray.length) {
          setMessage('You can tip in ' + tipArray.length + ' palindromes!');
          return allTotalArray
      }
    }
    else return []
  }

  useEffect(() => {
    setResults(findResults)
  }, [bill, tipLow, tipHigh])

  return (
    <React.Fragment>                         
        <div className={styles.inputRow}>
          <div style={{textAlign: "left"}}>
            <div className={styles.label}>Your Bill:</div>
            <div className={styles.helper}>Pre-tip amount</div>
          </div>
          <CurrencyInput
            label='Bill'
            value={bill}
            onChange={handleBill}
          />
        </div>
        <div className={styles.inputRow} style={{marginTop: 20}}>
            <div style={{textAlign: "left"}}>
              <div className={styles.label}>Tip Range:</div>
              <div className={styles.helper}>Low to high</div>
            </div>
            <div className={styles.inputGroup} style={{marginRight: 8}}>
                <PercentInput
                    defaultValue={context.defaultTipLow}
                    onChange={handleTipLow}
                />
                <div className={styles.normalText} style={{paddingLeft: 15, paddingRight: 5}}>to</div>
                <PercentInput
                    defaultValue={context.defaultTipHigh}
                    onChange={handleTipHigh}
                />                
            </div>
          </div>
          <React.Fragment>
            {/* If there are results, print the message and clear button. */}
            {results.length > 0 &&
                <div className={styles.inputRow} style={{alignItems: 'flex-start'}}>
                    <div className={styles.normalText} style={{paddingTop: 10}}>
                      {message}
                    </div>
                    <button 
                      onClick={clearAll}
                      className={styles.clearButton} >
                        X Clear
                    </button>
                </div>
                }
          </React.Fragment>
          <React.Fragment >
            <Dashes />
            <Results results={results}/>
          </React.Fragment>               
    </React.Fragment>
    );
  }
