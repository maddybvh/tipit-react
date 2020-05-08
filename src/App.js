import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Calculator } from './components/Calculator'
import { Footer } from './components/Footer'
import AppContext, { useTheme } from './components/AppContext';
import { themedColors } from './theme/index'
import styles from './theme/appstyles.module.css';

export default function App () {

  const [defaultTipLow, setDefaultTipLow] = useState('18');
  const [defaultTipHigh, setDefaultTipHigh] = useState('25');
  const [theme, setTheme] = useState('light');

  const updateTipLowContext = (input) => {
    setDefaultTipLow(input);   
  }

  const updateTipHighContext = (input) => {
    setDefaultTipHigh(input);
  }

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const userSettings = { 
    defaultTipLow: defaultTipLow, 
    defaultTipHigh: defaultTipHigh, 
    theme: theme, 
    useTheme, 
    toggleTheme, 
    updateTipLowContext, 
    updateTipHighContext, 
  }
  
  //This is a repeat of useTheme() in /AppContext
  const colors = userSettings.theme ? themedColors[userSettings.theme] : themedColors.default;

    return (
      <AppContext.Provider value={userSettings}>
        <div className={styles.body} style={{backgroundColor: colors.background, color: colors.text}}>
          <div className={styles.container}>
            <Header />
            <Calculator />
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    )
  // }
}

