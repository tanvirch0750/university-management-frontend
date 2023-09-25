'use client';

import { Tchildren } from '@/types/global';
import { Layout } from 'antd';

const { Content } = Layout;

function Contents({ children }: Tchildren) {
  return (
    <Content
      style={{
        minHeight: '100vh',
        color: 'black',
      }}
    >
      {children}
    </Content>
  );
}

export default Contents;
