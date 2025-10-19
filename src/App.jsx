import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SocialProofSection from './components/SocialProofSection'
import PainSolutionSection from './components/PainSolutionSection'
import ForWhomSection from './components/ForWhomSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import CalculatorSection from './components/CalculatorSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <PainSolutionSection />
        <ForWhomSection />
        <ServicesSection />
        <ProcessSection />
        <CalculatorSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App

