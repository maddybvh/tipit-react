import React from 'react';
//import InfoModal from './InfoModal';
//import SettingsModal from './SettingsModal';
import { Title } from './Title';
import { Dashes } from './Dashes';

export const Header = () => (
  <React.Fragment>
    <React.Fragment>
      {/* <InfoModal /> */}
      <Title /> 
      {/* <SettingsModal /> */}
    </React.Fragment>
    <Dashes />
  </React.Fragment>
)


