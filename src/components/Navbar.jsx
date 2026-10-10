import '../assets/bootstrap.css'
import '../assets/bootstrap.min.css'
import '../assets/bootstrap.bundle.min.js'
import '../assets/global.css'
import { useEffect, useState } from 'react'

function Navbar () {
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
        <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.html">IndoSeaman</a>
            <div class="static-language-switcher ms-auto me-3" aria-label="Pilih Bahasa">
            <button class="static-language-button" type="button" data-language="id">ID</button>
            <button class="static-language-button" type="button" data-language="en">EN</button>
            </div>
            <a class="btn btn-outline-light btn-sm" href="index.html" data-i18n="nav.back">Kembali ke beranda</a>
        </div>
        </nav>   
    )
}

export default Navbar