'use client'

import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = ['about', 'research', 'projects', 'publications', 'experience', 'contact']

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold text-gray-900 tracking-tight">Iman Gandomi</h1>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              {sections.map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${activeSection === section ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600 hover:text-gray-900'} pb-2`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* About Section */}
        {activeSection === 'about' && (
          <section id="about" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="space-y-8">
                <h2 className="text-5xl font-light text-gray-900 leading-tight">About</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Master's student in Control Engineering at K. N. Toosi University of Technology, Iman Gandomi leads computer vision and medical AI research at the <span className="font-semibold">ARAS AI Lab</span>. His specific expertise lies in developing novel AI models for high-precision surgical video analysis, with a focus on instrument tracking and skill assessment for cataract surgery in collaboration with surgeons at Farabi and Noor Eye Hospitals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A top-12 finisher (top 9%) at the Sharif University LLM Agents Hackathon, he is passionate about bridging robotics and advanced AI in clinical settings. He envisions his PhD work advancing the frontier of multi-modal AI for surgical decision support and real-time operative feedback systems.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Research Section */}
        {activeSection === 'research' && (
          <section id="research" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
              <h2 className="text-5xl font-light text-gray-900 mb-16 leading-tight">Research Interests</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision & Surgical Video Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">Advanced techniques in segmentation, detection, and tracking for real-world medical video, with emphasis on temporal consistency and robustness to occlusions in dynamic surgical environments.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Learning for Medical AI</h3>
                  <p className="text-gray-700 leading-relaxed">Neural network architectures (Vision Transformers, Foundation Models) and self-supervised learning for dense signal understanding in high-dimensional medical data.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Surgical Skill Assessment & Decision Support</h3>
                  <p className="text-gray-700 leading-relaxed">AI-driven systems for quantifying surgical proficiency, operative difficulty classification, and real-time feedback mechanisms aligned with clinical standards.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multimodal AI & LLM Agents</h3>
                  <p className="text-gray-700 leading-relaxed">Retrieval-augmented generation and agentic systems for automated report generation, clinical narrative synthesis, and context-aware intelligent assistance.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section id="projects" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
              <h2 className="text-5xl font-light text-gray-900 mb-16 leading-tight">Projects</h2>
              <div className="space-y-12">
                <div className="border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Surgical Analysis Platform (Surgicise)</h3>
                  <p className="text-sm text-gray-500 mb-4">MediversAi | 2024 – Present</p>
                  <p className="text-gray-700 leading-relaxed mb-3">An integrated surgical intelligence platform automating proficiency assessment by translating operative video into objective kinematic metrics and interactive performance-tracking visualizations for resident training.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Computer-Aided Segmentation Tracking in Surgery</h3>
                  <p className="text-sm text-gray-500 mb-4">Master's Thesis Phase I | 2023 – Present</p>
                  <p className="text-gray-700 leading-relaxed mb-3">A temporally consistent segmentation framework leveraging memory-based propagation for robust instrument tracking despite surgical occlusions and rapid motion, advancing state-of-the-art in video object tracking.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cataract Surgery Skill Assessment System</h3>
                  <p className="text-sm text-gray-500 mb-4">Master's Thesis Phase II | NIMAD Grant (No. 4002766)</p>
                  <p className="text-gray-700 leading-relaxed mb-3">An automated platform for quantifying surgical proficiency through kinematic analysis of instrument-tissue interactions, aligned with clinical standards for reproducible, objective skill evaluation.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Capsulorhexis Segmentation & Morphology Analysis</h3>
                  <p className="text-sm text-gray-500 mb-4">Bachelor's Thesis | 2022 – 2023</p>
                  <p className="text-gray-700 leading-relaxed mb-3">A segmentation pipeline for precise capsulorhexis edge extraction enabling trajectory analysis and quantitative precision evaluation via morphological metrics.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Publications Section */}
        {activeSection === 'publications' && (
          <section id="publications" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="mb-16">
                <h2 className="text-5xl font-light text-gray-900 mb-4 leading-tight">Publications</h2>
                <p className="text-lg text-gray-600">A collection of my research work. Interests include medical computer vision, surgical robotics, and AI-driven clinical decision support.</p>
              </div>
              
              <div className="space-y-16">
                {/* Publication 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900 leading-tight pr-4 flex-1">Cataract-LMM: Large-Scale, Multi-Source, Multi-Task Benchmark for Deep Learning in Surgical Video Analysis</h3>
                      <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-6 text-sm text-gray-600 flex-wrap">
                      <span className="flex items-center gap-1"><span>📅</span> 2025</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Published</span>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Computer Vision</span>
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Medical AI</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <p className="text-sm font-semibold text-red-600 mb-2">🎯 TL;DR</p>
                          <p className="text-gray-700 leading-relaxed">A comprehensive benchmark dataset for deep learning in surgical video analysis, encompassing multi-source, multi-task surgical video data for advancing foundation models in medical computer vision.</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-purple-600 mb-2">👤 My Role</p>
                          <p className="text-gray-700 leading-relaxed">Co-authored research contributing to dataset design, multi-task learning framework architecture, and experimental validation across surgical video analysis benchmarks.</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-2">⭐ Highlights</p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2"><span>•</span><span>Large-scale multi-source surgical video dataset</span></li>
                            <li className="flex items-start gap-2"><span>•</span><span>Multi-task learning for diverse surgical analysis</span></li>
                            <li className="flex items-start gap-2"><span>•</span><span>Foundation model benchmarking for clinical applications</span></li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-1">
                        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-500 text-sm text-center p-4 mb-6">
                          <div>Representative Image<br/>Surgical Video Data</div>
                        </div>
                        
                        <div className="space-y-2">
                          <button className="w-full px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <span>📄</span> Paper (arXiv)
                          </button>
                          <button className="w-full px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <span>💾</span> Dataset
                          </button>
                          <button className="w-full px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <span>🔗</span> More Info
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 border-t pt-4"><strong>Authors:</strong> Ahmadi MJ, Gandomi I, Abdi P, Mohammadi SF, Taslimi A, Khodaparast M, Hashemi H, Tavakoli M, Taghirad HD</p>
                  </div>
                </div>
                
                {/* Publication 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900 leading-tight pr-4 flex-1">AI-Powered Framework for Cataract Surgery Video Optimization</h3>
                      <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-6 text-sm text-gray-600 flex-wrap">
                      <span className="flex items-center gap-1"><span>📅</span> 2024</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Published</span>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Video Analysis</span>
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Surgery</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <p className="text-sm font-semibold text-red-600 mb-2">🎯 TL;DR</p>
                          <p className="text-gray-700 leading-relaxed">An AI framework for enhancing surgical video quality and extracting salient operative content, improving accessibility for skill assessment and training applications in ophthalmic surgery.</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-purple-600 mb-2">👤 My Role</p>
                          <p className="text-gray-700 leading-relaxed">Lead researcher and co-author, responsible for video processing pipeline design, feature extraction strategy, and integration with existing surgical analysis systems.</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-2">⭐ Highlights</p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2"><span>•</span><span>Automated surgical video enhancement for quality improvement</span></li>
                            <li className="flex items-start gap-2"><span>•</span><span>Content extraction for actionable frame selection</span></li>
                            <li className="flex items-start gap-2"><span>•</span><span>Real-time processing suitable for clinical workflows</span></li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-1">
                        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-500 text-sm text-center p-4 mb-6">
                          <div>Representative Image<br/>Video Frame</div>
                        </div>
                        
                        <div className="space-y-2">
                          <button className="w-full px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <span>📄</span> Paper (PDF)
                          </button>
                          <button className="w-full px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <span>💻</span> Code (GitHub)
                          </button>
                          <button className="w-full px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <span>🔗</span> DOI
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 border-t pt-4"><strong>Conference:</strong> RSI Int. Conf. Robot. Mechatron. (ICRoM) 2024 | <strong>DOI:</strong> 10.1109/ICRoM64545.2024.10903624</p>
                  </div>
                </div>
                
                {/* Publication 3 */}
                <div className="border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">A Deep Dive Into Capsulorhexis Segmentation: From Dataset Creation to SAM Fine-tuning</h3>
                  <p className="text-sm text-gray-500 mb-3">Gandomi I, Vaziri M, Ahmadi MJ, Hadipour MR, Abdi P, Taghirad HD</p>
                  <p className="text-gray-700 mb-2 leading-relaxed">RSI Int. Conf. Robot. Mechatron. (ICRoM), 2023 | DOI: 10.1109/ICRoM60803.2023.10412370</p>
                </div>
                
                {/* Publication 4 */}
                <div className="border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Surgical instrument tracking for capsulorhexis eye surgery based on siamese networks</h3>
                  <p className="text-sm text-gray-500 mb-3">Lafouti M, Ahmadi MJ, Allahkaram MS, Gandomi I, Lotfi F, Mohammadzadeh M, Abdi P, Taghirad HD</p>
                  <p className="text-gray-700 mb-2 leading-relaxed">RSI Int. Conf. Robot. Mechatron. (ICRoM), 2022 | DOI: 10.1109/ICRoM57054.2022.10025355</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section id="experience" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
              <h2 className="text-5xl font-light text-gray-900 mb-16 leading-tight">Experience</h2>
              <div className="space-y-12">
                <div className="border-l-2 border-gray-300 pl-8">
                  <h3 className="text-xl font-semibold text-gray-900">Technical Lead & Deep Learning Engineer</h3>
                  <p className="text-sm text-gray-600 mt-1">MediversAi | 2024 – Present</p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex gap-2"><span>→</span><span>Spearheading engineering of core computer vision modules for Surgicise, an AI-driven platform for surgical skill assessment</span></li>
                    <li className="flex gap-2"><span>→</span><span>Architecting high-performance deep learning pipelines for real-time video segmentation with low-latency inference</span></li>
                    <li className="flex gap-2"><span>→</span><span>Leading translation of computer vision analytics into automated reporting frameworks for clinical decision support</span></li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gray-300 pl-8">
                  <h3 className="text-xl font-semibold text-gray-900">Computer Vision & AI Engineer</h3>
                  <p className="text-sm text-gray-600 mt-1">ARAS AI Lab — Farabi Eye Hospital, Tehran | 2022 – Present</p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex gap-2"><span>→</span><span>Led full-cycle development of a unified surgical intelligence platform integrating multi-modal Computer Vision and NLP</span></li>
                    <li className="flex gap-2"><span>→</span><span>Collaborated with clinical specialists to validate AI outputs against medical standards for reproducibility</span></li>
                    <li className="flex gap-2"><span>→</span><span>Mentored graduate and undergraduate research teams through weekly guidance and technical directives</span></li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gray-300 pl-8">
                  <h3 className="text-xl font-semibold text-gray-900">Conference Committee Member</h3>
                  <p className="text-sm text-gray-600 mt-1">ICRoM (Int. Conf. Robotics & Mechatronics) | 2022 – Present</p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex gap-2"><span>→</span><span>Directed end-to-end publication lifecycle ensuring IEEE Xplore indexing compliance and academic integrity</span></li>
                    <li className="flex gap-2"><span>→</span><span>Coordinated Creativity & Robotics student competitions facilitating engagement with industry professionals</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
              <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I'm interested in PhD opportunities, collaborative research, and discussions about AI in healthcare. Feel free to reach out with inquiries or ideas.
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Email: <a href="mailto:iman2001gnmi@email.kntu.ac.ir" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors">iman2001gnmi@email.kntu.ac.ir</a>
                </p>
                <p className="text-gray-700">
                  LinkedIn: <a href="https://www.linkedin.com/in/iman-gandomi/" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors">linkedin.com/in/iman-gandomi</a>
                </p>
                <p className="text-gray-700">
                  Google Scholar: <a href="https://scholar.google.com/" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors">Visit Profile</a>
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}