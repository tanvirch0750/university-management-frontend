'use client';

import { Tchildren } from '@/types/global';
import { Layout } from 'antd';
import Header from './Header';

const { Content } = Layout;

function Contents({ children }: Tchildren) {
  const base = 'admin';

  return (
    <Content
      style={{
        minHeight: '100vh',
        color: 'black',
      }}
    >
      <Header />
      <div style={{ padding: '1rem' }}>{children}</div>
    </Content>
  );
}

export default Contents;
