import {
  AppstoreOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  ScheduleOutlined,
  TableOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { USER_ROLE } from './role';

export function SidebarItems(role: string) {
  const defaultSidebarItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
      label: 'Profile',
      style: { backgroundColor: '#002140' },
    },
  ];

  const commonAdminSidebarItems: MenuProps['items'] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: `/${role}/manage-student`,
      style: { backgroundColor: '#002140' },
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      key: `/${role}/manage-faculty`,
      style: { backgroundColor: '#002140' },
      icon: <TableOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: 'Manage academic',
      key: 'manage-academic',
      icon: <TableOutlined />,
      style: { backgroundColor: '#002140' },
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: 'Management',
      key: 'management',
      icon: <AppstoreOutlined />,
      style: { backgroundColor: '#002140' },
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      style: { backgroundColor: '#002140' },
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      style: { backgroundColor: '#002140' },
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },

    {
      label: 'Management',
      key: 'management',
      icon: <AppstoreOutlined />,
      style: { backgroundColor: '#002140' },
      children: [
        {
          label: <Link href={`/${role}/manage-department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const facultySidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
      style: { backgroundColor: '#002140' },
    },
  ];

  const studentSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
      style: { backgroundColor: '#002140' },
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/courses/schedule`,
      style: { backgroundColor: '#002140' },
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/registration`,
      style: { backgroundColor: '#002140' },
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/payment`,
      style: { backgroundColor: '#002140' },
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/academic-report`,
      style: { backgroundColor: '#002140' },
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSidebarItems;
  }
}
