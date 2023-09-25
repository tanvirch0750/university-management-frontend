'use client';

import { USER_ROLE } from '@/constants/role';
import { SidebarItems } from '@/constants/sidebar';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.STUDENT;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem',
          padding: '1rem',
        }}
      >
        TC Education
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={SidebarItems(role)}
        style={{ padding: '1rem' }}
      />
    </Sider>
  );
}

export default Sidebar;
