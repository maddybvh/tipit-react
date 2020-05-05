import React, {useContext} from 'react';
import AppContext from './AppContext';

export const PercentInput = ({ defaultValue, onChange, ...props}) => {
    const context = useContext(AppContext)
    const { colors } = context.useTheme()
    return (
        <React.Fragment>
            <input 
                keyboardType={'numeric'}
                defaultValue={defaultValue}
                onChangeText={onChange}
                />
            <div>%</div>
        </React.Fragment>
    )
}
