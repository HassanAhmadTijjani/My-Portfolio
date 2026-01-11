import { ExternalLink, Github } from 'lucide-react'
import React from 'react'

const Projects = () => {
    return (
        <div>
            <section id="projects" className="min-h-screen bg-slate-800 text-white flex items-center">
                <div className="max-w-6xl mx-auto px-4 py-20">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* BSR-Mart */}
                        <div className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                <span className="text-6xl">🛒</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">BSR-Mart</h3>

                                <p className="text-slate-300 mb-4">
                                    An e-commerce platform handling three user groups: buyers, sellers, and riders. Features product listing, order management, and user authentication.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Angular</span>
                                       <span className="bg-blue-400 text-white text-sm px-3 py-1 rounded-full">TypeScript</span>

                                </div>

                                <div className="flex gap-4">
                                    <a href="https://github.com/HassanAhmadTijjani/bsr-mart" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                                        <Github size={20} />
                                        <span>Code</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                                        <ExternalLink size={20} />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/*  Library Console App*/}
                        <div className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                                <span className="text-6xl">📚</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Library Management System</h3>

                                <p className="text-slate-300 mb-4">
                                    A comprehensive book management system with full CRUD operations. Add, delete, search, update, and view books with an intuitive interface.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">C#</span>
                                </div>

                                <div className="flex gap-4">
                                    <a href="https://github.com/yourusername/library-system" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                                        <Github size={20} />
                                        <span>Code</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                                        <ExternalLink size={20} />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Weather App */}
                        <div className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                                <span className="text-6xl">🌤️</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Weather App</h3>

                                <p className="text-slate-300 mb-4">
                                    A responsive weather application that fetches real-time weather data. Clean UI with current conditions and forecasts.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-cyan-500 text-white text-sm px-3 py-1 rounded-full">React</span>
                                    <span className="bg-cyan-400 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
                                </div>

                                <div className="flex gap-4">
                                    <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                                        <Github size={20} />
                                        <span>Code</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                                        <ExternalLink size={20} />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects