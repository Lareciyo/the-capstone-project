import StatsCard from '@/components/features/dashboard/StatsCard';
import ProjectTable from '@/components/features/projects/ProjectTable';

export default function DashboardPage() {
  // 1. We must define the 'stats' array so line 21 (your line 15) can find it
  const stats = [
    { label: "Total Projects", value: "12", description: "Active this month", icon: "briefcase" },
    { label: "Completed", value: "8", description: "+2 from last week", icon: "check" },
    { label: "Hours Logged", value: "142", description: "Team productivity", icon: "clock" },
    { label: "Efficiency", value: "94%", description: "Internal metric", icon: "chart" },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Real-time insights and project tracking.</p>
      </div>
      
      {/* This grid uses the 'stats' array defined above */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatsCard key={s.label} {...s} />
        ))}
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Projects</h2>
        <ProjectTable />
      </section>
    </div>
  );
}