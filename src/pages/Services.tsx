import { Plane, Lightbulb, Users, Settings, Target, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Drone Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From cutting-edge sales to spectacular performances and expert consulting,
            we deliver complete drone solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Drone Sales & Distribution */}
      <section id="sales" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Drone Sales & Distribution
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We offer a comprehensive range of professional-grade drones designed to meet
                diverse industry requirements. From commercial applications to consumer needs,
                our carefully curated selection ensures optimal performance and reliability.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commercial Drones</h3>
                    <p className="text-gray-600">Professional-grade UAVs for surveying, mapping, inspection, and industrial applications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Consumer Drones</h3>
                    <p className="text-gray-600">High-quality recreational drones with advanced camera systems and user-friendly controls.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Settings className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
                    <p className="text-gray-600">Comprehensive maintenance, repair services, and technical consultation for all drone models.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/commercial.jpg"
                alt="Commercial Drone Sales"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Drone Performances */}
      <section id="performances" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/professional-drone-light-show-astronaut-american-flag-stadium-night.jpg"
                alt="Professional Drone Light Show"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Professional Drone Performances
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your events with breathtaking aerial displays that captivate audiences
                and create unforgettable experiences. Our synchronized drone performances combine
                cutting-edge technology with artistic vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Light Shows & Formations</h3>
                    <p className="text-gray-600">Spectacular synchronized LED displays creating dynamic patterns and storytelling in the night sky.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Event Entertainment</h3>
                    <p className="text-gray-600">Custom performances for concerts, festivals, product launches, and special celebrations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Corporate Events</h3>
                    <p className="text-gray-600">Professional presentations and brand activations that leave lasting impressions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Services */}
      <section id="information" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Drone Information Services
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Navigate the complex world of drone technology with confidence. Our expert team
                provides comprehensive guidance, training, and insights to help you make informed
                decisions and achieve optimal results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Consulting</h3>
                    <p className="text-gray-600">Strategic advice on drone implementation, fleet management, and operational optimization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Settings className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Training</h3>
                    <p className="text-gray-600">Comprehensive pilot training programs and certification courses for all skill levels.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Regulatory Guidance</h3>
                    <p className="text-gray-600">Stay compliant with evolving regulations and industry standards across different jurisdictions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/professional_drone_maintenance_technician.jpg"
                alt="Drone Information Services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Explore Our Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our experts today to discuss your specific drone requirements and discover
            the perfect solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
