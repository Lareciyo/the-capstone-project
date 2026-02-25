import StatsCard from '@/components/features/dashboard/StatsCard';
import AIInsights from '@/components/features/dashboard/AIInsights';
import ProjectTable from '@/components/features/projects/ProjectTable';

export default function DashboardPage() {
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
      
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatsCard key={s.label} {...s} />
        ))}
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Current Projects</h2>
          <p className="text-gray-500 text-sm mt-1">Manage and track ongoing tasks.</p>
        </div>

        {/* AI Insights placed strategically above the data table */}
        <AIInsights />

        {/* The Searchable Table */}
        <ProjectTable />
      </section>
    </div>
  );
}