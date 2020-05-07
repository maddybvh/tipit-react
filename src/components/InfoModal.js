import React, { useContext } from 'react';
import Modal from 'react-modal';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';

export const InfoModal = () => {
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
            style={{content: {top: 5, left: '15%', right: '15%', bottom: 5, backgroundColor: colors.background}}}
            >
            <div>
               <div className={styles.modal}>
                  <div className={styles.inputRow} style={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                     <button className={styles.clearButton} style={{padding: 5, border: 'none'}} onClick = {closeModal}> 
                           <img src={require('../assets/x-close.svg')} alt="close button"/>
                     </button>
                     <div>
                        <Title/>
                     </div> 
                     <div style={{paddingLeft: '14%'}}></div>                    
                  </div>
                  <Dashes />
                  <div>
                     <div className={styles.normalText} style={{textAlign: 'center', paddingTop: 15}}>What is this app?</div>
                     <div className={styles.label} style={{textAlign: 'center', paddingTop: 15}}>A means to enhance palindromic whimsy.</div>
                     <div className={styles.footer} style={{position: 'absolute', bottom: 30,  width: '90%'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                           <div>(c) Savas Labs 2020</div>
                           <div style={{paddingRight: 10}}>
                              <img src={require('../assets/ava-blue.svg')} />
                           </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                           <a href="www.savaslabs.com">
                              Learn more about our #labs initiative.
                           </a>
                           <div>
                              <img style={{textAlign: 'center'}} src={require('../assets/labs.svg')} alt={"Savas Labs logo"}/>
                           </div>
                        </div>
                     </div>

                  </div>
                  
                  <Footer />
               </div>
            </div>  
         </Modal>
         <button style={{padding: 5, border: 'none', backgroundColor: colors.background}} onClick = {openModal}>
            <img
               className={styles.icon}
               // style={{backgroundColor: colors.background, margin: 0}}
               src={(theme == 'light') ? require('../assets/info.svg') : require('../assets/info-white.svg')}
               />
            </button>
      </div>
)}

export default InfoModal

// const styles = StyleSheet.create ({
//     container: {
//        padding: 10,
//     },
//     modal: {
//       flex: 1,
//       marginHorizontal: 8,
//     },
//     normalText: {
//       fontFamily: 'JetBrainsMono-Regular', 
//       fontSize: 14,
//       lineHeight: 20,
//       marginTop: 10,
//       textAlign: 'center',
//     },
//     description: {
//       fontFamily: 'JetBrainsMono-Regular', 
//       fontSize: 20,
//       lineHeight: 28,
//       marginTop: 10,
//       textAlign: 'center',
//       padding: 20,
//     },
//     clear: {
//        fontFamily: 'JetBrainsMono-Bold',
//        padding: 10,
//        fontSize: 18,
//     }
// })

