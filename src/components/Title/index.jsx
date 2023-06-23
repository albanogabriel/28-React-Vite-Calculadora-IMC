import styles from './Title.module.css'
import circle from '../../assets/circle.svg'


const Title = () => {
    
  return(
    <>
      <div>
        <a className={styles.flex} href="#" target="_blank">
          <img className={styles.logo} src={circle} alt="React logo" />
          <h1>Calcule o IMC</h1>
        </a>
      </div>
      
    </>
    )

}

export default Title