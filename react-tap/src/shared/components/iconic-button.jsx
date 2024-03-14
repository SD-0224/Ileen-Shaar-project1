import styles from './iconic-button.module.css'

export function IconicButton({label,icon}){
    return(
        <button className={styles.headerButton}>
            <ion-icon name={icon}></ion-icon>
            {label}
        </button>
    )
}