import { Layout } from 'antd';

import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { Tchildren } from '@/types/global';

const DashboardLayout = ({ children }: Tchildren) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
