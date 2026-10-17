import './assets/static-pages.css'

const translations = {
  id: {
    'founder.web' : 'Profil Pendiri',
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.contact': 'Kontak',
    'nav.back': 'Kembali ke beranda',
    'language.label': 'Pilih Bahasa',
    'profile.nav': 'Navigasi profil',
    'page.profile.title': 'Profil IndoSeaman',
    'page.profile.description': 'Profil IndoSeaman, platform maritim Indonesia.',
    'profile.eyebrow': 'Tentang IndoSeaman',
    'profile.title': 'Menjaga laut,',
    'profile.titleAccent': 'menguatkan manusia.',
    'profile.intro': 'IndoSeaman adalah ruang digital bagi pelaut dan seluruh ekosistem maritim Indonesia. Kami mempertemukan talenta, pengetahuan, dan peluang agar industri maritim tumbuh lebih terbuka dan berkelanjutan. Platform ini dibangun oleh seorang Software Developer | Data Consultant yang pernah aktif sebagai pelaut, selama lebih dari satu dekade.',
    'profile.link': 'DeepWater Solutions',
    'profile.values': 'Nilai utama IndoSeaman',
    'profile.card1.title': 'Koneksi yang berarti',
    'profile.card1.text': 'Membangun jaringan profesional yang mempertemukan pelaut, perusahaan, dan komunitas.',
    'profile.card2.title': 'Peluang yang setara',
    'profile.card2.text': 'Membuka akses informasi karier dan pengembangan diri bagi insan maritim di seluruh Indonesia.',
    'profile.card3.title': 'Masa depan berkelanjutan',
    'profile.card3.text': 'Mendorong inovasi dan kolaborasi untuk laut yang sehat serta industri yang bertanggung jawab.',
    'services.eyebrow': 'Apa yang kami tawarkan',
    'services.title': 'Layanan Kami',
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
    'services.career.post': 'Posting Lowongan',
    'seafarer.list.title': 'Pelaut Terverifikasi',
    'seafarer.list.text': 'Data pelaut yang terdaftar di platform ini dan terverifikasi berdasarkan kode pelaut, untuk membantu Manning Agency dan pemilik kapal mencari kandidat kru.',
    'seafarer.list.action': 'Lihat Pelaut',
    'seafarer.list.add': 'Registrasi Pelaut',
    'companies.info.title': 'Perusahaan Resmi',
    'companies.info.text': 'Daftar perusahaan resmi di Indonesia, baik perusahaan lokal maupun perwakilan internasional, untuk membantu pelaut mencari peluang kerja dengan aman dan nyaman.',
    'companies.info.action': 'Lihat Perusahaan',
    'companies.info.register': 'Registrasi Perusahaan',
    'site.supported': 'Didukung Oleh:',
    'page.services.title': 'Layanan IndoSeaman',
    'page.services.description': 'Layanan untuk mendukung pelaut dan industri maritim Indonesia.',
    'page.sim.title': 'Sistem Informasi Manajemen | IndoSeaman',
    'page.sim.description': 'Sistem informasi manajemen terintegrasi untuk perusahaan maritim.',
    'sim.eyebrow': 'Sistem Informasi Manajemen',
    'sim.hero.title': 'Perancangan Sistem Terintegrasi untuk Perusahaan Maritim',
    'sim.hero.intro': 'Dapatkan solusi manajemen yang efisien dan terintegrasi untuk mengelola operasional perusahaan maritim Anda.',
    'sim.services.title': 'Beberapa Jenis Layanan',
    'sim.services.aria': 'Daftar layanan sistem informasi manajemen',
    'sim.database.title': 'Manajemen Database',
    'sim.database.text': 'Merancang struktur database untuk data kru, sertifikat pelaut, dan riwayat pelayaran kapal agar masa berlaku sertifikat dan kepatuhan ISM mudah dipantau lintas departemen.',
    'sim.web.title': 'Pengembangan Web',
    'sim.web.text': 'Membangun aplikasi web untuk perusahaan pelayaran, mulai dari profil perusahaan dan sistem manajemen kru hingga portal internal untuk rotasi kru dan jadwal docking.',
    'sim.analysis.title': 'Analisis Data',
    'sim.analysis.text': 'Mengolah data operasional kapal, seperti konsumsi bahan bakar, profitabilitas pelayaran, dan titik impas, menjadi wawasan untuk mendukung keputusan bisnis yang lebih tepat.',
    'sim.visualization.title': 'Visualisasi Data',
    'sim.visualization.text': 'Menyajikan dasbor interaktif untuk memantau efisiensi bahan bakar, profitabilitas pelayaran, dan status sertifikat kru secara real-time agar data operasional kapal mudah dipahami manajemen.',
    'sim.training.title': 'Pelatihan Komputer',
    'sim.training.text': 'Melatih staf perusahaan menggunakan Microsoft Excel, Google Sheets, Microsoft Access, dan SQL Server agar dapat membuat pelacak masa berlaku sertifikat dan kalkulator titik impas kapal.',
    'common.contact': 'Hubungi Kami',
    'page.training.title': 'Pendidikan dan Pelatihan | IndoSeaman',
    'page.training.description': 'Program pendidikan dan pelatihan untuk profesional maritim.',
    'training.eyebrow': 'Pengembangan Profesional',
    'training.title': 'Pendidikan dan Pelatihan',
    'training.intro': 'Jelajahi program pelatihan yang dirancang untuk mengembangkan keterampilan Anda.',
    'training.prompt': 'Pilih program di bawah ini untuk mendaftar:',
    'training.list': 'Program pendidikan dan pelatihan',
    'training.english.title': 'Bahasa Inggris untuk Pelaut',
    'training.english.text': 'Akses materi belajar dan pelatihan untuk meningkatkan kemampuan komunikasi Bahasa Inggris Anda.',
    'training.welding.title': 'Keterampilan Pengelasan',
    'training.welding.text': 'Kursus pengelasan dengan sertifikasi BNSP dan NKK.',
    'training.courses.title': 'Kursus Praktis Bersertifikat BNSP',
    'training.courses.text': 'Pelajari kelistrikan, pengoperasian mesin bubut, pengelasan, teknik pendingin, dan manajemen produksi melalui kursus bersertifikat BNSP.',
    'page.community.title': 'Komunitas | IndoSeaman',
    'page.community.description': 'Terhubung dengan pelaut dan profesional maritim di seluruh Indonesia.',
    'community.eyebrow': 'Komunitas IndoSeaman',
    'community.title': 'Bergabung dengan Komunitas Pelaut',
    'community.intro': 'Terhubung dengan pelaut di seluruh Indonesia, berbagi pengalaman, dan membangun relasi di ekosistem maritim.',
    'community.details': 'Komunitas ini terbuka bagi seluruh insan maritim, termasuk pelaut, staf pengawakan, staf keagenan kapal, syahbandar, dosen kelautan, dan profesional lainnya. Komunitas kami berbasis Telegram. Pastikan Anda memiliki akun Telegram sebelum bergabung.',
    'community.prompt': 'Silakan gunakan tautan berikut untuk bergabung:',
    'community.link': 'Gabung Komunitas Telegram IndoSeaman',
    'contact.eyebrow': 'Mari terhubung',
    'contact.title': 'Hubungi IndoSeaman',
    'contact.intro': 'Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan kepada kami.',
    'contact.name': 'Nama',
    'contact.email': 'Email',
    'contact.message': 'Pesan',
    'contact.submit': 'Kirim pesan',
  },
  en: {
    'founder.web' : 'Founder Profile',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.back': 'Back to home',
    'language.label': 'Choose language',
    'profile.nav': 'Profile navigation',
    'page.profile.title': 'About IndoSeaman',
    'page.profile.description': 'Learn about IndoSeaman, Indonesia\'s maritime platform.',
    'profile.eyebrow': 'About IndoSeaman',
    'profile.title': 'Protecting the sea,',
    'profile.titleAccent': 'strengthening people.',
    'profile.intro': 'IndoSeaman is a digital space for seafarers and Indonesia\'s entire maritime ecosystem. We bring together talent, knowledge, and opportunities so the maritime industry can grow more openly and sustainably. This platform was built by a Software Developer | Data Consultant who was active as a seafarer for over a decade.',
    'profile.link': 'DeepWater Solutions',
    'profile.values': 'IndoSeaman\'s core values',
    'profile.card1.title': 'Meaningful connections',
    'profile.card1.text': 'Building professional networks that connect seafarers, companies, and communities.',
    'profile.card2.title': 'Equal opportunities',
    'profile.card2.text': 'Opening access to career information and personal development for maritime professionals across Indonesia.',
    'profile.card3.title': 'A sustainable future',
    'profile.card3.text': 'Encouraging innovation and collaboration for healthy seas and a responsible industry.',
    'services.eyebrow': 'What we offer',
    'services.title': 'Our Services',
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
    'services.career.post': 'Post a Job',
    'seafarer.list.title': 'Verified Seafarers',
    'seafarer.list.text': 'Seafarer profiles registered on this platform and verified by seafarer identification code, helping manning agencies and ship owners find crew candidates.',
    'seafarer.list.action': 'View Seafarers',
    'seafarer.list.add': 'Register as a Seafarer',
    'companies.info.title': 'Licensed Companies',
    'companies.info.text': 'Browse licensed companies in Indonesia, including local companies and international representatives, and find job opportunities with greater confidence.',
    'companies.info.action': 'View Companies',
    'companies.info.register': 'Register a Company',
    'site.supported': 'Supported By:',
    'page.services.title': 'IndoSeaman Services',
    'page.services.description': 'Services for seafarers and Indonesia\'s maritime industry.',
    'page.sim.title': 'Management Information Systems | IndoSeaman',
    'page.sim.description': 'Integrated management information systems for maritime companies.',
    'sim.eyebrow': 'Management Information Systems',
    'sim.hero.title': 'Integrated Systems for Maritime Companies',
    'sim.hero.intro': 'Get efficient, integrated management solutions for your maritime company\'s operations.',
    'sim.services.title': 'Our Services',
    'sim.services.aria': 'Management information system services',
    'sim.database.title': 'Database Management',
    'sim.database.text': 'Design databases for crew records, seafarer certificates, and vessel voyage histories. Track certificate expiry dates and ISM compliance more easily across departments.',
    'sim.web.title': 'Web Development',
    'sim.web.text': 'Build web applications for shipping companies, from company profile websites and crew management systems to internal portals for crew rotations and docking schedules.',
    'sim.analysis.title': 'Data Analysis',
    'sim.analysis.text': 'Turn vessel operating data, such as fuel consumption, voyage profitability, and break-even points, into insights that support better business decisions.',
    'sim.visualization.title': 'Data Visualization',
    'sim.visualization.text': 'Create interactive dashboards to monitor fuel efficiency, voyage profitability, and crew certificate status in real time, making vessel operations data easier for management to understand.',
    'sim.training.title': 'Computer Training',
    'sim.training.text': 'Train company staff in Microsoft Excel, Google Sheets, Microsoft Access, and SQL Server so they can build their own certificate expiry trackers and vessel break-even calculators.',
    'common.contact': 'Contact Us',
    'page.training.title': 'Education and Training | IndoSeaman',
    'page.training.description': 'Education and training programs for maritime professionals.',
    'training.eyebrow': 'Professional Development',
    'training.title': 'Education and Training',
    'training.intro': 'Explore training programs designed to help you develop your skills.',
    'training.prompt': 'Select a program below to register:',
    'training.list': 'Education and training programs',
    'training.english.title': 'English for Seafarers',
    'training.english.text': 'Access learning materials and training to improve your English communication skills.',
    'training.welding.title': 'Welding Skills',
    'training.welding.text': 'Welding courses with BNSP and NKK certification.',
    'training.courses.title': 'Practical Courses with BNSP Certification',
    'training.courses.text': 'Learn electrical work, lathe operation, welding, refrigeration, and production management through BNSP-certified courses.',
    'page.community.title': 'Community | IndoSeaman',
    'page.community.description': 'Connect with seafarers and maritime professionals across Indonesia.',
    'community.eyebrow': 'IndoSeaman Community',
    'community.title': 'Join the Seafarers\' Community',
    'community.intro': 'Connect with seafarers across Indonesia, share experiences, and build relationships throughout the maritime ecosystem.',
    'community.details': 'This community is open to everyone in the maritime industry, including seafarers, crewing staff, ship agency staff, harbormasters, maritime lecturers, and other professionals. Our community is hosted on Telegram, so please make sure you have a Telegram account before joining.',
    'community.prompt': 'Please use the link below to join:',
    'community.link': 'Join the IndoSeaman Telegram Community',
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

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const value = dictionary[element.dataset.i18nContent]
    if (value) element.setAttribute('content', value)
  })

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === selectedLanguage))
  })

  localStorage.setItem('site-language', selectedLanguage)
}

window.addEventListener('site-language-change', (event) => applyLanguage(event.detail))

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.language
    window.dispatchEvent(new CustomEvent('site-language-change', { detail: language }))
  })
})

applyLanguage(localStorage.getItem('site-language') || 'id')
