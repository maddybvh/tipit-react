import React, {useContext} from 'react';
import AppContext from './AppContext';

export const PercentInput = ({ defaultValue, onChange, ...props}) => {
    const context = useContext(AppContext)
    const { colors } = context.useTheme()
    return (
        <React.Fragment>
            <input 
                defaultValue={defaultValue}
                onChange={e => onChange(e.target.value)}
                />
            <div>%</div>
        </React.Fragment>
    )
}
