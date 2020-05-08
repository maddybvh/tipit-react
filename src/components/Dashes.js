import React, { useContext } from 'react';
import AppContext from './AppContext';
import { colors } from '../theme';


export const Dashes = () => {
  const context = useContext(AppContext)
  const theme = context.theme;
  const { colors } = context.useTheme()

  return (
    <img 
      src={(theme === 'light') ? require('../assets/dashes.svg') : require('../assets/dashes-white.svg')}
      alt='dashes'
      style={{maxWidth: 500, width: '100%', paddingTop: 10, paddingBottom: 10, backgroundColor: colors.background}}
      />
  )
}
