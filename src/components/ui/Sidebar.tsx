'use client';

import { SidebarItems } from '@/constants/sidebar';
import { getUserInfo } from '@/services/auth.service';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

const { Sider } = Layout;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

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
