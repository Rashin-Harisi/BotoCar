import styles from'./Layout.module.css'
import Link from 'next/link'


function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <Link href='/'>
                <h2>BOTOCAR</h2>
                <p>Choose and Buy your car</p>
            </Link>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>
            Managed by <a href='https://github.com/Rashin-Harisi/BotoCar' target='_blank'>Rashin Harisi</a> &copy;
        </footer>
    </>
  )
}

export default Layout