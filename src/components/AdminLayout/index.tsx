import React from 'react';

const AdminLayout = (props: any) => {
  return (
    <div className="admin-layout">
      <main>{props.children}</main>
    </div>
  );
};

export default AdminLayout;
