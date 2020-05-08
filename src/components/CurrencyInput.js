import React, { useContext } from 'react';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';

export const CurrencyInput = ({ value, onChange, ...props}) => {
    const context = useContext(AppContext);
    const { colors } = context.useTheme();

    return (
    <React.Fragment>
        <div style={{display: 'inline-flex', alignItems: 'center', color: colors.text}}>
            <span 
                className={styles.label}
                >
                $
            </span>
            <input
                style={{paddingLeft: 5, backgroundColor: colors.background, color: colors.text}}
                type="number"
                min="0"
                max="10000"
                step=".01"
                value={value}
                onChange={e => onChange(e.target.value)}
                />
        </div>
    </React.Fragment>
  )}
