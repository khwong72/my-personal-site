import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Calendar, Clock, Video, Menu } from 'lucide-react';
import { siteConfig } from '../config/content';


const PersonalWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState('30min');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Dark Sidebar */}
      <div className={`fixed w-64 h-full bg-gradient-to-b from-gray-900 to-black p-8 transform transition-transform duration-200 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="space-y-8">
          <h1 className="text-white text-xl font-normal tracking-wide">{siteConfig.name}</h1>
          
          <nav className="space-y-6">
            {siteConfig.navItems.map((item) => (
              <div 
                key={item.title}
                className="group relative overflow-hidden"
                onMouseEnter={() => setHoveredSection(item.title)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <a 
                  href={item.href}
                  className="block text-gray-400 hover:text-white transform transition-all duration-300 hover:translate-x-2"
                >
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"/>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 w-full">
        {/* Mobile menu button */}
        <button 
          className="lg:hidden fixed top-4 left-4 p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>

        <main className="max-w-4xl mx-auto p-12">
          {/* Hero Section */}
          <section className="mb-24 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {siteConfig.hero.title}
                </span>
              </h2>
              <p className="text-gray-600 text-xl font-light leading-relaxed max-w-2xl">
                {siteConfig.hero.subtitle}
              </p>
            </div>
          </section>

          {/* About Section */}
          <section 
            className="mb-24 group"
            onMouseEnter={() => setHoveredSection('about')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                ABOUT
              </span>
              <ArrowRight 
                className={`ml-2 transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  hoveredSection === 'about' ? 'translate-x-2' : ''
                }`}
                size={20}
              />
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                {siteConfig.about.intro}
              </p>
              <p className="text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                {siteConfig.about.current}
              </p>
              <p className="text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                {siteConfig.about.previous}
              </p>
              <p className="text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                {siteConfig.about.location}
              </p>
            </div>
          </section>

          {/* Featured Work Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                FEATURED WORK
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {siteConfig.featuredWork.map((project, index) => (
                <article 
                  key={index}
                  className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-gray-50"
                  onMouseEnter={() => setHoveredSection(`work-${index}`)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"/>
                  </div>
                  <div className="relative z-10">
                    <a href={project.link} className="block space-y-3">
                      <h3 className="text-xl font-semibold text-black flex items-center">
                        {project.title}
                        <ArrowRight 
                          className={`ml-2 transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                            hoveredSection === `work-${index}` ? 'translate-x-2' : ''
                          }`}
                          size={16}
                        />
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                      <div className="flex items-center text-blue-600">
                        View Project <ExternalLink className="ml-1" size={16} />
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Writing Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                WRITING
              </span>
            </h2>
            <div className="space-y-6">
              {siteConfig.writings.map((article, index) => (
                <article 
                  key={index}
                  className="group transform transition-all duration-300 hover:translate-x-2"
                >
                  <a href={article.link} className="block space-y-2">
                    <h3 className="text-xl text-black group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600">{article.description}</p>
                    <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read more <ArrowRight className="ml-1" size={16} />
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Calendly Section */}
          <section className="mb-24" id="meet">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                LET'S CONNECT
              </span>
            </h2>
            
            {/* Meeting Type Selection */}
            <div className="mb-8">
              <h3 className="text-xl text-gray-700 mb-4">Select Meeting Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteConfig.meetingTypes.map(({ id, title, duration, description }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedDuration(id)}
                    className={`p-6 rounded-lg border transition-all duration-300 text-left group hover:shadow-md ${
                      selectedDuration === id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        selectedDuration === id ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        {id === '30min' ? (
                          <Clock size={24} className={
                            selectedDuration === id ? 'text-blue-500' : 'text-gray-500'
                          } />
                        ) : (
                          <Video size={24} className={
                            selectedDuration === id ? 'text-blue-500' : 'text-gray-500'
                          } />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
                        <p className="text-sm text-gray-500 mb-2">{duration}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg transform -rotate-1"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-blue-500" size={24} />
                    <h3 className="text-xl font-medium text-gray-900">Schedule a Time</h3>
                  </div>
                  <span className="text-sm text-gray-500">
                    Your timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </span>
                </div>
                
                {/* Calendly inline widget */}
                <div 
                  className="calendly-inline-widget" 
                  data-url={siteConfig.calendlyUrl}
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PersonalWebsite;
