import { navList } from '../../info/navList';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {

  return (
    <div className={styles.burgerMenu}>
      <nav className={styles.burgerMenu__navigation}>
        <ul className={styles.burgerMenu__navigation_list}>
          {navList.map(item => {
            return (
              <a 
                key={item.name} 
                href={`#${item.link}`}
              >
                <li className={styles.burgerMenu__navigation_list_item}>
                  {item.name}
                </li>
              </a>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}