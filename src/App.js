import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Calculator } from './components/Calculator'
import { Footer } from './components/Footer'
import AppContext, { useTheme } from './components/AppContext';
import { themedColors } from './theme/index'
import styles from './index.css'



export default function App () {
  // const _storeData = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@store:appContext')
  //     settingsToSave = {
  //       defaultTipLow: userSettings.defaultTipLow,
  //       defaultTipHigh: userSettings.defaultTipHigh,
  //       theme: userSettings.theme,
  //     }
  //     await AsyncStorage.setItem('@store:appContext', JSON.stringify(settingsToSave));
  //   } catch (error) {
  //     console.log('Error saving user settings.')
  //   }
  // };
  
  // const [initialAppLoad, setInitialAppLoad] = useState(true);

  // const _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@store:appContext');
  //     const savedSettings = JSON.parse(value)
      
  //     if (savedSettings !== null) {
  //       setDefaultTipLow(savedSettings.defaultTipLow)
  //       setDefaultTipHigh(savedSettings.defaultTipHigh)
  //       setTheme(savedSettings.theme)
  //     }
  //   } catch (error) {
  //     console.log('No user setting data was retrieved');
  //   }
  //   setInitialAppLoad(false);
  // };
  
  // let [fontsLoaded] = useFonts({
  //   'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  //   'JetBrainsMono-Bold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
  //   'JetBrainsMono-Italic': require('./assets/fonts/JetBrainsMono-Italic.ttf'),
  // });

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
    theme == 'light' ? setTheme('dark') : setTheme('light');
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
  const colors = userSettings.theme ? themedColors[userSettings.theme] : themedColors.default

  //useEffect(() => { initialAppLoad ? _retrieveData() : _storeData() })

  // if (!fontsLoaded) {
  //   return <React.Fragment>
  //     App Loading
  //   </React.Fragment>;
  // }
  // else {


    const styles = {
      container: {
        margin: 'auto',
        width: '50%',
        padding: 10,
        textAlign: 'center',
      }
    }
    
    return (
      <AppContext.Provider value={userSettings}>
        <React.Fragment>
          <div style={styles.container}>
            <Header />
            <Calculator />
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    )
  // }
}

