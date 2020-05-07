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
  
   function afterOpenModal() {
     // @TODO can probably be removed
   }
  
   function closeModal(){
     setIsOpen(false);
   }

   return (
      <div>

         <Modal 
            isOpen = {modalIsOpen}
            onAfterOpen = {afterOpenModal}
            onRequestClose = {closeModal}
            style={{content: {top: 5, left: '15%', right: '15%', bottom: 5}}}
            >

            <div>
               <div className={styles.inputRow} style={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                  <div style={{paddingLeft: '14%'}}></div>
                  <div>
                     <Title/>
                  </div>
                  <button className={styles.clearButton} style={{padding: 5, border: 'none'}} onClick = {closeModal}> 
                        <img src={require('../assets/x-close.svg')} alt="close button"/>
                  </button>                  
               </div>
               <Dashes />
               <Settings />
               <Footer />
            </div>
         </Modal>
         <button style={{padding: 5, border: 'none'}} onClick = {openModal}>
            <img
               src={require('../assets/settings.svg')} 
               // src={(theme == 'light') ? require('../assets/settings.svg') : require('../assets/settings-white.svg')}
               />
         </button>
      </div>
   )
}

export default SettingsModal