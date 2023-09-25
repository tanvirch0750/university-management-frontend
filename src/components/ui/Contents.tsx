'use client';

import { Tchildren } from '@/types/global';
import { Layout } from 'antd';
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
    </Content>
  );
}

export default Contents;
