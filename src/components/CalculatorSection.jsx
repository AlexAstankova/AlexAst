import { useState } from 'react'
import { Calculator, CheckCircle2 } from 'lucide-react'
import ContactForm from './ContactForm.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Button } from '@/components/ui/button.jsx'

export default function CalculatorSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const [law, setLaw] = useState('44')
  const [urgent, setUrgent] = useState(false)

  const calculatePrice = () => {
    if (law === '44' && !urgent) return 4000
    if (law === '44' && urgent) return 6000
    if (law === '223' && !urgent) return 6000
    if (law === '223' && urgent) return 12000
    return 0
  }

  const included = [
    'Анализ документации закупки',
    'Подготовка и подача заявки (включая Форму 2)',
    'Участие в электронном аукционе',
    'Сопровождение заключения контракта',
    'Организация выпуска независимой гарантии'
  ]

  const price = calculatePrice()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Калькулятор стоимости
            </h2>
            <p className="text-lg text-gray-600">
              Узнайте стоимость участия в тендере за 30 секунд
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Law Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Выберите закон
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setLaw('44')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      law === '44'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">44-ФЗ</span>
                      {law === '44' && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Федеральная контрактная система</p>
                  </button>
                  <button
                    onClick={() => setLaw('223')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      law === '223'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">223-ФЗ</span>
                      {law === '223' && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Закупки отдельных видов юрлиц</p>
                  </button>
                </div>
              </div>

              {/* Urgency Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Срочность
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setUrgent(false)}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      !urgent
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Обычная</span>
                      {!urgent && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Стандартные сроки подготовки</p>
                  </button>
                  <button
                    onClick={() => setUrgent(true)}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      urgent
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Срочная</span>
                      {urgent && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Ускоренная подготовка</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-gray-700">Стоимость участия:</span>
                <span className="text-4xl font-bold text-blue-600">{price.toLocaleString('ru-RU')} ₽</span>
              </div>

              <div className="border-t border-blue-200 pt-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Что включено:</p>
                <ul className="space-y-2">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  * При необходимости могут быть добавлены внешние комиссии третьих лиц
                </p>
              </div>
            </div>

            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Получить точную смету по вашей закупке
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}

