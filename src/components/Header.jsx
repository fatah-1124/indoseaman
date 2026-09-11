import '../assets/bootstrap.css'
import '../assets/bootstrap.min.css'
import '../assets/bootstrap.bundle.min.js'
import '../assets/global.css'
import { useEffect, useState } from 'react'

function Header() {
    const [language, setLanguage] = useState(() => window.localStorage.getItem('site-language') || 'id')

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
        <nav className="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="primary">
            <div className="container-fluid">
                <div className="d-flex align-items-center gap-3">
                    <a className="navbar-brand text-white" href="index.html">
                        <h4 className="m-0">IndoSeaman</h4>
                    </a>
                </div>
                <div className="language-switcher" aria-label="Pilih Bahasa">
                    <button className="language-button" type="button" onClick={() => changeLanguage('id')} title="Bahasa Indonesia">
                        <span className="language-flag language-flag-id" aria-hidden="true" />
                        <span>ID</span>
                    </button>
                    <button className="language-button" type="button" onClick={() => changeLanguage('en')} title="English">
                        <span className="language-flag language-flag-en" aria-hidden="true" />
                        <span>EN</span>
                    </button>
                </div>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto gap-2">
                        <li className="nav-item"><a className="btn btn-light" href="/beranda">{language === 'en' ? 'Home' : 'Beranda'}</a></li>
                        <li className="nav-item"><a className="btn btn-light" href="layanan.html">{language === 'en' ? 'Services' : 'Layanan'}</a></li>
                        <li className="nav-item"><a className="btn btn-light" href="profil.html">{language === 'en' ? 'Profile' : 'Profil'}</a></li>
                        <li className="nav-item"><a className="btn btn-light" href="kontak.html">{language === 'en' ? 'Contact' : 'Kontak'}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
