'use client';

import { getUserInfo } from '@/services/auth.service';
import UMBreadCrumbs from './UMBreadCrumbs';

function BredCrumb() {
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
