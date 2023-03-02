import styles from './page.module.css'
import localFont from 'next/font/local'
import Home from './pages/home.js'
import Menu  from './pages/menu.js'

const fontLocal = localFont({
  src: [
    {
      path: './public/font/Matter-Medium.otf',
      weight: '400',
    },
    {
      path: './public/font/Matter-Regular.otf',
      weight: '400',
    },
  ],
})

export default function Root() {
  return (
    <main className={styles.main}>
      <Home />
      <Menu />
    </main>
  )
}
