import './assets/static-pages.css'

const translations = {
  id: {
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.contact': 'Kontak',
    'nav.back': 'Kembali ke beranda',
    'language.label': 'Pilih Bahasa',
    'profile.eyebrow': 'Tentang IndoSeaman',
    'profile.title': 'Menjaga laut,',
    'profile.titleAccent': 'menguatkan manusia.',
    'profile.intro': 'IndoSeaman adalah ruang digital bagi pelaut dan seluruh ekosistem maritim Indonesia. Kami mempertemukan talenta, pengetahuan, dan peluang agar industri maritim tumbuh lebih terbuka dan berkelanjutan. Platform ini dibangun oleh seorang Software Engineer yang juga masih aktif sebagai pelaut. Untuk mengenalnya lebih detil, silahkan klik',
    'profile.link': 'DeepWater Solutions',
    'profile.values': 'Nilai utama IndoSeaman',
    'profile.card1.title': 'Koneksi yang berarti',
    'profile.card1.text': 'Membangun jaringan profesional yang mempertemukan pelaut, perusahaan, dan komunitas.',
    'profile.card2.title': 'Peluang yang setara',
    'profile.card2.text': 'Membuka akses informasi karier dan pengembangan diri bagi insan maritim di seluruh Indonesia.',
    'profile.card3.title': 'Masa depan berkelanjutan',
    'profile.card3.text': 'Mendorong inovasi dan kolaborasi untuk laut yang sehat serta industri yang bertanggung jawab.',
    'services.eyebrow': 'Apa yang kami tawarkan',
    'services.title': 'Layanan IndoSeaman',
    'services.intro': 'Berbagai layanan untuk mendukung pelaut dan ekosistem maritim Indonesia.',
    'services.list': 'Daftar layanan IndoSeaman',
    'services.info.title': 'Informasi Pelaut',
    'services.info.text': 'Akses data dan informasi penting untuk membantu aktivitas profesional pelaut.',
    'services.info.action': 'Pelajari layanan',
    'services.community.title': 'Komunitas Maritim',
    'services.community.text': 'Bergabung dengan komunitas untuk berbagi pengalaman, wawasan, dan pengetahuan.',
    'services.community.action': 'Gabung komunitas',
    'services.career.title': 'Peluang Karier',
    'services.career.text': 'Temukan peluang kerja dan karier di sektor maritim Indonesia.',
    'services.career.action': 'Lihat peluang',
    'services.education.title': 'Pendidikan dan Pelatihan',
    'services.education.text': 'Akses materi pembelajaran dan pelatihan untuk mengembangkan kompetensi.',
    'services.education.action': 'Mulai belajar',
    'services.management.title': 'Sistem Informasi Manajemen',
    'services.management.text': 'Dukungan informasi terintegrasi untuk kebutuhan perusahaan pelayaran.',
    'services.management.action': 'Pelajari sistem',
    'contact.eyebrow': 'Mari terhubung',
    'contact.title': 'Hubungi IndoSeaman',
    'contact.intro': 'Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan kepada kami.',
    'contact.name': 'Nama',
    'contact.email': 'Email',
    'contact.message': 'Pesan',
    'contact.submit': 'Kirim pesan',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.back': 'Back to home',
    'language.label': 'Choose language',
    'profile.eyebrow': 'About IndoSeaman',
    'profile.title': 'Protecting the sea,',
    'profile.titleAccent': 'strengthening people.',
    'profile.intro': 'IndoSeaman is a digital space for seafarers and Indonesia\'s entire maritime ecosystem. We bring together talent, knowledge, and opportunities so the maritime industry can grow more openly and sustainably. This platform was built by a Software Engineer who is also an active seafarer. To learn more, visit',
    'profile.link': 'DeepWater Solutions',
    'profile.values': 'IndoSeaman\'s core values',
    'profile.card1.title': 'Meaningful connections',
    'profile.card1.text': 'Building professional networks that connect seafarers, companies, and communities.',
    'profile.card2.title': 'Equal opportunities',
    'profile.card2.text': 'Opening access to career information and personal development for maritime professionals across Indonesia.',
    'profile.card3.title': 'A sustainable future',
    'profile.card3.text': 'Encouraging innovation and collaboration for healthy seas and a responsible industry.',
    'services.eyebrow': 'What we offer',
    'services.title': 'IndoSeaman Services',
    'services.intro': 'Services to support seafarers and Indonesia\'s maritime ecosystem.',
    'services.list': 'IndoSeaman services list',
    'services.info.title': 'Seafarer Information',
    'services.info.text': 'Access essential data and information to support seafarers\' professional activities.',
    'services.info.action': 'Learn about the service',
    'services.community.title': 'Maritime Community',
    'services.community.text': 'Join a community to share experience, insights, and knowledge.',
    'services.community.action': 'Join the community',
    'services.career.title': 'Career Opportunities',
    'services.career.text': 'Find jobs and career opportunities in Indonesia\'s maritime sector.',
    'services.career.action': 'View opportunities',
    'services.education.title': 'Education and Training',
    'services.education.text': 'Access learning materials and training to develop your skills.',
    'services.education.action': 'Start learning',
    'services.management.title': 'Management Information System',
    'services.management.text': 'Integrated information support for shipping companies.',
    'services.management.action': 'Learn about the system',
    'contact.eyebrow': 'Let\'s connect',
    'contact.title': 'Contact IndoSeaman',
    'contact.intro': 'Have a question or want to collaborate? Send us a message.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send message',
  },
}

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : 'id'
  const dictionary = translations[selectedLanguage]

  document.documentElement.lang = selectedLanguage
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n]
    if (value) element.textContent = value
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder]
    if (value) element.placeholder = value
  })

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel]
    if (value) element.setAttribute('aria-label', value)
  })

  localStorage.setItem('site-language', selectedLanguage)
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.language
    applyLanguage(language)
    window.dispatchEvent(new CustomEvent('site-language-change', { detail: language }))
  })
})

applyLanguage(localStorage.getItem('site-language') || 'id')
