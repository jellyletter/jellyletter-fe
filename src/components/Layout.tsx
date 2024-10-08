import { useThemeMode } from '@/hooks/useThemeMode';
import React from 'react';
import Image from 'next/image';

const Layout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { mode } = useThemeMode();

  return (
    <div
      className="container"
    >
      { mode.isDay && <Image className='background-setting' src='/images/background_day.png' alt='따사로운 햇살과 구름' width={1440} height={960} />}
      { mode.isDay === false && <Image className='background-setting' src='/images/background_night.png' alt='반짝이는 별빛과 구름' width={1440} height={960} />}
      <div id='modal-standard' className={`wrapper relative overflow-hidden ${className ?? ''}`}>{children}</div>
    </div>
  );
};

export default Layout;