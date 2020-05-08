import React from 'react';
import InfoModal from './InfoModal';
import SettingsModal from './SettingsModal';
import { Title } from './Title';
import { Dashes } from './Dashes';

export const Header = () => (
  <React.Fragment>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <InfoModal />
      <Title /> 
      <SettingsModal />
    </div>
    <Dashes />
  </React.Fragment>
)


