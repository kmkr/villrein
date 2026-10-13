/**
 * Curriculum Vitae data
 */
const cvData = {
  name: "Kris-Mikael Krister",
  role: "Senior programvareutvikler og Engineering Manager",
  photo: "242216.jpeg",
  contact: [
    { key: "Bosted", val: "Finnsnes, Troms", icon: "📍" },
    { key: "Født", val: "22. august 1985", icon: "🎂" },
    {
      key: "Telefon",
      val: "+47 97 15 26 92",
      icon: "📞",
      href: "tel:+4797152692",
    },
    {
      key: "E-post",
      val: "krismikael@proton.me",
      icon: "✉️",
      href: "mailto:krismikael@proton.me",
    },
    {
      key: "LinkedIn",
      val: "krismikaelkrister",
      icon: "🔗",
      href: "https://www.linkedin.com/in/krismikaelkrister/",
    },
  ],
  sections: [
    {
      id: "profile",
      title: "Nøkkelkvalifikasjoner",
      type: "summary",
      paragraphs: [
        "Programvareutvikler, teknisk leder og engineering manager med 17 års profesjonell erfaring. Som leder jobber jeg for å bygge robuste team, og som koder bygger jeg digitale produkter som effektivt hjelper brukerne og som kodere elsker å jobbe med. Uavhengig av rolle jobber jeg for å hjelpe folk med å lykkes i rollene sine og for å trives sammen.",
        "Jeg jobber på tvers av hele stacken med backend- og frontendsystemer, brukergrensesnitt og API-er. Primært koder jeg i TypeScript, JavaScript og Python, men har erfaring med flere andre programmeringsspråk. Jeg drar god nytte av AI-agenter til å øke farten min, uten å la dem ta over styringen eller retningen. Gjennom mesteparten av karrieren har jeg jobbet tett med produktledere og UX-designere og vært i kontinuerlig dialog med ekte brukere av det jeg, og teamene mine, har laget.",
        "Jeg trives godt med både selvstendig arbeid og tett arbeid i team. Jeg verdsetter klarhet og er grundig og ansvarsbevisst, samtidig som jeg er varm og inkluderende 🫂",
      ],
    },
    {
      id: "experience",
      title: "Yrkeserfaring",
      type: "experience",
      items: [
        {
          title:
            "Senior Software Engineer, Engineering Manager og Principal Engineer",
          subtitle: "Otovo ASA",
          description:
            "Ble ansatt som den 10. personen i Otovo og var med på å bygge selskapet fra tidlig oppstartsfase til virksomhet i 13 land og over 500 ansatte. Gjennom åtte år planla, utviklet og lanserte jeg tusenvis av funksjoner, store og små, på tvers av plattformen, samtidig som jeg bygget og ledet utviklingsteam. Jeg jobbet fullstack, samarbeidet daglig med produkteiere og andre interessenter, støttet andre team, og jobbet tett med interaksjonsdesignere for å forme produktene vi bygde.",
          meta: "2018 – 2026",
        },
        {
          title: "Seniorkonsulent",
          subtitle: "Miles AS",
          description:
            "Programvareutvikling og arkitektur hos FINN.no og NRK. Jobbet i FINN frontend kjerneteam, i FINN Småjobber, i FINN Oppdrag og i NRK Super-teamet.",
          meta: "2017 – 2018",
        },
        {
          title: "Seniorkonsulent",
          subtitle: "Webstep AS",
          description:
            "Programvareutvikling og arkitektur hos Gjensidige og FINN.no.",
          meta: "2013 – 2017",
        },
        {
          title: "Seniorkonsulent",
          subtitle: "Itera Consulting",
          description:
            "Programvareutvikling og arkitektur hos KLP og Gjensidige.",
          meta: "2009 – 2013",
        },
        {
          title: "Avdelingsingeniør",
          subtitle: "Nasjonal sikkerhetsmyndighet (NSM), NorCERT",
          description:
            "Overvåking og analyse av trafikk på tvers av kritisk internettinfrastruktur i Norge.",
          meta: "Sommeren 2008",
        },
        {
          title: "IT-support",
          subtitle: "NTNU IT-avdeling, Orakeltjenesten",
          description:
            "Løste henvendelser knyttet til NTNUs sentrale IT-systemer. Feilsøking av maskin- og programvare på applikasjons- og operativsystemnivå.",
          meta: "2005 – 2008",
        },
      ],
    },
    {
      id: "education",
      title: "Utdanning",
      type: "list",
      items: [
        {
          title: "Master i datateknologi (Sivilingeniør)",
          subtitle: "Norges teknisk-naturvitenskapelige universitet (NTNU)",
          description: "Spesialisering innen IT-sikkerhet og sårbarheter.",
          meta: "2004 – 2009",
        },
        {
          title: "Generell studiekompetanse",
          subtitle: "Sandefjord Videregående Skole (SVGS)",
          description: "Realfaglig fordypning.",
          meta: "2001 – 2004",
        },
      ],
    },
    {
      id: "programming-languages",
      title: "Programmeringsspråk og teknologistack",
      type: "language-list",
      items: [
        {
          title: "TypeScript & JavaScript",
          tags: [
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Next.js",
            "React",
            "Angular",
            "jQuery",
          ],
          description:
            "17 års erfaring med JavaScript og over fem år med TypeScript. Omfattende erfaring med moderne frontend-rammeverk og Node.js-backends. Har også erfaring med eldre rammeverk som for eksempel jQuery, Backbone.js og mange flere, spør gjerne om mer detaljer.",
        },
        {
          title: "Python",
          tags: ["Python", "Django", "PostgreSQL", "FastAPI", "Pandas"],
          description:
            "Åtte års erfaring med Python, primært med Django og PostgreSQL.",
        },
        {
          title: "Java",
          tags: ["Java", "Spring", "Oracle", "Hibernate"],
          description:
            "Åtte års erfaring med Java, primært med Spring og Oracle-databaser.",
        },
      ],
    },
    {
      id: "additional",
      title: "Annen informasjon",
      type: "list",
      items: [
        {
          title: "Førerkort",
          subtitle: "Klasse B (personbil)",
          description: "",
        },
        {
          title: "Språk",
          subtitle: "Norsk & Engelsk",
          description:
            "Norsk – morsmål; Engelsk – flytende skriftlig og muntlig.",
        },
        {
          title: "Referanser",
          subtitle: "Tilgjengelig på forespørsel",
          description: "",
        },
      ],
    },
  ],
};

const escapeHtml = (value) =>
  String(value || "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char] || char,
  );

/**
 * Render contact list item
 */
const renderContactItem = (item) => {
  const content = item.href
    ? `<a href="${escapeHtml(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(item.val)}</a>`
    : escapeHtml(item.val);

  return `
    <li class="contact-list-item">
      <span class="contact-icon" aria-hidden="true">${item.icon}</span>
      <span class="contact-label">${escapeHtml(item.key)}</span>
      <span class="contact-val">${content}</span>
    </li>
  `;
};

/**
 * Render timeline items (experience, education)
 */
const renderTimelineItem = (item) => {
  const subtitleHtml = item.subtitle
    ? ` · <span style="font-weight: 500; color: var(--color-text-muted);">${escapeHtml(item.subtitle)}</span>`
    : "";

  return `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-header">
        <h4 class="timeline-title">${escapeHtml(item.title)}${subtitleHtml}</h4>
        ${item.meta ? `<span class="timeline-badge">${escapeHtml(item.meta)}</span>` : ""}
      </div>
      <p class="timeline-desc">${escapeHtml(item.description)}</p>
    </article>
  `;
};

/**
 * Render skills cards with tags
 */
const renderSkillCard = (item) => {
  const tagsHtml =
    item.tags && item.tags.length
      ? `<ul class="skill-tag-list">${item.tags.map((t) => `<li class="skill-tag">${escapeHtml(t)}</li>`).join("")}</ul>`
      : "";

  return `
    <div class="skill-card">
      <h4 class="skill-card-title">${escapeHtml(item.title)}</h4>
      ${tagsHtml}
      <p class="skill-card-desc">${escapeHtml(item.description)}</p>
    </div>
  `;
};

/**
 * Render section
 */
const renderSection = (section) => {
  let content = "";

  if (section.type === "summary") {
    const paragraphs = section.paragraphs || [];
    content = `
      <div class="cv-summary-box">
        ${paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      </div>
    `;
  } else if (section.type === "experience" || section.type === "list") {
    content = `
      <div class="timeline-container">
        ${section.items.map(renderTimelineItem).join("")}
      </div>
    `;
  } else if (section.type === "language-list") {
    content = `
      <div class="skills-grid">
        ${section.items.map(renderSkillCard).join("")}
      </div>
    `;
  }

  return `
    <section id="${escapeHtml(section.id)}" class="cv-section">
      <h3 class="cv-section-title">${escapeHtml(section.title)}</h3>
      ${content}
    </section>
  `;
};

/**
 * Render CV in the DOM
 */
function renderCV() {
  const contactContainer = document.querySelector("#kontakt");
  if (contactContainer) {
    contactContainer.innerHTML = cvData.contact.map(renderContactItem).join("");
  }

  const cvContentContainer = document.querySelector("#cv-content");
  if (cvContentContainer) {
    cvContentContainer.innerHTML = cvData.sections.map(renderSection).join("");
  }
}

/**
 * Initialize Lightbox for Wireframe Screenshots
 */
function initLightbox() {
  const modal = document.querySelector("#lightbox-modal");
  const modalImg = document.querySelector("#lightbox-img");
  const modalTitle = document.querySelector("#lightbox-title");
  const closeBtn = document.querySelector("#lightbox-close");
  const backdrop = document.querySelector("#lightbox-backdrop");

  if (!modal || !modalImg) return;

  function openLightbox(src, title) {
    modalImg.src = src;
    modalImg.alt = title || "Forstørret wireframe-visning";
    if (modalTitle) modalTitle.textContent = title || "Wireframe";
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent page scrolling
    if (backdrop) backdrop.scrollTop = 0;
  }

  function closeLightbox() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  // Bind clicks on triggers
  document
    .querySelectorAll(".js-zoom-trigger, .js-zoom-btn")
    .forEach((trigger) => {
      const handleOpen = () => {
        const src = trigger.getAttribute("data-img");
        const title = trigger.getAttribute("data-title");
        if (src) openLightbox(src, title);
      };

      trigger.addEventListener("click", handleOpen);
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      });
    });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeLightbox();
    });
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });
}

let initialized = false;
function init() {
  if (initialized) return;
  initialized = true;
  renderCV();
  initLightbox();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
