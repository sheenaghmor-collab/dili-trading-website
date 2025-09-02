import { Target, Users, Shield, Globe, Award, CheckCircle } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Innovation Excellence',
      description: 'Pushing the boundaries of drone technology with cutting-edge solutions and forward-thinking approaches.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Safety First',
      description: 'Uncompromising commitment to safety standards, regulatory compliance, and risk management in all operations.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Client Focus',
      description: 'Dedicated to understanding unique client needs and delivering personalized solutions that exceed expectations.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'International presence with local expertise, bringing world-class drone solutions to markets worldwide.'
    }
  ]

  const achievements = [
    'Industry-leading safety record with zero major incidents',
    'Certified partnerships with top drone manufacturers',
    'ISO 9001 quality management certification',
    'Experienced team with combined 500+ years in aerospace',
    'Successfully completed 1000+ performance events',
    'Regulatory compliance across multiple jurisdictions'
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Pioneering Excellence in Drone Innovation
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Since our establishment in 2024, DILI TRADING SDN. BHD. has rapidly emerged 
                as a global leader in comprehensive drone solutions, combining technological 
                expertise with unwavering commitment to client success.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/global_business_network_world_map_presence.jpg" 
                alt="Global Business Network" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize industries through innovative drone solutions, delivering exceptional 
                value to clients while advancing the boundaries of what's possible in unmanned aerial 
                technology. We strive to make drone technology accessible, reliable, and transformative 
                for businesses worldwide.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted partner for drone solutions, leading the industry 
                in innovation, safety, and customer satisfaction. We envision a future where drone 
                technology seamlessly integrates into daily operations, enhancing efficiency and 
                opening new possibilities across all sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Business Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DILI TRADING SDN. BHD. specializes in three comprehensive business segments that define 
              the future of drone technology and applications.
            </p>
          </div>

          <div className="space-y-16">
            {/* Drone Sales & Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Drone Sales & Distribution
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We provide comprehensive drone solutions across multiple market segments, from advanced 
                  commercial platforms to user-friendly consumer models.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Commercial Drones</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Professional-grade UAVs for surveying, mapping, inspection, and specialized industrial applications.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Consumer Drones</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">High-performance recreational drones with advanced camera systems and intuitive controls.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Industrial Applications</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Specialized solutions for agriculture, construction, logistics, and emergency response sectors.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Technical Support & Maintenance</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Comprehensive after-sales support including maintenance, repairs, and technical consultation services.</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/commercial_drone_EVO_Max_4N_business_technology_hero.jpg" 
                  alt="Drone Sales & Distribution" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Professional Drone Performances */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/images/professional-drone-light-show-astronaut-american-flag-stadium-night.jpg" 
                  alt="Professional Drone Performances" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Drone Performances
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transform events into unforgettable experiences with our spectacular synchronized 
                  drone performances that combine cutting-edge technology with artistic vision.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Light Shows & Formations</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Spectacular synchronized LED displays creating dynamic patterns, logos, and storytelling in the night sky.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Event Entertainment</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Custom performances for concerts, festivals, product launches, and special celebrations worldwide.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Corporate Events</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Professional brand activations and presentations that create lasting impressions for corporate clients.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Cultural Celebrations</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Traditional and modern cultural events enhanced with innovative aerial displays and performances.</p>
                </div>
              </div>
            </div>

            {/* Information Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Drone Information Services
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Navigate the complex world of drone technology with confidence through our comprehensive 
                  information services and expert guidance tailored to your specific needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Drone Consulting</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Strategic advice on drone implementation, fleet management, operational optimization, and ROI maximization.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Technical Training</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Comprehensive pilot certification programs, maintenance training, and skill development courses for all levels.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Industry Insights</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Market analysis, technology trends, competitive intelligence, and strategic planning support services.</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Regulatory Guidance</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-5">Compliance assistance, permit acquisition, and regulatory navigation across multiple international jurisdictions.</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/professional_drone_maintenance_technician.jpg" 
                  alt="Information Services" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and define our commitment 
              to excellence in all aspects of our business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Global Team, Local Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our diverse team of 100+ professionals spans continents, bringing together 
                decades of experience in aerospace engineering, software development, 
                regulatory compliance, and creative performance design.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This global distribution allows us to provide localized support while 
                maintaining consistent quality standards and leveraging international 
                best practices across all markets.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Global Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Global Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/modern-business-team-meeting-corporate-office-collaboration.jpg" 
                alt="Professional Team Meeting" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has earned recognition from industry leaders 
              and regulatory bodies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DILI TRADING SDN. BHD.?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We don't just provide drone solutions – we deliver partnerships that drive success, 
              innovation that creates opportunities, and expertise that ensures your goals are achieved.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Excellence</h3>
                <p className="text-blue-100">
                  Industry-leading track record with consistent delivery of exceptional results 
                  and unmatched client satisfaction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Scale</h3>
                <p className="text-blue-100">
                  International presence combined with local expertise ensures seamless 
                  service delivery regardless of project location.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Complete Security</h3>
                <p className="text-blue-100">
                  Comprehensive insurance coverage, regulatory compliance, and safety protocols 
                  provide peace of mind for every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
