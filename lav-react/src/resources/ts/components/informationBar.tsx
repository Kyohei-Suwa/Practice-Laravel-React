import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

interface SnackBarProps {
  message: string;
  open: boolean;
  setState: ({ message, open }:{message:string, open:boolean}) => void;
}
// TODO messageState is redundancy...
const InformationSnackBar:React.FC<{message:string, open:boolean, setMessageState:({ message, open }:{message:string, opne:boolean})=> void}> = (props) => {
  const { message, open, setMessageState } = props;

  /**
   * @type {string}
   * SnackBar Display Direction Vertical
   */
  const vertical = 'top';
  /**
   * @type {string}
   * SnackBar Display Direction Horizontal
   */
  const horizontal = 'center';

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageState({ message, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={6000}
      open={open}
      onClose={(e) => { handleClose(e); }}
      message={message}
      key={vertical + horizontal}
    />
  );
};

export default InformationSnackBar;
