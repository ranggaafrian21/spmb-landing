import { ConfigProvider } from 'antd'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import TrustedSection  from './components/TrustedSection'
import Problems        from './components/Problems'
import Features        from './components/Features'
import Steps           from './components/Steps'
import Testimoni       from './components/Testimoni'
import PricingPackages from './components/PricingPackages'
import FAQ             from './components/FAQ'
import CTA             from './components/CTA'
import Footer          from './components/Footer'

const INTER = "'Inter', system-ui, -apple-system, sans-serif"

export default function App() {
  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: INTER,
        fontSize: 14,
      },
    }}>
      <Navbar />
      <main>
        <Hero />
        <TrustedSection />
        <Problems />
        <Features />
        <Steps />
        <Testimoni />
        <PricingPackages />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </ConfigProvider>
  )
}
