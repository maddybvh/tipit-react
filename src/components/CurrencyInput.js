import React, { useContext } from 'react';
import AppContext from './AppContext';

export const CurrencyInput = ({ value, onChange, ...props}) => {
    const context = useContext(AppContext);
    const { colors } = context.useTheme();

    return (
    <React.Fragment>
        <div>$</div>
        <input 
            value={value}
            onChange={e => onChange(e.target.value)}
            />
    </React.Fragment>
  )}
