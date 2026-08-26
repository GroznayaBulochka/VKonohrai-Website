(() => {
  const STORAGE_KEY = "selectedCvProfile";
  const roles = ["production", "gastro", "office", "all"];
  const icon = (name) => `<vk-icon name="${name}"></vk-icon>`;
  let gateReturnFocus = null;

  const files = {
    production: {
      href: "assets/CV/CV_Prod_Vladyslav_Konohrai.pdf",
      download: "CV_Prod_Vladyslav_Konohrai.pdf"
    },
    gastro: {
      href: "assets/CV/CV_Gastro_Vladyslav_Konohrai.pdf",
      download: "CV_Gastro_Vladyslav_Konohrai.pdf"
    },
    office: {
      href: "assets/CV/CV_Biuro_Vladyslav_Konohrai.pdf",
      download: "CV_Biuro_Vladyslav_Konohrai.pdf"
    },
    all: {
      href: "assets/CV/CV_All_Vladyslav_Konohrai.pdf",
      download: "CV_All_Vladyslav_Konohrai.pdf"
    }
  };

  const baseLanguages = [
    "<span>Ukraiński</span><span>C2 / ojczysty</span>",
    "<span>Polski</span><span>C1</span>",
    "<span>Rosyjski</span><span>C1</span>",
    "<span>Angielski</span><span>A1</span>",
    "<span>Polski język migowy</span><span>A1</span>"
  ];

  const languageWidths = ["100%", "95%", "95%", "25%", "20%"];

  const baseEducation = [
    [`${icon("graduation-cap")} 2024 – obecnie`, "Psychologia", "Uniwersytet Mikołaja Kopernika w Toruniu"],
    [`${icon("graduation-cap")} 2023 – 2024`, "Asystent stomatologiczny", "Szkoła Policealna MEDICUS"],
    [`${icon("graduation-cap")} 2021 – 2023`, "Technik BHP", "Szkoła Policealna MEDICUS"]
  ];

  const authorizations = {
    pl: {
      title: "Uprawnienia",
      lead: "Formalne uprawnienia zawodowe i operacyjne.",
      items: [
        ["award", "UDT II WJO", "Operator wózka jezdniowego podnośnikowego"],
        ["navigation", "Pilot BSP A1/A3", "Pilot bezzałogowego statku powietrznego", "Ważne do 20.09.2030"]
      ]
    },
    en: {
      title: "Licenses and authorizations",
      lead: "Formal professional and operational authorizations.",
      items: [
        ["award", "UDT II WJO", "Powered industrial truck operator"],
        ["navigation", "UAV pilot A1/A3", "Unmanned aircraft pilot", "Valid until 20.09.2030"]
      ]
    },
    ru: {
      title: "Допуски и разрешения",
      lead: "Официальные профессиональные и эксплуатационные допуски.",
      items: [
        ["award", "UDT II WJO", "Оператор вилочного погрузчика"],
        ["navigation", "Пилот БПЛА A1/A3", "Пилот беспилотного воздушного судна", "Действительно до 20.09.2030"]
      ]
    }
  };

  const defaultStrengths = {
    en: [
      ["clipboard-check", "Organization<br>and independence"],
      ["clock", "Working under<br>time pressure"],
      ["message", "Customer service<br>and communication"],
      ["target", "Problem<br>solving"],
      ["sparkles", "Fast learning<br>and adaptation"],
      ["shield", "Responsibility<br>and commitment"],
      ["award", "UDT<br>license"],
      ["users", "Teamwork<br>and support"]
    ],
    ru: [
      ["clipboard-check", "Организация<br>и самостоятельность"],
      ["clock", "Работа в условиях<br>дефицита времени"],
      ["message", "Обслуживание клиентов<br>и коммуникация"],
      ["target", "Решение<br>проблем"],
      ["sparkles", "Быстрое обучение<br>и адаптация"],
      ["shield", "Ответственность<br>и вовлеченность"],
      ["award", "Допуск<br>UDT"],
      ["users", "Командная работа<br>и поддержка"]
    ]
  };

  const experienceText = {
    cook: {
      title: "Kucharz",
      company: "MANEKIN Sp. z o.o.",
      date: "04.2026 – obecnie",
      items: [
        "Przygotowywanie dań zgodnie z recepturami i standardami jakości",
        "Przyrządzanie sałatek, burgerów i dań makaronowych",
        "Obróbka termiczna i smażenie mięsa",
        "Przygotowywanie składników i półproduktów do bieżącej produkcji",
        "Organizacja stanowiska pracy i współpraca z zespołem przy realizacji zamówień"
      ]
    },
    safety: {
      title: "Inspektor ds. BHP",
      company: "SOL-WORK Tetiana Logvyn",
      date: "10.2024 – obecnie",
      items: [
        "Opracowywanie dokumentacji BHP zgodnie z obowiązującymi przepisami",
        "Prowadzenie szkoleń wstępnych i okresowych z zakresu BHP",
        "Identyfikacja i analiza zagrożeń oraz proponowanie działań korygujących i zapobiegawczych",
        "Współpraca z kierownictwem przy wdrażaniu procedur i kultury bezpieczeństwa",
        "Monitorowanie przestrzegania przepisów i zasad BHP"
      ]
    },
    "restaurant-torun": {
      title: "Pracownik restauracji",
      company: "Happy Food AWK Sp. z o.o.",
      date: "08.2025 – 11.2025",
      items: [
        "Realizacja i pakowanie zamówień",
        "Obsługa klientów, kasy i przyjmowanie płatności",
        "Przygotowywanie produktów zgodnie ze standardami jakości",
        "Zapewnianie ciągłości pracy kuchni",
        "Kontrola i uzupełnianie zapasów"
      ]
    },
    painting: {
      title: "Pomocnik lakiernika",
      company: "Palfinger Poland Sp. z o.o.",
      date: "06.2022 – 08.2024",
      items: [
        "Przygotowywanie maszyn i elementów do lakierowania",
        "Samodzielne lakierowanie elementów oraz przygotowywanie i mieszanie farb",
        "Śrutowanie elementów metalowych i obsługa obróbki powierzchni",
        "Wykonywanie drobnych napraw oraz dbanie o stan techniczny sprzętu",
        "Organizacja pracy działu i współpraca z magazynem przy realizacji projektów",
        "Szkolenie nowych pracowników i wspieranie zespołu"
      ]
    },
    "restaurant-bydgoszcz": {
      title: "Pracownik restauracji",
      company: "Wojciech Szpila Sp. z o.o.",
      date: "09.2023 – 12.2023",
      items: [
        "Pakowanie zamówień i obsługa klientów",
        "Rozwiązywanie problemów klientów i wsparcie zespołu w trudnych sytuacjach",
        "Utrzymywanie płynności pracy kuchni i kontrola zapasów",
        "Obsługa urządzeń i reagowanie na awarie",
        "Szkolenie nowych pracowników i wdrażanie ich do zespołu"
      ]
    },
    farm: {
      title: "Pracownik fizyczny na farmie",
      company: "Ukraina",
      date: "01.2020 – 04.2020",
      items: [
        "Wykonywanie prac polowych: sadzenie, pielęgnacja i zbiór plonów",
        "Opieka nad zwierzętami i utrzymanie porządku w gospodarstwie"
      ]
    },
    construction: {
      title: "Pomocnik budowlany",
      company: "Ukraina",
      date: "04.2019 – 12.2019",
      items: [
        "Transport materiałów i przygotowywanie zapraw budowlanych",
        "Montaż rusztowań oraz wsparcie przy budowie ścian",
        "Wykonywanie prostych konstrukcji budowlanych na podstawie planów",
        "Prace wykończeniowe: ocieplanie, malowanie i struktury dekoracyjne"
      ]
    }
  };

  const translatedExperience = {
    en: {
      cook: {
        title: "Cook", company: "MANEKIN Sp. z o.o.", date: "04.2026 – present",
        items: ["Preparing dishes according to recipes and quality standards", "Preparing salads, burgers and pasta dishes", "Thermal processing and frying meat", "Preparing ingredients and semi-finished products for current production", "Organizing the workstation and cooperating with the team on orders"]
      },
      safety: {
        title: "OHS inspector", company: "SOL-WORK Tetiana Logvyn", date: "10.2024 – present",
        items: ["Preparing OHS documentation in accordance with applicable regulations", "Conducting introductory and periodic OHS training", "Identifying and analyzing hazards and proposing corrective and preventive actions", "Cooperating with management to implement procedures and a safety culture", "Monitoring compliance with OHS regulations and rules"]
      },
      "restaurant-torun": {
        title: "Restaurant employee", company: "Happy Food AWK Sp. z o.o.", date: "08.2025 – 11.2025",
        items: ["Fulfilling and packing orders", "Serving customers, operating the till and accepting payments", "Preparing products according to quality standards", "Maintaining continuity of kitchen operations", "Checking and replenishing stock"]
      },
      painting: {
        title: "Painter assistant", company: "Palfinger Poland Sp. z o.o.", date: "06.2022 – 08.2024",
        items: ["Preparing machines and components for painting", "Painting components independently and preparing and mixing paints", "Shot blasting metal components and operating surface treatment equipment", "Performing minor repairs and maintaining equipment in good technical condition", "Organizing department work and cooperating with the warehouse on projects", "Training new employees and supporting the team"]
      },
      "restaurant-bydgoszcz": {
        title: "Restaurant employee", company: "Wojciech Szpila Sp. z o.o.", date: "09.2023 – 12.2023",
        items: ["Packing orders and serving customers", "Resolving customer issues and supporting the team in difficult situations", "Maintaining smooth kitchen operations and checking stock", "Operating equipment and responding to faults", "Training and onboarding new employees"]
      },
      farm: {
        title: "Farm worker", company: "Ukraine", date: "01.2020 – 04.2020",
        items: ["Carrying out field work: planting, crop care and harvesting", "Caring for animals and maintaining order on the farm"]
      },
      construction: {
        title: "Construction assistant", company: "Ukraine", date: "04.2019 – 12.2019",
        items: ["Transporting materials and preparing construction mortar", "Assembling scaffolding and assisting with wall construction", "Building simple structures from plans", "Finishing work: insulation, painting and decorative textures"]
      }
    },
    ru: {
      cook: {
        title: "Повар", company: "MANEKIN Sp. z o.o.", date: "04.2026 – настоящее время",
        items: ["Приготовление блюд по рецептурам и стандартам качества", "Приготовление салатов, бургеров и блюд из пасты", "Термическая обработка и жарка мяса", "Подготовка ингредиентов и полуфабрикатов для текущего производства", "Организация рабочего места и взаимодействие с командой при выполнении заказов"]
      },
      safety: {
        title: "Инспектор по охране труда", company: "SOL-WORK Tetiana Logvyn", date: "10.2024 – настоящее время",
        items: ["Подготовка документации по охране труда в соответствии с действующими нормами", "Проведение вводных и периодических инструктажей по охране труда", "Выявление и анализ рисков, предложение корректирующих и профилактических мер", "Сотрудничество с руководством при внедрении процедур и культуры безопасности", "Контроль соблюдения норм и правил охраны труда"]
      },
      "restaurant-torun": {
        title: "Работник ресторана", company: "Happy Food AWK Sp. z o.o.", date: "08.2025 – 11.2025",
        items: ["Выполнение и упаковка заказов", "Обслуживание клиентов, работа с кассой и прием платежей", "Подготовка продуктов в соответствии со стандартами качества", "Обеспечение бесперебойной работы кухни", "Контроль и пополнение запасов"]
      },
      painting: {
        title: "Помощник маляра", company: "Palfinger Poland Sp. z o.o.", date: "06.2022 – 08.2024",
        items: ["Подготовка машин и деталей к покраске", "Самостоятельная покраска деталей, подготовка и смешивание красок", "Дробеструйная обработка металлических деталей и работа с оборудованием для обработки поверхностей", "Выполнение мелкого ремонта и поддержание оборудования в исправном состоянии", "Организация работы отдела и взаимодействие со складом при реализации проектов", "Обучение новых сотрудников и поддержка команды"]
      },
      "restaurant-bydgoszcz": {
        title: "Работник ресторана", company: "Wojciech Szpila Sp. z o.o.", date: "09.2023 – 12.2023",
        items: ["Упаковка заказов и обслуживание клиентов", "Решение проблем клиентов и поддержка команды в сложных ситуациях", "Поддержание бесперебойной работы кухни и контроль запасов", "Работа с оборудованием и реагирование на неисправности", "Обучение и адаптация новых сотрудников"]
      },
      farm: {
        title: "Рабочий на ферме", company: "Украина", date: "01.2020 – 04.2020",
        items: ["Полевые работы: посадка, уход за культурами и сбор урожая", "Уход за животными и поддержание порядка в хозяйстве"]
      },
      construction: {
        title: "Помощник строителя", company: "Украина", date: "04.2019 – 12.2019",
        items: ["Перевозка материалов и приготовление строительных растворов", "Монтаж строительных лесов и помощь при возведении стен", "Выполнение простых конструкций по чертежам", "Отделочные работы: утепление, покраска и декоративные покрытия"]
      }
    }
  };

  const copy = {
    pl: {
      gateKicker: "Dopasuj profil",
      gateTitle: "Na jakie stanowisko szukasz pracownika?",
      gateDesc: "Wybierz obszar, a strona od razu pokaże najważniejsze doświadczenia, umiejętności i dokumenty.",
      choiceLabel: "Obszary stanowiska",
      languageLabel: "Język strony",
      languageAria: "Wybierz język strony",
      selectedProfile: "Wybrany profil",
      changeProfile: "Zmień profil",
      download: "Pobierz CV",
      choices: {
        production: {
          title: "Produkcja i praca techniczna",
          desc: "Lakiernia, produkcja, BHP, UDT i praktyka techniczna."
        },
        gastro: {
          title: "Gastronomia",
          desc: "Kuchnia, zamówienia, obsługa klienta i praca pod presją."
        },
        office: {
          title: "Biuro, administracja i BHP",
          desc: "Dokumentacja, procedury, szkolenia i organizacja pracy."
        },
        all: {
          title: "Pełny profil",
          desc: "Wszystkie doświadczenia i szeroki przekrój kompetencji."
        }
      },
      profiles: {
        production: {
          title: "Produkcja i praca techniczna",
          summary: "Ten wariant pokazuje doświadczenie techniczne, produkcyjne i BHP.",
          pageTitle: "Vladyslav Konohrai | Produkcja i praca techniczna",
          meta: "Vladyslav Konohrai - profil produkcyjny: lakierowanie, śrutowanie, organizacja pracy, BHP, UDT i szkolenie nowych pracowników.",
          tag: "PRODUKCJA • LAKIERNIA • BHP",
          subtitle: "Doświadczenie na produkcji.<br>Technika, jakość i bezpieczeństwo.",
          hero: "Pracownik z ponad dwuletnim doświadczeniem w środowisku produkcyjnym oraz wykształceniem BHP. Ma praktykę w lakierowaniu, śrutowaniu, obróbce powierzchni, drobnych naprawach i organizacji pracy działu.",
          pills: [`${icon("factory")} Produkcja`, `${icon("paintbrush")} Lakierowanie`, `${icon("award")} UDT II WJO`, `${icon("shield")} BHP`],
          stats: [["2+", "lata produkcji"], ["3", "certyfikaty"], ["5", "języków"], ["2", "kluczowe role"]],
          orbit: ["Produkcja", "Lakiernia", "UDT", "BHP"],
          sideStatus: `<b>${icon("star")} Profil produkcyjny</b><br>Gotowy do pracy technicznej i produkcyjnej`,
          contactTitle: "Porozmawiajmy o pracy na produkcji",
          contactLead: "Najlepiej sprawdzi się rozmowa o lakierni, obróbce, BHP lub pracy technicznej.",
          focusTitles: ["Praca produkcyjna", "Lakierowanie i obróbka", "BHP i jakość"],
          focusTexts: ["Ponad dwa lata praktyki w środowisku produkcyjnym.", "Przygotowanie elementów, lakierowanie, śrutowanie i drobne naprawy.", "Przestrzeganie standardów pracy, jakości i bezpieczeństwa."],
          focusIcons: ["factory", "paintbrush", "shield"],
          journeyTitle: "DROGA PRODUKCYJNA",
          journeyHeading: "Doświadczenie, które<br><span>buduje profil techniczny</span>",
          journeyText: "Ten wariant skupia się na produkcji, lakierni i bezpieczeństwie pracy. Najważniejsze są tu praktyczne umiejętności, samodzielność, dbałość o sprzęt oraz wdrażanie nowych pracowników.",
          journeyButton: `Zobacz doświadczenie produkcyjne ${icon("arrow-right")}`,
          points: [
            ["2021", "shield", "Technik BHP", "Wykształcenie dające podstawę do pracy zgodnej z przepisami."],
            ["2022", "factory", "Palfinger", "Start pracy w środowisku produkcyjnym i lakierni."],
            ["2023", "paintbrush", "Obróbka", "Lakierowanie, śrutowanie i przygotowanie powierzchni."],
            ["2024", "award", "UDT", "Uprawnienia operatora wózka jezdniowego II WJO."],
            ["2024", "users", "Wdrożenia", "Szkolenie nowych pracowników i wsparcie zespołu."]
          ],
          skillTitle: "Umiejętności techniczne i produkcyjne",
          strengths: [
            ["factory", "Doświadczenie w pracy<br>w środowisku produkcyjnym"],
            ["paintbrush", "Lakierowanie i przygotowanie<br>elementów do obróbki"],
            ["sparkles", "Śrutowanie i obróbka<br>powierzchni metalowych"],
            ["hammer", "Obsługa narzędzi<br>i urządzeń produkcyjnych"],
            ["clipboard-check", "Dbanie o stan<br>techniczny sprzętu"],
            ["target", "Organizacja<br>stanowiska pracy"],
            ["shield", "Przestrzeganie BHP<br>i standardów jakości"],
            ["users", "Szkolenie i wdrażanie<br>nowych pracowników"],
            ["briefcase", "Współpraca z zespołem<br>i magazynem"]
          ],
          serviceKicker: "Zakres współpracy",
          serviceTitle: "Co wnoszę do produkcji",
          serviceLead: "Ten profil jest zbudowany pod pracę techniczną: lakiernię, proces, porządek stanowiska, jakość i bezpieczeństwo.",
          serviceIcons: ["paintbrush", "factory", "shield", "users"],
          serviceTitles: ["Lakiernia i obróbka", "Proces produkcyjny", "BHP i standardy", "Wdrożenie zespołu"],
          serviceTexts: ["Przygotowanie powierzchni, mieszanie farb, lakierowanie i śrutowanie.", "Organizacja pracy działu, współpraca z magazynem i realizacja projektów.", "Dbanie o przepisy, jakość, ergonomię i sprawny sprzęt.", "Szkolenie nowych osób i wspieranie zespołu w codziennych obowiązkach."],
          visibleExperience: ["safety", "painting"],
          experienceTitle: "Doświadczenie produkcyjne i techniczne",
          educationTitle: "Wykształcenie wspierające profil produkcyjny",
          education: baseEducation,
          languageTitle: "Języki",
          languageRows: baseLanguages,
          diplomaTitle: "Dyplomy i certyfikaty",
          diplomaHeading: "Dokumenty wspierające profil produkcyjny",
          diplomaLead: "W tym wariancie pokazuję certyfikaty powiązane z zarządzaniem zespołem i komunikacją. Formalne uprawnienia są przedstawione osobno w sekcji Uprawnienia.",
          diplomaIndexes: [3, 8],
          quote: "W produkcji liczą się jakość, porządek i bezpieczeństwo. Dobrze zorganizowane stanowisko pomaga zespołowi pracować spokojniej i skuteczniej."
        },
        gastro: {
          title: "Gastronomia",
          summary: "Ten wariant podkreśla kuchnię, tempo pracy i obsługę klienta.",
          pageTitle: "Vladyslav Konohrai | Gastronomia",
          meta: "Vladyslav Konohrai - profil gastronomiczny: kuchnia, przygotowywanie dań, realizacja zamówień, obsługa klienta, zapasy i szkolenie pracowników.",
          tag: "GASTRONOMIA • KUCHNIA • OBSŁUGA KLIENTA",
          subtitle: "Sprawna kuchnia.<br>Tempo, dokładność i zespół.",
          hero: "Pracownik gastronomii z doświadczeniem w pracy na kuchni, przygotowywaniu dań, realizacji zamówień i obsłudze klienta. Dobrze pracuje pod presją czasu, szybko uczy się nowych obowiązków i sprawnie współpracuje z zespołem.",
          pills: [`${icon("utensils")} Kuchnia`, `${icon("clock")} Presja czasu`, `${icon("message")} Klient`, `${icon("users")} Zespół`],
          stats: [["3", "role gastronomiczne"], ["3", "certyfikaty"], ["5", "języków"], ["1", "aktualna rola"]],
          orbit: ["Kuchnia", "Zamówienia", "Zespół", "Klient"],
          sideStatus: `<b>${icon("star")} Profil gastronomiczny</b><br>Gotowy do pracy na kuchni i obsłudze`,
          contactTitle: "Porozmawiajmy o pracy w gastronomii",
          contactLead: "Najlepiej sprawdzi się rozmowa o kuchni, zamówieniach, obsłudze klienta lub pracy zmianowej.",
          focusTitles: ["Praca na kuchni", "Realizacja zamówień", "Obsługa i zespół"],
          focusTexts: ["Przygotowywanie dań, składników i półproduktów zgodnie z recepturami.", "Pakowanie, kompletowanie zamówień oraz kontrola jakości i zapasów.", "Kontakt z klientem, rozwiązywanie problemów i wdrażanie nowych osób."],
          focusIcons: ["utensils", "clipboard-check", "users"],
          journeyTitle: "DROGA GASTRONOMICZNA",
          journeyHeading: "Doświadczenie z kuchni<br><span>i pracy z klientem</span>",
          journeyText: "Ten wariant skupia się na gastronomii: kuchni, obsłudze, zamówieniach, kontroli zapasów i pracy w dynamicznym środowisku.",
          journeyButton: `Zobacz doświadczenie gastronomiczne ${icon("arrow-right")}`,
          points: [
            ["2023", "utensils", "Restauracja", "Pakowanie zamówień, obsługa klientów i praca na kuchni."],
            ["2024", "brain", "Psychologia", "Rozwój komunikacji i lepszego rozumienia ludzi."],
            ["2025", "store", "Happy Food", "Obsługa kasy, płatności, zapasów i jakości produktów."],
            ["2026", "utensils", "MANEKIN", "Przygotowywanie dań i organizacja stanowiska kuchennego."],
            ["2026", "users", "Zespół", "Szkolenie nowych osób i współpraca pod presją czasu."]
          ],
          skillTitle: "Umiejętności gastronomiczne",
          strengths: [
            ["utensils", "Przygotowywanie dań<br>zgodnie z recepturami"],
            ["clipboard-check", "Organizacja pracy<br>na stanowisku kuchennym"],
            ["message", "Obsługa klienta<br>i kasy"],
            ["clock", "Praca pod presją czasu<br>i rozwiązywanie problemów"],
            ["target", "Kontrola i uzupełnianie<br>zapasów"],
            ["users", "Szkolenie nowych<br>pracowników"],
            ["heart-handshake", "Współpraca<br>zespołowa"]
          ],
          serviceKicker: "Zakres współpracy",
          serviceTitle: "Co wnoszę do gastronomii",
          serviceLead: "Ten profil jest zbudowany pod kuchnię, obsługę klienta, tempo pracy i współpracę na zmianie.",
          serviceIcons: ["utensils", "clipboard-check", "message", "users"],
          serviceTitles: ["Kuchnia i przygotowanie", "Zamówienia i jakość", "Klient i kasa", "Zmiana i wdrożenia"],
          serviceTexts: ["Przygotowywanie dań, składników i półproduktów zgodnie ze standardami.", "Realizacja, pakowanie i kontrola zamówień oraz uzupełnianie zapasów.", "Obsługa klientów, przyjmowanie płatności i rozwiązywanie problemów.", "Współpraca z zespołem i szkolenie nowych pracowników."],
          visibleExperience: ["cook", "restaurant-torun", "restaurant-bydgoszcz"],
          experienceTitle: "Doświadczenie gastronomiczne",
          educationTitle: "Wykształcenie",
          education: baseEducation,
          languageTitle: "Języki",
          languageRows: baseLanguages,
          diplomaTitle: "Dyplomy i certyfikaty",
          diplomaHeading: "Dokumenty wspierające profil gastronomiczny",
          diplomaLead: "W tym wariancie pokazuję certyfikaty z komunikacji, pracy z ludźmi i podstaw PJM.",
          diplomaIndexes: [3, 9, 8],
          quote: "W gastronomii liczy się tempo, ale też spokój. Dobra zmiana działa wtedy, gdy kuchnia, obsługa i komunikacja idą razem."
        },
        office: {
          title: "Biuro, administracja i BHP",
          summary: "Ten wariant podkreśla dokumentację, procedury, BHP i organizację pracy.",
          pageTitle: "Vladyslav Konohrai | Biuro, administracja i BHP",
          meta: "Vladyslav Konohrai - profil biurowy i BHP: dokumentacja, procedury, szkolenia, obsługa klienta, organizacja pracy i szybka nauka narzędzi.",
          tag: "BIURO • ADMINISTRACJA • BHP",
          subtitle: "Dokumentacja i procedury.<br>Dokładność, kontakt i organizacja.",
          hero: "Student psychologii i technik BHP z doświadczeniem w pracy z dokumentacją, procedurami, prowadzeniu szkoleń oraz obsłudze klienta. Stawia na dokładność, odpowiedzialność i dobrą organizację.",
          pills: [`${icon("clipboard-check")} Dokumentacja`, `${icon("shield")} BHP`, `${icon("message")} Obsługa klienta`, `${icon("file-check")} Excel`],
          stats: [["2", "role"], ["7", "certyfikatów"], ["5", "języków"], ["3", "kierunki edukacji"]],
          orbit: ["Dokumenty", "BHP", "Klienci", "Narzędzia"],
          sideStatus: `<b>${icon("star")} Profil biurowy i BHP</b><br>Gotowy do dokumentacji, procedur i obsługi`,
          contactTitle: "Porozmawiajmy o pracy biurowej lub BHP",
          contactLead: "Najlepiej sprawdzi się rozmowa o dokumentacji, procedurach, szkoleniach albo obsłudze klienta.",
          focusTitles: ["Dokumentacja", "Procedury BHP", "Obsługa i organizacja"],
          focusTexts: ["Praca z dokumentami, procedurami i szybkie przyswajanie nowych narzędzi.", "Szkolenia, analiza zagrożeń i współpraca przy wdrażaniu zasad bezpieczeństwa.", "Obsługa klienta, rozwiązywanie problemów i ustalanie priorytetów."],
          focusIcons: ["file-check", "shield", "clipboard-check"],
          journeyTitle: "DROGA BIUROWA I BHP",
          journeyHeading: "Dokładność, procedury<br><span>i praca z ludźmi</span>",
          journeyText: "Ten wariant skupia się na dokumentacji, procedurach, BHP, obsłudze klienta i organizacji pracy. Najważniejsze są dokładność, komunikacja i samodzielność.",
          journeyButton: `Zobacz doświadczenie biurowe ${icon("arrow-right")}`,
          points: [
            ["2021", "shield", "Technik BHP", "Podstawa do pracy z przepisami, procedurami i dokumentacją."],
            ["2024", "hard-hat", "Inspektor BHP", "Dokumentacja, szkolenia, analiza zagrożeń i wdrażanie procedur."],
            ["2024", "brain", "Psychologia", "Rozwój wiedzy o komunikacji i pracy z ludźmi."],
            ["2025", "store", "Obsługa klienta", "Rozwiązywanie bieżących problemów i wsparcie organizacji pracy."],
            ["2025", "file-check", "Narzędzia", "Szybkie przyswajanie procedur, danych i nowych narzędzi."]
          ],
          skillTitle: "Umiejętności biurowe i organizacyjne",
          strengths: [
            ["file-check", "Praca z dokumentacją<br>i procedurami"],
            ["clipboard-check", "Organizacja pracy<br>i ustalanie priorytetów"],
            ["message", "Obsługa<br>klienta"],
            ["target", "Rozwiązywanie<br>problemów"],
            ["users", "Szkolenie i wdrażanie<br>nowych pracowników"],
            ["briefcase", "Współpraca z zespołem<br>i kierownictwem"],
            ["sparkles", "Szybkie przyswajanie<br>narzędzi i procedur"]
          ],
          serviceKicker: "Zakres współpracy",
          serviceTitle: "Co wnoszę do biura i BHP",
          serviceLead: "Ten profil jest zbudowany pod dokumentację, obsługę klienta, procedury i sprawną organizację pracy.",
          serviceIcons: ["file-check", "shield", "message", "clipboard-check"],
          serviceTitles: ["Dokumentacja", "Procedury BHP", "Kontakt z ludźmi", "Priorytety"],
          serviceTexts: ["Praca z dokumentami, uzupełnianie informacji i dbanie o porządek danych.", "Tworzenie dokumentacji BHP, szkolenia i analiza zagrożeń.", "Obsługa klientów, rozwiązywanie problemów i komunikacja z zespołem.", "Samodzielna organizacja zadań i szybka nauka nowych narzędzi."],
          visibleExperience: ["safety", "restaurant-torun"],
          experienceOverrides: {
            "restaurant-torun": {
              title: "Pracownik restauracji",
              company: "Happy Food AWK Sp. z o.o.",
              date: "08.2025 – 11.2025",
              items: [
                "Obsługa klientów i rozwiązywanie bieżących problemów",
                "Szkolenie i wdrażanie nowych pracowników",
                "Organizacja pracy i wsparcie zespołu w sytuacjach wymagających szybkiego działania",
                "Kontrola zapasów i reagowanie na problemy operacyjne"
              ]
            }
          },
          experienceTitle: "Doświadczenie biurowe i BHP",
          educationTitle: "Wykształcenie wspierające profil biurowy i BHP",
          education: baseEducation,
          languageTitle: "Języki",
          languageRows: baseLanguages,
          diplomaTitle: "Dyplomy i certyfikaty",
          diplomaHeading: "Dokumenty wspierające profil biurowy",
          diplomaLead: "W tym wariancie pokazuję certyfikaty wspierające dokumentację, komunikację i pracę z ludźmi.",
          diplomaIndexes: [0, 3, 8, 9, 10, 11, 12],
          quote: "W pracy biurowej i BHP największą wartość daje porządek: w dokumentach, procedurach, komunikacji i codziennych priorytetach."
        },
        all: {
          title: "Pełny profil",
          summary: "Ten wariant pokazuje pełny przekrój doświadczenia i kompetencji.",
          pageTitle: "Vladyslav Konohrai | Inspektor BHP i psychologia, Toruń",
          meta: "Vladyslav Konohrai - CV inspektora BHP i studenta psychologii UMK w Toruniu. Doświadczenie w BHP, produkcji, gastronomii, szkoleniach i obsłudze klienta.",
          tag: "PEŁNY PROFIL • BHP • GASTRONOMIA • PRODUKCJA",
          subtitle: "Szerokie doświadczenie.<br>Szybka adaptacja i odpowiedzialność.",
          hero: "Student psychologii UMK w Toruniu i inspektor BHP z doświadczeniem w pracy technicznej, gastronomii oraz obsłudze klienta. Potrafi samodzielnie organizować pracę, szkolić nowych pracowników i skutecznie rozwiązywać problemy.",
          pills: [`${icon("shield")} BHP`, `${icon("utensils")} Gastronomia`, `${icon("factory")} Produkcja`, `${icon("users")} Obsługa klienta`],
          stats: [["7", "doświadczeń"], ["3", "kierunki edukacji"], ["5", "języków"], ["13", "dyplomów i certyfikatów"]],
          orbit: ["BHP", "Kuchnia", "Produkcja", "Ludzie"],
          sideStatus: `<b>${icon("star")} Pełny profil</b><br>BHP, gastronomia, produkcja i obsługa klienta`,
          contactTitle: "Porozmawiajmy o najlepszym dopasowaniu",
          contactLead: "Pełny profil sprawdzi się, gdy zakres stanowiska jest mieszany.",
          focusTitles: ["Samodzielna organizacja", "Praca pod presją", "Wsparcie zespołu"],
          focusTexts: ["Doświadczenie w różnych środowiskach i szybka adaptacja do nowych zadań.", "Gastronomia, produkcja i obsługa klienta uczą tempa oraz rozwiązywania problemów.", "Szkolenie nowych pracowników, komunikacja i odpowiedzialność za wspólny wynik."],
          focusIcons: ["clipboard-check", "clock", "users"],
          journeyTitle: "PEŁNA DROGA",
          journeyHeading: "Różne doświadczenia,<br><span>jeden praktyczny profil</span>",
          journeyText: "Pełny profil łączy pracę fizyczną, produkcję, BHP, gastronomię, obsługę klienta i psychologię. To profil osoby, która szybko się uczy i potrafi działać w zmiennych warunkach.",
          journeyButton: `Zobacz pełne doświadczenie ${icon("arrow-right")}`,
          points: [
            ["2019", "building", "Budownictwo", "Prace budowlane, transport materiałów i wykończenia wnętrz."],
            ["2020", "sprout", "Farma", "Prace polowe, opieka nad zwierzętami i praca fizyczna."],
            ["2022", "factory", "Produkcja", "Lakierowanie, śrutowanie, organizacja pracy i szkolenie zespołu."],
            ["2024", "shield", "BHP", "Dokumentacja, szkolenia, analiza zagrożeń i procedury."],
            ["2026", "utensils", "Gastronomia", "Kuchnia, zamówienia, klient i praca pod presją czasu."]
          ],
          skillTitle: "Najważniejsze umiejętności",
          strengths: [
            ["clipboard-check", "Samodzielna organizacja<br>pracy"],
            ["clock", "Praca pod presją czasu<br>i rozwiązywanie problemów"],
            ["message", "Obsługa<br>klienta"],
            ["hammer", "Umiejętności techniczne:<br>lakierowanie, śrutowanie i prace budowlane"],
            ["users", "Szkolenie nowych pracowników<br>i wsparcie zespołu"]
          ],
          serviceKicker: "Zakres współpracy",
          serviceTitle: "Co pokazuje pełny profil",
          serviceLead: "Pełny profil łączy BHP, gastronomię, produkcję, obsługę klienta i doświadczenie fizyczno-techniczne.",
          serviceIcons: ["shield", "utensils", "factory", "users"],
          serviceTitles: ["BHP i procedury", "Kuchnia i klient", "Produkcja i technika", "Zespół i adaptacja"],
          serviceTexts: ["Dokumentacja, szkolenia, analiza zagrożeń i wdrażanie zasad pracy.", "Przygotowywanie dań, realizacja zamówień i obsługa klienta.", "Lakierowanie, śrutowanie, prace techniczne i organizacja stanowiska.", "Szkolenie nowych pracowników, współpraca i szybkie wejście w nowe obowiązki."],
          visibleExperience: ["cook", "safety", "restaurant-torun", "painting", "restaurant-bydgoszcz", "farm", "construction"],
          experienceTitle: "Pełne doświadczenie zawodowe",
          educationTitle: "Wykształcenie",
          education: baseEducation,
          languageTitle: "Języki",
          languageRows: baseLanguages,
          diplomaTitle: "Dyplomy i certyfikaty",
          diplomaHeading: "Pełna galeria dokumentów",
          diplomaLead: "Pełny wariant pokazuje dostępne dyplomy i zaświadczenia dopasowane do szerokiego profilu zawodowego.",
          diplomaIndexes: null,
          quote: "Różne środowiska pracy uczą elastyczności. Najważniejsze jest szybko zrozumieć zadanie, ludzi i standardy, a potem działać odpowiedzialnie."
        }
      }
    },
    en: {
      gateKicker: "Match the profile",
      gateTitle: "What position are you hiring for?",
      gateDesc: "Choose the area and the page will highlight the most relevant experience, skills and documents.",
      choiceLabel: "Position areas",
      languageLabel: "Page language",
      languageAria: "Choose page language",
      selectedProfile: "Selected profile",
      changeProfile: "Change profile",
      download: "Download CV",
      choices: {
        production: { title: "Production and technical work", desc: "Production, painting, OHS, UDT and technical practice." },
        gastro: { title: "Gastronomy", desc: "Kitchen work, orders, customer service and time pressure." },
        office: { title: "Office, administration and OHS", desc: "Documentation, procedures, training and work organization." },
        all: { title: "Full profile", desc: "All experience and the full competence picture." }
      },
      profiles: {
        production: {
          title: "Production and technical work",
          pageTitle: "Vladyslav Konohrai | Production profile",
          meta: "CV of Vladyslav Konohrai from Toruń: production, industrial painting, shot blasting, work organization, OHS, UDT and training new employees.",
          summary: "This variant highlights technical, production and OHS experience.",
          tag: "PRODUCTION • PAINT SHOP • OHS",
          subtitle: "Production experience.<br>Technique, quality and safety.",
          focusTitles: ["Production work", "Painting and processing", "OHS and quality"],
          serviceTitle: "What I bring to production",
          contactTitle: "Let's talk about production work",
          diplomaHeading: "Documents supporting the production profile"
        },
        gastro: {
          title: "Gastronomy",
          pageTitle: "Vladyslav Konohrai | Gastronomy profile",
          meta: "CV of Vladyslav Konohrai from Toruń: kitchen work, food preparation, order fulfillment, customer service, inventory and employee training.",
          summary: "This variant highlights kitchen work, pace and customer service.",
          tag: "GASTRONOMY • KITCHEN • CUSTOMER SERVICE",
          subtitle: "Efficient kitchen work.<br>Pace, accuracy and teamwork.",
          focusTitles: ["Kitchen work", "Order fulfillment", "Service and team"],
          serviceTitle: "What I bring to gastronomy",
          contactTitle: "Let's talk about gastronomy work",
          diplomaHeading: "Documents supporting the gastronomy profile"
        },
        office: {
          title: "Office, administration and OHS",
          pageTitle: "Vladyslav Konohrai | Office and OHS profile",
          meta: "CV of an OHS inspector and psychology student in Toruń: documentation, workplace safety procedures, training, customer service and work organization.",
          summary: "This variant highlights documentation, procedures, OHS and organization.",
          tag: "OFFICE • ADMINISTRATION • OHS",
          subtitle: "Documentation and procedures.<br>Accuracy, contact and organization.",
          focusTitles: ["Documentation", "OHS procedures", "Service and organization"],
          serviceTitle: "What I bring to office and OHS work",
          contactTitle: "Let's talk about office or OHS work",
          diplomaHeading: "Documents supporting the office profile"
        },
        all: {
          title: "Full profile",
          pageTitle: "Vladyslav Konohrai | OHS specialist and psychology, Toruń",
          meta: "CV of Vladyslav Konohrai, an OHS inspector and psychology student at Nicolaus Copernicus University in Toruń, with experience in safety, production, gastronomy and customer service.",
          summary: "This variant shows the full range of experience and skills.",
          tag: "FULL PROFILE • OHS • GASTRONOMY • PRODUCTION",
          subtitle: "Broad experience.<br>Fast adaptation and responsibility.",
          focusTitles: ["Independent organization", "Working under pressure", "Team support"],
          serviceTitle: "What the full profile shows",
          contactTitle: "Let's talk about the best fit",
          diplomaHeading: "Full document gallery"
        }
      }
    },
    ru: {
      gateKicker: "Подобрать профиль",
      gateTitle: "На какую должность вы ищете сотрудника?",
      gateDesc: "Выберите направление, и страница сразу покажет самые важные опыт, навыки и документы.",
      choiceLabel: "Направления работы",
      languageLabel: "Язык страницы",
      languageAria: "Выберите язык страницы",
      selectedProfile: "Выбранный профиль",
      changeProfile: "Изменить профиль",
      download: "Скачать CV",
      choices: {
        production: { title: "Производство и техническая работа", desc: "Покраска, производство, охрана труда, UDT и техническая практика." },
        gastro: { title: "Гастрономия", desc: "Кухня, заказы, обслуживание клиентов и работа в темпе." },
        office: { title: "Офис, администрация и охрана труда", desc: "Документы, процедуры, обучение и организация работы." },
        all: { title: "Полный профиль", desc: "Весь опыт и полный обзор компетенций." }
      },
      profiles: {
        production: {
          title: "Производство и техническая работа",
          pageTitle: "Vladyslav Konohrai | Производство и технический опыт",
          meta: "Vladyslav Konohrai (Владислав Конохрай) - опыт в производстве, промышленной покраске, дробеструйной обработке, охране труда и UDT.",
          summary: "Этот вариант выделяет технический, производственный опыт и охрану труда.",
          tag: "ПРОИЗВОДСТВО • ПОКРАСКА • ОТ",
          subtitle: "Опыт производства.<br>Техника, качество и безопасность.",
          focusTitles: ["Производство", "Покраска и обработка", "ОТ и качество"],
          serviceTitle: "Что я даю производству",
          contactTitle: "Поговорим о работе на производстве",
          diplomaHeading: "Документы для производственного профиля"
        },
        gastro: {
          title: "Гастрономия",
          pageTitle: "Vladyslav Konohrai | Опыт работы в гастрономии",
          meta: "Vladyslav Konohrai (Владислав Конохрай) - опыт работы на кухне, приготовления блюд, выполнения заказов и обслуживания клиентов.",
          summary: "Этот вариант выделяет кухню, темп работы и обслуживание клиентов.",
          tag: "ГАСТРОНОМИЯ • КУХНЯ • КЛИЕНТЫ",
          subtitle: "Эффективная кухня.<br>Темп, точность и команда.",
          focusTitles: ["Кухня", "Выполнение заказов", "Сервис и команда"],
          serviceTitle: "Что я даю гастрономии",
          contactTitle: "Поговорим о работе в гастрономии",
          diplomaHeading: "Документы для гастрономического профиля"
        },
        office: {
          title: "Офис, администрация и охрана труда",
          pageTitle: "Vladyslav Konohrai | Инспектор по охране труда, Торунь",
          meta: "Vladyslav Konohrai (Владислав Конохрай) - инспектор по охране труда в Торуни: документация BHP, обучение, анализ рисков и процедуры.",
          summary: "Этот вариант выделяет документацию, процедуры, охрану труда и организацию.",
          tag: "ОФИС • АДМИНИСТРАЦИЯ • ОХРАНА ТРУДА",
          subtitle: "Документы и процедуры.<br>Точность, контакт и организация.",
          focusTitles: ["Документация", "Процедуры ОТ", "Сервис и организация"],
          serviceTitle: "Что я даю офису и ОТ",
          contactTitle: "Поговорим об офисной работе или ОТ",
          diplomaHeading: "Документы для офисного профиля"
        },
        all: {
          title: "Полный профиль",
          pageTitle: "Vladyslav Konohrai | Охрана труда и психология, Торунь",
          meta: "Vladyslav Konohrai (Владислав Конохрай) - инспектор по охране труда и студент психологии UMK в Торуни. Опыт в производстве, гастрономии и работе с клиентами.",
          summary: "Этот вариант показывает весь опыт и полный обзор компетенций.",
          tag: "ПОЛНЫЙ ПРОФИЛЬ • ОХРАНА ТРУДА • ГАСТРОНОМИЯ • ПРОИЗВОДСТВО",
          subtitle: "Широкий опыт.<br>Быстрая адаптация и ответственность.",
          focusTitles: ["Самостоятельная организация", "Работа под давлением", "Поддержка команды"],
          serviceTitle: "Что показывает полный профиль",
          contactTitle: "Поговорим о лучшем соответствии",
          diplomaHeading: "Полная галерея документов"
        }
      }
    }
  };

  let activeRole = "all";

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
        // The chosen CV profile still works during the current visit.
      }
    }
  };

  const normalizeRole = (role) => roles.includes(role) ? role : "all";
  const language = () => {
    const current = (document.documentElement.lang || "pl").slice(0, 2);
    return copy[current] ? current : "pl";
  };

  const localizedProfile = (role) => {
    const baseProfile = copy.pl.profiles[role];
    const currentLanguage = language();

    if (currentLanguage === "pl") {
      return baseProfile;
    }

    return {
      ...(copy[currentLanguage].profiles?.[role] || {}),
      visibleExperience: baseProfile.visibleExperience,
      diplomaIndexes: baseProfile.diplomaIndexes
    };
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && value !== undefined) {
      element.textContent = value;
    }
  };

  const setHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && value !== undefined) {
      element.innerHTML = value;
    }
  };

  const setList = (selector, values, useHtml = false) => {
    if (!values) {
      return;
    }

    document.querySelectorAll(selector).forEach((element, index) => {
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

  const setMeta = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && value) {
      element.setAttribute("content", value);
    }
  };

  const setIconList = (selector, names) => {
    if (!names) {
      return;
    }

    document.querySelectorAll(selector).forEach((element, index) => {
      if (names[index]) {
        element.setAttribute("name", names[index]);
      }
    });
  };

  const updateCvLinks = (role, dictionary, profile) => {
    const file = files[role] || files.all;

    document.querySelectorAll("[data-cv-link]").forEach((link) => {
      link.href = file.href;
      link.download = file.download;
      link.setAttribute("aria-label", `${dictionary.download}: ${profile.title}`);

      if (link.target === "_blank") {
        link.rel = "noopener";
      }
    });

    setHtml(".nav-cta", `${dictionary.download} ${icon("download")}`);
    setHtml(".actions .btn:first-child", `${dictionary.download} ${icon("download")}`);
  };

  const updateChoiceButtons = (role, dictionary) => {
    setText("[data-job-gate-kicker]", dictionary.gateKicker);
    setText("[data-job-gate-title]", dictionary.gateTitle);
    setText("[data-job-gate-desc]", dictionary.gateDesc);
    setText("[data-job-language-label]", dictionary.languageLabel);
    document.querySelector("[data-job-language-switch]")?.setAttribute("aria-label", dictionary.languageAria);
    document.querySelector("[data-job-choice-grid]")?.setAttribute("aria-label", dictionary.choiceLabel);

    document.querySelectorAll("[data-role-choice]").forEach((button) => {
      const buttonRole = normalizeRole(button.dataset.roleChoice);
      const choice = dictionary.choices[buttonRole];
      const iconName = buttonRole === "production" ? "factory" : buttonRole === "gastro" ? "utensils" : buttonRole === "office" ? "briefcase" : "sparkles";
      button.innerHTML = `${icon(iconName)}<span>${choice.title}</span><small>${choice.desc}</small>`;
      button.classList.toggle("is-active", buttonRole === role);
      button.setAttribute("aria-pressed", buttonRole === role ? "true" : "false");
      button.setAttribute("aria-label", `${choice.title}. ${choice.desc}`);
    });
  };

  const updateStats = (profile) => {
    if (!profile.stats) {
      return;
    }

    document.querySelectorAll(".stat").forEach((card, index) => {
      const stat = profile.stats[index];
      if (!stat) {
        return;
      }

      const [value, label] = stat;
      const strong = card.querySelector("strong");
      const small = card.querySelector("small");
      if (strong) {
        strong.textContent = value;
      }
      if (small) {
        small.textContent = label;
      }
    });
  };

  const updateJourney = (profile) => {
    setText(".journey .section-title", profile.journeyTitle);
    setHtml(".journey h2", profile.journeyHeading);
    setText(".journey p", profile.journeyText);
    setHtml(".journey .btn", profile.journeyButton);

    document.querySelectorAll(".point").forEach((point, index) => {
      const value = profile.points?.[index];
      if (!value) {
        return;
      }

      const [year, iconName, title, description] = value;
      point.querySelector(".year").textContent = year;
      point.querySelector(".icon vk-icon")?.setAttribute("name", iconName);
      point.querySelector("b").textContent = title;
      point.querySelector("small").textContent = description;
    });
  };

  const updateStrengths = (profile) => {
    setText("#skills .section-title", profile.skillTitle);

    const container = document.querySelector(".strengths");
    const strengths = profile.strengths || defaultStrengths[language()];
    if (!container || !strengths) {
      return;
    }

    container.innerHTML = strengths
      .map(([iconName, label]) => `<div class="strength">${icon(iconName)}<span>${label}</span></div>`)
      .join("");
  };

  const updateServices = (profile) => {
    setText(".section-heading .section-title", profile.serviceKicker);
    setText(".section-heading h2", profile.serviceTitle);
    setText(".section-heading p", profile.serviceLead);
    setIconList(".service-icon vk-icon", profile.serviceIcons);
    setList(".service-card h3", profile.serviceTitles);
    setList(".service-card p", profile.serviceTexts);
  };

  const updateExperience = (role, profile) => {
    const order = profile.visibleExperience || [];

    document.querySelectorAll(".exp-card[data-experience-key]").forEach((card, index) => {
      const key = card.dataset.experienceKey;
      const content = language() === "pl"
        ? profile.experienceOverrides?.[key] || experienceText[key]
        : profile.experienceOverrides?.[key] || translatedExperience[language()]?.[key];
      const orderIndex = order.indexOf(key);
      const isVisible = orderIndex >= 0;

      card.hidden = !isVisible;
      card.style.order = String(isVisible ? orderIndex + 1 : 40 + index);
      card.classList.toggle("is-role-match", role !== "all" && isVisible);
      card.classList.toggle("is-role-muted", false);

      if (!content) {
        return;
      }

      card.querySelector("h3").textContent = content.title;
      card.querySelector("small").textContent = content.company;
      card.querySelector(".date").textContent = content.date;
      card.querySelector("ul").innerHTML = content.items.map((item) => `<li>${item}</li>`).join("");
    });

    setText("#experience .section-title", profile.experienceTitle);
  };

  const updateEducation = (profile) => {
    setText("#education .card:nth-child(1) .section-title", profile.educationTitle);

    document.querySelectorAll(".timeline-item").forEach((item, index) => {
      const entry = profile.education?.[index];
      if (!entry) {
        return;
      }

      item.querySelector("span").innerHTML = entry[0];
      item.querySelector("b").textContent = entry[1];
      item.querySelector("small").textContent = entry[2];
    });

    setText("#education .card:nth-child(2) .section-title", profile.languageTitle);
    setList(".lang-row", profile.languageRows, true);
    document.querySelectorAll(".bar div").forEach((bar, index) => {
      if (languageWidths[index]) {
        bar.style.width = languageWidths[index];
      }
    });
  };

  const updateAuthorizations = () => {
    const content = authorizations[language()] || authorizations.pl;
    const container = document.querySelector(".authorizations");

    setText("#education .card:nth-child(3) .section-title", content.title);
    setText(".authorizations-lead", content.lead);

    if (!container) {
      return;
    }

    container.innerHTML = content.items
      .map((item) => `
        <li class="authorization-card">
          <span class="authorization-icon">${icon(item[0])}</span>
          <span class="authorization-copy">
            <b>${item[1]}</b>
            <small>${item[2]}</small>
            ${item[3] ? `<em>${item[3]}</em>` : ""}
          </span>
        </li>
      `)
      .join("");
  };

  const updateDiplomas = (profile) => {
    setText(".diploma-head .section-title", profile.diplomaTitle);
    setText(".diploma-head h2", profile.diplomaHeading);
    setText(".diploma-head p", profile.diplomaLead);

    const source = window.diplomas || [];
    const indexes = profile.diplomaIndexes || source.map((_, index) => index);
    window.activeDiplomas = indexes.map((index) => source[index]).filter(Boolean);

    const thumbs = document.querySelector(".diploma-thumbs");
    if (thumbs) {
      thumbs.innerHTML = window.activeDiplomas.map((diploma, index) => {
        const localizedDiploma = window.getLocalizedDiploma ? window.getLocalizedDiploma(diploma) : diploma;
        const activeClass = index === 0 ? " class=\"active\"" : "";
        return `<img src="${diploma.img}"${activeClass} alt="${localizedDiploma.title}" loading="lazy" decoding="async">`;
      }).join("");
    }

    document.dispatchEvent(new CustomEvent("diplomaschange"));
  };

  const updateContactAndQuote = (profile) => {
    setHtml(".side-info .info-box:nth-child(4)", profile.sideStatus);
    setText(".contact .contact-card:first-child h2", profile.contactTitle);
    setText(".contact .contact-card:first-child small", profile.contactLead);
    setText(".quote-card p", profile.quote);
  };

  const applyRole = (role, { persist = true } = {}) => {
    activeRole = normalizeRole(role);
    const dictionary = copy[language()] || copy.pl;
    const profile = localizedProfile(activeRole);

    document.body.dataset.cvProfile = activeRole;
    document.title = profile.pageTitle || `${profile.title} | Vladyslav Konohrai`;

    setMeta("meta[name=\"description\"]", profile.meta);
    setMeta("meta[property=\"og:title\"]", document.title);
    setMeta("meta[property=\"og:description\"]", profile.meta);
    setMeta("meta[name=\"twitter:title\"]", document.title);
    setMeta("meta[name=\"twitter:description\"]", profile.meta);

    setText(".tag", profile.tag);
    setHtml(".hero-subtitle", profile.subtitle);
    setText(".hero p", profile.hero);
    setList(".hero-pills span", profile.pills, true);

    setText("[data-role-eyebrow]", dictionary.selectedProfile);
    setText("[data-role-title]", profile.title);
    setText("[data-role-desc]", profile.summary);
    setHtml("[data-role-change]", `${dictionary.changeProfile} ${icon("arrow-right")}`);
    document.querySelector("[data-role-change]")?.setAttribute("aria-label", dictionary.changeProfile);

    updateStats(profile);
    updateJourney(profile);
    updateStrengths(profile);
    updateServices(profile);
    updateExperience(activeRole, profile);
    updateEducation(profile);
    updateAuthorizations();
    updateDiplomas(profile);
    updateContactAndQuote(profile);
    updateCvLinks(activeRole, dictionary, profile);
    updateChoiceButtons(activeRole, dictionary);

    if (persist) {
      storage.set(STORAGE_KEY, activeRole);
    }
  };

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let heroInView = true;

  const playVideo = (video) => {
    if (!video || motionPreference.matches || document.hidden) {
      return;
    }

    video.play().catch(() => {
      // The poster remains visible when a browser blocks autoplay.
    });
  };

  const syncBackgroundVideos = () => {
    const gate = document.querySelector("[data-job-gate]");
    const gateVideo = gate?.querySelector(".job-gate-background-video");
    const heroVideo = document.querySelector(".hero-background-video");
    const gateIsOpen = Boolean(gate && !gate.hidden);

    if (motionPreference.matches || document.hidden) {
      gateVideo?.pause();
      heroVideo?.pause();
      return;
    }

    if (gateIsOpen) {
      heroVideo?.pause();
      playVideo(gateVideo);
      return;
    }

    gateVideo?.pause();
    if (heroInView) {
      playVideo(heroVideo);
    } else {
      heroVideo?.pause();
    }
  };

  const openGate = () => {
    const gate = document.querySelector("[data-job-gate]");
    if (!gate) {
      return;
    }

    const activeElement = document.activeElement;
    gateReturnFocus = activeElement && activeElement !== document.body && !gate.contains(activeElement)
      ? activeElement
      : null;
    gate.hidden = false;
    document.documentElement.classList.add("job-gate-open");
    document.body.classList.add("job-gate-open");
    gate.querySelector(".job-gate-panel")?.scrollTo({ top: 0 });
    syncBackgroundVideos();

    requestAnimationFrame(() => {
      const focusTarget = gate.querySelector(".job-gate-lang-switch button.active") || gate.querySelector(".job-choice.is-active") || gate.querySelector(".job-choice");
      focusTarget?.focus({ preventScroll: true });
    });
  };

  const closeGate = () => {
    const gate = document.querySelector("[data-job-gate]");
    if (!gate) {
      return;
    }

    gate.hidden = true;
    document.documentElement.classList.remove("job-gate-open");
    document.body.classList.remove("job-gate-open");
    syncBackgroundVideos();
    gateReturnFocus?.focus({ preventScroll: true });
    gateReturnFocus = null;
  };

  document.addEventListener("DOMContentLoaded", () => {
    activeRole = normalizeRole(storage.get(STORAGE_KEY));
    applyRole(activeRole, { persist: false });
    openGate();

    document.querySelectorAll("[data-role-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        applyRole(button.dataset.roleChoice);
        closeGate();
      });
    });

    document.querySelector("[data-role-change]")?.addEventListener("click", openGate);
    document.addEventListener("visibilitychange", syncBackgroundVideos);
    motionPreference.addEventListener?.("change", syncBackgroundVideos);

    const hero = document.querySelector(".hero");
    if (hero && "IntersectionObserver" in window) {
      const heroObserver = new IntersectionObserver(([entry]) => {
        heroInView = entry.isIntersecting;
        syncBackgroundVideos();
      }, { threshold: .01, rootMargin: "200px 0px" });
      heroObserver.observe(hero);
    }

    document.addEventListener("keydown", (event) => {
      const gate = document.querySelector("[data-job-gate]");
      if (!gate || gate.hidden) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeGate();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = [...gate.querySelectorAll("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])")]
        .filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  });

  document.addEventListener("languagechange", () => {
    applyRole(activeRole, { persist: false });
  });
})();
