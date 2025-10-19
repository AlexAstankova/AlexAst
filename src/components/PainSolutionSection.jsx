import { AlertCircle, CheckCircle2, Clock, FileX, Users, TrendingDown } from 'lucide-react'

export default function PainSolutionSection() {
  const painSolutions = [
    {
      pain: {
        icon: Clock,
        title: 'Нет времени на тендеры',
        description: 'Подготовка заявок отнимает много времени у основного бизнеса'
      },
      solution: {
        icon: CheckCircle2,
        title: 'Берём всё на себя',
        description: 'Полное сопровождение от анализа до заключения контракта'
      }
    },
    {
      pain: {
        icon: FileX,
        title: 'Заявки отклоняют',
        description: 'Частые отклонения из-за ошибок в документах или несоответствия требованиям'
      },
      solution: {
        icon: CheckCircle2,
        title: 'Экспертная подготовка',
        description: 'Тщательная проверка всех документов и требований перед подачей'
      }
    },
    {
      pain: {
        icon: Users,
        title: 'Нет специалистов',
        description: 'Содержание штатного тендерного отдела — дорого и не всегда оправдано'
      },
      solution: {
        icon: CheckCircle2,
        title: 'Удалённый отдел',
        description: 'Профессиональная команда без затрат на содержание штата'
      }
    },
    {
      pain: {
        icon: TrendingDown,
        title: 'Высокие риски РНП',
        description: 'Риск попадания в реестр недобросовестных поставщиков'
      },
      solution: {
        icon: CheckCircle2,
        title: 'Минимизация рисков',
        description: 'Сопровождение до контракта и помощь в выполнении обязательств'
      }
    }
  ]

  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Решаем ваши проблемы с тендерами
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Понимаем боли бизнеса и предлагаем эффективные решения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {painSolutions.map((item, index) => {
            const PainIcon = item.pain.icon
            const SolutionIcon = item.solution.icon
            
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                {/* Pain */}
                <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <PainIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.pain.title}</h3>
                    <p className="text-sm text-gray-600">{item.pain.description}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <SolutionIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.solution.title}</h3>
                    <p className="text-sm text-gray-600">{item.solution.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

