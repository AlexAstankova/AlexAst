import { useState } from 'react'
import { MessageCircle, FileSearch, FileCheck, Gavel, FileSignature } from 'lucide-react'
import ContactForm from './ContactForm.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'

export default function ProcessSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем вашу ситуацию, цели и возможности участия в тендерах'
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Анализ закупки',
      description: 'Изучаем документацию, оцениваем требования и риски'
    },
    {
      icon: FileCheck,
      number: '03',
      title: 'Подготовка заявки',
      description: 'Собираем все необходимые документы и формируем заявку'
    },
    {
      icon: Gavel,
      number: '04',
      title: 'Участие в торгах',
      description: 'Подаём заявку и участвуем в аукционе от вашего имени'
    },
    {
      icon: FileSignature,
      number: '05',
      title: 'Заключение контракта',
      description: 'Сопровождаем до подписания контракта и организуем гарантии'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Простой и понятный процесс от консультации до заключения контракта
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-blue-400/30" style={{ top: '80px' }}></div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold z-10 border-4 border-blue-900">
                    {index + 1}
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 pt-12 hover:bg-white/20 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-blue-200" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-blue-100">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <button className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Начать сотрудничество
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

