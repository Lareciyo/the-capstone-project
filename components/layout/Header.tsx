export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-gray-600">☰</button>
        <span className="text-xl font-bold tracking-tight">CapstoneProject</span>
      </div>
      <div className="h-8 w-8 rounded-full bg-gray-200" />
    </header>
  );
}