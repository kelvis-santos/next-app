import styles from './page.module.css'
import Home from './pages/home.js'
import Menu  from './pages/menu.js'
import About from './pages/about'
import Techs from './pages/techs'
import Contact from './pages/contact'


export default function Root() {
  return (
    <main className={styles.main}>
      <Home />
      <Menu />
      <About />
      <Techs />
      <Contact />
    </main>
  )
}
