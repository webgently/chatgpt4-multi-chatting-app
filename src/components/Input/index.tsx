import React from 'react';
import IconMenu from '../Icons';
import './input.scss';

interface IProps {
  type: string;
  label: string;
  value: any;
  onBlur: Function;
  onChange: Function;
  icon?: string;
}

const Input = (props: IProps) => {
  const [focus, setFocus] = React.useState(false);

  const onActive = () => {
    setFocus(true);
  };

  const offActive = () => {
    props.onBlur();
    !props.value && setFocus(false);
  };

  React.useEffect(() => {
    props.value && onActive();
  }, [props]);

  return (
    <div className="input-container">
      {props.icon && <IconMenu icon={props.icon} className="text-blue" size={20} />}
      <div className={`input-main ${focus && 'input-active'}`}>
        <span className={`${!props.icon && 'pl-[6px]'}`}>{props.label}</span>
        <input
          type={props.type}
          onFocus={onActive}
          onBlur={offActive}
          onChange={(e: any) => props.onChange(e)}
          className={`${!props.icon && 'pl-[6px]'}`}
        />
      </div>
    </div>
  );
};

export default Input;
