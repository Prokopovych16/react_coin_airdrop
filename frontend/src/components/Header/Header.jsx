import { useState, useEffect, useRef } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerMenuRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      if (
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(target) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header id="/" className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <div data-aos="fade-down-right" className={styles.header__content_logo}>
            <a href="https://zam.io/" target="_blank" rel="noreferrer">
              <img src="/img/logo.svg" alt="top-logo" />
            </a>
          </div>
          <nav data-aos="fade-down" className={styles.header__content_nav}>
            <Navigation />
          </nav>
          <div className={styles.header__content_register}>
            <a href="#membership">
              <div data-aos="fade-down-left" className={styles.header__content_register_info}>
                <p className={styles.header__content_register_info_text}>
                  Register
                </p>
                <img
                  className={styles.header__content_register_info_icon}
                  src="img/icons/chevron-right.svg"
                  alt=""
                />
              </div>
            </a>
          </div>

          <div
            data-aos="fade-down-left"
            ref={burgerButtonRef}
            onClick={toggleMenu}
            className={styles.header__content_burger}
          >
            {isMenuOpen ? (
              <div className={styles.header__content_burger_iconClose}></div>
            ) : (
              <div className={styles.header__content_burger_icon}></div>
            )}
          </div>
        </div>
      </div>

      <aside
        ref={burgerMenuRef}
        className={`${styles.header__burgerMenu} ${
          isMenuOpen ? styles.header__burgerMenu_open : ''
        }`}
      >
        <BurgerMenu />
      </aside>
    </header>
  );
};
