import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className={cn('bg-primary p-4 flex justify-between items-center')}>
      <div className={cn('text-white text-lg font-bold')}>Logo</div>
      <ul className={cn('flex space-x-4')}>
        <li><a href="#" className={cn('text-white hover:underline')}>Home</a></li>
        <li><a href="#" className={cn('text-white hover:underline')}>Products</a></li>
        <li><a href="#" className={cn('text-white hover:underline')}>About</a></li>
        <li><a href="#" className={cn('text-white hover:underline')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
