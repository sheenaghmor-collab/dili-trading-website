import { ArrowRight, Users, Calendar, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'
import { StatsSection } from '../components/StatsSection'

export function Homepage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/professional_drone_light_show_butterflies_night_sky.jpg" 
            alt="Professional Drone Performance" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Leading Innovation in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> Drone Technology</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              DILI TRADING SDN. BHD. delivers cutting-edge drone solutions across sales, spectacular performances, 
              and comprehensive information services. Trusted by clients worldwide since 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Explore Our Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pioneering the Future of Drone Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our establishment in 2024, DILI TRADING SDN. BHD. has emerged as a leading force 
                in the global drone industry. With over 100 professionals distributed worldwide, we combine 
                cutting-edge technology with unparalleled expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From commercial drone sales to breathtaking aerial performances, we deliver solutions 
                that exceed expectations and drive innovation across industries.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-600 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/images/modern_drone_company_control_room_office.jpg" 
                alt="Modern Drone Technology Office" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in three key areas that define the future of drone technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Zap className="w-12 h-12 text-blue-600" />}
              title="Drone Sales & Distribution"
              description="Premium commercial and consumer drones with comprehensive support and maintenance services."
              image="/images/commercial_drone_EVO_Max_4N_business_technology_hero.jpg"
              link="/services#sales"
            />
            <ServiceCard
              icon={<Calendar className="w-12 h-12 text-blue-600" />}
              title="Professional Drone Performances"
              description="Spectacular light shows and formations for events, celebrations, and corporate entertainment."
              image="/images/professional-drone-light-show-astronaut-american-flag-stadium-night.jpg"
              link="/services#performances"
            />
            <ServiceCard
              icon={<Users className="w-12 h-12 text-blue-600" />}
              title="Information Services"
              description="Expert consulting, technical training, industry insights, and regulatory guidance."
              image="/images/professional_drone_maintenance_technician.jpg"
              link="/services#information"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust DILI TRADING for innovative drone solutions 
            that drive success and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Our Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
