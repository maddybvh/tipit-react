import React, { useContext } from 'react';
import AppContext from './AppContext';


export const Dashes = () => {
  const theme = useContext(AppContext).theme;
  return (
    <img 
      source={
         (theme == 'light') ? require('../assets/dashes.png') : require('../assets/dashes-white.png')
      }
      style={{marginTop: 10, marginBottom: 10, width: '100%'}} />
  )
}

