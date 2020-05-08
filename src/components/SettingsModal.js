import React, { useContext } from 'react';
import Modal from 'react-modal';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import { Settings } from './Settings.js';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';

export const SettingsModal = () => {
   const context = useContext(AppContext)
   const theme = context.theme
   const { colors } = context.useTheme()


   const [modalIsOpen,setIsOpen] = React.useState(false);
   function openModal() {
     setIsOpen(true);
   }
  
   function closeModal(){
     setIsOpen(false);
   }

   return (
      <div>

         <Modal 
            isOpen = {modalIsOpen}
            onRequestClose = {closeModal}
            style={{content: {top: 5, bottom: 5, margin: 'auto', maxWidth: 500, backgroundColor: colors.background}}}
            >
            <div className={styles.container}>
               <div className={styles.inputRow} style={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                  <div style={{paddingLeft: '14%'}}></div>
                  <div>
                     <Title/>
                  </div>
                  <button className={styles.button} style={{padding: 15, border: 'none', backgroundColor: colors.background}} onClick = {closeModal}> 
                     <img 
                        className={styles.icon}
                        src={(theme === 'light') ? require('../assets/x-close.svg') : require('../assets/x-close-pink.svg')} 
                        alt="close button"/>
                  </button>                  
               </div>
               <Dashes />
               <Settings />
               <Footer />
            </div>
         </Modal>
         <button style={{padding: 5, border: 'none', backgroundColor: colors.background}} onClick = {openModal}>
            <img
               className={styles.icon}
               src={(theme === 'light') ? require('../assets/settings.svg') : require('../assets/settings-white.svg')}
               alt="settings icon"
               />
         </button>
      </div>
   )
}

export default SettingsModal