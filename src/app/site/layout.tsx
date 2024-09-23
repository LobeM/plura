import Navigation from '@/components/site/navigation';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }} afterSignOutUrl='/'>
      <main className='h-full'>
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default Layout;
