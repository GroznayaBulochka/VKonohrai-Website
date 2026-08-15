const icon = (name) => `<vk-icon name="${name}"></vk-icon>`;

const emailBox = {
  pl: `<b>${icon("mail")} <a href="mailto:v.konohrai.work@gmail.com?subject=Kontakt%20ze%20strony%20CV">v.konohrai.work@gmail.com</a></b>`,
  en: `<b>${icon("mail")} <a href="mailto:v.konohrai.work@gmail.com?subject=Contact%20from%20CV%20website">v.konohrai.work@gmail.com</a></b>`,
  ru: `<b>${icon("mail")} <a href="mailto:v.konohrai.work@gmail.com?subject=Контакт%20со%20страницы%20CV">v.konohrai.work@gmail.com</a></b>`
};

const translations = {
  pl: {
    lang: "pl",
    title: "Vladyslav Konohrai | CV – psychologia i BHP",
    attrs: [
      [".menu-toggle", "aria-label", "Menu"],
      [".lang-switch", "aria-label", "Wybierz język strony"],
      ["nav", "aria-label", "Główna nawigacja"],
      ["[data-diploma-prev]", "aria-label", "Poprzedni dyplom"],
      ["[data-diploma-next]", "aria-label", "Następny dyplom"],
      ["#diplomaImage", "alt", "Dyplom"]
    ],
    text: {
      ".skip-link": "Przejdź do treści",
      ".tag": "STUDENT PSYCHOLOGII • SPECJALISTA BHP",
      ".hero p": "Student psychologii z doświadczeniem w pracy fizycznej, obsłudze klienta oraz w obszarze BHP. Motywuje mnie nauka, odpowiedzialność i rozwój.",
      ".journey .section-title": "MÓJ PUNKT DROGI",
      ".journey p": "Każde doświadczenie było krokiem naprzód. Od pracy fizycznej przez przemysł, aż do psychologii i bezpieczeństwa pracy. Dziś łączę wiedzę o człowieku z dbałością o bezpieczeństwo i rozwój.",
      "#skills .section-title": "Moje mocne strony",
      ".section-heading .section-title": "Zakres współpracy",
      ".section-heading h2": "Co wnoszę do zespołu",
      ".section-heading p": "Łączę praktyczne doświadczenie z BHP, pracą operacyjną i psychologicznym spojrzeniem na ludzi.",
      "#experience .section-title": "Doświadczenie",
      "#education .card:nth-child(1) .section-title": "Edukacja",
      "#education .card:nth-child(2) .section-title": "Języki",
      "#education .card:nth-child(3) .section-title": "Osiągnięcia i certyfikaty",
      ".diploma-head .section-title": "Dyplomy i certyfikaty",
      ".diploma-head h2": "Zobacz wszystkie dyplomy",
      ".diploma-head p": "Pełna galeria certyfikatów i zaświadczeń potwierdzających moje kwalifikacje.",
      ".contact .contact-card:first-child h2": "Porozmawiajmy!",
      ".contact .contact-card:first-child small": "Jestem otwarty na nowe możliwości i ciekawe projekty.",
      ".quote-card p": "Najważniejszy zasób każdej organizacji to ludzie. Moim celem jest zrozumieć ich i tworzyć bezpieczne środowisko do rozwoju.",
      ".rodo": "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w CV na potrzeby obecnej oraz przyszłych rekrutacji, zgodnie z RODO."
    },
    html: {
      ".nav-cta": `Pobierz CV ${icon("download")}`,
      ".actions .btn:first-child": `Pobierz CV ${icon("download")}`,
      ".actions .btn.secondary": `Skontaktuj się ${icon("arrow-right")}`,
      ".hero-subtitle": "Rozumiem ludzi.<br>Buduję bezpieczniejsze środowiska.",
      ".side-info .info-box:nth-child(1)": `<b>${icon("map-pin")} Jurija Gagarina 19</b><br>87-100 Toruń`,
      ".side-info .info-box:nth-child(2)": `<b>${icon("phone")} +48 739-64-22-77</b>`,
      ".side-info .info-box:nth-child(3)": emailBox.pl,
      ".side-info .info-box:nth-child(4)": `<b>${icon("star")} Dostępny do współpracy</b><br>Otwarty na nowe możliwości`,
      ".journey h2": "Droga, która mnie<br><span>ukształtowała</span>",
      ".journey .btn": `Poznaj moją historię ${icon("arrow-right")}`,
      "#diplomaPdf": `Otwórz dyplom ${icon("external-link")}`,
      ".contact-link:nth-of-type(1)": `${icon("mail")}<br><b>v.konohrai.work@gmail.com</b><br><small>Napisz do mnie</small>`,
      ".contact-link:nth-of-type(2)": `${icon("phone")}<br><b>+48 739-64-22-77</b><br><small>Zadzwoń</small>`,
      ".contact-location": `${icon("map-pin")}<br><b>Jurija Gagarina 19</b><br><small>87-100 Toruń</small>`,
      ".contact-social": `${icon("linkedin")}<br><b>LinkedIn</b><br><small>Zobacz mój profil</small>`
    },
    lists: [
      [".menu a", ["O mnie", "Umiejętności", "Zakres", "Doświadczenie", "Edukacja", "Osiągnięcia", "Kontakt"]],
      [".hero-pills span", [`${icon("shield")} Inspektor BHP`, `${icon("brain")} Psychologia UMK`, `${icon("clipboard-check")} Organizacja pracy`, `${icon("map-pin")} Toruń`], true],
      [".stat small", ["lat doświadczenia", "kierunki edukacji", "języków", "certyfikatów"]],
      [".orbit-item span", ["Psychologia", "Zespół", "Analiza", "BHP"]],
      [".focus-card h2", ["Bezpieczeństwo pracy", "Praca z ludźmi", "Analiza i porządek"]],
      [".focus-card p", ["Dokumentacja, szkolenia i praktyczne podejście do procedur BHP.", "Komunikacja, obsługa klienta i wsparcie zespołu w codziennych zadaniach.", "Uważność na detale, szybka adaptacja i odpowiedzialność za wynik."]],
      [".point b", ["Budownictwo", "Farma", "Przemysł", "Specjalista BHP", "Psychologia"]],
      [".point small", ["Pierwsze doświadczenie w pracy fizycznej i na budowie.", "Praca w gospodarstwie, opieka nad zwierzętami, dyscyplina.", "Lakierowanie, organizacja pracy i zarządzanie zespołem.", "Odpowiedzialność za bezpieczeństwo, szkolenia i procedury.", "Rozwój wiedzy o człowieku, motywacji i komunikacji."]],
      [".strength span", ["Organizacja<br>i samodzielność", "Praca pod presją<br>czasu", "Obsługa klienta<br>i komunikacja", "Rozwiązywanie<br>problemów", "Szybka nauka<br>i adaptacja", "Odpowiedzialność<br>i zaangażowanie", "Uprawnienia<br>UDT", "Praca zespołowa<br>i wsparcie"], true],
      [".service-card h3", ["Procedury i dokumentacja", "Komunikacja z zespołem", "Organizacja stanowiska", "Rozwój i nauka"]],
      [".service-card p", ["Wsparcie w tworzeniu dokumentacji, analizie zagrożeń i porządkowaniu zasad pracy.", "Spokojna praca z ludźmi, wyjaśnianie zasad i budowanie odpowiedzialności.", "Praktyczne spojrzenie na proces, ergonomię, jakość i codzienną efektywność.", "Szybkie uczenie się, zbieranie informacji i przekładanie wiedzy na działanie."]],
      [".exp-card h3", ["Kucharz", "Inspektor ds. BHP", "Pomocnik lakiernika", "Pracownik restauracji", "Pracownik restauracji", "Pomocnik budowlany"]],
      [".exp-card .date", ["04.2026 – obecnie", "10.2024 – obecnie", "06.2022 – 08.2024", "09.2023 – 12.2023", "08.2025 – 11.2025", "04.2019 – 12.2019"]],
      [".exp-card li", ["Przygotowywanie dań zgodnie ze standardami jakości", "Obróbka termiczna i smażenie mięsa", "Przygotowywanie składników i półproduktów", "Organizacja stanowiska pracy", "Współpraca z zespołem przy realizacji zamówień", "Dokumentacja BHP", "Szkolenia pracowników", "Analiza zagrożeń", "Wdrażanie procedur", "Przygotowanie i lakierowanie", "Śrutowanie elementów", "Organizacja pracy działu", "Szkolenie pracowników", "Obsługa klienta", "Zarządzanie zapasami", "Praca w kuchni", "Szkolenie zespołu", "Realizacja zamówień", "Obsługa kasy i klientów", "Praca pod presją czasu", "Kontrola jakości", "Prace budowlane", "Montaż rusztowań", "Prace żelbetowe", "Wykończenia wnętrz"]],
      [".timeline-item span", [`${icon("graduation-cap")} 2024 – obecnie`, `${icon("graduation-cap")} 2023 – 2024`, `${icon("graduation-cap")} 2021 – 2023`], true],
      [".timeline-item b", ["Psychologia", "Asystent stomatologiczny", "Technik BHP"]],
      [".timeline-item small", ["Uniwersytet Mikołaja Kopernika w Toruniu", "Szkoła Policealna MEDICUS", "Szkoła Policealna MEDICUS"]],
      [".lang-row", ["<span>Ukraiński</span><span>C2</span>", "<span>Polski</span><span>C1</span>", "<span>Rosyjski</span><span>C1</span>", "<span>Angielski</span><span>A1</span>", "<span>Polski język migowy</span><span>A1</span>"], true],
      [".cert", [`${icon("file-check")} Excel dla początkujących`, `${icon("users")} Umiejętności interpersonalne`, `${icon("target")} Kierowanie zespołem`, `${icon("chart")} Praktyczny kurs inwestowania w akcje`, `${icon("paintbrush")} Photoshop dla początkujących`, `${icon("sparkles")} Wprowadzenie do Figmy`, `${icon("award")} Operator wózka widłowego UDT`, `${icon("navigation")} Pilot BSP A1/A3`, `${icon("heart-handshake")} Wolontariat Pernikalia 2025`], true]
    ],
    diplomas: [
      ["Excel dla początkujących", "Certyfikat ukończenia kursu podstaw Excela."],
      ["Wprowadzenie do Figmy", "Certyfikat ukończenia kursu wprowadzającego do Figmy."],
      ["Praktyczny kurs inwestowania w akcje", "Certyfikat ukończenia praktycznego kursu inwestowania w akcje."],
      ["Kierowanie zespołem", "Zaświadczenie ukończenia treningu menedżerskiego."],
      ["Photoshop dla początkujących", "Certyfikat ukończenia kursu podstaw Adobe Photoshop."],
      ["Pomoc osobom LGBT+", "Certyfikat ukończenia szkolenia specjalistycznego."],
      ["Pilot BSP A1/A3", "Potwierdzenie zaliczenia szkolenia i zdania egzaminu."],
      ["Umiejętności interpersonalne", "Certyfikat ukończenia kursu z zakresu umiejętności interpersonalnych."]
    ]
  },
  en: {
    lang: "en",
    title: "Vladyslav Konohrai | CV – Psychology & Safety",
    attrs: [
      [".lang-switch", "aria-label", "Choose page language"],
      ["nav", "aria-label", "Main navigation"],
      ["[data-diploma-prev]", "aria-label", "Previous certificate"],
      ["[data-diploma-next]", "aria-label", "Next certificate"],
      ["#diplomaImage", "alt", "Certificate"]
    ],
    text: {
      ".skip-link": "Skip to content",
      ".tag": "PSYCHOLOGY STUDENT • SAFETY SPECIALIST",
      ".hero p": "Psychology student with experience in physical work, customer service and occupational safety. I am driven by learning, responsibility and growth.",
      ".journey .section-title": "MY ROADMAP",
      ".journey p": "Every experience was a step forward. From physical work through industry to psychology and workplace safety. Today I combine knowledge about people with care for safety and development.",
      "#skills .section-title": "My strengths",
      ".section-heading .section-title": "Collaboration scope",
      ".section-heading h2": "What I bring to a team",
      ".section-heading p": "I combine practical OHS experience, operational work and a psychological view of people.",
      "#experience .section-title": "Experience",
      "#education .card:nth-child(1) .section-title": "Education",
      "#education .card:nth-child(2) .section-title": "Languages",
      "#education .card:nth-child(3) .section-title": "Achievements and certificates",
      ".diploma-head .section-title": "Diplomas and certificates",
      ".diploma-head h2": "View all certificates",
      ".diploma-head p": "A full gallery of certificates and confirmations documenting my qualifications.",
      ".contact .contact-card:first-child h2": "Let's talk!",
      ".contact .contact-card:first-child small": "I am open to new opportunities and interesting projects.",
      ".quote-card p": "People are the most important resource in every organization. My goal is to understand them and create a safe environment for growth.",
      ".rodo": "I consent to the processing of my personal data included in this CV for current and future recruitment processes in accordance with GDPR."
    },
    html: {
      ".nav-cta": `Download CV ${icon("download")}`,
      ".actions .btn:first-child": `Download CV ${icon("download")}`,
      ".actions .btn.secondary": `Contact me ${icon("arrow-right")}`,
      ".hero-subtitle": "Understanding people.<br>Building safer environments.",
      ".side-info .info-box:nth-child(1)": `<b>${icon("map-pin")} Jurija Gagarina 19</b><br>87-100 Toruń`,
      ".side-info .info-box:nth-child(2)": `<b>${icon("phone")} +48 739-64-22-77</b>`,
      ".side-info .info-box:nth-child(3)": emailBox.en,
      ".side-info .info-box:nth-child(4)": `<b>${icon("star")} Available for collaboration</b><br>Open to new opportunities`,
      ".journey h2": "The road that<br><span>shaped me</span>",
      ".journey .btn": `See my story ${icon("arrow-right")}`,
      "#diplomaPdf": `Open certificate ${icon("external-link")}`,
      ".contact-link:nth-of-type(1)": `${icon("mail")}<br><b>v.konohrai.work@gmail.com</b><br><small>Write to me</small>`,
      ".contact-link:nth-of-type(2)": `${icon("phone")}<br><b>+48 739-64-22-77</b><br><small>Call me</small>`,
      ".contact-location": `${icon("map-pin")}<br><b>Jurija Gagarina 19</b><br><small>87-100 Toruń</small>`,
      ".contact-social": `${icon("linkedin")}<br><b>LinkedIn</b><br><small>View my profile</small>`
    },
    lists: [
      [".menu a", ["About", "Skills", "Scope", "Experience", "Education", "Achievements", "Contact"]],
      [".hero-pills span", [`${icon("shield")} OHS inspector`, `${icon("brain")} Psychology at UMK`, `${icon("clipboard-check")} Work organization`, `${icon("map-pin")} Toruń`], true],
      [".stat small", ["years of experience", "education paths", "languages", "certificates"]],
      [".orbit-item span", ["Psychology", "Leadership", "Analysis", "Safety"]],
      [".focus-card h2", ["Workplace safety", "Working with people", "Analysis and order"]],
      [".focus-card p", ["Documentation, training and a practical approach to OHS procedures.", "Communication, customer service and daily team support.", "Attention to detail, fast adaptation and responsibility for results."]],
      [".point b", ["Construction", "Farm", "Industry", "OHS specialist", "Psychology"]],
      [".point small", ["First experience in physical and construction work.", "Farm work, animal care and discipline.", "Painting, work organization and team management.", "Responsibility for safety, training and procedures.", "Development of knowledge about people, motivation and communication."]],
      [".strength span", ["Organization<br>and independence", "Working under<br>time pressure", "Customer service<br>and communication", "Problem<br>solving", "Fast learning<br>and adaptation", "Responsibility<br>and commitment", "UDT<br>license", "Teamwork<br>and support"], true],
      [".service-card h3", ["Procedures and documentation", "Team communication", "Workstation organization", "Growth and learning"]],
      [".service-card p", ["Support in creating documentation, hazard analysis and organizing work rules.", "Calm work with people, explaining rules and building responsibility.", "A practical view of process, ergonomics, quality and daily efficiency.", "Fast learning, gathering information and turning knowledge into action."]],
      [".exp-card h3", ["Cook", "OHS inspector", "Painter assistant", "Restaurant employee", "Restaurant employee", "Construction assistant"]],
      [".exp-card .date", ["04.2026 – present", "10.2024 – present", "06.2022 – 08.2024", "09.2023 – 12.2023", "08.2025 – 11.2025", "04.2019 – 12.2019"]],
      [".exp-card li", ["Preparing dishes according to quality standards", "Thermal processing and frying meat", "Preparing ingredients and semi-finished products", "Organizing the workstation", "Cooperating with the team on orders", "OHS documentation", "Employee training", "Hazard analysis", "Procedure implementation", "Preparation and painting", "Shot blasting elements", "Department work organization", "Employee training", "Customer service", "Inventory management", "Kitchen work", "Team training", "Order fulfillment", "Cash register and customer service", "Working under time pressure", "Quality control", "Construction work", "Scaffolding assembly", "Reinforced concrete work", "Interior finishing"]],
      [".timeline-item span", [`${icon("graduation-cap")} 2024 – present`, `${icon("graduation-cap")} 2023 – 2024`, `${icon("graduation-cap")} 2021 – 2023`], true],
      [".timeline-item b", ["Psychology", "Dental assistant", "OHS technician"]],
      [".timeline-item small", ["Nicolaus Copernicus University in Toruń", "MEDICUS post-secondary school", "MEDICUS post-secondary school"]],
      [".lang-row", ["<span>Ukrainian</span><span>C2</span>", "<span>Polish</span><span>C1</span>", "<span>Russian</span><span>C1</span>", "<span>English</span><span>A1</span>", "<span>Polish Sign Language</span><span>A1</span>"], true],
      [".cert", [`${icon("file-check")} Excel for Beginners Certificate`, `${icon("users")} Interpersonal skills`, `${icon("target")} Team management`, `${icon("chart")} Stock Investing Course`, `${icon("paintbrush")} Photoshop for Beginners`, `${icon("sparkles")} Introduction to Figma`, `${icon("award")} Forklift operator UDT`, `${icon("navigation")} UAV pilot A1/A3`, `${icon("heart-handshake")} Pernikalia 2025 volunteering`], true]
    ],
    diplomas: [
      ["Excel for Beginners Certificate", "Certificate of completing an Excel basics course."],
      ["Introduction to Figma", "Certificate of completing an introductory Figma course."],
      ["Stock Investing: A Practical Course", "Certificate of completing a practical stock investing course."],
      ["Team management", "Confirmation of completing management training."],
      ["Photoshop for Beginners", "Certificate of completing an Adobe Photoshop basics course."],
      ["Support for LGBT+ people", "Certificate of completing specialist training."],
      ["UAV pilot A1/A3", "Confirmation of completing training and passing the exam."],
      ["Interpersonal skills", "Certificate of completing an interpersonal skills course."]
    ]
  },
  ru: {
    lang: "ru",
    title: "Владислав Конохрай | CV – психология и безопасность",
    attrs: [
      [".lang-switch", "aria-label", "Выберите язык страницы"],
      ["nav", "aria-label", "Главная навигация"],
      ["[data-diploma-prev]", "aria-label", "Предыдущий диплом"],
      ["[data-diploma-next]", "aria-label", "Следующий диплом"],
      ["#diplomaImage", "alt", "Диплом"]
    ],
    text: {
      ".skip-link": "Перейти к содержанию",
      ".tag": "СТУДЕНТ ПСИХОЛОГИИ • СПЕЦИАЛИСТ ПО ОХРАНЕ ТРУДА",
      ".hero p": "Студент психологии с опытом физической работы, обслуживания клиентов и охраны труда. Меня мотивируют обучение, ответственность и развитие.",
      ".journey .section-title": "МОЙ ПУТЬ",
      ".journey p": "Каждый опыт был шагом вперед. От физической работы через промышленность к психологии и охране труда. Сегодня я объединяю знания о человеке с заботой о безопасности и развитии.",
      "#skills .section-title": "Мои сильные стороны",
      ".section-heading .section-title": "Формат сотрудничества",
      ".section-heading h2": "Что я даю команде",
      ".section-heading p": "Я объединяю практический опыт в охране труда, операционную работу и психологический взгляд на людей.",
      "#experience .section-title": "Опыт",
      "#education .card:nth-child(1) .section-title": "Образование",
      "#education .card:nth-child(2) .section-title": "Языки",
      "#education .card:nth-child(3) .section-title": "Достижения и сертификаты",
      ".diploma-head .section-title": "Дипломы и сертификаты",
      ".diploma-head h2": "Посмотреть все дипломы",
      ".diploma-head p": "Полная галерея сертификатов и подтверждений моих квалификаций.",
      ".contact .contact-card:first-child h2": "Давайте поговорим!",
      ".contact .contact-card:first-child small": "Я открыт к новым возможностям и интересным проектам.",
      ".quote-card p": "Самый важный ресурс любой организации — это люди. Моя цель — понимать их и создавать безопасную среду для развития.",
      ".rodo": "Я даю согласие на обработку моих персональных данных, содержащихся в CV, для текущих и будущих процессов подбора персонала в соответствии с GDPR."
    },
    html: {
      ".nav-cta": `Скачать CV ${icon("download")}`,
      ".actions .btn:first-child": `Скачать CV ${icon("download")}`,
      ".actions .btn.secondary": `Связаться ${icon("arrow-right")}`,
      ".hero-subtitle": "Понимать людей.<br>Создавать более безопасную среду.",
      ".side-info .info-box:nth-child(1)": `<b>${icon("map-pin")} Jurija Gagarina 19</b><br>87-100 Торунь`,
      ".side-info .info-box:nth-child(2)": `<b>${icon("phone")} +48 739-64-22-77</b>`,
      ".side-info .info-box:nth-child(3)": emailBox.ru,
      ".side-info .info-box:nth-child(4)": `<b>${icon("star")} Открыт к сотрудничеству</b><br>Готов к новым возможностям`,
      ".journey h2": "Путь, который<br><span>сформировал меня</span>",
      ".journey .btn": `Узнать мою историю ${icon("arrow-right")}`,
      "#diplomaPdf": `Открыть диплом ${icon("external-link")}`,
      ".contact-link:nth-of-type(1)": `${icon("mail")}<br><b>v.konohrai.work@gmail.com</b><br><small>Написать мне</small>`,
      ".contact-link:nth-of-type(2)": `${icon("phone")}<br><b>+48 739-64-22-77</b><br><small>Позвонить</small>`,
      ".contact-location": `${icon("map-pin")}<br><b>Jurija Gagarina 19</b><br><small>87-100 Торунь</small>`,
      ".contact-social": `${icon("linkedin")}<br><b>LinkedIn</b><br><small>Посмотреть профиль</small>`
    },
    lists: [
      [".menu a", ["Обо мне", "Навыки", "Направления", "Опыт", "Образование", "Достижения", "Контакт"]],
      [".hero-pills span", [`${icon("shield")} Инспектор ОТ`, `${icon("brain")} Психология UMK`, `${icon("clipboard-check")} Организация работы`, `${icon("map-pin")} Торунь`], true],
      [".stat small", ["лет опыта", "направления образования", "языков", "сертификатов"]],
      [".orbit-item span", ["Психология", "Лидерство", "Анализ", "Безопасность"]],
      [".focus-card h2", ["Охрана труда", "Работа с людьми", "Анализ и порядок"]],
      [".focus-card p", ["Документация, обучение и практический подход к процедурам охраны труда.", "Коммуникация, обслуживание клиентов и ежедневная поддержка команды.", "Внимание к деталям, быстрая адаптация и ответственность за результат."]],
      [".point b", ["Строительство", "Ферма", "Промышленность", "Специалист ОТ", "Психология"]],
      [".point small", ["Первый опыт физической работы и работы на стройке.", "Работа в хозяйстве, уход за животными и дисциплина.", "Покраска, организация работы и управление командой.", "Ответственность за безопасность, обучение и процедуры.", "Развитие знаний о человеке, мотивации и коммуникации."]],
      [".strength span", ["Организация<br>и самостоятельность", "Работа в условиях<br>дефицита времени", "Обслуживание клиентов<br>и коммуникация", "Решение<br>проблем", "Быстрое обучение<br>и адаптация", "Ответственность<br>и вовлеченность", "Допуск<br>UDT", "Командная работа<br>и поддержка"], true],
      [".service-card h3", ["Процедуры и документация", "Коммуникация с командой", "Организация рабочего места", "Развитие и обучение"]],
      [".service-card p", ["Поддержка в создании документации, анализе рисков и упорядочивании правил работы.", "Спокойная работа с людьми, объяснение правил и развитие ответственности.", "Практический взгляд на процесс, эргономику, качество и ежедневную эффективность.", "Быстрое обучение, сбор информации и перевод знаний в действие."]],
      [".exp-card h3", ["Повар", "Инспектор по ОТ", "Помощник маляра", "Работник ресторана", "Работник ресторана", "Помощник строителя"]],
      [".exp-card .date", ["04.2026 – настоящее время", "10.2024 – настоящее время", "06.2022 – 08.2024", "09.2023 – 12.2023", "08.2025 – 11.2025", "04.2019 – 12.2019"]],
      [".exp-card li", ["Приготовление блюд по стандартам качества", "Термическая обработка и жарка мяса", "Подготовка ингредиентов и полуфабрикатов", "Организация рабочего места", "Сотрудничество с командой при выполнении заказов", "Документация по ОТ", "Обучение сотрудников", "Анализ рисков", "Внедрение процедур", "Подготовка и покраска", "Дробеструйная обработка элементов", "Организация работы отдела", "Обучение сотрудников", "Обслуживание клиентов", "Управление запасами", "Работа на кухне", "Обучение команды", "Выполнение заказов", "Работа с кассой и клиентами", "Работа в условиях давления времени", "Контроль качества", "Строительные работы", "Монтаж лесов", "Железобетонные работы", "Отделка интерьеров"]],
      [".timeline-item span", [`${icon("graduation-cap")} 2024 – настоящее время`, `${icon("graduation-cap")} 2023 – 2024`, `${icon("graduation-cap")} 2021 – 2023`], true],
      [".timeline-item b", ["Психология", "Ассистент стоматолога", "Техник по охране труда"]],
      [".timeline-item small", ["Университет Николая Коперника в Торуни", "Полицеальная школа MEDICUS", "Полицеальная школа MEDICUS"]],
      [".lang-row", ["<span>Украинский</span><span>C2</span>", "<span>Польский</span><span>C1</span>", "<span>Русский</span><span>C1</span>", "<span>Английский</span><span>A1</span>", "<span>Польский жестовый язык</span><span>A1</span>"], true],
      [".cert", [`${icon("file-check")} Excel для начинающих`, `${icon("users")} Межличностные навыки`, `${icon("target")} Управление командой`, `${icon("chart")} Практический курс инвестирования в акции`, `${icon("paintbrush")} Photoshop для начинающих`, `${icon("sparkles")} Введение в Figma`, `${icon("award")} Оператор вилочного погрузчика UDT`, `${icon("navigation")} Пилот БПЛА A1/A3`, `${icon("heart-handshake")} Волонтерство Pernikalia 2025`], true]
    ],
    diplomas: [
      ["Excel для начинающих", "Сертификат об окончании курса по основам Excel."],
      ["Введение в Figma", "Сертификат об окончании вводного курса Figma."],
      ["Практический курс инвестирования в акции", "Сертификат об окончании практического курса инвестирования в акции."],
      ["Управление командой", "Подтверждение прохождения управленческого тренинга."],
      ["Photoshop для начинающих", "Сертификат об окончании курса по основам Adobe Photoshop."],
      ["Помощь людям LGBT+", "Сертификат об окончании специализированного обучения."],
      ["Пилот БПЛА A1/A3", "Подтверждение прохождения обучения и сдачи экзамена."],
      ["Межличностные навыки", "Сертификат об окончании курса межличностных навыков."]
    ]
  }
};

translations.pl.text[".menu-toggle-label"] = "Menu";
translations.en.text[".menu-toggle-label"] = "Menu";
translations.ru.text[".menu-toggle-label"] = "Меню";

translations.en.attrs.unshift([".menu-toggle", "aria-label", "Menu"]);
translations.ru.attrs.unshift([".menu-toggle", "aria-label", "Меню"]);

translations.pl.lists.find(([selector]) => selector === ".cert")?.[1].splice(
  8,
  0,
  `${icon("message")} Polski język migowy A1`
);
translations.en.lists.find(([selector]) => selector === ".cert")?.[1].splice(
  8,
  0,
  `${icon("message")} Polish Sign Language A1`
);
translations.ru.lists.find(([selector]) => selector === ".cert")?.[1].splice(
  8,
  0,
  `${icon("message")} Польский жестовый язык A1`
);

translations.pl.diplomas.push([
  "Polski język migowy A1",
  "Certyfikat potwierdzający znajomość podstaw polskiego języka migowego na poziomie A1."
]);
translations.en.diplomas.push([
  "Polish Sign Language A1",
  "Certificate confirming basic Polish Sign Language skills at A1 level."
]);
translations.ru.diplomas.push([
  "Польский жестовый язык A1",
  "Сертификат, подтверждающий базовое знание польского жестового языка на уровне A1."
]);

const addMenuItem = (language, label) => {
  const menu = translations[language].lists.find(([selector]) => selector === ".menu a");
  menu?.[1].splice(6, 0, label);
};

addMenuItem("pl", "Referencje");
addMenuItem("en", "References");
addMenuItem("ru", "Рекомендации");

translations.pl.diplomas.splice(7, 0, [
  "YUFE Civic Star",
  "Certyfikat ukończenia aktywności obywatelskich YUFE Civic Star."
]);
translations.en.diplomas.splice(7, 0, [
  "YUFE Civic Star",
  "Certificate confirming completion of YUFE Civic Star civic engagement activities."
]);
translations.ru.diplomas.splice(7, 0, [
  "YUFE Civic Star",
  "Сертификат о прохождении активностей YUFE Civic Star, связанных с гражданским участием."
]);

translations.pl.references = [
  ["Referencja MANEKIN", "List polecający z restauracji MANEKIN, potwierdzający pracę kuchenną, organizację stanowiska i współpracę z zespołem."],
  ["Referencja Palfinger Poland", "List polecający za pracę jako pomocnik lakiernika w Palfinger Poland w latach 2022-2024."],
  ["Referencja SOL-WORK", "List polecający za pracę na stanowisku inspektora ds. bezpieczeństwa i higieny pracy w firmie SOL-WORK."]
];
translations.en.references = [
  ["MANEKIN reference", "Recommendation letter from MANEKIN restaurant confirming kitchen work, workstation organization and teamwork."],
  ["Palfinger Poland reference", "Recommendation letter for work as a painter assistant at Palfinger Poland in 2022-2024."],
  ["SOL-WORK reference", "Recommendation letter for work as an occupational health and safety inspector at SOL-WORK."]
];
translations.ru.references = [
  ["Рекомендация MANEKIN", "Рекомендательное письмо из ресторана MANEKIN, подтверждающее работу на кухне, организацию рабочего места и командное взаимодействие."],
  ["Рекомендация Palfinger Poland", "Рекомендательное письмо за работу помощником маляра в Palfinger Poland в 2022-2024 годах."],
  ["Рекомендация SOL-WORK", "Рекомендательное письмо за работу инспектором по охране труда и технике безопасности в компании SOL-WORK."]
];

Object.assign(translations.pl.text, {
  ".reference-head .section-title": "Referencje",
  ".reference-head h2": "Listy polecające",
  ".reference-head p": "Rekomendacje od pracodawców i osób, z którymi współpracowałem."
});

Object.assign(translations.en.text, {
  ".reference-head .section-title": "References",
  ".reference-head h2": "Recommendation letters",
  ".reference-head p": "Recommendation letters from employers and people I worked with."
});

Object.assign(translations.ru.text, {
  ".reference-head .section-title": "Рекомендации",
  ".reference-head h2": "Рекомендательные письма",
  ".reference-head p": "Рекомендательные письма от работодателей и людей, с которыми я сотрудничал."
});

Object.assign(translations.pl.html, {
  ".contact-copy-email": `${icon("copy")}<br><b>Skopiuj e-mail</b><br><small>v.konohrai.work@gmail.com</small>`,
  ".contact-copy-phone": `${icon("copy")}<br><b>Skopiuj telefon</b><br><small>+48 739-64-22-77</small>`,
  ".floating-actions a[href='#contact']": `${icon("mail")}<span>Kontakt</span>`,
  ".floating-actions a[download]": `${icon("download")}<span>CV</span>`,
  "[data-scroll-top]": `${icon("arrow-up")}<span>Góra</span>`
});

Object.assign(translations.en.html, {
  ".contact-copy-email": `${icon("copy")}<br><b>Copy e-mail</b><br><small>v.konohrai.work@gmail.com</small>`,
  ".contact-copy-phone": `${icon("copy")}<br><b>Copy phone</b><br><small>+48 739-64-22-77</small>`,
  ".floating-actions a[href='#contact']": `${icon("mail")}<span>Contact</span>`,
  ".floating-actions a[download]": `${icon("download")}<span>CV</span>`,
  "[data-scroll-top]": `${icon("arrow-up")}<span>Top</span>`
});

Object.assign(translations.ru.html, {
  ".contact-copy-email": `${icon("copy")}<br><b>Скопировать e-mail</b><br><small>v.konohrai.work@gmail.com</small>`,
  ".contact-copy-phone": `${icon("copy")}<br><b>Скопировать телефон</b><br><small>+48 739-64-22-77</small>`,
  ".floating-actions a[href='#contact']": `${icon("mail")}<span>Контакт</span>`,
  ".floating-actions a[download]": `${icon("download")}<span>CV</span>`,
  "[data-scroll-top]": `${icon("arrow-up")}<span>Вверх</span>`
});

translations.pl.attrs.push(
  ["[data-diploma-autoplay]", "aria-label", "Automatyczne przewijanie dyplomów"],
  ["[data-scroll-top]", "aria-label", "Do góry"]
);

translations.en.attrs.push(
  ["[data-diploma-autoplay]", "aria-label", "Auto-play certificates"],
  ["[data-scroll-top]", "aria-label", "Back to top"]
);

translations.ru.attrs.push(
  ["[data-diploma-autoplay]", "aria-label", "Автоматическое переключение дипломов"],
  ["[data-scroll-top]", "aria-label", "Наверх"]
);

let activeLanguage = "pl";

const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The language switch still works for the current page view.
    }
  }
};

const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => [...document.querySelectorAll(selector)];

const setText = (selector, value) => {
  const element = getElement(selector);
  if (element) {
    element.textContent = value;
  }
};

const setHtml = (selector, value) => {
  const element = getElement(selector);
  if (element) {
    element.innerHTML = value;
  }
};

const setAttr = (selector, attr, value) => {
  const element = getElement(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
};

const isHighlightedCert = (value) => /język migowy|Sign Language|жестовый язык/i.test(String(value));

const renderCertList = (values, useHtml = false) => {
  const container = getElement(".certs");
  if (!container) {
    return false;
  }

  container.innerHTML = values.map((value) => {
    const className = `cert${isHighlightedCert(value) ? " cert-new" : ""}`;
    const content = useHtml ? value : value.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    })[char]);

    return `<div class="${className}">${content}</div>`;
  }).join("");

  return true;
};

const setList = (selector, values, useHtml = false) => {
  if (selector === ".cert" && renderCertList(values, useHtml)) {
    return;
  }

  getElements(selector).forEach((element, index) => {
    if (values[index] === undefined) {
      return;
    }

    if (useHtml) {
      element.innerHTML = values[index];
    } else {
      element.textContent = values[index];
    }
  });
};

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.pl;
  activeLanguage = dictionary.lang;

  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;

  Object.entries(dictionary.text).forEach(([selector, value]) => setText(selector, value));
  Object.entries(dictionary.html).forEach(([selector, value]) => setHtml(selector, value));
  dictionary.attrs.forEach(([selector, attr, value]) => setAttr(selector, attr, value));
  dictionary.lists.forEach(([selector, values, useHtml]) => setList(selector, values, useHtml));

  getElements("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === dictionary.lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  storage.set("siteLanguage", dictionary.lang);
  document.dispatchEvent(new CustomEvent("languagechange", {
    detail: { language: dictionary.lang }
  }));
};

window.getLocalizedDiploma = (diploma) => {
  const index = window.diplomas?.indexOf(diploma) ?? -1;
  const localized = translations[activeLanguage]?.diplomas?.[index];

  if (!localized) {
    return diploma;
  }

  return {
    ...diploma,
    title: localized[0],
    desc: localized[1]
  };
};

window.getLocalizedReference = (reference) => {
  const index = window.references?.indexOf(reference) ?? -1;
  const localized = translations[activeLanguage]?.references?.[index];

  if (!localized) {
    return reference;
  }

  return {
    ...reference,
    title: localized[0],
    desc: localized[1]
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = storage.get("siteLanguage");
  const initialLanguage = translations[savedLanguage] ? savedLanguage : "pl";

  getElements("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  applyLanguage(initialLanguage);
});
