'use client';
import Contents from '@/components/ui/Contents';
import LoadingComponent from '@/components/ui/LoadingComponent';
import Sidebar from '@/components/ui/Sidebar';
import { isLoggedIn } from '@/services/auth.service';
import { Tchildren } from '@/types/global';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }: Tchildren) => {
  const router = useRouter();
  const isUserLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push('/login');
    }
    setIsLoading(true);
  }, [isUserLoggedIn, router]);

  if (!isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
