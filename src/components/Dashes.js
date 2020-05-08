import React, { useContext } from 'react';
import AppContext from './AppContext';


export const Dashes = () => {
  const theme = useContext(AppContext).theme;
  return (
    <img 
      src={(theme === 'light') ? require('../assets/dashes.svg') : require('../assets/dashes-white.svg')}
      alt='dashes'
      style={{maxWidth: 500, width: '100%'}}
      />
  )
}
