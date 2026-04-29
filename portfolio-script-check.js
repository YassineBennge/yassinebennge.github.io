
    // Resume-extracted content (all visible text flows from this object; EN is a faithful translation of FR content).
    const i18n = {
      fr: {
        brand: {
          name: "Yassine Bennge",
          title: "Étudiant en Master Recherche — Informatique | Développement Web & IA"
        },
        loader: { hint: "Préparation du portfolio…" },
        nav: {
          skills: "Compétences",
          experience: "Expérience",
          projects: "Projets",
          education: "Formation",
          contact: "Contact"
        },
        hero: {
          availability: "Ouvert à une opportunité (stages / projets)",
          summary:
            "Étudiant en Master Recherche en Informatique à la Faculté des Sciences de Sfax, spécialisé en Big Data, Intelligence Artificielle, Machine Learning et Vision par Ordinateur. Développeur Full-Stack maîtrisant la stack MERN (MongoDB, Express.js, React, Node.js), avec une solide expérience en conception d'applications web et en développement de systèmes d'apprentissage automatique. Créatif, rigoureux et passionné par la technologie, je recherche une opportunité pour mettre mes compétences au service de projets innovants à fort impact.",
          ctaWork: "Voir mes projets",
          ctaContact: "Me contacter",
          stats: {
            s1l: "Expériences pro",
            s2l: "Projets",
            s3l: "Technologies"
          }
        },
        skills: {
          title: "Compétences techniques",
          sub: "Barres animées (au scroll) + nuage de technologies extrait du CV."
        },
        exp: {
          title: "Expériences professionnelles",
          sub: "Timeline verticale avec entrée animée au scroll."
        },
        projects: {
          title: "Projets personnels",
          sub: "Grille responsive en 3 colonnes avec survol animé."
        },
        edu: {
          title: "Formation",
          sub: "Parcours académique + axes d'étude."
        },
        langs: { title: "Langues" },
        contact: {
          title: "Contact",
          sub: "Cartes d'infos + ripples animés en continu."
        },
        footer: {
          text: "© 2026 — Yassine Bennge. Portfolio mono-page (HTML/CSS/JS) basé sur le CV fourni."
        },
        labels: {
          dates: "Dates",
          location: "Lieu",
          company: "Organisation",
          tools: "Outils"
        }
      },
      en: {
        brand: {
          name: "Yassine Bennge",
          title: "Research Master’s Student — Computer Science | Web Development & AI"
        },
        loader: { hint: "Preparing the portfolio…" },
        nav: {
          skills: "Skills",
          experience: "Experience",
          projects: "Projects",
          education: "Education",
          contact: "Contact"
        },
        hero: {
          availability: "Open to an opportunity (internships / projects)",
          summary:
            "Research Master’s student in Computer Science at the Faculty of Sciences of Sfax, specializing in Big Data, Artificial Intelligence, Machine Learning, and Computer Vision. Full‑Stack developer mastering the MERN stack (MongoDB, Express.js, React, Node.js), with solid experience designing web applications and developing machine‑learning systems. Creative, rigorous, and passionate about technology, I’m looking for an opportunity to contribute my skills to innovative, high‑impact projects.",
          ctaWork: "View work",
          ctaContact: "Contact me",
          stats: {
            s1l: "Work roles",
            s2l: "Projects",
            s3l: "Technologies"
          }
        },
        skills: {
          title: "Technical skills",
          sub: "Animated bars (on scroll) + tech chip cloud extracted from the resume."
        },
        exp: {
          title: "Professional experience",
          sub: "Vertical timeline with scroll-reveal animations."
        },
        projects: {
          title: "Personal projects",
          sub: "Responsive 3-column grid with animated hover effects."
        },
        edu: {
          title: "Education",
          sub: "Academic background + study focus areas."
        },
        langs: { title: "Languages" },
        contact: {
          title: "Contact",
          sub: "Info cards + continuously animated ripple rings."
        },
        footer: {
          text: "© 2026 — Yassine Bennge. Single-page portfolio (HTML/CSS/JS) generated from the provided resume."
        },
        labels: {
          dates: "Dates",
          location: "Location",
          company: "Organization",
          tools: "Tools"
        }
      }
    };

    const resumeData = {
      contacts: {
        location: { fr: "Korba, Nabeul, Tunisie", en: "Korba, Nabeul, Tunisia" },
        phone: "+216 97 414 352",
        email: "yassinebennge@outlook.com",
        linkedin: "linkedin.com/in/benngeyassine",
        github: "github.com/benngeyassine",
        portfolio: "votre-lien-ici.com"
      },
      skills: [
        // Derived proficiency: skills highlighted as core / "maîtrisant" are higher.
        { key: "React.js", pct: 88, group: "Web" },
        { key: "Node.js", pct: 86, group: "Web" },
        { key: "Express.js", pct: 84, group: "Web" },
        { key: "MongoDB", pct: 84, group: "DB" },
        { key: "JavaScript", pct: 84, group: "Langages" },
        { key: "Python", pct: 82, group: "Langages" },
        { key: "Machine Learning", pct: 80, group: "IA" },
        { key: "Scikit-learn", pct: 78, group: "IA" },
        { key: "Pandas", pct: 78, group: "IA" },
        { key: "NumPy", pct: 76, group: "IA" },
        { key: "HTML5", pct: 78, group: "Web" },
        { key: "CSS3", pct: 76, group: "Web" },
        { key: "MySQL", pct: 70, group: "DB" },
        { key: "Symfony", pct: 62, group: "Web" },
        { key: "Java", pct: 64, group: "Langages" },
        { key: "C", pct: 60, group: "Langages" },
        { key: "PHP", pct: 62, group: "Langages" },
        { key: "Git", pct: 78, group: "Outils" },
        { key: "GitHub", pct: 76, group: "Outils" },
        { key: "Postman", pct: 70, group: "Outils" },
        { key: "VS Code", pct: 74, group: "Outils" },
        { key: "UML", pct: 72, group: "Conception" },
        { key: "Architecture MVC", pct: 70, group: "Conception" },
        { key: "Photoshop", pct: 68, group: "Design" },
        { key: "Illustrator", pct: 62, group: "Design" },
        { key: "Premiere Pro", pct: 80, group: "Vidéo" },
        { key: "After Effects", pct: 72, group: "Vidéo" }
      ],
      technologies: [
        "C","Java","JavaScript","PHP","Python",
        "React.js","Node.js","Express.js","HTML5","CSS3","Symfony",
        "MongoDB","MySQL",
        "Pandas","NumPy","Scikit-learn","Matplotlib",
        "Machine Learning","Deep Learning","Vision par Ordinateur","Big Data","Intelligence Artificielle",
        "UML","Architecture MVC",
        "Git","GitHub","VS Code","Postman",
        "JWT","API REST","ERP","CRM",
        "Photoshop","Illustrator","Premiere Pro","After Effects",
        "YouTube","TikTok","Book-Crossing"
      ],
      experiences: [
        {
          title: { fr: "Développeur Web — Stage de fin d'études", en: "Web Developer — Final-year Internship" },
          company: "Vaga Alarme",
          dates: { fr: "Avr 2022 – Sep 2022", en: "Apr 2022 – Sep 2022" },
          location: { fr: "Rades, Tunisie", en: "Rades, Tunisia" },
          bullets: {
            fr: [
              "Conçu et développé une application ERP complète avec la stack MERN (MongoDB, Express.js, React, Node.js) pour centraliser la gestion des stocks, la CRM et les finances.",
              "Réduit le temps de traitement des opérations internes de ~40 % grâce à l'automatisation des flux de travail.",
              "Mis en place une API RESTful sécurisée avec authentification JWT, gérant plus de 15 modules métiers.",
              "Collaboré étroitement avec l'équipe métier pour recueillir les exigences et livrer des itérations fonctionnelles chaque sprint.",
              "Rédigé la documentation technique complète (UML, schémas de base de données, guide d'utilisation)."
            ],
            en: [
              "Designed and developed a full ERP application with the MERN stack (MongoDB, Express.js, React, Node.js) to centralize inventory, CRM, and finance management.",
              "Reduced internal operations processing time by ~40% by automating workflows.",
              "Implemented a secure RESTful API with JWT authentication, handling 15+ business modules.",
              "Collaborated closely with stakeholders to gather requirements and deliver functional iterations each sprint.",
              "Produced full technical documentation (UML, database schemas, user guide)."
            ]
          },
          tags: ["MERN","ERP","API REST","JWT","UML"]
        },
        {
          title: { fr: "Monteur Vidéo — Temps plein", en: "Video Editor — Full time" },
          company: "Original Gamers",
          dates: { fr: "Sep 2023 – Déc 2023", en: "Sep 2023 – Dec 2023" },
          location: { fr: "Sousse, Tunisie", en: "Sousse, Tunisia" },
          bullets: {
            fr: [
              "Produit et monté plus de 80 vidéos pour YouTube et TikTok, accumulant collectivement plusieurs millions de vues.",
              "Maîtrisé l'utilisation avancée de Premiere Pro et After Effects pour la création d'effets visuels, transitions et graphiques animés.",
              "Optimisé les délais de rendu et les workflows de production, réduisant le temps de livraison de 30 %.",
              "Analysé les métriques d'engagement des audiences pour ajuster le style éditorial et maximiser la rétention des spectateurs."
            ],
            en: [
              "Produced and edited 80+ videos for YouTube and TikTok, totaling several million views.",
              "Used advanced Premiere Pro and After Effects for VFX, transitions, and motion graphics.",
              "Optimized rendering timelines and production workflows, reducing delivery time by 30%.",
              "Analyzed engagement metrics to adjust editing style and maximize retention."
            ]
          },
          tags: ["Premiere Pro","After Effects","YouTube","TikTok"]
        }
      ],
      education: [
        {
          title: { fr: "Master Recherche en Informatique (En cours)", en: "Research Master’s in Computer Science (In progress)" },
          school: { fr: "Faculté des Sciences de Sfax", en: "Faculty of Sciences of Sfax" },
          dates: { fr: "En cours", en: "In progress" },
          details: {
            fr: ["Big Data", "Intelligence Artificielle", "Machine Learning", "Deep Learning", "Vision par Ordinateur"],
            en: ["Big Data", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision"]
          }
        },
        {
          title: { fr: "Licence (Diplôme) en Informatique", en: "Bachelor’s Degree in Computer Science" },
          school: { fr: "Institut Supérieur d'Informatique de Mahdia", en: "Higher Institute of Computer Science of Mahdia" },
          dates: { fr: "2022", en: "2022" },
          details: {
            fr: ["Algorithmique", "Développement Logiciel", "Bases de Données", "Développement Web/Mobile", "Conception Graphique"],
            en: ["Algorithms", "Software Development", "Databases", "Web/Mobile Development", "Graphic Design"]
          }
        },
        {
          title: { fr: "Baccalauréat — Informatique", en: "High School Diploma — Computer Science" },
          school: { fr: "Lycée de Korba", en: "Korba High School" },
          dates: { fr: "2018", en: "2018" },
          details: {
            fr: ["Algorithmique", "Bases de Données", "Développement Web"],
            en: ["Algorithms", "Databases", "Web Development"]
          }
        }
      ],
      projects: [
        {
          emoji: "📚",
          name: { fr: "Système de Recommandation de Livres", en: "Book Recommendation System" },
          dates: { fr: "Avr 2024", en: "Apr 2024" },
          desc: {
            fr: "Moteur de recommandation personnalisée (filtrage collaboratif + contenu) pour suggérer des livres selon l'historique de lecture. Score top‑10 de 87 % sur Book‑Crossing. EDA, nettoyage et visualisation avec Pandas & Matplotlib.",
            en: "Personalized recommendation engine (collaborative + content-based filtering) suggesting books from reading history. Achieved 87% top‑10 precision on the Book‑Crossing dataset. Full EDA, cleaning, and visualization with Pandas & Matplotlib."
          },
          tags: ["Python","Scikit-learn","Pandas","NumPy","Matplotlib","Machine Learning"]
        },
        {
          emoji: "🧩",
          name: { fr: "Application ERP Web — Stack MERN", en: "Web ERP Application — MERN Stack" },
          dates: { fr: "Avr – Sep 2022", en: "Apr – Sep 2022" },
          desc: {
            fr: "Application ERP full‑stack gérant inventaire, CRM et modules financiers. Interface React.js responsive avec tableau de bord analytique temps réel, rôles utilisateurs. Base MongoDB optimisée (indexation). API sécurisée JWT.",
            en: "Full‑stack ERP managing inventory, CRM, and finance modules. Responsive React.js UI with real‑time analytics dashboard and user roles. Optimized MongoDB (indexing). Secure JWT-based API."
          },
          tags: ["React.js","Node.js","Express.js","MongoDB","JWT","API REST","ERP","CRM"]
        }
      ],
      certifications: [
        { fr: "Introduction à MongoDB — MongoDB University (2023)", en: "Introduction to MongoDB — MongoDB University (2023)" },
        { fr: "Soft Skills & Communication Professionnelle — ANETI (2023)", en: "Soft Skills & Professional Communication — ANETI (2023)" }
      ],
      languages: [
        { name: { fr:"Arabe", en:"Arabic" }, level: { fr:"Natif", en:"Native" } },
        { name: { fr:"Français", en:"French" }, level: { fr:"Courant", en:"Fluent" } },
        { name: { fr:"Anglais", en:"English" }, level: { fr:"Professionnel", en:"Professional" } }
      ],
      softSkills: [
        { fr:"Leadership", en:"Leadership" },
        { fr:"Résolution de problèmes", en:"Problem solving" },
        { fr:"Communication", en:"Communication" },
        { fr:"Adaptabilité", en:"Adaptability" },
        { fr:"Rigueur", en:"Rigor" },
        { fr:"Prise de parole en public", en:"Public speaking" }
      ]
    };

    const DEFAULT_LANG = "fr";
    const LS_KEY = "portfolio_lang";

    const dynamicI18n = {
      fr: {
        chips: { showMore: "Voir plus", showLess: "Voir moins" },
        contactCards: { email: "Email", phone: "T\u00e9l\u00e9phone", location: "Localisation", availability: "Disponibilit\u00e9" }
      },
      en: {
        chips: { showMore: "Show more", showLess: "Show less" },
        contactCards: { email: "Email", phone: "Phone", location: "Location", availability: "Availability" }
      }
    };
    const ANIMATION_CLASSES = ["in", "revealed", "animated", "visible", "in-view", "is-filled"];
    let currentLang = DEFAULT_LANG;
    let dynamicSectionsBuilt = false;

    function getByPath(obj, path){
      return path.split(".").reduce((o,k)=> (o && k in o ? o[k] : undefined), obj);
    }

    function resolveI18nValue(key, lang, el){
      let value = getByPath(i18n[lang], key);
      if (value === undefined) value = getByPath(dynamicI18n[lang], key);
      if (value === undefined && key.startsWith("resume.")) value = getByPath(resumeData, key.slice(7));
      if (value && typeof value === "object" && !Array.isArray(value) && lang in value) value = value[lang];
      if (Array.isArray(value) && el && el.hasAttribute("data-i18n-index")) {
        value = value[Number(el.getAttribute("data-i18n-index"))];
      }
      return value;
    }

    function applyTextTranslations(lang){
      document.querySelectorAll("[data-i18n]").forEach(el=>{
        const key = el.getAttribute("data-i18n");
        const value = resolveI18nValue(key, lang, el);
        if (typeof value === "string" || typeof value === "number") el.textContent = value;
      });
    }

    function captureAnimationState(){
      return Array.from(document.querySelectorAll("[class]")).map(el=>{
        const classes = ANIMATION_CLASSES.filter(cls=>el.classList.contains(cls));
        return classes.length ? [el, classes] : null;
      }).filter(Boolean);
    }

    function restoreAnimationState(state){
      state.forEach(([el, classes])=>{
        if (document.documentElement.contains(el)) el.classList.add(...classes);
      });
    }

    function applyLang(lang){
      currentLang = lang;
      const animationState = captureAnimationState();
      document.documentElement.lang = lang;
      document.getElementById("langFR").classList.toggle("active", lang === "fr");
      document.getElementById("langEN").classList.toggle("active", lang === "en");

      applyTextTranslations(lang);
      updateStats(lang);
      updateChipToggleText();
      restoreAnimationState(animationState);

      localStorage.setItem(LS_KEY, lang);
    }

    function updateStats(lang){
      const stats = computeStats(lang);
      document.getElementById("stat1v").textContent = stats.s1v;
      document.getElementById("stat2v").textContent = stats.s2v;
      document.getElementById("stat3v").textContent = stats.s3v;
      document.getElementById("stat1l").setAttribute("data-i18n", "hero.stats.s1l");
      document.getElementById("stat2l").setAttribute("data-i18n", "hero.stats.s2l");
      document.getElementById("stat3l").setAttribute("data-i18n", "hero.stats.s3l");
      document.getElementById("stat1l").textContent = i18n[lang].hero.stats.s1l;
      document.getElementById("stat2l").textContent = i18n[lang].hero.stats.s2l;
      document.getElementById("stat3l").textContent = i18n[lang].hero.stats.s3l;
    }

    function computeStats(lang){
      const expCount = resumeData.experiences.length;
      const projCount = resumeData.projects.length;
      const techCount = new Set(resumeData.technologies).size;
      return {
        s1v: String(expCount),
        s2v: String(projCount),
        s3v: techCount + "+"
      };
    }

    function makeEl(tag, className, key){
      const el = document.createElement(tag);
      if (className) el.className = className;
      if (key) el.setAttribute("data-i18n", key);
      return el;
    }

    function buildDynamicSections(){
      if (dynamicSectionsBuilt) return;
      buildSkills();
      buildExperience();
      buildProjects();
      buildEducation();
      buildLanguages();
      buildContact();
      buildMarquee();
      dynamicSectionsBuilt = true;
    }

    function buildSkills(){
      const root = document.getElementById("skillsList");
      resumeData.skills.forEach(s=>{
        const row = document.createElement("div");
        row.className = "skill";

        const skillRow = document.createElement("div");
        skillRow.className = "skillRow";
        const name = document.createElement("div");
        name.className = "skillName";
        name.textContent = s.key;
        const pct = document.createElement("div");
        pct.className = "skillPct";
        pct.textContent = s.pct + "%";
        skillRow.append(name, pct);

        const barWrap = document.createElement("div");
        barWrap.className = "barWrap";
        barWrap.setAttribute("aria-label", s.key);
        const barFill = document.createElement("div");
        barFill.className = "barFill";
        barFill.setAttribute("data-pct", s.pct);
        barWrap.appendChild(barFill);

        row.append(skillRow, barWrap);
        root.appendChild(row);
      });

      const chips = document.getElementById("techChips");
      const technologies = [...new Set(resumeData.technologies)];
      technologies.forEach(t=>{
        const c = document.createElement("span");
        c.className = "chip";
        c.textContent = t;
        chips.appendChild(c);
      });
      const toggle = document.getElementById("chipToggle");
      if (technologies.length > 16) {
        toggle.classList.add("visible");
        toggle.addEventListener("click", ()=>{
          const expanded = chips.classList.toggle("expanded");
          toggle.setAttribute("aria-expanded", String(expanded));
          updateChipToggleText();
        });
      }
    }

    function updateChipToggleText(){
      const chips = document.getElementById("techChips");
      const toggle = document.getElementById("chipToggle");
      if (!chips || !toggle) return;
      const key = chips.classList.contains("expanded") ? "chips.showLess" : "chips.showMore";
      toggle.textContent = resolveI18nValue(key, currentLang) || "";
    }

    function buildExperience(){
      const root = document.getElementById("expList");
      resumeData.experiences.forEach((job, i)=>{
        const div = document.createElement("article");
        div.className = "job reveal";

        const top = document.createElement("div");
        top.className = "jobTop";
        const main = document.createElement("div");
        const title = makeEl("div", "jobTitle", `resume.experiences.${i}.title`);
        const place = document.createElement("div");
        place.className = "jobPlace";
        const company = document.createElement("span");
        company.textContent = job.company;
        const sep = document.createTextNode(" \u00b7 ");
        const location = makeEl("span", "", `resume.experiences.${i}.location`);
        place.append(company, sep, location);
        main.append(title, place);
        const dates = makeEl("div", "jobMeta", `resume.experiences.${i}.dates`);
        top.append(main, dates);

        const bullets = document.createElement("ul");
        bullets.className = "bullets";
        job.bullets.fr.forEach((_, j)=>{
          const li = makeEl("li", "", `resume.experiences.${i}.bullets`);
          li.setAttribute("data-i18n-index", j);
          bullets.appendChild(li);
        });

        const badges = document.createElement("div");
        badges.className = "badges";
        job.tags.forEach(t=>{
          const tag = document.createElement("span");
          tag.className = "badge";
          tag.textContent = t;
          badges.appendChild(tag);
        });
        div.append(top, bullets, badges);
        root.appendChild(div);
      });
    }

    function projectEmojiFor(nameFr){
      const s = (nameFr || "").toLowerCase();
      if (s.includes("recommandation") || s.includes("livres")) return "\u{1F4DA}";
      if (s.includes("erp")) return "\u{1F9E9}";
      return "\u2728";
    }

    function buildProjects(){
      const root = document.getElementById("projList");
      resumeData.projects.forEach((p, i)=>{
        const card = document.createElement("article");
        card.className = "proj reveal";
        const emoji = document.createElement("div");
        emoji.className = "projEmoji";
        emoji.setAttribute("aria-hidden", "true");
        emoji.textContent = p.emoji || projectEmojiFor(p.name.fr);
        const name = makeEl("div", "projName", `resume.projects.${i}.name`);
        const desc = makeEl("p", "projDesc", `resume.projects.${i}.desc`);
        const badges = document.createElement("div");
        badges.className = "badges";
        badges.style.marginTop = "14px";
        p.tags.forEach(t=>{
          const tag = document.createElement("span");
          tag.className = "badge";
          tag.textContent = t;
          badges.appendChild(tag);
        });
        card.append(emoji, name, desc, badges);
        root.appendChild(card);
      });
    }

    function buildEducation(){
      const root = document.getElementById("eduList");
      resumeData.education.forEach((e, i)=>{
        const div = document.createElement("div");
        div.className = "card reveal";
        const title = makeEl("div", "eduTitle", `resume.education.${i}.title`);
        const meta = document.createElement("div");
        meta.className = "eduMeta";
        const school = makeEl("span", "", `resume.education.${i}.school`);
        const sep = document.createTextNode(" \u00b7 ");
        const dates = makeEl("span", "", `resume.education.${i}.dates`);
        meta.append(school, sep, dates);
        const details = document.createElement("ul");
        details.className = "eduList";
        e.details.fr.forEach((_, j)=>{
          const li = makeEl("li", "", `resume.education.${i}.details`);
          li.setAttribute("data-i18n-index", j);
          details.appendChild(li);
        });
        div.append(title, meta, details);
        root.appendChild(div);
      });
    }

    function buildLanguages(){
      const root = document.getElementById("langList");
      resumeData.languages.forEach((l, i)=>{
        const pill = document.createElement("div");
        pill.className = "pill";
        const name = makeEl("span", "", `resume.languages.${i}.name`);
        const level = makeEl("span", "lvl", `resume.languages.${i}.level`);
        pill.append(name, level);
        root.appendChild(pill);
      });
    }

    function buildContact(){
      const root = document.getElementById("contactCards");
      const items = [
        { label: "contactCards.email", val: resumeData.contacts.email },
        { label: "contactCards.phone", val: resumeData.contacts.phone },
        { label: "contactCards.location", key: "resume.contacts.location" },
        { label: "contactCards.availability", key: "hero.availability" }
      ];
      items.forEach(it=>{
        const d = document.createElement("div");
        d.className = "info";
        const label = makeEl("div", "infoLabel", it.label);
        const val = makeEl("div", "infoVal", it.key);
        if (it.val) val.textContent = it.val;
        d.append(label, val);
        root.appendChild(d);
      });
      document.getElementById("contactInitials").textContent = "YB";
    }

    function buildMarquee(){
      const names = [
        { text: "Vaga Alarme" },
        { text: "Original Gamers" },
        { key: "resume.education.0.school" },
        { key: "resume.education.1.school" },
        { key: "resume.education.2.school" },
        { text: "MongoDB University" },
        { text: "ANETI" }
      ];
      const root = document.getElementById("marqueeTrack");
      [...names, ...names].forEach(n=>{
        const el = document.createElement("div");
        el.className = "marqueeItem";
        const dot = document.createElement("span");
        dot.className = "marqDot";
        dot.setAttribute("aria-hidden", "true");
        const text = document.createElement("span");
        if (n.key) text.setAttribute("data-i18n", n.key);
        else text.textContent = n.text;
        el.append(dot, text);
        root.appendChild(el);
      });
    }

    // IntersectionObserver: reveal + skill bars on view
    function setupObservers(){
      const revealObs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if (e.isIntersecting){
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        });
      }, { threshold: .14 });

      document.querySelectorAll(".reveal").forEach(el=>revealObs.observe(el));

      const skillObs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if (!e.isIntersecting) return;
          const skill = e.target;
          const fill = skill.querySelector(".barFill");
          if (fill && !skill.classList.contains("is-filled")){
            const pct = Number(fill.getAttribute("data-pct") || "0");
            fill.style.width = Math.max(0, Math.min(100, pct)) + "%";
            skill.classList.add("is-filled");
          }
          skillObs.unobserve(skill);
        });
      }, { threshold: .35 });

      document.querySelectorAll("#skillsList .skill").forEach(el=>skillObs.observe(el));
    }

    // Particle network canvas
    function startParticles(){
      const canvas = document.getElementById("bgCanvas");
      const ctx = canvas.getContext("2d", { alpha: true });
      let w = 0, h = 0, dpr = 1;

      function resize(){
        dpr = Math.min(2, window.devicePixelRatio || 1);
        w = Math.floor(window.innerWidth);
        h = Math.floor(window.innerHeight);
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.setTransform(dpr,0,0,dpr,0,0);
      }
      resize();
      window.addEventListener("resize", resize, { passive: true });

      const colors = [
        [91,108,255],  // indigo
        [255,60,172],  // pink
        [0,229,255],   // cyan
        [255,176,32]   // amber
      ];
      const N = Math.max(46, Math.min(92, Math.floor((w*h)/24000)));
      const pts = Array.from({length:N}, ()=>({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()*2-1)*0.35,
        vy: (Math.random()*2-1)*0.35,
        c: colors[(Math.random()*colors.length)|0]
      }));
      const maxDist = 140;

      function tick(){
        ctx.clearRect(0,0,w,h);

        // soft vignette
        const g = ctx.createRadialGradient(w*0.5,h*0.55, 60, w*0.5,h*0.55, Math.max(w,h)*0.7);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(1, "rgba(0,0,0,.35)");
        ctx.fillStyle = g;
        ctx.fillRect(0,0,w,h);

        for (let i=0;i<pts.length;i++){
          const p = pts[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x<0||p.x>w) p.vx *= -1;
          if (p.y<0||p.y>h) p.vy *= -1;

          // dots
          ctx.beginPath();
          ctx.arc(p.x,p.y, 2.0, 0, Math.PI*2);
          ctx.fillStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},.75)`;
          ctx.fill();

          // connections
          for (let j=i+1;j<pts.length;j++){
            const q = pts[j];
            const dx = p.x-q.x, dy = p.y-q.y;
            const dist = Math.hypot(dx,dy);
            if (dist < maxDist){
              const a = 1 - dist/maxDist;
              ctx.strokeStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${a*0.22})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x,p.y);
              ctx.lineTo(q.x,q.y);
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(tick);
      }
      tick();
    }

    // cursor follow
    function startCursor(){
      const dot = document.getElementById("cursorDot");
      const ring = document.getElementById("cursorRing");
      let mx = window.innerWidth/2, my = window.innerHeight/2;
      let rx = mx, ry = my;

      window.addEventListener("mousemove", (e)=>{
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      }, { passive:true });

      window.addEventListener("mousedown", ()=> document.body.classList.add("cursor-click"), { passive:true });
      window.addEventListener("mouseup", ()=> document.body.classList.remove("cursor-click"), { passive:true });

      function loop(){
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
        requestAnimationFrame(loop);
      }
      loop();
    }

    // init
    (function(){
      const saved = localStorage.getItem(LS_KEY);
      const lang = (saved === "en" || saved === "fr") ? saved : DEFAULT_LANG;

      document.getElementById("langFR").addEventListener("click", ()=> applyLang("fr"));
      document.getElementById("langEN").addEventListener("click", ()=> applyLang("en"));
      const menuBtn = document.getElementById("menuBtn");
      const navLinks = document.getElementById("navLinks");
      menuBtn.addEventListener("click", ()=>{
        const open = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });
      navLinks.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click", ()=>{
          navLinks.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });

      // Initial render before loader ends
      buildDynamicSections();
      applyLang(lang);

      // loader: 2s then reveal
      setTimeout(()=>{
        document.body.classList.add("ready");
        // Observers need DOM painted with dynamic sections
        setupObservers();
        startParticles();
        startCursor();
      }, 2000);
    })();
  