const translations = {
  fr: {
    pdf_url: 'assets/Victoria-Lopez-Portfolio-Jan-2026-FR.pdf',
    // Header / Footer
    header_title: 'Interior Design Portfolio',
    header_date: 'Victoria Lopez, Janvier 2026',
    footer_pdf: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> PDF',

    // Cover
    cover_role: 'Interior Designer',
    cover_pdf: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Télécharger le portfolio en PDF',

    // About
    about_title_html: 'À<br><span class="section-title-bold">PROPOS</span>',
    about_p1: "Architecte d'intérieur, diplômée en 2021 en Architecture d'intérieur à l'Universidad del Arte (UNARTE), Puebla, Mexique. Passionnée par le design d'intérieur, la photographie et l'image, je cumule plus de trois ans d'expérience dans la conception des unités résidentielles de moins de 120 m², principalement à Los Angeles et en Californie.",
    about_p2: "Je développe également des compétences en création de contenu et en gestion des réseaux sociaux, au service de la mise en valeur des projets et de l'identité visuelle.",

    // CV
    cv_experience: 'EXPÉRIENCE PROFESSIONNELLE',
    cv_dates_html: 'Design Manager (Mars 2025 – Présent)<br>Interior Designer (Juin 2024 – Mars 2025)<br>Junior Interior Designer (Juin 2023 – Juin 2024)<br>Interior Design/Social Media Manager Assistant (Juin 2022 – Juin 2023)',
    cv_exp1: "Développement de concepts de design intérieur innovants et esthétiques pour des espaces résidentiels (ADUs), unités résidentielles de moins de 120 m2.",
    cv_exp2: "Gestion de la plupart des phases de projets de design, des consultations initiales avec les clients et du développement des concepts à l'approvisionnement en matériaux, la coordination de projet et les présentations clients.",
    cv_exp3: "Assistance à l'organisation d'événements d'entreprise, assurant une exécution fluide. Maîtrise des logiciels de design (ex. : AutoCAD, Sketchup, Illustrator, etc.).",
    cv_exp4: "Expérience dans l'utilisation de systèmes CRM (ex. : Jungo/Salesforce, Flolty, Mailchimp) pour la gestion des relations clients, le suivi de l'avancement des projets et l'optimisation de la communication.",
    cv_education: 'FORMATION',
    cv_degree_html: "Diplôme en Design d'Intérieur <span class=\"cv-light\">(Août 2015 – Déc 2021)</span>",
    cv_edu1: "Universidad de Arte de Puebla (UNARTE) Diplôme en Design d'Intérieur",
    cv_edu2: 'Note Finale: 88/100',
    cv_adu_dates: '(Fév 2023 – Nov 2024)',
    cv_adu_loc: 'San Diego (À distance)',
    cv_skills: 'COMPÉTENCES',
    cv_skill_adobe: "Adobe (Maîtrise d'Illustrator, connaissances de base de Photoshop)",
    cv_skill_org: "Compétences en organisation et en gestion du temps.",
    cv_skill_problem: 'Résolution de problèmes. Service client.',
    cv_skill_detail: 'Souci du détail. Saisie de données.',
    cv_languages: 'LANGUES',
    cv_lang_es: 'Espagnol (Langue maternelle)',
    cv_lang_en: 'Anglais (C1)',
    cv_lang_fr: 'Français (B2)',

    // Sanctuary
    sanctuary_p1: "Premier modèle de la Designer Series, The Sanctuary est né d'une volonté de répondre à la pénurie de logements à Los Angeles, sans compromettre le design. Avec ses 749 pieds carrés (70 m²), il incarne notre vision d'un habitat compact, raffiné et fonctionnel.",
    sanctuary_p2: "La Designer Series se décline en sept modèles de différentes tailles, conçus pour s'adapter aux besoins et aux modes de vie de nos clients.",

    // Sanctuary Details
    detail_flex_title: 'Flexibility',
    detail_flex_p: "Chaque option est proposée selon trois gammes de prix distinctes, nous permettant de nous adapter aux différentes possibilités et contraintes budgétaires de chacun, sans compromettre la qualité ni le design.",
    detail_lux_title: 'Luxury',
    detail_lux_p: "The Sanctuary se décline en quatre styles architecturaux distincts: Ranch, Craftsman, Spanish et Contemporary — permettant au design de s'adapter à différents contextes, préférences et modes de vie.",
    detail_int_title: 'Interiors',
    detail_int_p: "Chaque espace est conçu pour optimiser la surface, la lumière et la circulation, tout en offrant des ambiances chaleureuses et adaptées au quotidien.",

    // Casitas
    casitas_p1: "En partenariat avec ADU Crew, un fabricant de constructions préfabriquées basé dans le nord de la Californie, nous avons conçu Casitas Prefab : une collection de neuf modèles allant de 500 (46 m²) à 1200 (111m²) pieds carrés.",
    casitas_p2: "Chaque unité a été pensée dans les moindres détails, offrant un large éventail d'options pour les intérieurs, les extérieurs et l'aménagement paysager, tout en bénéficiant des coûts réduits propres aux unités préfabriquées.",
    casita1100_p1: "Cette unité de 1100 pieds carrés (102 m²) offre une grande polyvalence. Le plan comprend deux chambres et deux salles de bains complètes, ainsi qu'un espace modulable pouvant servir de bureau ou de chambre supplémentaire.",
    casita1100_p2: "Le design intègre également un porche accueillant et une terrasse privée, alliant fonctionnalité et confort, à l'intérieur comme à l'extérieur.",

    // Clever
    clever_p1: "En partenariat avec Clever Tiny Homes, nous créons des maisons à la fois esthétiques, fonctionnelles et abordables. Ensemble, nous avons conçu la ligne Elements, composée de quatre blocs modulables pouvant être combinés de différentes façons pour créer des plans personnalisés adaptés aux besoins de chaque client.",
    clever_p2: "Chaque projet offre ainsi des espaces durables, flexibles et pensés pour les modes de vie modernes.",
    clever_d1_title: 'Design & Functionality',
    clever_d1_p: "Chaque Élément allie esthétisme et espaces pratiques, pensés pour les modes de vie modernes.",
    clever_d2_title: 'Flexibility & Customization',
    clever_d2_p: "Quatre styles d'extérieur, similaires à ceux de la Designer Series, et trois aménagements paysagers différents sont également disponibles, offrant encore plus de possibilités de personnalisation.",
    clever_d3_title: 'Affordability & Quality',
    clever_d3_p: "En combinant design, construction et fabrication de pointe, nous créons des maisons modulables alliant durabilité, haute qualité et solutions économiques, sans compromis sur le style ni la fonctionnalité.",

    // Merci
    merci_title: 'MERCI',
    merci_p1: "Merci d'avoir découvert mon univers.",
    merci_p2: "À travers chaque projet, je cherche à créer des espaces fonctionnels, esthétiques et modulables, pensés pour le quotidien et pour durer. Je continue d'innover, de collaborer et de transformer des idées en lieux de vie qui inspirent.",
    merci_date: 'Janvier 2026',
    merci_by: 'Conçu par: Victoria López Baez',

    // Pill
    pill_language: 'Langue',
    pill_theme: 'Thème',
    pill_dark: 'Sombre',
    pill_pdf: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Télécharger PDF',

    // Scroll
    scroll: 'Scroll',
  },

  en: {
    pdf_url: 'assets/Victoria-Lopez-Portfolio-Jan-2026-FR.pdf',
    header_title: 'Interior Design Portfolio',
    header_date: 'Victoria Lopez, January 2026',
    footer_pdf: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> PDF',

    cover_role: 'Interior Designer',
    cover_pdf: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Download portfolio as PDF',

    about_title_html: 'ABOUT<br><span class="section-title-bold">ME</span>',
    about_p1: "Interior designer, graduated in 2021 in Interior Architecture from Universidad del Arte (UNARTE), Puebla, Mexico. Passionate about interior design, photography, and visual imagery, I bring over three years of experience in designing residential units under 120 m² (1,300 sq ft), primarily in Los Angeles and California.",
    about_p2: "I am also developing skills in content creation and social media management, aimed at showcasing projects and building strong visual identities.",

    cv_experience: 'PROFESSIONAL EXPERIENCE',
    cv_dates_html: 'Design Manager (March 2025 – Present)<br>Interior Designer (June 2024 – March 2025)<br>Junior Interior Designer (June 2023 – June 2024)<br>Interior Design/Social Media Manager Assistant (June 2022 – June 2023)',
    cv_exp1: "Development of innovative and aesthetic interior design concepts for residential spaces (ADUs), residential units under 120 m².",
    cv_exp2: "Management of most design project phases, from initial client consultations and concept development to material sourcing, project coordination, and client presentations.",
    cv_exp3: "Assistance in organizing corporate events, ensuring smooth execution. Proficiency in design software (e.g., AutoCAD, SketchUp, Illustrator, etc.).",
    cv_exp4: "Experience using CRM systems (e.g., Jungo/Salesforce, Flolty, Mailchimp) for client relationship management, project tracking, and communication optimization.",
    cv_education: 'EDUCATION',
    cv_degree_html: 'Interior Design Degree <span class="cv-light">(Aug 2015 – Dec 2021)</span>',
    cv_edu1: "Universidad de Arte de Puebla (UNARTE) Interior Design Degree",
    cv_edu2: 'Final Grade: 88/100',
    cv_adu_dates: '(Feb 2023 – Nov 2024)',
    cv_adu_loc: 'San Diego (Remote)',
    cv_skills: 'SKILLS',
    cv_skill_adobe: "Adobe (Illustrator proficiency, basic Photoshop knowledge)",
    cv_skill_org: "Strong organizational and time management skills.",
    cv_skill_problem: 'Problem solving. Customer service.',
    cv_skill_detail: 'Attention to detail. Data entry.',
    cv_languages: 'LANGUAGES',
    cv_lang_es: 'Spanish (Native)',
    cv_lang_en: 'English (C1)',
    cv_lang_fr: 'French (B2)',

    sanctuary_p1: "The first model of the Designer Series, The Sanctuary was born from a desire to address the housing shortage in Los Angeles without compromising on design. At 749 square feet (70 m²), it embodies our vision of a compact, refined, and functional home.",
    sanctuary_p2: "The Designer Series features seven models of varying sizes, designed to adapt to the needs and lifestyles of our clients.",

    detail_flex_title: 'Flexibility',
    detail_flex_p: "Each option is available in three distinct price ranges, allowing us to adapt to different budgets and constraints without compromising quality or design.",
    detail_lux_title: 'Luxury',
    detail_lux_p: "The Sanctuary comes in four distinct architectural styles: Ranch, Craftsman, Spanish, and Contemporary — allowing the design to adapt to different contexts, preferences, and lifestyles.",
    detail_int_title: 'Interiors',
    detail_int_p: "Every space is designed to optimize area, light, and circulation, while offering warm and livable atmospheres suited to daily life.",

    casitas_p1: "In partnership with ADU Crew, a prefab manufacturer based in Northern California, we designed Casitas Prefab: a collection of nine models ranging from 500 (46 m²) to 1,200 (111 m²) square feet.",
    casitas_p2: "Each unit has been thoughtfully designed down to the smallest detail, offering a wide range of options for interiors, exteriors, and landscaping, while benefiting from the reduced costs of prefab construction.",
    casita1100_p1: "This 1,100 square foot (102 m²) unit offers great versatility. The floor plan includes two bedrooms and two full bathrooms, plus a flexible space that can serve as an office or additional bedroom.",
    casita1100_p2: "The design also features a welcoming porch and a private terrace, combining functionality and comfort, both indoors and outdoors.",

    clever_p1: "In partnership with Clever Tiny Homes, we create homes that are aesthetically pleasing, functional, and affordable. Together, we designed the Elements line, composed of four modular blocks that can be combined in different ways to create custom floor plans tailored to each client's needs.",
    clever_p2: "Each project delivers durable, flexible spaces designed for modern lifestyles.",
    clever_d1_title: 'Design & Functionality',
    clever_d1_p: "Each Element combines aesthetics with practical spaces, designed for modern lifestyles.",
    clever_d2_title: 'Flexibility & Customization',
    clever_d2_p: "Four exterior styles, similar to the Designer Series, and three different landscaping options are also available, offering even more customization possibilities.",
    clever_d3_title: 'Affordability & Quality',
    clever_d3_p: "By combining cutting-edge design, construction, and manufacturing, we create modular homes that blend durability, high quality, and cost-effective solutions without compromising on style or functionality.",

    merci_title: 'THANK YOU',
    merci_p1: "Thank you for exploring my world.",
    merci_p2: "Through each project, I strive to create functional, aesthetic, and modular spaces, designed for daily life and built to last. I continue to innovate, collaborate, and transform ideas into living spaces that inspire.",
    merci_date: 'January 2026',
    merci_by: 'Designed by: Victoria López Baez',

    pill_language: 'Language',
    pill_theme: 'Theme',
    pill_dark: 'Dark',
    pill_pdf: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Download PDF',

    scroll: 'Scroll',
  },

  es: {
    pdf_url: 'assets/Victoria-Lopez-Portfolio-Jan-2026-FR.pdf',
    header_title: 'Portafolio de Diseño de Interiores',
    header_date: 'Victoria Lopez, Enero 2026',
    footer_pdf: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> PDF',

    cover_role: 'Diseñadora de Interiores',
    cover_pdf: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Descargar portafolio en PDF',

    about_title_html: 'SOBRE<br><span class="section-title-bold">MÍ</span>',
    about_p1: "Arquitecta de interiores, graduada en 2021 en Arquitectura de Interiores en la Universidad del Arte (UNARTE), Puebla, México. Apasionada por el diseño de interiores, la fotografía y la imagen, cuento con más de tres años de experiencia en el diseño de unidades residenciales de menos de 120 m², principalmente en Los Ángeles y California.",
    about_p2: "También desarrollo habilidades en creación de contenido y gestión de redes sociales, al servicio de la promoción de proyectos y la identidad visual.",

    cv_experience: 'EXPERIENCIA PROFESIONAL',
    cv_dates_html: 'Design Manager (Marzo 2025 – Presente)<br>Interior Designer (Junio 2024 – Marzo 2025)<br>Junior Interior Designer (Junio 2023 – Junio 2024)<br>Interior Design/Social Media Manager Assistant (Junio 2022 – Junio 2023)',
    cv_exp1: "Desarrollo de conceptos de diseño interior innovadores y estéticos para espacios residenciales (ADUs), unidades residenciales de menos de 120 m².",
    cv_exp2: "Gestión de la mayoría de las fases de proyectos de diseño, desde las consultas iniciales con clientes y el desarrollo de conceptos hasta el abastecimiento de materiales, la coordinación de proyectos y las presentaciones a clientes.",
    cv_exp3: "Asistencia en la organización de eventos corporativos, asegurando una ejecución fluida. Dominio de software de diseño (ej.: AutoCAD, SketchUp, Illustrator, etc.).",
    cv_exp4: "Experiencia en el uso de sistemas CRM (ej.: Jungo/Salesforce, Flolty, Mailchimp) para la gestión de relaciones con clientes, seguimiento del avance de proyectos y optimización de la comunicación.",
    cv_education: 'FORMACIÓN',
    cv_degree_html: 'Licenciatura en Diseño de Interiores <span class="cv-light">(Ago 2015 – Dic 2021)</span>',
    cv_edu1: "Universidad de Arte de Puebla (UNARTE) Licenciatura en Diseño de Interiores",
    cv_edu2: 'Calificación Final: 88/100',
    cv_adu_dates: '(Feb 2023 – Nov 2024)',
    cv_adu_loc: 'San Diego (A distancia)',
    cv_skills: 'COMPETENCIAS',
    cv_skill_adobe: "Adobe (Dominio de Illustrator, conocimientos básicos de Photoshop)",
    cv_skill_org: "Habilidades de organización y gestión del tiempo.",
    cv_skill_problem: 'Resolución de problemas. Servicio al cliente.',
    cv_skill_detail: 'Atención al detalle. Captura de datos.',
    cv_languages: 'IDIOMAS',
    cv_lang_es: 'Español (Lengua materna)',
    cv_lang_en: 'Inglés (C1)',
    cv_lang_fr: 'Francés (B2)',

    sanctuary_p1: "Primer modelo de la Designer Series, The Sanctuary nació de la voluntad de responder a la escasez de vivienda en Los Ángeles, sin comprometer el diseño. Con sus 749 pies cuadrados (70 m²), encarna nuestra visión de un hogar compacto, refinado y funcional.",
    sanctuary_p2: "La Designer Series se presenta en siete modelos de diferentes tamaños, diseñados para adaptarse a las necesidades y estilos de vida de nuestros clientes.",

    detail_flex_title: 'Flexibilidad',
    detail_flex_p: "Cada opción se ofrece en tres rangos de precios distintos, lo que nos permite adaptarnos a las diferentes posibilidades y restricciones presupuestarias de cada cliente, sin comprometer la calidad ni el diseño.",
    detail_lux_title: 'Lujo',
    detail_lux_p: "The Sanctuary se presenta en cuatro estilos arquitectónicos distintos: Ranch, Craftsman, Spanish y Contemporary — permitiendo que el diseño se adapte a diferentes contextos, preferencias y estilos de vida.",
    detail_int_title: 'Interiores',
    detail_int_p: "Cada espacio está diseñado para optimizar la superficie, la luz y la circulación, ofreciendo ambientes cálidos y adaptados a la vida cotidiana.",

    casitas_p1: "En asociación con ADU Crew, un fabricante de construcciones prefabricadas con sede en el norte de California, diseñamos Casitas Prefab: una colección de nueve modelos que van de 500 (46 m²) a 1,200 (111 m²) pies cuadrados.",
    casitas_p2: "Cada unidad ha sido pensada con el mayor detalle, ofreciendo una amplia gama de opciones para interiores, exteriores y paisajismo, beneficiándose de los costos reducidos de las unidades prefabricadas.",
    casita1100_p1: "Esta unidad de 1,100 pies cuadrados (102 m²) ofrece gran versatilidad. El plano incluye dos habitaciones y dos baños completos, además de un espacio flexible que puede servir como oficina o habitación adicional.",
    casita1100_p2: "El diseño también incluye un porche acogedor y una terraza privada, combinando funcionalidad y confort, tanto en el interior como en el exterior.",

    clever_p1: "En asociación con Clever Tiny Homes, creamos casas estéticas, funcionales y accesibles. Juntos, diseñamos la línea Elements, compuesta por cuatro bloques modulares que pueden combinarse de diferentes formas para crear planos personalizados adaptados a las necesidades de cada cliente.",
    clever_p2: "Cada proyecto ofrece espacios duraderos, flexibles y pensados para los estilos de vida modernos.",
    clever_d1_title: 'Diseño y Funcionalidad',
    clever_d1_p: "Cada Elemento combina estética y espacios prácticos, pensados para los estilos de vida modernos.",
    clever_d2_title: 'Flexibilidad y Personalización',
    clever_d2_p: "Cuatro estilos de exterior, similares a los de la Designer Series, y tres opciones de paisajismo están también disponibles, ofreciendo aún más posibilidades de personalización.",
    clever_d3_title: 'Accesibilidad y Calidad',
    clever_d3_p: "Combinando diseño, construcción y fabricación de vanguardia, creamos casas modulares que combinan durabilidad, alta calidad y soluciones económicas, sin comprometer el estilo ni la funcionalidad.",

    merci_title: 'GRACIAS',
    merci_p1: "Gracias por descubrir mi universo.",
    merci_p2: "A través de cada proyecto, busco crear espacios funcionales, estéticos y modulables, pensados para el día a día y para perdurar. Sigo innovando, colaborando y transformando ideas en espacios de vida que inspiran.",
    merci_date: 'Enero 2026',
    merci_by: 'Diseñado por: Victoria López Baez',

    pill_language: 'Idioma',
    pill_theme: 'Tema',
    pill_dark: 'Oscuro',
    pill_pdf: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Descargar PDF',

    scroll: 'Scroll',
  },
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang === 'fr' ? 'fr' : lang === 'es' ? 'es' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (key.endsWith('_html') || t[key].includes('<')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update pill language display
  const pillLang = document.getElementById('pillLang');
  if (pillLang) pillLang.textContent = lang.toUpperCase();

  // Update active language button
  document.querySelectorAll('.pill-lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update PDF download links to match language
  if (t.pdf_url) {
    document.querySelectorAll('a[download]').forEach((a) => {
      a.href = t.pdf_url;
    });
  }

  localStorage.setItem('portfolio-lang', lang);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);

  // Update sun/moon icon
  const icon = document.getElementById('pillThemeIcon');
  if (icon) {
    if (theme === 'dark') {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
    } else {
      icon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    }
  }
}

// Initialize on load
(function initI18n() {
  const savedLang = localStorage.getItem('portfolio-lang') || 'en';
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';

  applyTheme(savedTheme);
  applyLanguage(savedLang);
})();
