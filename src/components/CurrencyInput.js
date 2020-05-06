import React, { useContext } from 'react';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';

export const CurrencyInput = ({ value, onChange, ...props}) => {
    const context = useContext(AppContext);
    const { colors } = context.useTheme();

    return (
    <React.Fragment>
        <div style={{display: 'inline-flex'}}>
            <span 
                className={styles.label}
                style={{marginRight: -30}}>
                $
            </span>
            <input
                className={styles.input}
                style={{paddingLeft: 30}}
                value={value}
                onChange={e => onChange(e.target.value)}
                />
        </div>
    </React.Fragment>
  )}


//   <input style="padding-right:20px; text-align:right;" value="50"></input><span style="margin-left:-20px;">lb</span>