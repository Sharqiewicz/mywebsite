import styles from '../styles/Home.module.scss'
import Navbar from '../src/components/Navbar.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
    </div>
  )
}
