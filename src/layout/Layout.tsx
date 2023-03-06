import React from 'react';
import ILayout from '@/src/layout/interfaces/ILayout';
import MainNavigation from '@/src/layout/components/MainNavigation/MainNavigation';

function Layout({ children }: ILayout) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

export default Layout;
