import Login from '@/components/login/Login';
import { Metadata } from 'next';

// TODO: make another login component which will be client
export const metadata: Metadata = {
  title: 'University Management - login',
  description: 'Generated by Tanvir',
};

function LoginPage() {
  return <Login />;
}

export default LoginPage;
