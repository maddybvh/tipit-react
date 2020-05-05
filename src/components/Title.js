import React, { useContext } from 'react';
import AppContext from './AppContext';

export const Title = () => {
  const context = useContext(AppContext)
  const { colors } = context.useTheme()
  return (
    <React.Fragment>
      <div>tipit</div> 
    </React.Fragment>
)}

