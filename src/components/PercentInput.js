import React, {useContext} from 'react';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';

export const PercentInput = ({ defaultValue, onChange, ...props}) => {
    const context = useContext(AppContext)
    const { colors } = context.useTheme()
    return (
        <React.Fragment>
            <input
                className={styles.input} 
                style={{maxWidth: 40, paddingRight: 20, textAlign: 'right'}}
                defaultValue={defaultValue}
                onChange={e => onChange(e.target.value)}
                />
            <span className={styles.label} style={{marginLeft: -20}}>%</span>
        </React.Fragment>
    )
}
