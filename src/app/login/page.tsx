'use client';

import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import { sencondaryColor } from '@/constants/colors';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { storeUserInfo } from '@/services/auth.service';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';
import loginImage from '../../assets/Computer login-bro.svg';

type FormValues = {
  id: string;
  password: string;
};

function LoginPage() {
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      storeUserInfo({ accessToken: res?.data.accessToken });
    } catch (error) {}
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: '100vh',
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login-image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: '15px 0px',
            color: sencondaryColor,
          }}
        >
          First Login Into Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput type="text" size="large" name="id" label="User Id" />
            </div>
            <div
              style={{
                margin: '15px 0px',
              }}
            >
              <FormInput
                type="password"
                size="large"
                name="password"
                label="User Password"
              />
            </div>
            <Button
              style={{ backgroundColor: sencondaryColor }}
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
