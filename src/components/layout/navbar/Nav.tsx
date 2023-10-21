import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './Nav.module.scss';
import { Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';

const NAVLIST = [
  { to: '/overview', name: '프로젝트 개요' },
  { to: '/stack', name: '기술 스택' },
  { to: '#', name: '그라운드 롤' },
  { to: '#', name: '커밋 컨벤선' },
  { to: '#', name: '코드 컨벤선' },
  { to: '#', name: '결과 보기' },
];

const Nav = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navMenuWrapper}>
          <div className={styles.projectName}>프로젝트명</div>
          <div>
            {NAVLIST.map(item => (
              <NavItem name={item.name} key={nanoid()} path={item.to}/>
            ))}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;

const NavItem = ({ name, path }: { name: string; path: string }) => {
  return (
    <div className={styles.itemContainer}>
      <div>icon</div>
      <Link to={path}>{name}</Link>
    </div>
  );
};