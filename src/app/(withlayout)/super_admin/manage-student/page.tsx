import BredCrumb from '@/components/ui/BredCrumb';
import { Button } from 'antd';
import Link from 'next/link';

function ManageStudentPage() {
  return (
    <div>
      <BredCrumb />
      <h1>This is manage student page</h1>
      <Link href="/super_admin/manage-student/create">
        <Button type="primary">Create Student</Button>
      </Link>
    </div>
  );
}

export default ManageStudentPage;
