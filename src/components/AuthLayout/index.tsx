import React from 'react';

const AuthLayout = (props: any) => {
  return (
    <div className="auth-layout">
      <main>{props.children}</main>
    </div>
  );
};

export default AuthLayout;
