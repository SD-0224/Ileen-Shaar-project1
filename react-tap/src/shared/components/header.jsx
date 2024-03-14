import { LayoutContainer } from "./layoutContainer"
import styles from './header.module.css'
import { IconicButton } from "./iconic-button"

export function Header(){
    return(
        
        <header className={styles.header}>
            <LayoutContainer className={styles.headerContiner}>
          <h2>Web Topics</h2>
          <nav className={styles.nav}>
            <IconicButton icon={'moon-outline'} label={'Dark Mode'}/>
            <IconicButton icon={'heart-outline'} label={'Favourites'}/>
          </nav>
          </LayoutContainer>
        </header>
      
    )
}