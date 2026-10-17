import '../assets/bootstrap.css'
import '../assets/bootstrap.min.css'
import '../assets/bootstrap.bundle.min.js'
import '../assets/global.css'
import { useEffect, useState } from 'react'

function Navbar() {
    const [language, setLanguage] = useState(() => window.localStorage.getItem('site-language') || document.documentElement.lang || 'id')

    useEffect(() => {
        const handleLanguageChange = (event) => setLanguage(event.detail)
        window.addEventListener('site-language-change', handleLanguageChange)

        return () => window.removeEventListener('site-language-change', handleLanguageChange)
    }, [])

    const changeLanguage = (language) => {
        window.localStorage.setItem('site-language', language)
        window.dispatchEvent(new CustomEvent('site-language-change', { detail: language }))
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand fw-bold" href="index.html">IndoSeaman</a>
            <div className="language-switcher" aria-label={language === 'en' ? 'Choose language' : 'Pilih Bahasa'}>
                <button className="language-button" type="button" onClick={() => changeLanguage('id')} title="Bahasa Indonesia" aria-pressed={language === 'id'}>
                    <span className="language-flag language-flag-id" aria-hidden="true" />
                    <span>ID</span>
                </button>
                <button className="language-button" type="button" onClick={() => changeLanguage('en')} title="English" aria-pressed={language === 'en'}>
                    <span className="language-flag language-flag-en" aria-hidden="true" />
                    <span>EN</span>
                </button>
            </div>
            <a className="btn btn-outline-light btn-sm" href="index.html" data-i18n="nav.back">{language === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}</a>
        </div>
        </nav>   
    )
}

export default Navbar