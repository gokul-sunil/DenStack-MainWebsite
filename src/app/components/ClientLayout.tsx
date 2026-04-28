'use client';

import { RegionSelectorModal } from '@/app/components/layout/RegionSelectorModal';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RegionSelectorModal />
      {children}
    </>
  );
}
