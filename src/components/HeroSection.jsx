import { Button } from '@/components/ui/button.jsx'
import { useState } from 'react'
import ContactForm from './ContactForm.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'
import { CheckCircle2, FileText, Users, TrendingUp, Shield } from 'lucide-react'

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const services = [
    { icon: FileText, text: 'Стратегия продаж' },
    { icon: Users, text: 'Участие в тендерах "под ключ"' },
    { icon: TrendingUp, text: 'Привлечение финансирования' },
    { icon: Shield, text: 'Консультации на всех этапах' },
    { icon: CheckCircle2, text: 'Обучение' },
    { icon: CheckCircle2, text: 'Результативно и без лишних затрат на штат' }
  ]

  return (
    <section className="relative pt-24 pb-16 overflow-visible bg-gradient-to-br from-[#2B59C3] via-[#1e3a8a] to-[#1e40af]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              ВАШ НАДЁЖНЫЙ ПАРТНЁР<br />
              В РАБОТЕ С ТЕНДЕРАМИ
            </h1>

            <div className="space-y-4">
              <p className="text-xl text-white">
                Комплексное тендерное сопровождение вашего бизнеса:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white">{service.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-[#2B59C3] hover:bg-blue-50 text-lg px-8 font-semibold">
                    Запросить консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <ContactForm />
                </DialogContent>
              </Dialog>
              <a href="#problems">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2B59C3] text-lg px-8 font-semibold bg-transparent">
                  Узнать больше
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-6 text-xs text-white">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>44-ФЗ</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>223-ФЗ</span>
              </div>
              <div className="flex items-center space-x-1">
                <FileText className="w-4 h-4" />
                <span>ЕИС/ЕРУЗ</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>МЧД</span>
              </div>
            </div>
          </div>

          {/* Right Content - Alexandra's Photo */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Alexandra's professional photo */}
            <img 
              src="/images/alexandra.jpg?v=2025" 
              alt="Александра Астанкова" 
              className="h-[450px] w-auto object-contain drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

