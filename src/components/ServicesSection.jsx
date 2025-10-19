import { useState } from 'react'
import { FileSearch, FileCheck, Gavel, FileSignature, Shield, GraduationCap } from 'lucide-react'
import ContactForm from './ContactForm.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const services = [
    {
      icon: FileSearch,
      title: 'Консультация',
      price: 'Бесплатно',
      description: '30-минутная консультация по вашей ситуации',
      features: [
        'Анализ текущей ситуации',
        'Оценка перспектив участия',
        'Рекомендации по стратегии',
        'Ответы на вопросы'
      ]
    },
    {
      icon: FileCheck,
      title: 'Экспресс-аудит',
      price: 'от 5 000 ₽',
      description: 'Быстрая оценка готовности к участию в конкретной закупке',
      features: [
        'Анализ документации закупки',
        'Проверка соответствия требованиям',
        'Оценка рисков',
        'Рекомендации по участию'
      ]
    },
    {
      icon: Gavel,
      title: 'Участие "под ключ"',
      price: 'от 4 000 ₽',
      description: 'Полное сопровождение участия в тендере',
      features: [
        'Подготовка всех документов',
        'Подача заявки на площадке',
        'Участие в аукционе',
        'Сопровождение до контракта',
        'Организация независимой гарантии'
      ]
    },
    {
      icon: FileSignature,
      title: 'Стратегия продаж',
      price: 'от 30 000 ₽',
      description: 'Разработка стратегии участия в госзакупках',
      features: [
        'Анализ рынка и конкурентов',
        'Подбор перспективных закупок',
        'План участия на квартал/год',
        'Оптимизация процессов'
      ]
    },
    {
      icon: Shield,
      title: 'Абонемент',
      price: 'от 50 000 ₽/мес',
      description: 'Постоянное сопровождение вашего бизнеса',
      features: [
        'Неограниченные консультации',
        'Участие в закупках по тарифу',
        'Приоритетная поддержка',
        'Стратегическое планирование'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Обучение',
      price: 'от 15 000 ₽',
      description: 'Обучение ваших сотрудников работе с тендерами',
      features: [
        'Основы 44-ФЗ и 223-ФЗ',
        'Работа на электронных площадках',
        'Подготовка документов',
        'Практические кейсы'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Лестница ценности: от бесплатной консультации до полного сопровождения
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{service.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Service Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                {(() => {
                  const Icon = services[activeTab].icon
                  return (
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  )
                })()}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeTab].title}</h3>
                  <p className="text-gray-600">{services[activeTab].description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{services[activeTab].price}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {services[activeTab].features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                  <button className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Заказать услугу
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

