import React from 'react';

export const Results = ({results}) =>  {    
    const renderTableData = () => {
        
        return results.map((result) => {
          const {bill, tip, total} = result //destructuring
          return (
              <tr key={tip}>
                <td key={bill} style={{textAlign: 'left'}}>${bill} + </td>
                <td key={tip} style={{textAlign: 'left'}}>${tip}</td>
                <td key ={total} style={{textAlign: 'right'}}>= ${total}</td>
              </tr>
          )
        })
    }

    return (
        <table>
            <tbody>
            <tr>
                <th scope="col" style={{textAlign: 'left'}}>Bill</th>
                <th scope="col" style={{textAlign: 'left'}}>Tip</th>
                <th scope="col" style={{textAlign: 'right'}}>Total</th>
            </tr>
            {renderTableData()}
            </tbody>
        </table>
    );
}
