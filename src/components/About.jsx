import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about" className='bg-slate-900 text-white flex items-center min-h-screen'>
                <div className="max-w-4xl px-4 py-20 mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
                    <div className="space-y-6 text-lg text-slate-300">
                        <p>
                            I'm a Polytechnic Informatics student based in Nigeria with a passion for building robust web applications. I specialize in frontend development with React, but my experience spans the full stack—from ASP.NET Core MVC backends to database-driven systems.
                        </p>
                        <p>
                            Over the years, I've built real-world projects including bank management systems, inventory tracking applications, and school management software. These projects taught me not just how to code, but how to architect solutions that solve actual business problems. Currently, I'm expanding my skill set into ethical hacking and cybersecurity.
                        </p>
                        <p>
                            I believe in writing clean, maintainable code and staying curious about new technologies. Whether it's mastering React hooks, understanding C# design patterns, or exploring Linux networking fundamentals, I approach every challenge as an opportunity to grow as a developer.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default About