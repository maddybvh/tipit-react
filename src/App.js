import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
    for (i of tipArray) {
      let total = Number(i) + Number(billAmount);
      let n = total.toFixed(2);
      var result = new Result (billAmount, i, n)
      results.push(result)
    }

    return results;
  }

  //Outputs an array of palindromic tips and their corresponding palindromic totals, if any exist.
  function findPalTotals(billAmount, tipArray) {
    let i;
    var results = [];
    for (i of tipArray) {
      let total = Number(billAmount) + Number(i);
      let n = total.toFixed(2);
      if (palindrome(n.toString())) {
        const result = new Result (billAmount, i, n)
        results.push(result)        
      }
    }
    return results
  }

  function Result (bill, tip, total) {
    this.bill = bill
    this.tip = tip
    this.total = total
  }

  class Tipit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bill: '',
        tipLow: 18,
        tipHigh: 25,
        results: [],
        message: '',
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
      this.setState({[e.target.name]: parseFloat(e.target.value)}, function(){
        if (this.state.bill && this.state.tipLow && this. state.tipHigh && (this.state.tipLow <= this.state.tipHigh)){
          this.setState({'results': this.findResults()}) //necessary to pass this as a function here so that state is indeed updated
        }        
      });      
    }

    //Update the state based on the functions above
    findResults(){
      const bill = this.state.bill;
      const tipLow = this.state.tipLow;
      const tipHigh = this.state.tipHigh;

      const tipArray = findPalTips(bill, tipLow, tipHigh);
      const allTotalArray = arrayTipsAndTotals(bill, tipArray);
      const palTotalArray = findPalTotals(bill, tipArray);
      

      if (palTotalArray && palTotalArray.length) { //both tip & total are arrays
        this.setState({message: 'Woot! Both tip and total can be palidromes!'})
        return palTotalArray
      } else if (tipArray && tipArray.length) {
        this.setState({message: 'You can tip in palindrome!'})
        return allTotalArray
      }
    }

    renderTableData() {
      return this.state.results.map((result, index) => {
        const {bill, tip, total} = result //destructuring
        return (
            <tr key={tip}>
              <td key={bill}>${bill.toFixed(2)}</td>
              <td key={tip}>${tip.toFixed(2)}</td>
              <td key ={total}>${total}</td>
            </tr>
        )
      })
  }
     
    render() {
      return (
        <React.Fragment>
          <div className="container">
            <h1 className="text-center mt-4 ml-3">TipiT</h1>
            <fieldset className="form-group col-9 col-md-4 mx-auto">
              <div className="form-group row d-flex justify-content-center">
                <label className="col-form-label">
                  Bill:
                  <input
                  className="form-control form-control-lg" 
                  name="bill"
                  type="number" 
                  aria-label="bill" 
                  step=".01" 
                  min="0" 
                  value={this.state.bill} 
                  onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group row d-flex justify-content-center">
                <label className="col-form-label">
                  Tip - low:
                  <input
                  className="form-control"  
                  name="tipLow"
                  type="number" 
                  aria-label="tip - low" 
                  min="0" 
                  value={this.state.tipLow} 
                  onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group row d-flex justify-content-center">
                <label className="col-form-label">
                  Tip - high:
                  <input
                  className="form-control"  
                  name="tipHigh"
                  type="number" 
                  aria-label="tip - high" 
                  min="0" 
                  value={this.state.tipHigh} 
                  onChange={this.handleChange} />
                </label>
              </div>  
            </fieldset>
            <div className="text-center col-md-9 mx-auto">
              <div className="mb-2 ml-3">{this.state.message}</div>
              <table id='results' className="table">
                  <tbody>
                    <tr>
                      <th scope="col">Bill</th>
                      <th scope="col">Tip</th>
                      <th scope="col">Total</th>
                    </tr>
                    {this.renderTableData()}
                  </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>        
      );
    }
  }


  return (
    <React.Fragment>
      <Tipit />
    </React.Fragment>
  )
  
}

export default App;
