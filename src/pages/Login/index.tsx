import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import Input from '../../components/Input';
import IconMenu from '../../components/Icons';
import Validator from '../../components/Validator';
import { toast } from '../../components/Toast';
import { emailValidator, checkValidator, passwordView } from '../../utils';
// import { postRequest } from '../../service';

const Login = () => {
  const loginInitialize = {
    email: {
      type: 'email',
      label: 'Email',
      icon: 'Email',
      value: '',
      message: ''
    },
    password: {
      type: 'password',
      label: 'Password',
      icon: 'Password',
      value: '',
      message: ''
    }
  };

  const [userData, setUserData] = useState<{ [key: string]: any }>(loginInitialize);

  const setData = (ele: string, value: string, label: string) => {
    setUserData({
      ...userData,
      [ele]: {
        ...userData[ele],
        value: value,
        message: !value ? `${label} is required!` : ele === 'email' && emailValidator(value).msg
      }
    });
  };

  const login = () => {
    if (!emailValidator(userData.email.value).status) {
      toast.warning(emailValidator(userData.email.value).msg);
      return;
    }

    if (!userData.password.value) {
      toast.warning('Password is required!');
      return;
    }

    const data = {
      email: userData.email.value,
      password: userData.password.value
    };

    // postRequest(`/login`, data).then((res: any) => {});
  };

  return (
    <Zoom top>
      <div className="auth-container">
        <div className="auth-form">
          <div className="flex flex-col gap-[20px]">
            <h2 className="font-BalsamiqSans">Sign In</h2>
            <div className="form-control">
              {Object.keys(userData).map((key: string, ind: number) => {
                return (
                  <div key={ind}>
                    <div className="form-element">
                      <Input
                        type={userData[key].type}
                        label={userData[key].label}
                        icon={userData[key].icon}
                        value={userData[key].value}
                        onBlur={() =>
                          setUserData(checkValidator(userData, key, userData[key].value, userData[key].label))
                        }
                        onChange={(e: any) => setData(key, e.target.value, userData[key].label)}
                      />
                      {key === 'password' && (
                        <div
                          className="flex items-center"
                          onClick={() => setUserData(passwordView(userData, key, userData[key].type))}
                        >
                          <IconMenu
                            icon={userData[key].type === 'password' ? 'Eye' : 'NoEye'}
                            size={20}
                            className="text-blue absolute top-[35%] right-[30px] cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                    <Validator message={userData[key].message} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <button className="btn-primary !rounded-full" onClick={login}>
              Sign In
            </button>
            <p className="redirect-other">
              <span>Don’t have an account?</span>
              <Link to="/register" className="cursor-pointer hover:text-blue hover:underline">
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Login;
