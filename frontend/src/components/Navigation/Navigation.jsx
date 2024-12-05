import { navList } from '../../info/navList';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <ul className={styles.navigation__list}>
      {navList.map(item => {
        return (
          <a 
            key={item.name} 
            href={`#${item.link}`}
          >
            <li className={styles.navigation__list_item}>
              {item.name}
            </li>
          </a>
        )
      })}
    </ul>
  );
}