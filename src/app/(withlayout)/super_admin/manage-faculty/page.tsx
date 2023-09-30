import BredCrumb from '@/components/ui/BredCrumb';
import { Button } from 'antd';
import Link from 'next/link';

function ManageFacultyPage() {
  return (
    <div>
      <BredCrumb />
      <h1>This manage faculty page</h1>
      <Link href="/super_admin/manage-faculty/create">
        <Button type="primary">Create Faculty</Button>
      </Link>
    </div>
  );
}

export default ManageFacultyPage;
