import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

// TODO messageState is redundancy...
const InformationSnackBar:React.FC<{message:string, open:boolean, setMessageState:({ message: string, open: boolean })=> void}> = (props) => {
  const { message, open, setMessageState } = props;

  const vertical = 'top';
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
