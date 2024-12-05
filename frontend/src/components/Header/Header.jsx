import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <div className={styles.header__content_logo}>
            <a href='/'><img src="img/logo.svg" alt="top-logo" /></a>
          </div>
          <nav className={styles.header__content_nav}>
            <Navigation />
          </nav>
          <div className={styles.header__content_register}>
            <a href="#membership">
              <div className={styles.header__content_register_info}>
                <p className={styles.header__content_register_info_text}>Register</p>
                <img className={styles.header__content_register_info_icon} src="img/icons/chevron-right.svg" alt="" />
              </div>
            </a>
          </div>

          <div onClick={toggleMenu} className={styles.header__content_burger}>
            {isMenuOpen ? (
              <div className={styles.header__content_burger_iconClose}></div>
            ) : (
              <div className={styles.header__content_burger_icon}></div>
            )}
          </div>
        </div>
      </div>

      <aside
        className={`${styles.header__burgerMenu} ${isMenuOpen ? styles.header__burgerMenu_open : ''}`}
      >
        <BurgerMenu />
      </aside>
    </header>
  )
}