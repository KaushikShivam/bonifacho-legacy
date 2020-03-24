import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { wrapComponent } from 'react-snackbar-alert';

const Alert = ({ alert, createSnackbar }) => {
  useEffect(() => {
    console.log('haha', alert);
    if (alert) {
      createSnackbar({
        message: alert.message,
        theme: alert.type
      });
    }
  }, [alert]);

  return <></>;
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps)(wrapComponent(Alert));
