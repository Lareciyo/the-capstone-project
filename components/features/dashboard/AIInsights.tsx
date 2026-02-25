import { Sparkles } from "lucide-react"; // You can use a generic icon if Lucide isn't installed

export default function AIInsights() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 mb-8 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-blue-600" />
        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">AI Project Summary</h3>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        Based on your current projects, you have <span className="font-bold text-blue-700">2 tasks</span> hitting their deadline in the next 7 days. 
        The <span className="font-bold text-blue-700">Alpha Site Redesign</span> is currently "In Progress"—consider checking in with Ivy Mo to ensure the API integration stays on schedule.
      </p>
    </div>
  );
}