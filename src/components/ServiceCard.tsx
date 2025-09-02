import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  link: string
}

export function ServiceCard({ icon, title, description, image, link }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-8">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <Link 
          to={link} 
          className="inline-flex items-center text-blue-800 font-medium hover:text-blue-600 transition-colors group-hover:translate-x-1 transform duration-200"
        >
          Learn More
          <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </div>
  )
}
