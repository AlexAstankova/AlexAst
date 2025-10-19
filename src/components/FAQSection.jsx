import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Как проходит бесплатная консультация?',
      answer: 'Бесплатная консультация длится 30 минут. Мы обсуждаем вашу ситуацию, анализируем возможности участия в тендерах, отвечаем на вопросы и даём рекомендации по дальнейшим действиям. Консультация проводится онлайн в удобное для вас время.'
    },
    {
      question: 'Какие гарантии успешного участия в тендере?',
      answer: 'Мы не можем гарантировать 100% победу в тендере, так как это зависит от многих факторов, включая конкурентов и условия закупки. Однако мы гарантируем профессиональную подготовку всех документов, соблюдение всех требований и минимизацию рисков отклонения заявки.'
    },
    {
      question: 'Работаете ли вы по всей России?',
      answer: 'Да, мы работаем с клиентами из всех регионов России. Все взаимодействие происходит в онлайн-формате, что позволяет нам эффективно сопровождать участие в тендерах независимо от вашего местоположения.'
    },
    {
      question: 'Сколько времени занимает подготовка к участию в тендере?',
      answer: 'Стандартная подготовка занимает 3-5 рабочих дней. При срочной подготовке мы можем сократить срок до 1-2 дней. Точные сроки зависят от сложности закупки и полноты предоставленных вами документов.'
    },
    {
      question: 'Что делать, если у меня нет опыта участия в тендерах?',
      answer: 'Это не проблема! Мы специализируемся на работе с новичками. Проведём обучение, поможем с регистрацией на площадках, подготовим все необходимые документы и будем сопровождать вас на каждом этапе.'
    },
    {
      question: 'Какие документы нужны для участия в тендере?',
      answer: 'Базовый пакет включает: выписку из ЕГРЮЛ/ЕГРИП, устав, решение о назначении руководителя, финансовую отчётность, лицензии (если требуются). Полный список зависит от конкретной закупки и её требований.'
    },
    {
      question: 'Можно ли отказаться от услуги после начала работы?',
      answer: 'Да, вы можете отказаться на любом этапе. Оплата производится только за фактически выполненные работы согласно договору.'
    },
    {
      question: 'Как происходит оплата услуг?',
      answer: 'Оплата производится по безналичному расчёту на основании договора и выставленного счёта. Возможна поэтапная оплата для крупных проектов.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
            <a href="https://t.me/astankova_alexandra" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Задать вопрос эксперту
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

