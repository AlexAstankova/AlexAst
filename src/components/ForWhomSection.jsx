import { Rocket, TrendingUp, Award } from 'lucide-react'

export default function ForWhomSection() {
  const audiences = [
    {
      icon: Rocket,
      title: 'Новички',
      subtitle: 'Только начинаете работу с тендерами',
      features: [
        'Обучение основам участия в тендерах',
        'Помощь в регистрации на площадках',
        'Сопровождение первых заявок',
        'Консультации по выбору закупок'
      ],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Опытные',
      subtitle: 'Участвуете в тендерах, но хотите больше',
      features: [
        'Оптимизация процессов подачи заявок',
        'Снижение количества отклонений',
        'Расширение географии участия',
        'Работа со сложными закупками'
      ],
      color: 'green'
    },
    {
      icon: Award,
      title: 'Профессионалы',
      subtitle: 'Нужна экспертная поддержка',
      features: [
        'Стратегическое планирование',
        'Работа с крупными контрактами',
        'Юридическое сопровождение',
        'Антидемпинговые стратегии'
      ],
      color: 'purple'
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      border: 'border-blue-200'
    },
    green: {
      bg: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      border: 'border-green-200'
    },
    purple: {
      bg: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      border: 'border-purple-200'
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Для кого наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Работаем с компаниями на любом уровне опыта в госзакупках
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            const colors = colorClasses[audience.color]
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} rounded-2xl p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-xl mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{audience.subtitle}</p>
                
                <ul className="space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <svg className={`w-5 h-5 ${colors.iconColor} mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

