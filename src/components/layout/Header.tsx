import { Button } from '@mui/material';
import styles from './Header.module.scss';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div>Project Convention Maker</div>
        <Button size="large" variant="contained">
          저장
        </Button>
      </header>
      <Outlet />
    </>
  );
};

export default Header;