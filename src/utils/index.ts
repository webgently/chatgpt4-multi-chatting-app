import jwt_decode from 'jwt-decode';

export const emailValidator = (mail: string) => {
  if (!mail.trim()) {
    return { status: false, msg: 'Email is required!' };
  }

  if (
    !mail.match(
      // eslint-disable-next-line
      /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
    )
  ) {
    return { status: false, msg: 'Invalid email type!' };
  }

  return { status: true, msg: '' };
};

export const strongPasswordValidator = (password: string) => {
  if (!password.trim()) {
    return { status: false, msg: 'Password is required!' };
  }

  if (password.length < 8) {
    return { status: false, msg: '8 characters length!' };
  }

  if (!password.match(/[A-Z]/)) {
    return { status: false, msg: 'A letter in upper case!' };
  }

  if (!password.match(/[0-9]/)) {
    return { status: false, msg: 'A numerals (0-9)!' };
  }

  if (!password.match(/[!@#$%^&*()]/)) {
    return { status: false, msg: 'A letter special character!' };
  }

  return { status: true, msg: 'Password is strong!' };
};

export const checkValidator = (d: any, ele: string, value: string, label: string) => {
  return {
    ...d,
    [ele]: {
      ...d[ele],
      message: !value
        ? `${label} is required!`
        : ele === 'email' && !emailValidator(value)
        ? 'Invalid email type!'
        : ele === 'password' && strongPasswordValidator(value).msg
    }
  };
};

export const passwordView = (d: any, ele: string, type: string) => {
  return {
    ...d,
    [ele]: {
      ...d[ele],
      type: type === 'password' ? 'text' : 'password',
      placeholder: type === 'password' ? 'Type Here' : '**********'
    }
  };
};

export const getUserInfo = (token: string) => {
  return jwt_decode(token);
};
