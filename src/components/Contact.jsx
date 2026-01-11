import React from 'react'
import { useState } from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Message sent! (This is a demo—connect to a backend later)')
        setFormData({ name: '', email: '', message: '' })
    }
    return (
        <div>
            <section id="contact" className="min-h-screen bg-slate-900 text-white flex items-center">
                <div className="max-w-4xl mx-auto px-4 py-20 w-full">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Get In Touch
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                onChange={handleChange}
                                type="text"
                                id="message"
                                name="message"
                                value={formData.message}
                                rows="5"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact