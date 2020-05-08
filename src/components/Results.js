import React, { useContext } from 'react';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';


export const Results = ({results}) =>  { 
    const context = useContext(AppContext)
    const { colors } = context.useTheme()
    

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
        <div className={styles.tableWrapper}>
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
        </div>
    );
}
