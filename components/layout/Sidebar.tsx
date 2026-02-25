import Link from 'next/link';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Projects', href: '#' },
    { name: 'Settings', href: '#' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white p-4 hidden md:block">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}