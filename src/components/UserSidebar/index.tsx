import React from 'react';
import IconMenu from '../../components/Icons';

const userSettingList = [{ label: 'setting', icon: 'User' }];

const UserSidebar = () => {
  return (
    <div className="user-sidebar">
      <button className="hamburger-button">
        <IconMenu icon="Hamburger" size={24} height={20} />
      </button>
      <div className="user-setting-list"></div>
    </div>
  );
};

export default UserSidebar;
