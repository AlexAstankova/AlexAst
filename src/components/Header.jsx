import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import ContactForm from './ContactForm.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'

export default function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2B59C3] to-[#1e3a8a] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">А</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900 leading-tight">УДАЛЁННЫЙ ТЕНДЕРНЫЙ ОТДЕЛ</span>
              <span className="text-xs text-gray-600">АЛЕКСАНДРА АСТАНКОВОЙ</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-[#2B59C3] transition-colors">
              О компании
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-[#2B59C3] transition-colors">
              Услуги
            </a>
            <a href="#info" className="text-sm font-medium text-gray-700 hover:text-[#2B59C3] transition-colors">
              Полезная информация
            </a>
            <a href="#contacts" className="text-sm font-medium text-gray-700 hover:text-[#2B59C3] transition-colors">
              Контакты
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 ml-auto">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Позвонить</span>
            </Button>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-[#2B59C3] hover:bg-[#1e3a8a] flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Консультация</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}

