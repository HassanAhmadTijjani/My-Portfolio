import React from 'react'

const Skills = () => {
    return (
        <div >
            <section id='skills' className="min-h-screen bg-slate-900 text-white flex items-center">
                <div className="max-w-4xl mx-auto px-4 py-20">
                    <h1 className='text-3xl'>Skills & Technlogies</h1>
                    {/* Frontend */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            Frontend
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center border-2 border-blue-700">
                                HTML
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center border-2 border-blue-700">
                                CSS
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center border-2 border-blue-700">
                                JavaScript
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center border-2 border-blue-700">
                                TypeScript
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center border-2 border-blue-700">
                                React
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center border-2 border-blue-700">
                                Angular
                            </div>
                        </div>
                    </div>
                    {/* Backend */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            Backend
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center border-2 border-blue-500">
                                C
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center  border-2 border-blue-500">
                                C#
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center  border-2 border-blue-500">
                                ASP.NET Core MVC
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center  border-2 border-blue-500">
                                Java
                            </div>
                        </div>

                    </div>
                    {/* Tools */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            Tools
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center  border-2 border-blue-500">
                                SQL
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center  border-2 border-blue-500">
                                Git
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center  border-2 border-blue-500">
                                GitHub
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills