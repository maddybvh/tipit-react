import React, { useContext } from 'react';
import AppContext from './AppContext';


export const Dashes = () => {
  const theme = useContext(AppContext).theme;
  return (
    <img 
      src={require('../assets/dashes.svg')}
        //  (theme == 'light') ? require('../assets/dashes.png') : require('../assets/dashes-white.png')
      alt='dashes'
      //style={{marginTop: 10, marginBottom: 10, width: '100%'}} 
      style={{width: '100%'}}
      ></img>
  )
}
