const icon = (name) => `<vk-icon name="${name}"></vk-icon>`;

const emailBox = {
  pl: `<b>${icon("mail")} <a href="mailto:v.konohrai.work@gmail.com?subject=Kontakt%20ze%20strony%20CV">v.konohrai.work@gmail.com</a></b>`,
  en: `<b>${icon("mail")} <a href="mailto:v.konohrai.work@gmail.com?subject=Contact%20from%20CV%20website">v.konohrai.work@gmail.com</a></b>`,
  ru: `<b>${icon("mail")} <a href="mailto:v.konohrai.work@gmail.com?subject=Контакт%20со%20страницы%20CV">v.konohrai.work@gmail.com</a></b>`
};

const translations = {
  pl: {
    lang: "pl",
    title: "Vladyslav Konohrai | Inspektor BHP i psychologia, Toruń",
    description: "Vladyslav Konohrai - CV inspektora BHP i studenta psychologii UMK w Toruniu. Doświadczenie w BHP, produkcji, gastronomii, szkoleniach i obsłudze klienta.",
    attrs: [
      [".menu-toggle", "aria-label", "Menu"],
      [".lang-switch", "aria-label", "Wybierz język strony"],
      ["nav", "aria-label", "Główna nawigacja"],
      ["[data-diploma-prev]", "aria-label", "Poprzedni dyplom"],
      ["[data-diploma-next]", "aria-label", "Następny dyplom"],
      ["#diplomaImage", "alt", "Certyfikat: Excel dla początkujących"],
      [".photo", "alt", "Portret Vladyslava Konohraia"],
      [".contact-email [data-copy]", "aria-label", "Skopiuj e-mail"],
      [".contact-email [data-copy]", "title", "Skopiuj e-mail"],
      [".contact-phone [data-copy]", "aria-label", "Skopiuj telefon"],
      [".contact-phone [data-copy]", "title", "Skopiuj telefon"]
    ],
    text: {
      ".skip-link": "Przejdź do treści",
      ".tag": "STUDENT PSYCHOLOGII • SPECJALISTA BHP",
      ".hero p": "Nazywam się Vladyslav Konohrai. Jestem studentem psychologii UMK w Toruniu i inspektorem BHP z doświadczeniem w pracy fizycznej, produkcji, gastronomii oraz obsłudze klienta. Motywuje mnie nauka, odpowiedzialność i rozwój.",
      ".journey .section-title": "ŚCIEŻKA ZAWODOWA",
      ".journey p": "Od pracy budowlanej i gospodarstwa w Ukrainie, przez lakiernię Palfinger i gastronomię, po bieżące role inspektora BHP i kucharza. Oś pokazuje rzeczywiste okresy zatrudnienia oraz doświadczenia, które rozwijały się równolegle.",
      "#skills .section-title": "Moje mocne strony",
      "#experience .section-title": "Pełne doświadczenie zawodowe",
      "#education .card:nth-child(1) .section-title": "Edukacja",
      "#education .card:nth-child(2) .section-title": "Języki",
      "#education .card:nth-child(3) .section-title": "Uprawnienia",
      ".diploma-head .section-title": "Dyplomy i certyfikaty",
      ".diploma-head h2": "Zobacz wszystkie dyplomy",
      ".diploma-head p": "Pełna galeria certyfikatów i zaświadczeń potwierdzających moje kwalifikacje.",
      ".contact .contact-card:first-child h2": "Porozmawiajmy!",
      ".contact .contact-card:first-child small": "Jestem otwarty na nowe możliwości i ciekawe projekty.",
      ".contact-email .contact-action-label": "Napisz do mnie",
      ".contact-phone .contact-action-label": "Zadzwoń",
      ".quote-card p": "Najważniejszy zasób każdej organizacji to ludzie. Moim celem jest zrozumieć ich i tworzyć bezpieczne środowisko do rozwoju.",
      ".rodo": "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w CV na potrzeby obecnej oraz przyszłych rekrutacji, zgodnie z RODO."
    },
    html: {
      ".nav-cta": `Pobierz CV ${icon("download")}`,
      ".actions .btn:first-child": `Pobierz CV ${icon("download")}`,
      ".actions .btn.secondary": `Skontaktuj się ${icon("arrow-right")}`,
      ".hero-subtitle": "Rozumiem ludzi.<br>Buduję bezpieczniejsze środowiska.",
      ".side-info .info-box:nth-child(1)": `<b>${icon("map-pin")} Toruń</b><br>Polska`,
      ".side-info .info-box:nth-child(2)": `<b>${icon("phone")} +48 739-64-22-77</b>`,
      ".side-info .info-box:nth-child(3)": emailBox.pl,
      ".side-info .info-box:nth-child(4)": `<b>${icon("star")} Dostępny do współpracy</b><br>Otwarty na nowe możliwości`,
      ".journey h2": "Różne doświadczenia,<br><span>jeden praktyczny profil</span>",
      "#diplomaPdf": `Otwórz dyplom ${icon("external-link")}`,
      ".contact-location": `${icon("map-pin")}<br><b>Toruń</b><br><small>Polska</small>`,
      ".contact-social": `${icon("linkedin")}<br><b>LinkedIn</b><br><small>Zobacz mój profil</small>`
    },
    lists: [
      [".menu a", ["O mnie", "Umiejętności", "Doświadczenie", "Edukacja", "Osiągnięcia", "Referencje", "Kontakt"]],
      [".hero-pills span", [`${icon("shield")} Inspektor BHP`, `${icon("brain")} Psychologia UMK`, `${icon("clipboard-check")} Organizacja pracy`, `${icon("map-pin")} Toruń`], true],
      [".stat small", ["lat doświadczenia", "kierunki edukacji", "języków", "dyplomów i certyfikatów"]],
      [".strength span", ["Organizacja<br>i samodzielność", "Praca pod presją<br>czasu", "Obsługa klienta<br>i komunikacja", "Rozwiązywanie<br>problemów", "Szybka nauka<br>i adaptacja", "Odpowiedzialność<br>i zaangażowanie", "Uprawnienia<br>UDT", "Praca zespołowa<br>i wsparcie"], true],
      [".exp-card h3", ["Kucharz", "Inspektor ds. BHP", "Pomocnik lakiernika", "Pracownik restauracji", "Pracownik restauracji", "Pomocnik budowlany"]],
      [".exp-card .date", ["04.2026 – obecnie", "10.2024 – obecnie", "06.2022 – 08.2024", "09.2023 – 12.2023", "08.2025 – 11.2025", "04.2019 – 12.2019"]],
      [".exp-card li", ["Przygotowywanie dań zgodnie ze standardami jakości", "Obróbka termiczna i smażenie mięsa", "Przygotowywanie składników i półproduktów", "Organizacja stanowiska pracy", "Współpraca z zespołem przy realizacji zamówień", "Dokumentacja BHP", "Szkolenia pracowników", "Analiza zagrożeń", "Wdrażanie procedur", "Przygotowanie i lakierowanie", "Śrutowanie elementów", "Organizacja pracy działu", "Szkolenie pracowników", "Obsługa klienta", "Zarządzanie zapasami", "Praca w kuchni", "Szkolenie zespołu", "Realizacja zamówień", "Obsługa kasy i klientów", "Praca pod presją czasu", "Kontrola jakości", "Prace budowlane", "Montaż rusztowań", "Prace żelbetowe", "Wykończenia wnętrz"]],
      [".timeline-item span", [`${icon("graduation-cap")} 2024 – obecnie`, `${icon("graduation-cap")} 2023 – 2024`, `${icon("graduation-cap")} 2021 – 2023`], true],
      [".timeline-item b", ["Psychologia", "Asystent stomatologiczny", "Technik BHP"]],
      [".timeline-item small", ["Uniwersytet Mikołaja Kopernika w Toruniu", "Szkoła Policealna MEDICUS", "Szkoła Policealna MEDICUS"]],
      [".lang-row", ["<span>Ukraiński</span><span>C2</span>", "<span>Polski</span><span>C1</span>", "<span>Rosyjski</span><span>C1</span>", "<span>Angielski</span><span>A1</span>", "<span>Polski język migowy</span><span>A1</span>"], true]
    ],
    diplomas: [
      ["Excel dla początkujących", "Certyfikat ukończenia kursu podstaw Excela."],
      ["Wprowadzenie do Figmy", "Certyfikat ukończenia kursu wprowadzającego do Figmy."],
      ["Praktyczny kurs inwestowania w akcje", "Certyfikat ukończenia praktycznego kursu inwestowania w akcje."],
      ["Kierowanie zespołem", "Zaświadczenie ukończenia treningu menedżerskiego."],
      ["Photoshop dla początkujących", "Certyfikat ukończenia kursu podstaw Adobe Photoshop."],
      ["Pomoc osobom LGBT+", "Certyfikat ukończenia szkolenia specjalistycznego."],
      ["Pilot BSP A1/A3", "Potwierdzenie zaliczenia szkolenia i zdania egzaminu.", "Ważny do 20.09.2030"],
      ["Umiejętności interpersonalne", "Certyfikat ukończenia kursu z zakresu umiejętności interpersonalnych."]
    ]
  },
  en: {
    lang: "en",
    title: "Vladyslav Konohrai | OHS specialist and psychology, Toruń",
    description: "CV of Vladyslav Konohrai, an OHS inspector and psychology student at Nicolaus Copernicus University in Toruń, with experience in safety, production, gastronomy and customer service.",
    attrs: [
      [".lang-switch", "aria-label", "Choose page language"],
      ["nav", "aria-label", "Main navigation"],
      ["[data-diploma-prev]", "aria-label", "Previous certificate"],
      ["[data-diploma-next]", "aria-label", "Next certificate"],
      ["#diplomaImage", "alt", "Certificate: Excel for Beginners"],
      [".photo", "alt", "Portrait of Vladyslav Konohrai"],
      [".contact-email [data-copy]", "aria-label", "Copy e-mail"],
      [".contact-email [data-copy]", "title", "Copy e-mail"],
      [".contact-phone [data-copy]", "aria-label", "Copy phone number"],
      [".contact-phone [data-copy]", "title", "Copy phone number"]
    ],
    text: {
      ".skip-link": "Skip to content",
      ".tag": "PSYCHOLOGY STUDENT • SAFETY SPECIALIST",
      ".hero p": "Psychology student with experience in physical work, customer service and occupational safety. I am driven by learning, responsibility and growth.",
      ".journey .section-title": "CAREER PATH",
      ".journey p": "From construction and farm work in Ukraine, through the Palfinger paint shop and hospitality, to the current OHS inspector and cook roles. The timeline shows actual employment periods, including roles held in parallel.",
      "#skills .section-title": "My strengths",
      "#experience .section-title": "Full professional experience",
      "#education .card:nth-child(1) .section-title": "Education",
      "#education .card:nth-child(2) .section-title": "Languages",
      "#education .card:nth-child(3) .section-title": "Licenses and authorizations",
      ".diploma-head .section-title": "Diplomas and certificates",
      ".diploma-head h2": "View all certificates",
      ".diploma-head p": "A full gallery of certificates and confirmations documenting my qualifications.",
      ".contact .contact-card:first-child h2": "Let's talk!",
      ".contact .contact-card:first-child small": "I am open to new opportunities and interesting projects.",
      ".contact-email .contact-action-label": "Write to me",
      ".contact-phone .contact-action-label": "Call me",
      ".quote-card p": "People are the most important resource in every organization. My goal is to understand them and create a safe environment for growth.",
      ".rodo": "I consent to the processing of my personal data included in this CV for current and future recruitment processes in accordance with GDPR."
    },
    html: {
      ".nav-cta": `Download CV ${icon("download")}`,
      ".actions .btn:first-child": `Download CV ${icon("download")}`,
      ".actions .btn.secondary": `Contact me ${icon("arrow-right")}`,
      ".hero-subtitle": "Understanding people.<br>Building safer environments.",
      ".side-info .info-box:nth-child(1)": `<b>${icon("map-pin")} Toruń</b><br>Poland`,
      ".side-info .info-box:nth-child(2)": `<b>${icon("phone")} +48 739-64-22-77</b>`,
      ".side-info .info-box:nth-child(3)": emailBox.en,
      ".side-info .info-box:nth-child(4)": `<b>${icon("star")} Available for collaboration</b><br>Open to new opportunities`,
      ".journey h2": "Different roles,<br><span>one practical profile</span>",
      "#diplomaPdf": `Open certificate ${icon("external-link")}`,
      ".contact-location": `${icon("map-pin")}<br><b>Toruń</b><br><small>Poland</small>`,
      ".contact-social": `${icon("linkedin")}<br><b>LinkedIn</b><br><small>View my profile</small>`
    },
    lists: [
      [".menu a", ["About", "Skills", "Experience", "Education", "Achievements", "References", "Contact"]],
      [".hero-pills span", [`${icon("shield")} OHS inspector`, `${icon("brain")} Psychology at UMK`, `${icon("clipboard-check")} Work organization`, `${icon("map-pin")} Toruń`], true],
      [".stat small", ["years of experience", "education paths", "languages", "diplomas and certificates"]],
      [".strength span", ["Organization<br>and independence", "Working under<br>time pressure", "Customer service<br>and communication", "Problem<br>solving", "Fast learning<br>and adaptation", "Responsibility<br>and commitment", "UDT<br>license", "Teamwork<br>and support"], true],
      [".exp-card h3", ["Cook", "OHS inspector", "Painter assistant", "Restaurant employee", "Restaurant employee", "Construction assistant"]],
      [".exp-card .date", ["04.2026 – present", "10.2024 – present", "06.2022 – 08.2024", "09.2023 – 12.2023", "08.2025 – 11.2025", "04.2019 – 12.2019"]],
      [".exp-card li", ["Preparing dishes according to quality standards", "Thermal processing and frying meat", "Preparing ingredients and semi-finished products", "Organizing the workstation", "Cooperating with the team on orders", "OHS documentation", "Employee training", "Hazard analysis", "Procedure implementation", "Preparation and painting", "Shot blasting elements", "Department work organization", "Employee training", "Customer service", "Inventory management", "Kitchen work", "Team training", "Order fulfillment", "Cash register and customer service", "Working under time pressure", "Quality control", "Construction work", "Scaffolding assembly", "Reinforced concrete work", "Interior finishing"]],
      [".timeline-item span", [`${icon("graduation-cap")} 2024 – present`, `${icon("graduation-cap")} 2023 – 2024`, `${icon("graduation-cap")} 2021 – 2023`], true],
      [".timeline-item b", ["Psychology", "Dental assistant", "OHS technician"]],
      [".timeline-item small", ["Nicolaus Copernicus University in Toruń", "MEDICUS post-secondary school", "MEDICUS post-secondary school"]],
      [".lang-row", ["<span>Ukrainian</span><span>C2</span>", "<span>Polish</span><span>C1</span>", "<span>Russian</span><span>C1</span>", "<span>English</span><span>A1</span>", "<span>Polish Sign Language</span><span>A1</span>"], true]
    ],
    diplomas: [
      ["Excel for Beginners Certificate", "Certificate of completing an Excel basics course."],
      ["Introduction to Figma", "Certificate of completing an introductory Figma course."],
      ["Stock Investing: A Practical Course", "Certificate of completing a practical stock investing course."],
      ["Team management", "Confirmation of completing management training."],
      ["Photoshop for Beginners", "Certificate of completing an Adobe Photoshop basics course."],
      ["Support for LGBT+ people", "Certificate of completing specialist training."],
      ["UAV pilot A1/A3", "Confirmation of completing training and passing the exam.", "Valid until 20.09.2030"],
      ["Interpersonal skills", "Certificate of completing an interpersonal skills course."]
    ]
  },
  ru: {
    lang: "ru",
    title: "Vladyslav Konohrai | Охрана труда и психология, Торунь",
    description: "Vladyslav Konohrai (Владислав Конохрай) - инспектор по охране труда и студент психологии UMK в Торуни. Опыт в производстве, гастрономии и работе с клиентами.",
    attrs: [
      [".lang-switch", "aria-label", "Выберите язык страницы"],
      ["nav", "aria-label", "Главная навигация"],
      ["[data-diploma-prev]", "aria-label", "Предыдущий диплом"],
      ["[data-diploma-next]", "aria-label", "Следующий диплом"],
      ["#diplomaImage", "alt", "Сертификат: Excel для начинающих"],
      [".photo", "alt", "Портрет Владислава Конохрая"],
      [".contact-email [data-copy]", "aria-label", "Скопировать e-mail"],
      [".contact-email [data-copy]", "title", "Скопировать e-mail"],
      [".contact-phone [data-copy]", "aria-label", "Скопировать телефон"],
      [".contact-phone [data-copy]", "title", "Скопировать телефон"]
    ],
    text: {
      ".skip-link": "Перейти к содержанию",
      ".tag": "СТУДЕНТ ПСИХОЛОГИИ • СПЕЦИАЛИСТ ПО ОХРАНЕ ТРУДА",
      ".hero p": "Меня зовут Владислав Конохрай (Vladyslav Konohrai). Я студент психологии UMK в Торуни и инспектор по охране труда с опытом производства, гастрономии и обслуживания клиентов.",
      ".journey .section-title": "КАРЬЕРНЫЙ ПУТЬ",
      ".journey p": "От строительных и сельскохозяйственных работ в Украине через покрасочный цех Palfinger и гастрономию к текущим должностям инспектора по охране труда и повара. Шкала показывает реальные периоды работы, включая параллельную занятость.",
      "#skills .section-title": "Мои сильные стороны",
      "#experience .section-title": "Полный профессиональный опыт",
      "#education .card:nth-child(1) .section-title": "Образование",
      "#education .card:nth-child(2) .section-title": "Языки",
      "#education .card:nth-child(3) .section-title": "Допуски и разрешения",
      ".diploma-head .section-title": "Дипломы и сертификаты",
      ".diploma-head h2": "Посмотреть все дипломы",
      ".diploma-head p": "Полная галерея сертификатов и подтверждений моих квалификаций.",
      ".contact .contact-card:first-child h2": "Давайте поговорим!",
      ".contact .contact-card:first-child small": "Я открыт к новым возможностям и интересным проектам.",
      ".contact-email .contact-action-label": "Написать мне",
      ".contact-phone .contact-action-label": "Позвонить",
      ".quote-card p": "Самый важный ресурс любой организации — это люди. Моя цель — понимать их и создавать безопасную среду для развития.",
      ".rodo": "Я даю согласие на обработку моих персональных данных, содержащихся в CV, для текущих и будущих процессов подбора персонала в соответствии с GDPR."
    },
    html: {
      ".nav-cta": `Скачать CV ${icon("download")}`,
      ".actions .btn:first-child": `Скачать CV ${icon("download")}`,
      ".actions .btn.secondary": `Связаться ${icon("arrow-right")}`,
      ".hero-subtitle": "Понимать людей.<br>Создавать более безопасную среду.",
      ".side-info .info-box:nth-child(1)": `<b>${icon("map-pin")} Торунь</b><br>Польша`,
      ".side-info .info-box:nth-child(2)": `<b>${icon("phone")} +48 739-64-22-77</b>`,
      ".side-info .info-box:nth-child(3)": emailBox.ru,
      ".side-info .info-box:nth-child(4)": `<b>${icon("star")} Открыт к сотрудничеству</b><br>Готов к новым возможностям`,
      ".journey h2": "Разный опыт,<br><span>один практический профиль</span>",
      "#diplomaPdf": `Открыть диплом ${icon("external-link")}`,
      ".contact-location": `${icon("map-pin")}<br><b>Торунь</b><br><small>Польша</small>`,
      ".contact-social": `${icon("linkedin")}<br><b>LinkedIn</b><br><small>Посмотреть профиль</small>`
    },
    lists: [
      [".menu a", ["Обо мне", "Навыки", "Опыт", "Образование", "Достижения", "Рекомендации", "Контакт"]],
      [".hero-pills span", [`${icon("shield")} Инспектор ОТ`, `${icon("brain")} Психология UMK`, `${icon("clipboard-check")} Организация работы`, `${icon("map-pin")} Торунь`], true],
      [".stat small", ["лет опыта", "направления образования", "языков", "дипломов и сертификатов"]],
      [".strength span", ["Организация<br>и самостоятельность", "Работа в условиях<br>дефицита времени", "Обслуживание клиентов<br>и коммуникация", "Решение<br>проблем", "Быстрое обучение<br>и адаптация", "Ответственность<br>и вовлеченность", "Допуск<br>UDT", "Командная работа<br>и поддержка"], true],
      [".exp-card h3", ["Повар", "Инспектор по ОТ", "Помощник маляра", "Работник ресторана", "Работник ресторана", "Помощник строителя"]],
      [".exp-card .date", ["04.2026 – настоящее время", "10.2024 – настоящее время", "06.2022 – 08.2024", "09.2023 – 12.2023", "08.2025 – 11.2025", "04.2019 – 12.2019"]],
      [".exp-card li", ["Приготовление блюд по стандартам качества", "Термическая обработка и жарка мяса", "Подготовка ингредиентов и полуфабрикатов", "Организация рабочего места", "Сотрудничество с командой при выполнении заказов", "Документация по ОТ", "Обучение сотрудников", "Анализ рисков", "Внедрение процедур", "Подготовка и покраска", "Дробеструйная обработка элементов", "Организация работы отдела", "Обучение сотрудников", "Обслуживание клиентов", "Управление запасами", "Работа на кухне", "Обучение команды", "Выполнение заказов", "Работа с кассой и клиентами", "Работа в условиях давления времени", "Контроль качества", "Строительные работы", "Монтаж лесов", "Железобетонные работы", "Отделка интерьеров"]],
      [".timeline-item span", [`${icon("graduation-cap")} 2024 – настоящее время`, `${icon("graduation-cap")} 2023 – 2024`, `${icon("graduation-cap")} 2021 – 2023`], true],
      [".timeline-item b", ["Психология", "Ассистент стоматолога", "Техник по охране труда"]],
      [".timeline-item small", ["Университет Николая Коперника в Торуни", "Полицеальная школа MEDICUS", "Полицеальная школа MEDICUS"]],
      [".lang-row", ["<span>Украинский</span><span>C2</span>", "<span>Польский</span><span>C1</span>", "<span>Русский</span><span>C1</span>", "<span>Английский</span><span>A1</span>", "<span>Польский жестовый язык</span><span>A1</span>"], true]
    ],
    diplomas: [
      ["Excel для начинающих", "Сертификат об окончании курса по основам Excel."],
      ["Введение в Figma", "Сертификат об окончании вводного курса Figma."],
      ["Практический курс инвестирования в акции", "Сертификат об окончании практического курса инвестирования в акции."],
      ["Управление командой", "Подтверждение прохождения управленческого тренинга."],
      ["Photoshop для начинающих", "Сертификат об окончании курса по основам Adobe Photoshop."],
      ["Помощь людям LGBT+", "Сертификат об окончании специализированного обучения."],
      ["Пилот БПЛА A1/A3", "Подтверждение прохождения обучения и сдачи экзамена.", "Действителен до 20.09.2030"],
      ["Межличностные навыки", "Сертификат об окончании курса межличностных навыков."]
    ]
  }
};

translations.pl.text[".menu-toggle-label"] = "Menu";
translations.en.text[".menu-toggle-label"] = "Menu";
translations.ru.text[".menu-toggle-label"] = "Меню";

translations.en.attrs.unshift([".menu-toggle", "aria-label", "Menu"]);
translations.ru.attrs.unshift([".menu-toggle", "aria-label", "Меню"]);

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

translations.pl.diplomas.push(
  ["Psychologia inwestowania", "Certyfikat ukończenia szkolenia o psychologicznych aspektach podejmowania decyzji inwestycyjnych."],
  ["Opcje giełdowe", "Certyfikat ukończenia szkolenia dotyczącego opcji giełdowych i zasad działania instrumentów pochodnych."],
  ["Kontrakty terminowe", "Certyfikat ukończenia szkolenia o kontraktach terminowych i funkcjonowaniu rynku terminowego."]
);
translations.en.diplomas.push(
  ["Psychology of investing", "Certificate of completing training on the psychological aspects of investment decisions."],
  ["Stock options", "Certificate of completing training on stock options and how derivatives work."],
  ["Futures contracts", "Certificate of completing training on futures contracts and the futures market."]
);
translations.ru.diplomas.push(
  ["Психология инвестирования", "Сертификат о прохождении обучения по психологическим аспектам принятия инвестиционных решений."],
  ["Биржевые опционы", "Сертификат о прохождении обучения по биржевым опционам и принципам работы производных инструментов."],
  ["Фьючерсные контракты", "Сертификат о прохождении обучения по фьючерсным контрактам и работе срочного рынка."]
);

const diplomaGroupLabels = {
  pl: {
    groupsLabel: "Kategorie certyfikatów",
    featuredTab: "Prestiżowe",
    otherTab: "Pozostałe",
    featuredKicker: "Wyróżnione kwalifikacje",
    featuredTitle: "Najbardziej prestiżowe certyfikaty",
    featuredDescription: "Dokumenty wydane lub potwierdzone przez rozpoznawalne instytucje branżowe i akademickie.",
    otherKicker: "Pozostałe kwalifikacje",
    otherTitle: "Pozostałe certyfikaty",
    otherDescription: "Kursy i szkolenia uzupełniające kompetencje zawodowe, cyfrowe oraz interpersonalne.",
    featuredBadge: "Wyróżniony",
    openLabel: "Pokaż dokument",
    issuerLabel: "Wystawca"
  },
  en: {
    groupsLabel: "Certificate categories",
    featuredTab: "Prestigious",
    otherTab: "Other",
    featuredKicker: "Highlighted qualifications",
    featuredTitle: "Most prestigious certificates",
    featuredDescription: "Documents issued or confirmed by recognized industry and academic institutions.",
    otherKicker: "Additional qualifications",
    otherTitle: "Other certificates",
    otherDescription: "Courses and training that complement professional, digital and interpersonal skills.",
    featuredBadge: "Highlighted",
    openLabel: "Show document",
    issuerLabel: "Issuer"
  },
  ru: {
    groupsLabel: "Категории сертификатов",
    featuredTab: "Престижные",
    otherTab: "Остальные",
    featuredKicker: "Ключевые квалификации",
    featuredTitle: "Наиболее престижные сертификаты",
    featuredDescription: "Документы, выданные или подтвержденные признанными отраслевыми и академическими организациями.",
    otherKicker: "Дополнительные квалификации",
    otherTitle: "Остальные сертификаты",
    otherDescription: "Курсы и обучение, дополняющие профессиональные, цифровые и коммуникативные навыки.",
    featuredBadge: "Выделенный",
    openLabel: "Показать документ",
    issuerLabel: "Организация"
  }
};

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

translations.pl.attrs.push(
  [".hero-pills", "aria-label", "Najważniejsze obszary"],
  [".stats", "aria-label", "Podsumowanie profilu"]
);

translations.en.attrs.push(
  [".hero-pills", "aria-label", "Key areas"],
  [".stats", "aria-label", "Profile summary"]
);

translations.ru.attrs.push(
  [".hero-pills", "aria-label", "Ключевые направления"],
  [".stats", "aria-label", "Краткое описание профиля"]
);

let activeLanguage = "pl";
const canonicalUrl = "https://vkonohrai.me/";

const languageSeo = {
  pl: {
    locale: "pl_PL",
    imageAlt: "Portret Vladyslava Konohraia"
  },
  ru: {
    locale: "ru_RU",
    imageAlt: "Портрет Владислава Конохрая"
  },
  en: {
    locale: "en_US",
    imageAlt: "Portrait of Vladyslav Konohrai"
  }
};

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
  getElements(selector).forEach((element) => {
    element.setAttribute(attr, value);
  });
};

const updateLanguageSeo = (dictionary) => {
  const seo = languageSeo[dictionary.lang] || languageSeo.pl;

  setAttr('link[rel="canonical"]', "href", canonicalUrl);
  setAttr('meta[name="description"]', "content", dictionary.description);
  setAttr('meta[property="og:title"]', "content", dictionary.title);
  setAttr('meta[property="og:description"]', "content", dictionary.description);
  setAttr('meta[property="og:url"]', "content", canonicalUrl);
  setAttr('meta[property="og:locale"]', "content", seo.locale);
  setAttr('meta[property="og:image:alt"]', "content", seo.imageAlt);
  setAttr('meta[name="twitter:title"]', "content", dictionary.title);
  setAttr('meta[name="twitter:description"]', "content", dictionary.description);
  setAttr('meta[name="twitter:image:alt"]', "content", seo.imageAlt);

  const structuredData = getElement("#profile-structured-data");
  if (structuredData) {
    try {
      const data = JSON.parse(structuredData.textContent);
      const profile = data["@graph"]?.find((item) => item["@type"] === "ProfilePage");
      if (profile) {
        profile["@id"] = `${canonicalUrl}#profile`;
        profile.url = canonicalUrl;
        profile.name = dictionary.title;
        profile.inLanguage = dictionary.lang;
        structuredData.textContent = JSON.stringify(data);
      }
    } catch {
      // Static structured data remains available if it cannot be localized.
    }
  }

  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    const currentUrl = new URL(window.location.href);
    if (dictionary.lang === "pl") {
      currentUrl.searchParams.delete("lang");
    } else {
      currentUrl.searchParams.set("lang", dictionary.lang);
    }

    window.history.replaceState(null, "", `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`);
  }
};

const setList = (selector, values, useHtml = false) => {
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
  updateLanguageSeo(dictionary);

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
    desc: localized[1],
    detail: localized[2] || diploma.detail
  };
};

window.getDiplomaGroupLabels = () => diplomaGroupLabels[activeLanguage] || diplomaGroupLabels.pl;

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
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const savedLanguage = storage.get("siteLanguage");
  const initialLanguage = translations[requestedLanguage]
    ? requestedLanguage
    : translations[savedLanguage]
      ? savedLanguage
      : "pl";

  getElements("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  applyLanguage(initialLanguage);
});
