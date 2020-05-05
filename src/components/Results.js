import React, { useContext } from 'react';
import AppContext from './AppContext';

export const Results = ({results}) =>  {    
    const context = useContext(AppContext)
    const { colors } = context.useTheme()

    const renderTableData = () => {
        
        return results.map((result, index) => {
          const {bill, tip, total} = result //destructuring
          return (
              <tr key={tip}>
                <td key={bill}>${bill}</td>
                <td key={tip}>${tip}</td>
                <td key ={total}>${total}</td>
              </tr>
          )
        })
    }

    return (
        <table id='results' className="table">
            <tbody>
            <tr>
                <th scope="col">Bill</th>
                <th scope="col">Tip</th>
                <th scope="col">Total</th>
            </tr>
            {renderTableData()}
            </tbody>
        </table>
    );
}
