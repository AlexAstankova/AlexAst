import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contacts" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">А</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white leading-tight">УДАЛЁННЫЙ ТЕНДЕРНЫЙ ОТДЕЛ</span>
                <span className="text-xs text-gray-400">АЛЕКСАНДРА АСТАНКОВОЙ</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Профессиональное сопровождение участия в государственных закупках по 44-ФЗ и 223-ФЗ. 
              Работаем по всей России.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">О компании</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Услуги</a></li>
              <li><a href="#info" className="hover:text-blue-400 transition-colors">Полезная информация</a></li>
              <li><a href="#contacts" className="hover:text-blue-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>8-962-446-06-61</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>astankova-tender@yandex.ru</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Работаем по всей России</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Удалённый тендерный отдел Александры Астанковой. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

