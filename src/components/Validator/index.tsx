import React from 'react';
import './validator.scss';

interface IProps {
  message?: string;
}

const Validator = (props: IProps) => {
  return (
    <div className="validator">
      <p>{props.message}</p>
    </div>
  );
};

export default Validator;
