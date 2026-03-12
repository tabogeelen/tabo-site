/**
 * ============================================================
 *  SITE CONTENT — tabo-site
 * ============================================================
 *  Edit this file to update:
 *    • Your name, title, bio paragraphs
 *    • Expertise cards
 *    • Contact details
 *    • Partner/org logos
 * ============================================================
 */

const SITE = {

  // ── IDENTITY ──────────────────────────────────────────────
  name: "Tabo Geelen",
  title: "Bio-Inspired Agriculture Consultant",
  tagline: "Bio-Inspired Agriculture Consultant",

  // ── HERO ──────────────────────────────────────────────────
  hero: {
    heading: ["Learning from", "nature", "to grow smarter."],  // middle word is italic green
    sub: `I'm a biologist, MSc Bio-Inspired Innovation (Biomimicry) and field consultant working with smallholder farmers and agricultural teams across Africa and South America. I combine nature's wisdom with scientific thinking, hands-on implementation, and a people-first approach to make regenerative agriculture actually work on the ground.`,
    countries: ["Tanzania", "Suriname", "Ecuador"],
    photo: "assets/projects/coffee/teaching_handup.jpg",
  },

  // ── ABOUT ─────────────────────────────────────────────────
  about: {
    portrait: "assets/projects/coffee/foliar_explanation.jpg",
    credential_education: "MSc Bio-Inspired Innovation, Utrecht University",
    credential_location: "Utrecht, Netherlands (field-based)",
    credential_languages: "Dutch (native), English (fluent), Spanish (working), Swahili (learning)",
    credential_regions: "East Africa · South America",

    lead: `I'm a biology graduate from Wageningen University and MSc Bio-Inspired Innovation from Utrecht University, working with smallholder farming systems and regenerative agriculture projects across Africa and South America.`,

    paragraphs: [
      `What shapes how I work is a combination of scientific background and a genuinely people-oriented approach. I easily connect with farmers and teams from different cultural contexts, and I prefer co-designing solutions alongside them rather than working top-down. My background in qualitative sociological research has taught me to listen carefully, understand local realities, and translate those insights into approaches that actually hold up in practice because they come from the people who use them, supported where needed by tools like GIS mapping and data analysis.`,

      `At the same time, I like working hands-on and creatively. My background in biomimicry and systems thinking helps me look at farms as ecosystems and find nature-inspired solutions to practical problems. Whether that's setting up pilots together with local farmers, developing biological inputs they can produce themselves, making visual training materials, or adapting when field reality asks for it, I feel most at home in dynamic environments where you need to think scientifically, improvise when necessary, and keep things practical and human.`,
    ],

    affiliation: {
      name: "RockinSoils",
      url: "https://rockinsoils.com/",
      logo: "assets/company-logos/cropped-rockinsoils-logo-web-green2.png",
      label: "Working under the guidance of RockinSoils",
      detail: `Senior agro-consultant **Ruben Borge** provides technical knowledge and advice. I bring flexibility and fresh field energy, with direct access to decades of regenerative agriculture expertise. In practice, organisations often find that I offer the best of both worlds.`,
    },
  },

  // ── EXPERTISE CARDS ───────────────────────────────────────
  // Add or remove cards here. Grid is 3 columns.
  expertise: [
    {
      num: "01",
      title: "Regenerative System Design",
      desc: `I co-design biological inputs with farmers that they can actually produce themselves: BioL, Bokashi, compost, plant extracts, biochar. The goal is always to strengthen soil biology, build resilience, and reduce dependence on external inputs. If farmers can't make it themselves, it's not going to stick.`,
      tags: ["Agroecology", "Soil Health", "BioL", "Bokashi"],
    },
    {
      num: "02",
      title: "Field Implementation",
      desc: `I set up pilots, develop Champion Farmer networks, manage test plots, and coordinate field logistics. I'm used to working in contexts where plans need to change, and I'm comfortable leading that process together with the farming communities involved. The aim is always adoption, not just demonstration.`,
      tags: ["Smallholders", "Training", "Capacity Building"],
    },
    {
      num: "03",
      title: "Financial Modelling & Business Cases",
      desc: `I build economic models comparing conventional vs. regenerative approaches, and construct business cases for inputs, cooperative fund models, and grant applications. Everything is built to be implementable, not just nice on paper.`,
      tags: ["Cost-Benefit Analysis", "Farmer Economics", "Cooperative Funds"],
    },
    {
      num: "04",
      title: "Data Collection & Mapping",
      desc: `I build digital systems that connect what's happening in the field to the people who need to make decisions based on it. I use QGIS, QField, and KoboToolbox for mapping, monitoring, and EUDR compliance. I use Python and R for data analysis and photosynthetic activity mapping, and have experience with Partial Least Squares Structural Equation Models (PLS-SEM) to translate qualitative farmer data into tangible, measurable insights.`,
      tags: ["QGIS", "QField", "KoboToolbox", "Python", "R", "PLS-SEM", "Data Analysis"],
    },
    {
      num: "05",
      title: "Transition Assessment & Reporting",
      desc: `I assess where a farm stands on the regenerative transition using both quantitative and qualitative data, and translate that into a comprehensive model. This gives a clear picture of current performance and a concrete pathway forward, linked directly to a financial business case for making the transition. I also design scoring frameworks and produce reports for donors, exporters, and development partners.`,
      tags: ["Transition Assessment", "Business Case", "M&E", "Farm Diagnostics"],
    },
    {
      num: "06",
      title: "Biological Inputs & Circular Systems",
      desc: `I have a bit of an obsession with turning waste into something useful. Black Soldier Fly integration, advanced compost systems, circular farm design. The short version: waste equals protein and fertility, if you set it up right.`,
      tags: ["Biofertilizers", "BSF", "Circular Economy"],
    },
  ],

  // ── PARTNERS / ORGANISATIONS ──────────────────────────────
  // Add logo paths as you get them. Leave src:"" for placeholder.
  partners: [
    { name: "Wakuli",                  src: "assets/company-logos/wakuli.png" },
    { name: "RockinSoils",             src: "assets/company-logos/cropped-rockinsoils-logo-web-green2.png" },
    { name: "Fundación Maquita",       src: "assets/company-logos/maquita.png" },
    { name: "Amazon Conservation Team", src: "assets/company-logos/amazon conservation team logo.png" },
    { name: "ESPOCH Ecuador",          src: "assets/company-logos/espoch ecuador.png" },
    { name: "Wageningen University",   src: "assets/company-logos/wageningen university.png" },
    { name: "Utrecht University",      src: "assets/company-logos/utrecht university.png" },
    { name: "Kronendak",               src: "assets/company-logos/kronendak.png" },
    { name: "Staatsbosbeheer",         src: "assets/company-logos/staatsbosbeheer.jfif" },
    { name: "GAIN",                    src: "assets/company-logos/GAIN logo.png" },
  ],

  // ── CONTACT ───────────────────────────────────────────────
  contact: {
    email: "tabogeelen@gmail.com",
    linkedin: "www.linkedin.com/in/tabo-geelen-b7037328b",
    location: "Utrecht, Netherlands",
  },

};
