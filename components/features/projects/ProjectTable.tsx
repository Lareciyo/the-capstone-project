import { projects } from "@/app/lib/mock-data";

// This map handles the colors for different statuses cleanly
const statusStyles: Record<string, string> = {
  'Completed': 'bg-green-100 text-green-700 border-green-200',
  'In Progress': 'bg-blue-100 text-blue-700 border-blue-200',
  'Review': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Pending': 'bg-gray-100 text-gray-700 border-gray-200',
};

export default function ProjectTable() {
  return (
    <div className="mt-8 flow-root">
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-900">Project Name</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-900">Lead</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-900">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {project.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                    statusStyles[project.status] || 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {project.lead}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 font-mono">
                  {project.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}