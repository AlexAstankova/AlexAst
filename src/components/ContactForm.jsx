import { useState } from 'react'
import { Mail, Phone, User } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'Консультация'
  })
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Telegram Bot Configuration
      const TELEGRAM_BOT_TOKEN = '8206709234:AAG6hRYX1C2dcGLJanQo_wJbrl_tatETddQ'
      const TELEGRAM_GROUP_ID = '-1002985302779'

      // Format message for Telegram
      const telegramMessage = `
📋 <b>Новая заявка на консультацию</b>

👤 <b>Имя:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
📱 <b>Телефон:</b> ${formData.phone}
${formData.type ? `📌 <b>Тип услуги:</b> ${formData.type}` : ''}
${formData.message ? `💬 <b>Сообщение:</b> ${formData.message}` : ''}

⏰ <b>Дата:</b> ${new Date().toLocaleString('ru-RU')}
      `

      // Send to Telegram
      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_GROUP_ID,
          text: telegramMessage,
          parse_mode: 'HTML'
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          type: 'Консультация'
        })
        setAgreed(false)
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Ошибка при отправке формы. Пожалуйста, попробуйте позже.')
      }
    } catch (err) {
      setError('Ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ваше имя *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none text-black placeholder:text-gray-500"
              placeholder="Иван Иванов"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none text-black placeholder:text-gray-500"
              placeholder="ivan@example.com"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none text-black placeholder:text-gray-500"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Интересующая услуга
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none text-black"
          >
            <option>Консультация</option>
            <option>Участие в тендере</option>
            <option>Стратегия продаж</option>
            <option>Обучение</option>
            <option>Другое</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none resize-none text-black placeholder:text-gray-500"
            placeholder="Расскажите о вашей ситуации..."
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Success Message */}
        {submitted && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            ✓ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </div>
        )}

        {/* Privacy Agreement */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="privacy"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            Я согласен на обработку персональных данных
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !agreed}
          className="w-full bg-[#2B59C3] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Отправка...' : 'Отправить заявку'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Обязательные поля
        </p>
      </form>
    </div>
  )
}

