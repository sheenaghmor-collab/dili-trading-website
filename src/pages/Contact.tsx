import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react'

export function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to explore innovative drone solutions? Our global team is here to help you 
            achieve your goals with cutting-edge technology and expert guidance.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're committed to providing exceptional service and support. Reach out to us through 
                any of the following channels, and our team will respond promptly to discuss your 
                specific requirements.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      NO.16-8 INFINITY TOWER<br />
                      JALAN SS 6/3，KELANA JAYA<br />
                      PETALING JAYA SELANGOR<br />
                      Malaysia
                    </p>
                    <a 
                      href="https://www.google.com/maps?q=NO.16-8+INFINITY+TOWER,JALAN+SS+6/3,KELANA+JAYA,PETALING+JAYA+SELANGOR,Malaysia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View in Map
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+60173588197" className="hover:text-blue-600 transition-colors">
                        +60 173588197
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Business hours contact</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:bussies@dilitrade.com" className="hover:text-blue-600 transition-colors">
                        bussies@dilitrade.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">General inquiries and support</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-gray-500 mt-2">
                        *Malaysia Standard Time (MST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Location
              </h2>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for Google Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
                  <img 
                    src="/images/Modern_Technology_Operations_Center_Office.jpg" 
                    alt="Office Location" 
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    DILI TRADING SDN. BHD.
                  </h3>
                  <p className="text-gray-600">
                    Infinity Tower, Kelana Jaya<br />
                    Petaling Jaya, Selangor
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our office is conveniently located in the heart of Kelana Jaya, easily accessible 
                  by public transportation and major highways. The Infinity Tower offers modern 
                  facilities and ample parking for visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Start Your Drone Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you're looking for cutting-edge drone solutions, spectacular performances, 
            or expert consulting, our team is ready to help you achieve extraordinary results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">Quick response for urgent inquiries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">Detailed project discussions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">In-person consultations and demos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
