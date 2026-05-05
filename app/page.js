'use client'

import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = ['about', 'research', 'projects', 'publications', 'experience', 'contact']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Iman Gandomi</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {sections.map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${activeSection === section ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'} pb-2`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* About Section */}
        {activeSection === 'about' && (
          <section id="about" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
                <p className="text-lg text-gray-700 mb-6">
                  I am a Master's student in Electrical and Control Engineering at K. N. Toosi University of Technology,
                  specializing in computer vision, deep learning, and their applications in computer-assisted surgery.
                  My research focuses on developing intelligent systems for surgical skill assessment and video analysis.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With a strong foundation in AI and machine learning, I have led multiple projects in surgical intelligence
                  platforms, published in top conferences, and mentored research teams. I am passionate about advancing
                  healthcare through technology and pursuing a PhD to contribute to this interdisciplinary field.
                </p>
                <a href="/Iman_Gandomi_CV.pdf" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Download CV
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Research Section */}
        {activeSection === 'research' && (
          <section id="research" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Research Interests</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Computer Vision</h3>
                  <p className="text-gray-700">Advanced techniques in image processing, object detection, segmentation, and tracking for medical applications.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Deep Learning</h3>
                  <p className="text-gray-700">Neural network architectures, generative models, and machine learning algorithms for complex data analysis.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Computer-Assisted Surgery</h3>
                  <p className="text-gray-700">AI-driven systems for surgical skill assessment, video analysis, and real-time assistance in operating rooms.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">LLM Agents</h3>
                  <p className="text-gray-700">Large language models and AI agents for automated reporting, feedback generation, and intelligent assistance.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section id="projects" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Surgical Analysis Platform</h3>
                  <p className="text-gray-700 mb-4">Integrated platform for automated proficiency assessment using motion analytics and performance visualizations.</p>
                  <span className="text-sm text-blue-600">MediversAi - Surgicise Software</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cataract Surgery Skill Assessment</h3>
                  <p className="text-gray-700 mb-4">Automated system for quantifying surgical proficiency through kinematic analysis.</p>
                  <span className="text-sm text-blue-600">Master's Thesis - NIMAD Grant</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">LLM-Based Surgical Reporting</h3>
                  <p className="text-gray-700 mb-4">RAG framework for translating metrics into medical narratives and feedback reports.</p>
                  <span className="text-sm text-blue-600">Surgicise Software Component</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Capsulorhexis Segmentation</h3>
                  <p className="text-gray-700 mb-4">Segmentation pipeline for trajectory analysis and precision evaluation.</p>
                  <span className="text-sm text-blue-600">Bachelor's Thesis</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Surgical Phase Recognition</h3>
                  <p className="text-gray-700 mb-4">Temporal classification system for predictive workflow segmentation.</p>
                  <span className="text-sm text-blue-600">Surgicise Software Component</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cataract Surgery Difficulty Detection</h3>
                  <p className="text-gray-700 mb-4">Deep learning system for categorizing intra-operative difficulty.</p>
                  <span className="text-sm text-blue-600">Surgicise Software Component</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Publications Section */}
        {activeSection === 'publications' && (
          <section id="publications" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Publications</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cataract-LMM: Large-Scale, Multi-Source, Multi-Task Benchmark for Deep Learning in Surgical Video Analysis</h3>
                  <p className="text-gray-700 mb-2">Ahmadi MJ, Gandomi I, et al.</p>
                  <p className="text-sm text-gray-600">arXiv preprint, 2025</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Framework for Cataract Surgery Video Optimization</h3>
                  <p className="text-gray-700 mb-2">Hatam SM, Gandomi I, et al.</p>
                  <p className="text-sm text-gray-600">RSI Int. Conf. Robot. Mechatron. (ICRoM), 2024</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">A Deep Dive Into Capsulorhexis Segmentation: From Dataset Creation to SAM Fine-tuning</h3>
                  <p className="text-gray-700 mb-2">Gandomi I, Vaziri M, et al.</p>
                  <p className="text-sm text-gray-600">RSI Int. Conf. Robot. Mechatron. (ICRoM), 2023</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Surgical instrument tracking for capsulorhexis eye surgery based on siamese networks</h3>
                  <p className="text-gray-700 mb-2">Lafouti M, Ahmadi MJ, et al.</p>
                  <p className="text-sm text-gray-600">RSI Int. Conf. Robot. Mechatron. (ICRoM), 2022</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section id="experience" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Technical Lead & Deep Learning Engineer</h3>
                  <p className="text-blue-600 mb-2">MediversAi | 2024 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Spearheading engineering of core computer vision modules for Surgicise platform</li>
                    <li>Architecting high-performance deep learning pipelines for real-time video segmentation</li>
                    <li>Leading translation of analytics into automated reporting frameworks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Computer Vision & AI Engineer</h3>
                  <p className="text-blue-600 mb-2">ARAS AI Lab — Farabi Eye Hospital | 2022 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Led full-cycle development of surgical intelligence platform</li>
                    <li>Collaborated with clinical specialists for AI validation</li>
                    <li>Served as Technical Lead for student research teams</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Student Committee Member</h3>
                  <p className="text-blue-600 mb-2">ICRoM Conference | 2022 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Directed publication lifecycle for IEEE Xplore compliance</li>
                    <li>Coordinated student competitions and technical workshops</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact</h2>
              <p className="text-lg text-gray-700 mb-6">
                Interested in collaborating or have questions about my research?
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">Email: <a href="mailto:iman2001gnmi@email.kntu.ac.ir" className="text-blue-600">iman2001gnmi@email.kntu.ac.ir</a></p>
                <p className="text-gray-700">LinkedIn: <a href="#" className="text-blue-600">linkedin.com/in/iman-gandomi</a></p>
                <p className="text-gray-700">Google Scholar: <a href="#" className="text-blue-600">scholar.google.com</a></p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}