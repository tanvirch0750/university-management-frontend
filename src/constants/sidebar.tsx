import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';

export function SidebarItems(role: string) {
  const defaultSidebarItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      children: [
        {
          label: 'Account Profile',
          key: 'account-profile',
        },
        {
          label: 'Change Password',
          key: 'change-password',
        },
      ],
      label: 'Profile',
      style: { backgroundColor: '#002140' },
    },
  ];

  const commonAdminSidebarItems = [
    {
      label: <Link href={`/${role}/manage-students`}>Manage Students</Link>,
      key: 'manage-students',
      style: { backgroundColor: '#002140' },
    },
  ];

  if (role === 'student') return defaultSidebarItems;
  if (role === 'admin') return commonAdminSidebarItems;
}
