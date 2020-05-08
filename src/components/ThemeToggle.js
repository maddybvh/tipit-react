import React, { useState, useContext } from "react";
import { Switch } from '@material-ui/core';
import AppContext from './AppContext';

export default function ThemeToggle() {
  const context = useContext(AppContext)
  const theme = context.theme;

  const [isEnabled, setIsEnabled] = useState(theme === 'light' ? false : true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    context.toggleTheme();
  }

  return (
      <Switch
          onChange={toggleSwitch}
          checked={isEnabled}
      />
  );
}
