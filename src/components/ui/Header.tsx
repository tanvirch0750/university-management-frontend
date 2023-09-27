import { removeUserInfo } from '@/services/auth.service';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';

import { sencondaryColor } from '@/constants/colors';
import { authKey } from '@/constants/storgeKey';
import { useRouter } from 'next/navigation';
const { Header: AntHeader } = Layout;

function Header() {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Button
          onClick={logOut}
          type="text"
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader
      style={{
        background: '#fff',
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: '100%',
        }}
      >
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={20}>
              <Avatar
                size="large"
                style={{ color: 'red', backgroundColor: sencondaryColor }}
                icon={<UserOutlined style={{ color: 'white' }} />}
              />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
}

export default Header;
