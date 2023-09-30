'use client';

import { getUserInfo } from '@/services/auth.service';
import UMBreadCrumbs from './UMBreadCrumbs';

function BredCrumb({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumbs
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
    </div>
  );
}

export default BredCrumb;
