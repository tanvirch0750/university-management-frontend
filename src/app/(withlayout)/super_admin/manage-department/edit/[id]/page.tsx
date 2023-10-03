'use client';

import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import ActionBar from '@/components/ui/ActionBar';
import UMBreadCrumbs from '@/components/ui/UMBreadCrumbs';
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from '@/redux/api/departmentApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

type IDProps = {
  params: any;
};

const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading('Updating.....');
    try {
      //   console.log(data);
      const res = await updateDepartment({ id, body: values });
      responseMessage(res, 'Department updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    title: data?.data?.title || '',
  };

  return (
    <div>
      <UMBreadCrumbs
        items={[
          {
            label: 'super_admin',
            link: '/super_admin',
          },
          {
            label: 'department',
            link: '/super_admin/manage-department',
          },
        ]}
      />

      <ActionBar title="Update Department"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
