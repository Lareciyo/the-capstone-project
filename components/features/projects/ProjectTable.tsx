"use client";
import { useState } from "react";
import { projects } from "@/app/lib/mock-data";

const statusStyles: Record<string, string> = {
  'Completed': 'bg-green-100 text-green-700 border-green-200',
  'In Progress': 'bg-blue-100 text-blue-700 border-blue-200',
  'Review': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Pending': 'bg-gray-100 text-gray-700 border-gray-200',
};

export default function ProjectTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.lead.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Search Bar: Darkened text and placeholder by 20%+ for visibility */}
      <div className="w-full md:max-w-md">
        <input
          type="text"
          placeholder="Search projects or leads..."
          className="w-full px-4 py-2.5 border border-gray-400 rounded-xl 
                   text-gray-900 placeholder:text-gray-700 
                   focus:ring-2 focus:ring-blue-600 outline-none shadow-md transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto"> {/* Safety wrapper for smallest screens */}
          <table className="min-w-full divide-y divide-gray-200 text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 md:px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Project</th>
                <th className="px-4 md:px-6 py-4 text-xs font-bold text-gray-700 uppercase text-center md:text-left tracking-wider">Status</th>
                <th className="hidden sm:table-cell px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Lead</th>
                <th className="hidden lg:table-cell px-6 py-4 text-xs font-bold text-gray-700 uppercase text-right tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-4 md:px-6 py-5 text-sm font-bold text-gray-900 truncate max-w-[140px] md:max-w-none">
                    {project.name}
                  </td>
                  <td className="px-4 md:px-6 py-5 text-center md:text-left">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold border ${statusStyles[project.status]}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="hidden sm:table-cell px-6 py-5 text-sm font-medium text-gray-800">
                    {project.lead}
                  </td>
                  <td className="hidden lg:table-cell px-6 py-5 text-sm text-gray-900 font-mono text-right">
                    {project.dueDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}