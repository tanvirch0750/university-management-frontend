'use client';

import { Tchildren } from '@/types/global';
import { Layout } from 'antd';
import Header from './Header';
import UMBreadCrumbs from './UMBreadCrumbs';

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
      <div style={{ padding: '1rem' }}>
        <UMBreadCrumbs
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: `student`,
              link: `/student`,
            },
          ]}
        />
        {children}
      </div>
    </Content>
  );
}

export default Contents;
