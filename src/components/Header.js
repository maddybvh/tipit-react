import React from 'react';
import InfoModal from './InfoModal';
//import SettingsModal from './SettingsModal';
import { Title } from './Title';
import { Dashes } from './Dashes';

export const Header = () => (
  <React.Fragment>
    <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
      <InfoModal />
      <Title /> 
      <div></div>
      {/* <SettingsModal /> */}
    </div>
    <Dashes />
  </React.Fragment>
)


