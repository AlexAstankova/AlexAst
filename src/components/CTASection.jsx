import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Button } from '@/components/ui/button.jsx'
import { MessageCircle, Phone, Mail, X } from 'lucide-react'
import ContactForm from './ContactForm'

export default function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать зарабатывать на госзакупках?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите бесплатную консультацию 30 минут и узнайте, как выигрывать тендеры
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-sm text-blue-100">Быстрый ответ в мессенджере</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-blue-100">Звоните в рабочее время</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-blue-100">Подробный запрос на почту</p>
              </div>
            </div>
          </div>

          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-12 py-6"
              >
                Запросить консультацию
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <ContactForm />
            </DialogContent>
          </Dialog>

          <p className="text-sm text-blue-200 mt-6">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  )
}

