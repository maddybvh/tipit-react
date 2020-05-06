import React, { useContext } from 'react';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';

export const CurrencyInput = ({ value, onChange, ...props}) => {
    const context = useContext(AppContext);
    const { colors } = context.useTheme();

    return (
    <React.Fragment>
        <div style={{display: 'inline-flex', alignItems: 'center'}}>
            <span 
                className={styles.label}
                style={{marginRight: -20, zIndex: 1}}
                >
                $
            </span>
            <input
                style={{paddingLeft: 20}}
                value={value}
                onChange={e => onChange(e.target.value)}
                />
        </div>
    </React.Fragment>
  )}
