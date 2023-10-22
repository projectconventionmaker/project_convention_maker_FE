import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import { Dispatch } from 'react';

const Logout = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>프로젝트 변경</DialogTitle>
      <DialogContent>
        <DialogContentText>
          현재 프로젝트를 닫고 다른 프로젝트로 변경하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>취소</Button>
        <Button onClick={() => setIsOpen(false)}>프로젝트 변경</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Logout;
