'use client';

import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import UMBreadCrumbs from '@/components/ui/UMBreadCrumbs';

import { useAddDepartmentMutation } from '@/redux/api/departmentApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await addDepartment(data);

      responseMessage(res, 'Department Added Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  const base = 'super_admin';
  return (
    <div>
      <UMBreadCrumbs
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: 'department', link: `/${base}/manage-department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
