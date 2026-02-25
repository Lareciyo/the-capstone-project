import StatsCard from '@/components/features/dashboard/StatsCard';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Users', value: '2,543', change: '12%', isPositive: true },
    { label: 'Revenue', value: '$45,231', change: '8%', isPositive: true },
    { label: 'Active Projects', value: '12', change: '2%', isPositive: false },
    { label: 'Server Uptime', value: '99.9%', change: '0.01%', isPositive: true },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => <StatsCard key={s.label} {...s} />)}
      </div>
    </div>
  );
}