import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { removeAlert } from '../redux/actions/alertActions';
import { useSelector, useDispatch } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AppAlert() {
    const alert = useSelector((state) => state.alert);
    console.log(alert);
    const dispatch = useDispatch();
    
    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(removeAlert());
  };

  return (
      <Snackbar open={alert.open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical:'bottom',horizontal:'center' }}>
        <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
          {alert.msg}
        </Alert>
      </Snackbar>
  );
}