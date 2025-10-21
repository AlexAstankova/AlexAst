import { Building2, Package, Laptop, Stethoscope, Truck, Award } from 'lucide-react'

export default function SocialProofSection() {
  const stats = [
    { icon: Award, value: '10+', label: 'лет опыта' },
    { icon: Users, value: '200+', label: 'довольных клиентов' },
    { icon: FileText, value: '500+', label: 'выигранных тендеров' },
    { icon: Building2, value: '15+', label: 'отраслей' }
  ]

  const industries = [
    { icon: Building2, name: 'Строительство' },
    { icon: Package, name: 'Поставки' },
    { icon: Stethoscope, name: 'Медицина' },
    { icon: Laptop, name: 'ИТ-услуги' },
    { icon: Truck, name: 'Логистика' },
    { icon: Award, name: 'Услуги' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats in one row with photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Stats - centered */}
          <div className="flex justify-center items-center">
            <div className="flex justify-center gap-8 w-full">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-[#2B59C3]" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Alexandra's photo */}
          <div className="hidden lg:flex justify-center items-center">
            <img 
              src="/images/alexandra.jpg" 
              alt="Александра Астанкова" 
              className="h-[400px] w-auto object-contain drop-shadow-lg rounded-lg"
              style={{
                filter: 'brightness(1.1) contrast(1.1)',
                mixBlendMode: 'lighten'
              }}
            />
          </div>
        </div>

        {/* Industries - all in one row */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Работаем с компаниями по всем направлениям
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Строительство, Поставки, Медицина, ИТ-услуги, Логистика, Услуги и многое другое
          </p>
          <div className="grid grid-cols-6 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                  <Icon className="w-8 h-8 text-[#2B59C3] mb-2" />
                  <span className="text-sm text-gray-700 text-center">{industry.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

