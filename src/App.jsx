import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('site-language') || 'id')

  useEffect(() => {
    const handleLanguageChange = (event) => setLanguage(event.detail)
    window.addEventListener('site-language-change', handleLanguageChange)

    return () => window.removeEventListener('site-language-change', handleLanguageChange)
  }, [])

  const isEnglish = language === 'en'

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">{isEnglish ? 'Indonesian maritime platform' : 'Platform maritim Indonesia'}</p>
            <h1 id="hero-title">
              {isEnglish ? 'Connecting seafarers,' : 'Menyatukan pelaut,'}
              <span>{isEnglish ? ' shaping the future.' : ' menggerakkan masa depan.'}</span>
            </h1>
            <p className="hero-description">
              {isEnglish
                ? 'IndoSeaman helps maritime professionals find opportunities, build connections, and grow with Indonesia\'s shipping industry. By seafarers, for the glory of Indonesian maritime.'
                : 'IndoSeaman membantu insan maritim menemukan peluang, membangun koneksi, dan tumbuh bersama industri pelayaran Indonesia. Dari Pelaut, untuk kejayaan Maritim Indonesia.'}
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="layanan.html">
                {isEnglish ? 'Explore now' : 'Mulai menjelajah'} <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="hero-button hero-button-secondary" href="profil.html">
                {isEnglish ? 'Discover IndoSeaman' : 'Kenali IndoSeaman'}
              </a>
            </div>
            <br />
          </div>
          <div className="hero-location" aria-hidden="true">
            <span className="location-dot" />
            {isEnglish ? 'Indonesian waters' : 'Laut Indonesia'}
          </div>
        </section>
        <Footer />
      </main>
      
    </div>
  )
}

export default App
