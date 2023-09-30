import ActionBar from '@/components/ui/ActionBar';
import BredCrumb from '@/components/ui/BredCrumb';
import { Button } from 'antd';
import Link from 'next/link';

function ManagAdminPage() {
  return (
    <div>
      <BredCrumb />

      <ActionBar title="Admin Lists">
        <Link href="/super_admin/manage-admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
}

export default ManagAdminPage;
