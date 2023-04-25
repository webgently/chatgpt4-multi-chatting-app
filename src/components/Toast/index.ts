import { Store } from 'react-notifications-component';

export const toast = {
  success: (message: string) => {
    Store.addNotification({
      title: 'Success!',
      message: message,
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__bounceIn'],
      animationOut: ['animate__animated', 'animate__bounceOut'],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  },
  warning: (message: string) => {
    Store.addNotification({
      title: 'Warning!',
      message: message,
      type: 'warning',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__bounceIn'],
      animationOut: ['animate__animated', 'animate__bounceOut'],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  },
  info: (message: string) => {
    Store.addNotification({
      title: 'Info!',
      message: message,
      type: 'info',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__bounceIn'],
      animationOut: ['animate__animated', 'animate__bounceOut'],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  },
  error: (message: string) => {
    Store.addNotification({
      title: 'Error!',
      message: message,
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__bounceIn'],
      animationOut: ['animate__animated', 'animate__bounceOut'],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  },
  default: (message: string) => {
    Store.addNotification({
      title: 'Wonderful!',
      message: message,
      type: 'default',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__bounceIn'],
      animationOut: ['animate__animated', 'animate__bounceOut'],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }
};
