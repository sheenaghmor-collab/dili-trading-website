export function StatsSection() {
  const stats = [
    {
      number: '100+',
      label: 'Global Employees',
      description: 'Professionals worldwide'
    },
    {
      number: '2024',
      label: 'Established',
      description: 'Leading innovation since day one'
    },
    {
      number: '3',
      label: 'Core Services',
      description: 'Comprehensive drone solutions'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Dedicated to excellence'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence drives measurable results and lasting partnerships
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
