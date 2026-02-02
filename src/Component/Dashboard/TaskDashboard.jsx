import React from 'react';
import {
    LayoutDashboard, MessageSquare, CheckSquare, Calendar, Globe, BarChart2, DollarSign, Menu,
    Plus, MoreHorizontal, MessageCircle, Link, CheckCircle2, ChevronRight
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, ResponsiveContainer, Cell
} from 'recharts';

const Sidebar = () => (
    <aside className="w-16 md:w-20 bg-white border-r border-gray-100 flex flex-col items-center py-8 gap-10">
        <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
            <Menu size={24} />
        </div>
        <nav className="flex flex-col gap-8">
            <LayoutDashboard size={20} className="text-blue-600 cursor-pointer" />
            <MessageSquare size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
            <CheckSquare size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
            <Calendar size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
            <Globe size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
            <BarChart2 size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
            <DollarSign size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
        </nav>
    </aside>
);

const RightPanel = () => {
    const chartData = [
        { name: 'A', value: 210, color: '#3b82f6' },
        { name: 'B', value: 110, color: '#8b5cf6' },
        { name: 'C', value: 176, color: '#ec4899' },
        { name: 'D', value: 145, color: '#f97316' },
    ];

    return (
        <aside className="w-64 bg-white border-l border-gray-100 p-6 flex flex-col gap-8">
            {/* Profile */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gradient-to-tr from-blue-400 via-pink-400 to-purple-400 rounded-2xl flex items-center justify-center p-3">
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 rotate-45"></div>
                    </div>
                </div>
                <h2 className="text-lg font-bold text-gray-800">Name Surname</h2>
                <p className="text-xs text-center text-gray-400 px-4">Adipiscing elit sed do eiusmod</p>
            </div>

            {/* Plan */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-gray-800">Plan</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded-full bg-blue-500 border border-white"></div>
                            <div className="w-4 h-4 rounded-full bg-pink-500 border border-white"></div>
                            <div className="w-4 h-4 rounded-full bg-purple-500 border border-white"></div>
                        </div>
                        <span className="text-xs font-semibold text-gray-700">12:00 - 13:00</span>
                        <div className="h-4 w-1 bg-cyan-400 rounded-full ml-auto"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded-full bg-blue-500 border border-white"></div>
                            <div className="w-4 h-4 rounded-full bg-orange-500 border border-white"></div>
                        </div>
                        <span className="text-xs font-semibold text-gray-700">13:00 - 14:00</span>
                        <div className="h-4 w-1 bg-blue-600 rounded-full ml-auto"></div>
                    </div>
                </div>
            </div>

            {/* Efficiency */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-gray-800">Efficiency</h3>
                <div className="flex justify-between items-end gap-2 px-1">
                    {[
                        { label: 'A', value: 75, color: 'text-blue-500' },
                        { label: 'B', value: 44, color: 'text-purple-500' },
                        { label: 'C', value: 68, color: 'text-pink-500' },
                        { label: 'D', value: 55, color: 'text-orange-500' },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-1">
                            <div className={`relative w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center`}>
                                <div className="text-[10px] font-bold">{item.value}</div>
                                {/* Simplified arc representation */}
                                <div className={`absolute inset-0 rounded-full border-2 ${item.color.replace('text', 'border')} border-t-transparent border-r-transparent rotate-45`}></div>
                            </div>
                            <span className="text-[10px] text-gray-400 font-bold">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Completed Tasks */}
            <div className="flex flex-col gap-4 flex-1">
                <h3 className="font-bold text-sm text-gray-800">Completed tasks</h3>
                <div className="bg-gray-50/50 rounded-2xl p-4 flex-1 flex flex-col items-center justify-center gap-4">
                    <div className="h-32 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-around w-full">
                        {chartData.map(item => (
                            <div key={item.name} className="flex flex-col items-center">
                                <span className="text-[10px] font-bold text-gray-800">{item.value}</span>
                                <span className="text-[8px] text-gray-400 uppercase">Author {item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

const TaskDashboard = () => {
    const timelineDates = [28, 29, 30, 31, '01', '02', '03', '04', '05', '06'];
    const timelineTasks = [
        { id: 'A', title: 'INCIDIDUNT UT LABORE ET', sub: 'Inididunt ut labore et dolore', color: 'bg-blue-500', start: 3.5, width: 4.5, percent: '55%' },
        { id: 'B', title: 'ENIM AD MINIM VENIAM', sub: 'Enim ad minim veniam, quis', color: 'bg-purple-500', start: 4.5, width: 5.5, percent: '80%' },
        { id: 'C', title: 'ADIPISCING ELIT EIUSMOD', sub: 'Adipiscing elit eiusmod tempor', color: 'bg-pink-500', start: 4.5, width: 4.5, percent: '65%' },
        { id: 'D', title: 'EXCEPTEUR SINT OCCAECAT', sub: 'Excepteur sint occaecat cupidatat', color: 'bg-orange-500', start: 6.5, width: 5.5, percent: '75%' },
    ];

    return (
        <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] overflow-hidden">
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Top Nav */}
                <header className="h-16 flex items-center justify-between px-8 bg-[#f8fafc]">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Tasks</span>
                        <ChevronRight size={14} />
                        <span className="font-semibold text-gray-800">Today</span>
                    </div>
                    <div className="flex items-center gap-8 text-xs font-semibold text-gray-400">
                        <span className="text-blue-600 border-b-2 border-blue-600 pb-1">Pricing</span>
                        <span className="hover:text-gray-800 cursor-pointer">About</span>
                        <span className="hover:text-gray-800 cursor-pointer">Language</span>
                        <span className="hover:text-gray-800 cursor-pointer">Conditions</span>
                    </div>
                </header>

                {/* Header Section */}
                <div className="px-10 py-6 flex flex-col gap-1">
                    <h1 className="text-3xl font-black text-gray-900">Task Management</h1>
                    <p className="text-xs font-bold text-gray-400">01 Division  /  01 Department  /  A Team</p>
                </div>

                <div className="flex-1 overflow-y-auto px-10 pb-10 space-y-10 custom-scrollbar">
                    {/* Timeline Section */}
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 relative">
                        {/* Grid Header */}
                        <div className="flex ml-48 mb-6 border-b border-gray-50 pb-4">
                            {timelineDates.map((date, i) => (
                                <div key={i} className="flex-1 text-center text-xs font-bold text-gray-400">
                                    {date}
                                </div>
                            ))}
                        </div>

                        {/* Vertical Lines */}
                        <div className="absolute top-20 bottom-8 left-[17.5rem] right-8 flex justify-between pointer-events-none opacity-20">
                            {timelineDates.map((_, i) => (
                                <div key={i} className="w-px bg-gray-200 h-full"></div>
                            ))}
                        </div>

                        {/* Timeline Rows */}
                        <div className="space-y-6 relative">
                            {timelineTasks.map((task) => (
                                <div key={task.id} className="flex items-center h-16">
                                    <div className="w-56 flex items-center gap-4 bg-white/50 backdrop-blur-sm z-10 px-4 py-2 rounded-2xl border border-gray-50 shadow-sm">
                                        <div className={`w-8 h-8 rounded-full ${task.color} text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-${task.color.split('-')[1]}-200`}>
                                            {task.id}
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[10px] font-black truncate">{task.title}</span>
                                            <span className="text-[8px] text-gray-400 truncate">{task.sub}</span>
                                        </div>
                                        <MoreHorizontal size={14} className="text-gray-300 ml-auto" />
                                    </div>

                                    <div className="flex-1 relative ml-12 h-10">
                                        <div
                                            className={`absolute h-full ${task.color} rounded-full flex items-center px-4 text-white text-[10px] font-bold shadow-lg shadow-${task.color.split('-')[1]}-100`}
                                            style={{
                                                left: `${(task.start / timelineDates.length) * 100}%`,
                                                width: `${(task.width / timelineDates.length) * 100}%`
                                            }}
                                        >
                                            <div className="flex items-center gap-2 w-full">
                                                <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center p-1">
                                                    <div className="w-full h-full bg-white rounded-full"></div>
                                                </div>
                                                <span className="flex-1 text-[8px] opacity-90 truncate">Task Name</span>
                                                <span className="ml-auto">{task.percent}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kanban Section */}
                    <div className="grid grid-cols-4 gap-6">
                        {['DRAFT', 'IN PROGRESS', 'EDITING', 'DONE'].map((col, idx) => (
                            <div key={col} className="flex flex-col gap-4">
                                <h3 className="text-[10px] font-black text-gray-400 tracking-widest text-center">{col}</h3>

                                {/* Sample Card */}
                                {idx === 0 && (
                                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-[10px] font-black">Main Task</h4>
                                            <MoreHorizontal size={12} className="text-gray-300" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">A</div>
                                                <span className="text-[8px] font-bold text-gray-600">Incididunt ut labore et dolore</span>
                                            </div>
                                            <div className="h-0.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                                <div className="h-full bg-cyan-400 w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-3 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center text-[8px] font-bold text-purple-600">B</div>
                                                <span className="text-[8px] font-bold text-gray-600">Magna aliqua enim</span>
                                            </div>
                                            <div className="h-0.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 w-1/2"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                                            <div className="flex gap-1 text-gray-300">
                                                <MessageCircle size={10} /> <span className="text-[8px] font-bold">3</span>
                                            </div>
                                            <div className="flex gap-1 text-gray-300">
                                                <Link size={10} /> <span className="text-[8px] font-bold">2</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {idx === 1 && (
                                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-[10px] font-black">Main Task</h4>
                                        </div>
                                        <div className="flex items-center gap-2 bg-blue-50/50 p-2 rounded-lg">
                                            <div className="w-5 h-5 rounded-md bg-pink-100 flex items-center justify-center text-[8px] font-bold text-pink-600">C</div>
                                            <span className="text-[8px] font-bold text-gray-600 flex-1">Incididunt ut labore et dolore</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[8px] font-bold text-gray-400">
                                            <MessageCircle size={10} /> <span>1</span>
                                            <CheckSquare size={10} className="ml-2" /> <span>0</span>
                                            <Plus size={10} className="ml-2" /> <span>5</span>
                                            <div className="ml-auto w-4 h-4 rounded-full bg-yellow-400 ring-2 ring-white"></div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[8px] font-bold text-gray-400">
                                                <span>Progress</span>
                                                <span className="text-gray-800">75%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 w-3/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {idx === 2 && (
                                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-[10px] font-black">Main Task</h4>
                                            <MoreHorizontal size={12} className="text-gray-300" />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1"></div>
                                                <p className="text-[8px] font-bold text-gray-600 leading-relaxed">Adipiscing elit sed do eiusmod</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1"></div>
                                                <p className="text-[8px] font-bold text-gray-600 leading-relaxed">Et dolore magna aliqua</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1"></div>
                                                <p className="text-[8px] font-bold text-gray-600 leading-relaxed">Excepteur sint occaecat cupidatat</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                                            <span className="text-[8px] font-bold text-gray-300">Supervisor</span>
                                            <CheckCircle2 size={12} className="text-green-400 ml-auto" />
                                            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                                        </div>
                                    </div>
                                )}

                                {idx === 3 && (
                                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex flex-col gap-4">
                                        <h4 className="text-[10px] font-black">Main Task</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">A</div>
                                                <span className="text-[8px] font-bold text-gray-400 flex-1 truncate">Incididunt ut labore et ...</span>
                                                <CheckCircle2 size={12} className="text-green-400" />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center text-[8px] font-bold text-purple-600">B</div>
                                                <span className="text-[8px] font-bold text-gray-400 flex-1 truncate">Magna aliqua enim ...</span>
                                                <CheckCircle2 size={12} className="text-green-400" />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-md bg-pink-100 flex items-center justify-center text-[8px] font-bold text-pink-600">C</div>
                                                <span className="text-[8px] font-bold text-gray-400 flex-1 truncate">Incididunt ut labore et ...</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <RightPanel />

            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
        </div>
    );
};

export default TaskDashboard;
