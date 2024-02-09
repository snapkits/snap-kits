'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavHeader(props: { links: { title: string; url: string }[] }) {
  const pathname = usePathname();

  return (
    <nav className='flex space-x-4 sm:justify-center'>
      {props.links.map((link, index) => (
        <Link
          key={`${link.title}-${index}`}
          href={link.url}
          className={`rounded-lg px-3 py-2 font-medium ${pathname === link.url ? 'active bg-slate-100 text-slate-900' : 'text-slate-400 hover:bg-slate-500 hover:text-slate-900'}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
