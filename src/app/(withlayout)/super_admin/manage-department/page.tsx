import BredCrumb from '@/components/ui/BredCrumb';
import { Button } from 'antd';
import Link from 'next/link';

function ManageDepartmentPage() {
  return (
    <div>
      <BredCrumb />
      <h1>This is manage department page</h1>
      <Link href="/super_admin/manage-department/create">
        <Button type="primary">Create department</Button>
      </Link>
    </div>
  );
}

export default ManageDepartmentPage;
