'use client';

import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map(link => {
        const isActiveLink = pathname === link.href;
        const variant = isActiveLink ? 'default' : 'ghost';
        return (
          <Button
            asChild
            key={link.href}
            variant={variant}
            className={buttonStyles}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default Sidebar;

const buttonStyles = 'w-full mb-2 capitalize font-normal';
