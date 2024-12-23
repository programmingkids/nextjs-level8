import Link from 'next/link';

const links = [
  { title: 'Home', href: '/' },
  { title: 'Work01', href: '/work01' },
  { title: 'Work02', href: '/work02' },
  { title: 'Work03', href: '/work03' },
  { title: 'Work04', href: '/work04' },
  { title: 'Work05', href: '/work05' },
  { title: 'Work06', href: '/work06' },
  { title: 'Work07', href: '/work07' },
  { title: 'Work08', href: '/work08' },
  { title: 'Work09', href: '/work09' },
  { title: 'Work10', href: '/work10' },
  { title: 'Work11', href: '/work11' },
];

export const Header = function () {
  return (
    <div className="main p-4 bg-blue-300">
      <h1 className="p-2 text-2xl">NextJSアプリ</h1>
      <div className="flex justify-space flex-wrap p-2">
        {links.map((e, i) => (
          <Link key={i} href={e.href} className="text-link mx-3">
            {e.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
