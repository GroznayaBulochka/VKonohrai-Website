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
      ["sparkles", "Learning<br>new tasks"],
      ["shield", "Responsibility<br>and commitment"],
      ["award", "UDT<br>license"],
      ["users", "Teamwork<br>and support"]
    ],
    ru: [
      ["clipboard-check", "Организация<br>и самостоятельность"],
      ["clock", "Работа в условиях<br>дефицита времени"],
      ["message", "Обслуживание клиентов<br>и коммуникация"],
      ["target", "Решение<br>проблем"],
      ["sparkles", "Освоение<br>новых задач"],
      ["shield", "Ответственность<br>и вовлеченность"],
      ["award", "Допуск<br>UDT"],
      ["users", "Командная работа<br>и поддержка"]
    ]
  };

  const experienceText = {
    cook: {
      title: "Kucharz",
      company: "MANEKIN Sp. z o.o.",
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
      items: [
        "Wykonywanie prac polowych: sadzenie, pielęgnacja i zbiór plonów",
        "Opieka nad zwierzętami i utrzymanie porządku w gospodarstwie"
      ]
    },
    construction: {
      title: "Pomocnik budowlany",
      company: "Ukraina",
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
        title: "Cook", company: "MANEKIN Sp. z o.o.",
        items: ["Preparing dishes according to recipes and quality standards", "Preparing salads, burgers and pasta dishes", "Thermal processing and frying meat", "Preparing ingredients and semi-finished products for current production", "Organizing the workstation and cooperating with the team on orders"]
      },
      safety: {
        title: "OHS inspector", company: "SOL-WORK Tetiana Logvyn",
        items: ["Preparing OHS documentation in accordance with applicable regulations", "Conducting introductory and periodic OHS training", "Identifying and analyzing hazards and proposing corrective and preventive actions", "Cooperating with management to implement procedures and a safety culture", "Monitoring compliance with OHS regulations and rules"]
      },
      "restaurant-torun": {
        title: "Restaurant employee", company: "Happy Food AWK Sp. z o.o.",
        items: ["Fulfilling and packing orders", "Serving customers, operating the till and accepting payments", "Preparing products according to quality standards", "Maintaining continuity of kitchen operations", "Checking and replenishing stock"]
      },
      painting: {
        title: "Painter assistant", company: "Palfinger Poland Sp. z o.o.",
        items: ["Preparing machines and components for painting", "Painting components independently and preparing and mixing paints", "Shot blasting metal components and operating surface treatment equipment", "Performing minor repairs and maintaining equipment in good technical condition", "Organizing department work and cooperating with the warehouse on projects", "Training new employees and supporting the team"]
      },
      "restaurant-bydgoszcz": {
        title: "Restaurant employee", company: "Wojciech Szpila Sp. z o.o.",
        items: ["Packing orders and serving customers", "Resolving customer issues and supporting the team in difficult situations", "Maintaining smooth kitchen operations and checking stock", "Operating equipment and responding to faults", "Training and onboarding new employees"]
      },
      farm: {
        title: "Farm worker", company: "Ukraine",
        items: ["Carrying out field work: planting, crop care and harvesting", "Caring for animals and maintaining order on the farm"]
      },
      construction: {
        title: "Construction assistant", company: "Ukraine",
        items: ["Transporting materials and preparing construction mortar", "Assembling scaffolding and assisting with wall construction", "Building simple structures from plans", "Finishing work: insulation, painting and decorative textures"]
      }
    },
    ru: {
      cook: {
        title: "Повар", company: "MANEKIN Sp. z o.o.",
        items: ["Приготовление блюд по рецептурам и стандартам качества", "Приготовление салатов, бургеров и блюд из пасты", "Термическая обработка и жарка мяса", "Подготовка ингредиентов и полуфабрикатов для текущего производства", "Организация рабочего места и взаимодействие с командой при выполнении заказов"]
      },
      safety: {
        title: "Инспектор по охране труда", company: "SOL-WORK Tetiana Logvyn",
        items: ["Подготовка документации по охране труда в соответствии с действующими нормами", "Проведение вводных и периодических инструктажей по охране труда", "Выявление и анализ рисков, предложение корректирующих и профилактических мер", "Сотрудничество с руководством при внедрении процедур и культуры безопасности", "Контроль соблюдения норм и правил охраны труда"]
      },
      "restaurant-torun": {
        title: "Работник ресторана", company: "Happy Food AWK Sp. z o.o.",
        items: ["Выполнение и упаковка заказов", "Обслуживание клиентов, работа с кассой и прием платежей", "Подготовка продуктов в соответствии со стандартами качества", "Обеспечение бесперебойной работы кухни", "Контроль и пополнение запасов"]
      },
      painting: {
        title: "Помощник маляра", company: "Palfinger Poland Sp. z o.o.",
        items: ["Подготовка машин и деталей к покраске", "Самостоятельная покраска деталей, подготовка и смешивание красок", "Дробеструйная обработка металлических деталей и работа с оборудованием для обработки поверхностей", "Выполнение мелкого ремонта и поддержание оборудования в исправном состоянии", "Организация работы отдела и взаимодействие со складом при реализации проектов", "Обучение новых сотрудников и поддержка команды"]
      },
      "restaurant-bydgoszcz": {
        title: "Работник ресторана", company: "Wojciech Szpila Sp. z o.o.",
        items: ["Упаковка заказов и обслуживание клиентов", "Решение проблем клиентов и поддержка команды в сложных ситуациях", "Поддержание бесперебойной работы кухни и контроль запасов", "Работа с оборудованием и реагирование на неисправности", "Обучение и адаптация новых сотрудников"]
      },
      farm: {
        title: "Рабочий на ферме", company: "Украина",
        items: ["Полевые работы: посадка, уход за культурами и сбор урожая", "Уход за животными и поддержание порядка в хозяйстве"]
      },
      construction: {
        title: "Помощник строителя", company: "Украина",
        items: ["Перевозка материалов и приготовление строительных растворов", "Монтаж строительных лесов и помощь при возведении стен", "Выполнение простых конструкций по чертежам", "Отделочные работы: утепление, покраска и декоративные покрытия"]
      }
    }
  };

  const experienceTimelineMeta = {
    construction: {
      startDate: "2019-04",
      endDate: "2019-12",
      icon: "building",
      color: "#c176ff",
      category: { pl: "Budownictwo", en: "Construction", ru: "Строительство" },
      location: { pl: "Ukraina", en: "Ukraine", ru: "Украина" },
      skills: {
        pl: ["Transport materiałów", "Rusztowania", "Prace budowlane", "Wykończenia"],
        en: ["Material transport", "Scaffolding", "Construction work", "Finishing work"],
        ru: ["Перевозка материалов", "Строительные леса", "Строительные работы", "Отделочные работы"]
      }
    },
    farm: {
      startDate: "2020-01",
      endDate: "2020-04",
      icon: "sprout",
      color: "#62a5ff",
      category: { pl: "Praca fizyczna", en: "Physical work", ru: "Физическая работа" },
      location: { pl: "Ukraina", en: "Ukraine", ru: "Украина" },
      skills: {
        pl: ["Prace polowe", "Opieka nad zwierzętami", "Organizacja pracy", "Samodzielność"],
        en: ["Field work", "Animal care", "Work organization", "Independence"],
        ru: ["Полевые работы", "Уход за животными", "Организация работы", "Самостоятельность"]
      }
    },
    painting: {
      startDate: "2022-06",
      endDate: "2024-08",
      icon: "paintbrush",
      color: "#ad63ff",
      category: { pl: "Produkcja", en: "Production", ru: "Производство" },
      location: { pl: "Polska", en: "Poland", ru: "Польша" },
      skills: {
        pl: ["Lakierowanie", "Śrutowanie", "Obróbka powierzchni", "Organizacja pracy", "Szkolenie pracowników"],
        en: ["Painting", "Shot blasting", "Surface treatment", "Work organization", "Employee training"],
        ru: ["Покраска", "Дробеструйная обработка", "Обработка поверхностей", "Организация работы", "Обучение сотрудников"]
      }
    },
    "restaurant-bydgoszcz": {
      startDate: "2023-09",
      endDate: "2023-12",
      icon: "utensils",
      color: "#65e0a3",
      category: { pl: "Gastronomia", en: "Hospitality", ru: "Гастрономия" },
      location: { pl: "Bydgoszcz, Polska", en: "Bydgoszcz, Poland", ru: "Быдгощ, Польша" },
      skills: {
        pl: ["Obsługa klienta", "Realizacja zamówień", "Kontrola zapasów", "Rozwiązywanie problemów", "Wdrażanie pracowników"],
        en: ["Customer service", "Order fulfilment", "Stock control", "Problem solving", "Employee onboarding"],
        ru: ["Обслуживание клиентов", "Выполнение заказов", "Контроль запасов", "Решение проблем", "Адаптация сотрудников"]
      }
    },
    safety: {
      startDate: "2024-10",
      endDate: null,
      isCurrent: true,
      icon: "hard-hat",
      color: "#9a5cff",
      category: { pl: "BHP", en: "OHS", ru: "Охрана труда" },
      location: { pl: "Toruń, Polska", en: "Toruń, Poland", ru: "Торунь, Польша" },
      skills: {
        pl: ["Dokumentacja BHP", "Szkolenia BHP", "Analiza zagrożeń", "Procedury bezpieczeństwa", "Współpraca z kierownictwem"],
        en: ["OHS documentation", "OHS training", "Hazard analysis", "Safety procedures", "Management cooperation"],
        ru: ["Документация по охране труда", "Инструктажи", "Анализ рисков", "Процедуры безопасности", "Работа с руководством"]
      }
    },
    "restaurant-torun": {
      startDate: "2025-08",
      endDate: "2025-11",
      icon: "store",
      color: "#62d9ff",
      category: { pl: "Gastronomia", en: "Hospitality", ru: "Гастрономия" },
      location: { pl: "Toruń, Polska", en: "Toruń, Poland", ru: "Торунь, Польша" },
      skills: {
        pl: ["Obsługa klienta", "Obsługa kasy", "Płatności", "Kontrola zapasów", "Organizacja kuchni"],
        en: ["Customer service", "Till operation", "Payments", "Stock control", "Kitchen organization"],
        ru: ["Обслуживание клиентов", "Работа с кассой", "Платежи", "Контроль запасов", "Организация кухни"]
      }
    },
    cook: {
      startDate: "2026-04",
      endDate: null,
      isCurrent: true,
      icon: "utensils",
      color: "#d184ff",
      category: { pl: "Gastronomia", en: "Hospitality", ru: "Гастрономия" },
      location: { pl: "Toruń, Polska", en: "Toruń, Poland", ru: "Торунь, Польша" },
      skills: {
        pl: ["Przygotowywanie dań", "Obróbka termiczna", "Organizacja stanowiska", "Standardy jakości", "Praca zespołowa"],
        en: ["Food preparation", "Thermal processing", "Workstation organization", "Quality standards", "Teamwork"],
        ru: ["Приготовление блюд", "Термическая обработка", "Организация рабочего места", "Стандарты качества", "Командная работа"]
      }
    }
  };

  const experienceInterfaceText = {
    pl: {
      careerEyebrow: "ŚCIEŻKA ZAWODOWA",
      roleColumn: "Stanowisko",
      historyLabel: "Historia zatrudnienia",
      showPoint: "Pokaż doświadczenie",
      hint: "Kliknij stanowisko na osi czasu, aby zobaczyć szczegóły i zakres obowiązków.",
      responsibilities: "Zakres obowiązków",
      skills: "Kluczowe umiejętności",
      updated: "Doświadczenie aktualizowane na bieżąco",
      current: "obecnie",
      duration: (years, months) => [years ? `${years} ${years === 1 ? "rok" : years < 5 ? "lata" : "lat"}` : "", months ? `${months} mies.` : ""].filter(Boolean).join(" "),
      summary: "Pokaż szczegółowy przebieg zatrudnienia",
      count: (value) => `${value} ${value === 1 ? "stanowisko" : value < 5 ? "stanowiska" : "stanowisk"} • firmy, dokładne daty i zakres obowiązków`,
      expand: "Rozwiń szczegóły",
      collapse: "Zwiń szczegóły"
    },
    en: {
      careerEyebrow: "CAREER PATH",
      roleColumn: "Position",
      historyLabel: "Employment history",
      showPoint: "Show experience",
      hint: "Select a role on the timeline to see its details and responsibilities.",
      responsibilities: "Responsibilities",
      skills: "Key skills",
      updated: "Experience updated on an ongoing basis",
      current: "present",
      duration: (years, months) => [years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "", months ? `${months} mos.` : ""].filter(Boolean).join(" "),
      summary: "Show the detailed employment history",
      count: (value) => `${value} roles • employers, exact dates and responsibilities`,
      expand: "Expand details",
      collapse: "Collapse details"
    },
    ru: {
      careerEyebrow: "ПРОФЕССИОНАЛЬНЫЙ ПУТЬ",
      roleColumn: "Должность",
      historyLabel: "История работы",
      showPoint: "Показать опыт",
      hint: "Выберите должность на шкале, чтобы увидеть подробности и обязанности.",
      responsibilities: "Обязанности",
      skills: "Ключевые навыки",
      updated: "Опыт обновляется по мере изменений",
      current: "по настоящее время",
      duration: (years, months) => [years ? `${years} г.` : "", months ? `${months} мес.` : ""].filter(Boolean).join(" "),
      summary: "Показать подробную историю работы",
      count: (value) => `${value} ${value === 1 ? "должность" : value < 5 ? "должности" : "должностей"} • работодатели, точные даты и обязанности`,
      expand: "Развернуть",
      collapse: "Свернуть"
    }
  };

  const copy = {
    pl: {
      gateKicker: "Dopasuj profil",
      gateTitle: "Na jakie stanowisko szukasz pracownika?",
      gateDesc: "Wybierz obszar, a strona od razu pokaże doświadczenia związane z tym obszarem, umiejętności i dokumenty.",
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
          hero: "Mam ponad dwa lata doświadczenia w środowisku produkcyjnym i wykształcenie BHP. Zajmowałem się lakierowaniem, śrutowaniem, obróbką powierzchni, drobnymi naprawami i organizacją pracy działu.",
          pills: [`${icon("factory")} Produkcja`, `${icon("paintbrush")} Lakierowanie`, `${icon("award")} UDT II WJO`, `${icon("shield")} BHP`],
          stats: [["2+", "lata produkcji"], ["3", "certyfikaty"], ["5", "języków"], ["2", "kluczowe role"]],
          orbit: ["Produkcja", "Lakiernia", "UDT", "BHP"],
          sideStatus: `<b>${icon("star")} Profil produkcyjny</b><br>Gotowy do pracy technicznej i produkcyjnej`,
          contactTitle: "Porozmawiajmy o pracy na produkcji",
          contactLead: "Chętnie porozmawiam o lakierni, obróbce, BHP lub pracy technicznej.",
          focusTitles: ["Praca produkcyjna", "Lakierowanie i obróbka", "BHP i jakość"],
          focusTexts: ["Ponad dwa lata praktyki w środowisku produkcyjnym.", "Przygotowanie elementów, lakierowanie, śrutowanie i drobne naprawy.", "Przestrzeganie standardów pracy, jakości i bezpieczeństwa."],
          focusIcons: ["factory", "paintbrush", "shield"],
          journeyTitle: "DROGA PRODUKCYJNA",
          journeyHeading: "Doświadczenie, które<br><span>buduje profil techniczny</span>",
          journeyText: "Doświadczenie produkcyjne obejmuje ponad dwa lata w Palfinger Poland przy lakierowaniu i obróbce powierzchni oraz bieżącą pracę w BHP. Łączy praktykę techniczną, szkolenie pracowników i kontrolę standardów bezpieczeństwa.",
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
        },
        gastro: {
          title: "Gastronomia",
          summary: "Ten wariant podkreśla kuchnię, tempo pracy i obsługę klienta.",
          pageTitle: "Vladyslav Konohrai | Gastronomia",
          meta: "Vladyslav Konohrai - profil gastronomiczny: kuchnia, przygotowywanie dań, realizacja zamówień, obsługa klienta, zapasy i szkolenie pracowników.",
          tag: "GASTRONOMIA • KUCHNIA • OBSŁUGA KLIENTA",
          subtitle: "Praktyka w kuchni.<br>Nauka i współpraca z zespołem.",
          hero: "Mam doświadczenie w pracy na kuchni, przygotowywaniu dań, realizacji zamówień i obsłudze klienta. Ta praca uczy mnie działania pod presją czasu, dokładności i współpracy z zespołem.",
          pills: [`${icon("utensils")} Kuchnia`, `${icon("clock")} Presja czasu`, `${icon("message")} Klient`, `${icon("users")} Zespół`],
          stats: [["3", "role gastronomiczne"], ["3", "certyfikaty"], ["5", "języków"], ["1", "aktualna rola"]],
          orbit: ["Kuchnia", "Zamówienia", "Zespół", "Klient"],
          sideStatus: `<b>${icon("star")} Profil gastronomiczny</b><br>Gotowy do pracy na kuchni i obsłudze`,
          contactTitle: "Porozmawiajmy o pracy w gastronomii",
          contactLead: "Chętnie porozmawiam o kuchni, zamówieniach, obsłudze klienta lub pracy zmianowej.",
          focusTitles: ["Praca na kuchni", "Realizacja zamówień", "Obsługa i zespół"],
          focusTexts: ["Przygotowywanie dań, składników i półproduktów zgodnie z recepturami.", "Pakowanie, kompletowanie zamówień oraz kontrola jakości i zapasów.", "Kontakt z klientem, rozwiązywanie problemów i wdrażanie nowych osób."],
          focusIcons: ["utensils", "clipboard-check", "users"],
          journeyTitle: "DROGA GASTRONOMICZNA",
          journeyHeading: "Doświadczenie z kuchni<br><span>i pracy z klientem</span>",
          journeyText: "Trzy stanowiska gastronomiczne od 2023 roku: obsługa restauracji w Bydgoszczy i Toruniu oraz obecna praca kucharza w MANEKIN. Zakres obejmuje kuchnię, zamówienia, klientów, zapasy i wdrażanie nowych osób.",
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
        },
        office: {
          title: "Biuro, administracja i BHP",
          summary: "Ten wariant podkreśla dokumentację, procedury, BHP i organizację pracy.",
          pageTitle: "Vladyslav Konohrai | Biuro, administracja i BHP",
          meta: "Vladyslav Konohrai - profil biurowy i BHP: dokumentacja, procedury, szkolenia, obsługa klienta, organizacja pracy i szybka nauka narzędzi.",
          tag: "BIURO • ADMINISTRACJA • BHP",
          subtitle: "Dokumentacja i procedury.<br>Dokładność, kontakt i organizacja.",
          hero: "Jestem studentem psychologii i technikiem BHP z doświadczeniem w pracy z dokumentacją, procedurami, prowadzeniu szkoleń oraz obsłudze klienta. Staram się pracować dokładnie i rozwijać umiejętność organizacji zadań.",
          pills: [`${icon("clipboard-check")} Dokumentacja`, `${icon("shield")} BHP`, `${icon("message")} Obsługa klienta`, `${icon("file-check")} Excel`],
          stats: [["2", "role"], ["7", "certyfikatów"], ["5", "języków"], ["3", "kierunki edukacji"]],
          orbit: ["Dokumenty", "BHP", "Klienci", "Narzędzia"],
          sideStatus: `<b>${icon("star")} Profil biurowy i BHP</b><br>Gotowy do dokumentacji, procedur i obsługi`,
          contactTitle: "Porozmawiajmy o pracy biurowej lub BHP",
          contactLead: "Chętnie porozmawiam o dokumentacji, procedurach, szkoleniach albo obsłudze klienta.",
          focusTitles: ["Dokumentacja", "Procedury BHP", "Obsługa i organizacja"],
          focusTexts: ["Praca z dokumentami, procedurami i poznawanie nowych narzędzi.", "Szkolenia, analiza zagrożeń i współpraca przy wdrażaniu zasad bezpieczeństwa.", "Obsługa klienta, rozwiązywanie problemów i ustalanie priorytetów."],
          focusIcons: ["file-check", "shield", "clipboard-check"],
          journeyTitle: "DROGA BIUROWA I BHP",
          journeyHeading: "Dokładność, procedury<br><span>i praca z ludźmi</span>",
          journeyText: "Profil opiera się na bieżącej pracy inspektora BHP oraz doświadczeniu w obsłudze klienta. Obejmuje dokumentację, szkolenia, analizę zagrożeń, organizację zadań i współpracę z kierownictwem.",
          skillTitle: "Umiejętności biurowe i organizacyjne",
          strengths: [
            ["file-check", "Praca z dokumentacją<br>i procedurami"],
            ["clipboard-check", "Organizacja pracy<br>i ustalanie priorytetów"],
            ["message", "Obsługa<br>klienta"],
            ["target", "Rozwiązywanie<br>problemów"],
            ["users", "Szkolenie i wdrażanie<br>nowych pracowników"],
            ["briefcase", "Współpraca z zespołem<br>i kierownictwem"],
            ["sparkles", "Poznawanie<br>narzędzi i procedur"]
          ],
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
        },
        all: {
          title: "Pełny profil",
          summary: "Ten wariant pokazuje pełny przekrój doświadczenia i kompetencji.",
          pageTitle: "Vladyslav Konohrai | Inspektor BHP i psychologia, Toruń",
          meta: "Vladyslav Konohrai - CV inspektora BHP i studenta psychologii UMK w Toruniu. Doświadczenie w BHP, produkcji, gastronomii, szkoleniach i obsłudze klienta.",
          tag: "PEŁNY PROFIL • BHP • GASTRONOMIA • PRODUKCJA",
          subtitle: "Doświadczenie z różnych miejsc.<br>Chęć nauki i współpracy.",
          hero: "Jestem studentem psychologii UMK w Toruniu i inspektorem BHP z doświadczeniem w pracy technicznej, gastronomii oraz obsłudze klienta. W dotychczasowej pracy zajmowałem się organizacją zadań i wdrażaniem nowych pracowników. Nadal rozwijam swoje umiejętności.",
          pills: [`${icon("shield")} BHP`, `${icon("utensils")} Gastronomia`, `${icon("factory")} Produkcja`, `${icon("users")} Obsługa klienta`],
          stats: [["7", "doświadczeń"], ["3", "kierunki edukacji"], ["5", "języków"], ["13", "dyplomów i certyfikatów"]],
          orbit: ["BHP", "Kuchnia", "Produkcja", "Ludzie"],
          sideStatus: `<b>${icon("star")} Pełny profil</b><br>BHP, gastronomia, produkcja i obsługa klienta`,
          contactTitle: "Porozmawiajmy o możliwej współpracy",
          contactLead: "Pełny profil sprawdzi się, gdy zakres stanowiska jest mieszany.",
          focusTitles: ["Samodzielna organizacja", "Praca pod presją", "Wsparcie zespołu"],
          focusTexts: ["Doświadczenie w różnych środowiskach i uczenie się nowych zadań.", "Gastronomia, produkcja i obsługa klienta uczą tempa oraz rozwiązywania problemów.", "Szkolenie nowych pracowników, komunikacja i odpowiedzialność za wspólny wynik."],
          focusIcons: ["clipboard-check", "clock", "users"],
          journeyTitle: "PEŁNA DROGA",
          journeyHeading: "Różne doświadczenia,<br><span>jeden praktyczny profil</span>",
          journeyText: "Od pracy budowlanej i gospodarstwa w Ukrainie, przez lakiernię Palfinger i gastronomię, po bieżące role inspektora BHP i kucharza. Oś pokazuje rzeczywiste okresy zatrudnienia oraz doświadczenia, które rozwijały się równolegle.",
          skillTitle: "Umiejętności zdobywane w pracy",
          strengths: [
            ["clipboard-check", "Samodzielna organizacja<br>pracy"],
            ["clock", "Praca pod presją czasu<br>i rozwiązywanie problemów"],
            ["message", "Obsługa<br>klienta"],
            ["hammer", "Umiejętności techniczne:<br>lakierowanie, śrutowanie i prace budowlane"],
            ["users", "Szkolenie nowych pracowników<br>i wsparcie zespołu"]
          ],
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
        }
      }
    },
    en: {
      gateKicker: "Match the profile",
      gateTitle: "What position are you hiring for?",
      gateDesc: "Choose the area and the page will highlight the relevant experience, skills and documents.",
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
          journeyHeading: "Experience that<br><span>builds a technical profile</span>",
          journeyText: "The production path includes more than two years at Palfinger Poland in painting and surface treatment, followed by ongoing OHS work. It combines technical practice, employee training and control of safety standards.",
          contactTitle: "Let's talk about production work",
          experienceTitle: "Production and technical experience",
          diplomaHeading: "Documents supporting the production profile"
        },
        gastro: {
          title: "Gastronomy",
          pageTitle: "Vladyslav Konohrai | Gastronomy profile",
          meta: "CV of Vladyslav Konohrai from Toruń: kitchen work, food preparation, order fulfillment, customer service, inventory and employee training.",
          summary: "This variant highlights kitchen work, pace and customer service.",
          tag: "GASTRONOMY • KITCHEN • CUSTOMER SERVICE",
          subtitle: "Kitchen experience.<br>Learning and teamwork.",
          focusTitles: ["Kitchen work", "Order fulfillment", "Service and team"],
          journeyHeading: "Kitchen experience<br><span>and customer service</span>",
          journeyText: "Three hospitality roles since 2023: restaurant service in Bydgoszcz and Toruń, followed by the current cook position at MANEKIN. The experience covers kitchen work, orders, customers, stock and onboarding.",
          contactTitle: "Let's talk about gastronomy work",
          experienceTitle: "Gastronomy experience",
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
          journeyHeading: "Accuracy, procedures<br><span>and working with people</span>",
          journeyText: "This profile is based on ongoing OHS inspector work and customer service experience. It covers documentation, training, hazard analysis, task organization and cooperation with management.",
          contactTitle: "Let's talk about office or OHS work",
          experienceTitle: "Office and OHS experience",
          diplomaHeading: "Documents supporting the office profile"
        },
        all: {
          title: "Full profile",
          pageTitle: "Vladyslav Konohrai | OHS inspector and psychology, Toruń",
          meta: "CV of Vladyslav Konohrai, an OHS inspector and psychology student at Nicolaus Copernicus University in Toruń, with experience in safety, production, gastronomy and customer service.",
          summary: "This variant shows the full range of experience and skills.",
          tag: "FULL PROFILE • OHS • GASTRONOMY • PRODUCTION",
          subtitle: "Experience in different workplaces.<br>Willingness to learn and cooperate.",
          focusTitles: ["Independent organization", "Working under pressure", "Team support"],
          journeyHeading: "Different roles,<br><span>one practical profile</span>",
          journeyText: "From construction and farm work in Ukraine, through the Palfinger paint shop and hospitality, to the current OHS inspector and cook roles. The timeline shows actual employment periods, including roles held in parallel.",
          contactTitle: "Let's discuss possible cooperation",
          experienceTitle: "Full professional experience",
          diplomaHeading: "Full document gallery"
        }
      }
    },
    ru: {
      gateKicker: "Подобрать профиль",
      gateTitle: "На какую должность вы ищете сотрудника?",
      gateDesc: "Выберите направление, и страница сразу покажет связанный с направлением опыт, навыки и документы.",
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
          journeyHeading: "Опыт, который<br><span>формирует технический профиль</span>",
          journeyText: "Производственный опыт включает более двух лет работы в Palfinger Poland с покраской и обработкой поверхностей, а также текущую работу в охране труда. Он объединяет техническую практику, обучение сотрудников и контроль стандартов безопасности.",
          contactTitle: "Поговорим о работе на производстве",
          experienceTitle: "Производственный и технический опыт",
          diplomaHeading: "Документы для производственного профиля"
        },
        gastro: {
          title: "Гастрономия",
          pageTitle: "Vladyslav Konohrai | Опыт работы в гастрономии",
          meta: "Vladyslav Konohrai (Владислав Конохрай) - опыт работы на кухне, приготовления блюд, выполнения заказов и обслуживания клиентов.",
          summary: "Этот вариант выделяет кухню, темп работы и обслуживание клиентов.",
          tag: "ГАСТРОНОМИЯ • КУХНЯ • КЛИЕНТЫ",
          subtitle: "Опыт на кухне.<br>Обучение и работа в команде.",
          focusTitles: ["Кухня", "Выполнение заказов", "Сервис и команда"],
          journeyHeading: "Опыт работы на кухне<br><span>и с клиентами</span>",
          journeyText: "Три должности в гастрономии с 2023 года: работа в ресторанах Быдгоща и Торуни, а затем текущая должность повара в MANEKIN. Опыт включает кухню, заказы, клиентов, запасы и обучение новых сотрудников.",
          contactTitle: "Поговорим о работе в гастрономии",
          experienceTitle: "Опыт работы в гастрономии",
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
          journeyHeading: "Точность, процедуры<br><span>и работа с людьми</span>",
          journeyText: "Профиль основан на текущей работе инспектором по охране труда и опыте обслуживания клиентов. Он включает документацию, обучение, анализ рисков, организацию задач и взаимодействие с руководством.",
          contactTitle: "Поговорим об офисной работе или ОТ",
          experienceTitle: "Опыт офисной работы и охраны труда",
          diplomaHeading: "Документы для офисного профиля"
        },
        all: {
          title: "Полный профиль",
          pageTitle: "Vladyslav Konohrai | Охрана труда и психология, Торунь",
          meta: "Vladyslav Konohrai (Владислав Конохрай) - инспектор по охране труда и студент психологии UMK в Торуни. Опыт в производстве, гастрономии и работе с клиентами.",
          summary: "Этот вариант показывает весь опыт и полный обзор компетенций.",
          tag: "ПОЛНЫЙ ПРОФИЛЬ • ОХРАНА ТРУДА • ГАСТРОНОМИЯ • ПРОИЗВОДСТВО",
          subtitle: "Опыт в разных местах.<br>Готовность учиться и сотрудничать.",
          focusTitles: ["Самостоятельная организация", "Работа под давлением", "Поддержка команды"],
          journeyHeading: "Разный опыт,<br><span>один практический профиль</span>",
          journeyText: "От строительных и сельскохозяйственных работ в Украине через покрасочный цех Palfinger и гастрономию к текущим должностям инспектора по охране труда и повара. Шкала показывает реальные периоды работы, включая параллельную занятость.",
          contactTitle: "Поговорим о возможном сотрудничестве",
          experienceTitle: "Полный профессиональный опыт",
          diplomaHeading: "Полная галерея документов"
        }
      }
    }
  };

  let activeRole = "all";
  let activeExperienceKey = "safety";

  const storage = {
    get(key) {
      try {
        return window.sitePrivacy?.getPreference(key) ?? null;
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        window.sitePrivacy?.setPreference(key, value);
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

  const timelineYears = Array.from({ length: 8 }, (_, index) => 2019 + index);
  const timelineStart = Date.UTC(2019, 0, 1);
  const timelineEnd = Date.UTC(2027, 0, 1);

  const parseTimelineMonth = (value) => {
    const [year, month] = value.split("-").map(Number);
    return Date.UTC(year, month - 1, 1);
  };

  const endOfTimelinePeriod = (meta) => {
    if (meta.isCurrent) {
      const now = new Date();
      return Math.min(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1), timelineEnd);
    }

    const [year, month] = meta.endDate.split("-").map(Number);
    return Math.min(Date.UTC(year, month, 1), timelineEnd);
  };

  const timelinePosition = (date) => Math.max(0, Math.min(100, ((date - timelineStart) / (timelineEnd - timelineStart)) * 100));
  const formatMonth = (value) => {
    const [year, month] = value.split("-");
    return `${month}.${year}`;
  };

  const formatExperiencePeriod = (meta, interfaceText) => `${formatMonth(meta.startDate)} – ${meta.isCurrent ? interfaceText.current : formatMonth(meta.endDate)}`;

  const formatExperienceDuration = (meta, interfaceText) => {
    const [startYear, startMonth] = meta.startDate.split("-").map(Number);
    const now = new Date();
    const endValue = meta.isCurrent
      ? [now.getUTCFullYear(), now.getUTCMonth() + 1]
      : meta.endDate.split("-").map(Number);
    const monthsTotal = Math.max(1, ((endValue[0] - startYear) * 12) + endValue[1] - startMonth + 1);
    const years = Math.floor(monthsTotal / 12);
    const months = monthsTotal % 12;
    return interfaceText.duration(years, months);
  };

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const localizedExperience = (profile, key, currentLanguage = language()) => {
    if (profile.experienceOverrides?.[key]) {
      return profile.experienceOverrides[key];
    }

    return currentLanguage === "pl" ? experienceText[key] : translatedExperience[currentLanguage]?.[key];
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

  const renderCareerDetails = (journey, profile, experienceKey, interfaceText, currentLanguage) => {
    const details = journey.querySelector("[data-career-details]");
    const content = localizedExperience(profile, experienceKey, currentLanguage);
    const meta = experienceTimelineMeta[experienceKey];

    if (!details || !content || !meta) {
      return;
    }

    const period = formatExperiencePeriod(meta, interfaceText);
    const duration = formatExperienceDuration(meta, interfaceText);
    const category = meta.category[currentLanguage] || meta.category.pl;
    const location = meta.location[currentLanguage] || meta.location.pl;
    const skills = meta.skills[currentLanguage] || meta.skills.pl;

    details.style.setProperty("--career-color", meta.color);
    details.classList.remove("is-refreshed");
    details.innerHTML = `
      <div class="career-detail-identity">
        <span class="career-detail-icon">${icon(meta.icon)}</span>
        <div class="career-detail-copy">
          <span class="career-detail-period">${escapeHtml(period)} · ${escapeHtml(duration)}</span>
          <h3>${escapeHtml(content.title)}</h3>
          <span class="career-detail-company">${escapeHtml(content.company)}</span>
          <span class="career-detail-location">${icon("map-pin")}${escapeHtml(location)}</span>
          <span class="career-category">${escapeHtml(category)}</span>
        </div>
      </div>
      <div class="career-detail-responsibilities">
        <h4>${escapeHtml(interfaceText.responsibilities)}</h4>
        <ul>${content.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div class="career-detail-skills">
        <h4>${escapeHtml(interfaceText.skills)}</h4>
        <div class="career-skill-list">${skills.map((skill) => `<span class="career-skill">${escapeHtml(skill)}</span>`).join("")}</div>
      </div>
    `;

    requestAnimationFrame(() => details.classList.add("is-refreshed"));
  };

  const updateJourney = (profile) => {
    const journey = document.querySelector("[data-career-timeline]");
    const currentLanguage = language();
    const interfaceText = experienceInterfaceText[currentLanguage] || experienceInterfaceText.pl;
    const years = journey?.querySelector("[data-career-years]");
    const rows = journey?.querySelector("[data-career-rows]");
    const order = (profile.visibleExperience || [])
      .filter((key) => experienceTimelineMeta[key] && localizedExperience(profile, key, currentLanguage))
      .sort((first, second) => experienceTimelineMeta[first].startDate.localeCompare(experienceTimelineMeta[second].startDate));

    setText(".career-intro .section-title", interfaceText.careerEyebrow);
    setHtml(".career-intro h2", profile.journeyHeading);
    setText(".career-intro > p", profile.journeyText);
    setText(".career-hint span", interfaceText.hint);
    setText(".career-updated span", interfaceText.updated);
    setText(".career-scale-label", interfaceText.roleColumn);

    if (!journey || !years || !rows || !order.length) {
      return;
    }

    years.innerHTML = timelineYears.map((year) => `<span class="career-year">${year}</span>`).join("");
    rows.setAttribute("aria-label", interfaceText.historyLabel);

    if (!order.includes(activeExperienceKey)) {
      activeExperienceKey = order.includes("safety")
        ? "safety"
        : order.find((key) => experienceTimelineMeta[key].isCurrent) || order[order.length - 1];
    }

    rows.innerHTML = order.map((key, index) => {
      const content = localizedExperience(profile, key, currentLanguage);
      const meta = experienceTimelineMeta[key];
      const start = timelinePosition(parseTimelineMonth(meta.startDate));
      const width = Math.max(.6, timelinePosition(endOfTimelinePeriod(meta)) - start);
      const period = formatExperiencePeriod(meta, interfaceText);
      const duration = formatExperienceDuration(meta, interfaceText);
      const category = meta.category[currentLanguage] || meta.category.pl;
      const isActive = key === activeExperienceKey;
      const durationClasses = ["career-duration", width < 12 ? "is-short" : "", start > 78 ? "is-edge" : ""].filter(Boolean).join(" ");

      return `
        <button class="career-row${isActive ? " is-active" : ""}${meta.isCurrent ? " is-current" : ""}"
          type="button"
          data-experience-key="${key}"
          aria-pressed="${isActive}"
          aria-label="${escapeHtml(`${interfaceText.showPoint}: ${content.title}, ${period}, ${duration}`)}"
          style="--career-color:${meta.color};--career-start:${start.toFixed(3)};--career-width:${width.toFixed(3)};--career-delay:${index * 70}ms">
          <span class="career-role">
            <span class="career-role-icon">${icon(meta.icon)}</span>
            <span class="career-role-copy">
              <strong>${escapeHtml(content.title)}</strong>
              <small>${escapeHtml(category)}</small>
              <span class="career-mobile-meta"><span>${escapeHtml(period)}</span><span>${escapeHtml(duration)}</span></span>
            </span>
          </span>
          <span class="career-track" aria-hidden="true">
            <span class="${durationClasses}">
              <span class="career-date career-date-start">${escapeHtml(formatMonth(meta.startDate))}</span>
              <span class="career-bar"><span class="career-bar-inner"></span></span>
              <span class="career-date career-date-end">${escapeHtml(meta.isCurrent ? interfaceText.current : formatMonth(meta.endDate))}</span>
              <span class="career-period-combined">${escapeHtml(period)}</span>
            </span>
          </span>
        </button>
      `;
    }).join("");

    const selectExperience = (key) => {
      activeExperienceKey = key;
      rows.querySelectorAll(".career-row").forEach((row) => {
        const isActive = row.dataset.experienceKey === key;
        row.classList.toggle("is-active", isActive);
        row.setAttribute("aria-pressed", String(isActive));
      });
      renderCareerDetails(journey, profile, key, interfaceText, currentLanguage);
    };

    rows.querySelectorAll(".career-row").forEach((row, index, buttons) => {
      row.addEventListener("click", () => selectExperience(row.dataset.experienceKey));
      row.addEventListener("keydown", (event) => {
        const direction = event.key === "ArrowDown" || event.key === "ArrowRight"
          ? 1
          : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;

        if (!direction && event.key !== "Home" && event.key !== "End") {
          return;
        }

        event.preventDefault();
        const targetIndex = event.key === "Home"
          ? 0
          : event.key === "End" ? buttons.length - 1 : Math.max(0, Math.min(buttons.length - 1, index + direction));
        buttons[targetIndex].focus();
        selectExperience(buttons[targetIndex].dataset.experienceKey);
      });
    });

    renderCareerDetails(journey, profile, activeExperienceKey, interfaceText, currentLanguage);
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
      const meta = experienceTimelineMeta[key];
      const interfaceText = experienceInterfaceText[language()] || experienceInterfaceText.pl;
      card.querySelector(".date").textContent = meta ? formatExperiencePeriod(meta, interfaceText) : "";
      card.querySelector("ul").innerHTML = content.items.map((item) => `<li>${item}</li>`).join("");
    });

    const interfaceText = experienceInterfaceText[language()] || experienceInterfaceText.pl;
    const disclosure = document.querySelector(".experience-disclosure");

    setText("#experience .section-title", profile.experienceTitle);
    setText(".experience-summary-copy strong", interfaceText.summary);
    setText("[data-experience-count]", interfaceText.count(order.length));

    if (disclosure) {
      disclosure.dataset.expandLabel = interfaceText.expand;
      disclosure.dataset.collapseLabel = interfaceText.collapse;
      setText("[data-experience-toggle]", disclosure.open ? interfaceText.collapse : interfaceText.expand);
    }

    document.dispatchEvent(new CustomEvent("experiencechange"));
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

  const updateContact = (profile) => {
    setHtml(".side-info .info-box:nth-child(4)", profile.sideStatus);
    setText(".contact .contact-card:first-child h2", profile.contactTitle);
    setText(".contact .contact-card:first-child small", profile.contactLead);
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
    updateExperience(activeRole, profile);
    updateEducation(profile);
    updateAuthorizations();
    updateDiplomas(profile);
    updateContact(profile);
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
    if (window.sitePrivacy?.getConsent()) openGate();
    else document.addEventListener("consentchange", openGate, { once: true });

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
      if (document.querySelector(".cookie-dialog[open]") || event.target.closest(".cookie-banner")) return;
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
