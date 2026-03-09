/**
 * ============================================================
 *  PROJECTS DATA — tabo-site
 * ============================================================
 *  This is the ONLY file you need to edit to:
 *    • Change project text
 *    • Add or remove projects
 *    • Swap photos
 *    • Add a YouTube / Vimeo video
 *
 *  HOW TO ADD A NEW PROJECT
 *  ─────────────────────────
 *  1. Copy one of the project blocks below (from { to the matching })
 *  2. Paste it at the end of the array (before the final ] )
 *  3. Add a comma after the previous project's closing }
 *  4. Fill in all the fields
 *  5. Put your photos in:  assets/projects/YOUR-PROJECT-ID/
 *
 *  PHOTO PATHS
 *  ─────────────
 *  Use relative paths from the project root, e.g.:
 *    "assets/projects/coffee/farmer-training.jpg"
 *  Leave as "" to show a placeholder.
 *
 *  VIDEO
 *  ─────
 *  Paste a YouTube or Vimeo embed URL, e.g.:
 *    "https://www.youtube.com/embed/VIDEO_ID"
 *  Leave as "" if no video.
 * ============================================================
 */

const PROJECTS = [

  // ──────────────────────────────────────────────────────────
  //  PROJECT 1: REGENERATIVE COFFEE — MBINGA
  // ──────────────────────────────────────────────────────────
  {
    id: "coffee",
    country: "Tanzania",
    year: "2025 – 2026",
    featured: true,                       // spans full width on desktop

    // ── CARD (shown in the project grid) ──
    card: {
      title: "Regenerative Coffee Programme: Mbinga",
      coverPhoto: "assets/projects/coffee/group.jfif",
      bullets: [
        "~50 smallholder coffee farmers in Mbinga",
        "12 Champion Farmer test plots established",
        "Training on compost, BioL & biological pest control",
        "Financial modelling: conventional vs. regenerative",
        "Cooperative fund design for biological input distribution",
      ],
      tags: ["Coffee", "Agroecology", "Cooperative Fund", "Financial Modelling"],
    },

    // ── FULL PAGE (shown when project is opened) ──
    page: {
      title: "Regenerative Coffee Programme: Mbinga",
      heroPhoto: "assets/projects/coffee/group.jfif",
      lead: `This is my main focus right now, a comprehensive regenerative agriculture pilot in Mbinga, Tanzania, working directly with smallholder coffee farmers, a local exporter, and a European specialty roaster to prove that regenerative really can work in this context.`,

      sections: [
        {
          heading: "The context",
          text: `Mbinga is one of Tanzania's main coffee-growing regions, but smallholder farmers there face the same pressures as farmers across Sub-Saharan Africa: degraded soils, rising input costs, volatile prices, and limited access to the kind of agronomic support that could actually change the trajectory. The programme is a collaboration between CBC (a Tanzanian coffee exporter) and Wakuli (a Dutch specialty roaster with a genuine commitment to the farmers at origin).`,
        },
        {
          heading: "What I'm doing",
          text: `I manage the pilot with around 50 smallholder farmers, including the establishment of 12 Champion Farmer test plots of 100 trees each. These plots serve as demonstration sites and data points, comparing regenerative practices against conventional management over multiple seasons. Every step is co-designed with the farmers themselves, because if they don't shape the approach, it won't stick.

On the technical side, I develop and deliver training on compost production, BioL (liquid biological fertiliser), and biological pest and disease control. I've also built visual farmer profiles and monitoring systems to track progress and support follow-up visits over time.

On the business side, I've built financial models comparing conventional versus regenerative farming economics over multiple years, and produced a report recommending a farmer-managed cooperative fund to make biological inputs accessible without upfront cost.`,
        },
        {
          heading: "What makes this interesting",
          text: `The challenge with regenerative transition programmes is that they often look good on paper but fall apart in the field. Farmers don't adopt, inputs aren't available, the economics don't add up. This project is specifically trying to address those gaps: testing the agronomy together with the people who farm the land, building the financial case honestly, and designing the distribution system in a way that farmers have ownership over. Whether it works is something we'll know in a few seasons. But the foundations are being built carefully, and together.`,
        },
      ],

      photos: [
        { src: "assets/projects/coffee/training.jpg", caption: "" },
        { src: "assets/projects/coffee/shovel.jpg", caption: "" },
        { src: "assets/projects/coffee/compost.jfif", caption: "" },
        { src: "assets/projects/coffee/bioL.jfif", caption: "" },
        { src: "assets/projects/coffee/collecting_data.jpg", caption: "" },
        { src: "assets/projects/coffee/pruning_tree.jpg", caption: "" },
        { src: "assets/projects/coffee/handshake.jpg", caption: "" },
      ],

      video: "",   // YouTube/Vimeo embed URL, or "" for none
      videoShowcase: true,  // links to the video showcase modal

      tags: ["Coffee Agronomy", "Agroecology", "Cooperative Fund", "Financial Modelling", "Farmer Assessment", "Champion Farmers"],
    },
  },


  // ──────────────────────────────────────────────────────────
  //  PROJECT 2: BLACK SOLDIER FLY — MBINGA
  // ──────────────────────────────────────────────────────────
  {
    id: "bsf",
    country: "Tanzania",
    year: "2024 – Ongoing",
    featured: false,

    card: {
      title: "Black Soldier Fly Business Pilot: Mbinga",
      coverPhoto: "assets/projects/bsf/with_net.JPG",
      bullets: [
        "BSF production systems design & implementation",
        "Consulting a local agronomist to build Mbinga's first BSF company",
        "Agricultural waste → protein & soil amendments",
        "Tracking systems & financial models for grant applications",
      ],
      tags: ["BSF", "Circular Economy", "Business Case"],
    },

    page: {
      title: "Black Soldier Fly Business Pilot: Mbinga",
      heroPhoto: "assets/projects/bsf/with_net.JPG",
      lead: `A pilot designed to prove the business case for Black Soldier Fly production in a smallholder context, converting agricultural waste into protein and biological soil amendments, with the data to back it up.`,

      sections: [
        {
          heading: "The idea",
          text: `Black Soldier Fly (BSF) larvae are extraordinarily efficient converters of organic waste. They eat almost anything: coffee husks, food scraps, manure. In return, they produce high-protein larval biomass for animal feed and frass that works as a powerful soil amendment. In a region like Mbinga, where waste streams are abundant and both protein and fertility are expensive, BSF has obvious potential. The question is always: can you make the economics work at smallholder scale?`,
        },
        {
          heading: "What I built",
          text: `I designed and implemented production systems from the ground up, including the breeding environments (which we call "love cages", a name that reliably gets a reaction from anyone new to BSF). Managing the full lifecycle requires understanding BSF behaviour in detail: temperature, humidity, light, substrate, egg collection, prepupae harvesting. It's more biology than most people expect.

Alongside the production systems, I developed data tracking tools to record inputs, outputs, survival rates, and conversion efficiency across the pilot. The goal was to generate the kind of evidence that could support a future grant application, not just to show that BSF works, but to show exactly how it performs under local conditions and what investment it requires.`,
        },
        {
          heading: "Consulting a local BSF business",
          text: `Beyond the pilot, I'm now consulting a local agronomist who is building what could become the first BSF company in Mbinga. My role is to help her grow the business, focusing on waste upcycling as the core model. It's exactly the kind of outcome I hope for in my projects: local ownership, local expertise, and a viable business that doesn't depend on outside support to keep running.`,
        },
        {
          heading: "Why it matters",
          text: `Closing nutrient loops at farm level is one of the most powerful levers in regenerative agriculture, and BSF is one of the most practical ways to do it. This pilot is laying the groundwork for a viable local business model that could eventually supply both animal feed and soil inputs to the wider Mbinga farming community, led by the people who live and work there.`,
        },
      ],

      photos: [
        { src: "assets/projects/bsf/sorting.jpg", caption: "" },
        { src: "assets/projects/bsf/mashing.jpg", caption: "", portrait: true },
        { src: "assets/projects/bsf/collecting.jpg", caption: "" },
      ],

      video: "",

      tags: ["Black Soldier Fly", "Circular Economy", "Business Case", "Data Tracking", "Soil Amendments", "Waste Upcycling", "Local Entrepreneurship"],
    },
  },


  // ──────────────────────────────────────────────────────────
  //  PROJECT 3: ECUADOR — MSc INTERNSHIP
  // ──────────────────────────────────────────────────────────
  {
    id: "ecuador",
    country: "Ecuador",
    year: "2023 · MSc Internship",
    featured: false,

    card: {
      title: "Agroecological Transitions: Andean Kichwa Farmers",
      coverPhoto: "assets/projects/ecuador/Interview_1.jfif",
      bullets: [
        "Internship with Fundación Maquita, Chimborazo Province",
        "Worked alongside Indigenous Kichwa smallholder farmers",
        "Co-designed workshops on composting & biological inputs with local communities",
        "Qualitative research on farmer decision-making & adoption barriers",
      ],
      tags: ["Agroecological Transition", "Kichwa Communities", "Fundación Maquita"],
    },

    page: {
      title: "Agroecological Transitions with Kichwa Farmers: Chimborazo, Ecuador 🇪🇨",
      heroPhoto: "assets/projects/ecuador/Interview_1.jfif",
      lead: `My MSc internship took me into the Andes with Fundación Maquita, a local Ecuadorian NGO, working alongside Indigenous Kichwa smallholder farmers who were in the process of reclaiming ancestral farming practices after decades of chemical dependency had left soils depleted and communities in poor health.`,

      sections: [
        {
          heading: "The context",
          text: `Many of these farmers had been heavily impacted by chemical agriculture, not just economically, but in terms of health. Cancer rates, depleted soils, dependency on external inputs they couldn't afford. The transition back to more ecological farming wasn't just about agronomy; it was about recovering knowledge, health, and autonomy. Hearing firsthand how much healthier, happier, and more food-secure farmers felt as they made the transition was genuinely moving.

One farmer said it simply: *"Before, we depended on chemicals, and it was economically difficult. Now, we have everything we need right here. Our food is healthy, richer, and tastier. I'm so grateful for this knowledge and practice."*`,
        },
        {
          heading: "What I worked on",
          text: `My role combined field implementation with qualitative research. On the practical side, I co-designed workshops with farmers on regenerative practices: composting, locally produced biological inputs, organic livestock treatments, greenhouse setup, water filter installation, and capacity-building in dairy processing (cheese and yogurt production). These weren't passive demonstrations delivered top-down; I was in the field with farmers, learning from their knowledge while sharing what I could offer.

On the research side, I conducted qualitative interviews and analysis to understand farmer decision-making, the social and economic barriers to agroecological transition, and what actually motivates adoption. The goal was to produce insights that the organisation could act on, not just an academic output.`,
        },
        {
          heading: "What stayed with me",
          text: `Working at a local Ecuadorian NGO in Spanish, adjusting to a different cultural context, and earning the trust of farming communities I knew nothing about. It was challenging at first, and then it became one of the most formative experiences of my career. The farmers I worked with were rediscovering indigenous potato varieties, growing their own beneficial microorganisms, and rebuilding knowledge systems that chemical agriculture had almost erased. Watching that happen is part of why I do this work.

The lessons from Ecuador, about adoption, trust, the gap between what experts recommend and what farmers actually do, continue to shape how I approach every project I take on. The best solutions aren't handed down; they're built together.`,
        },
      ],

      photos: [
        { src: "assets/projects/ecuador/Interview.jfif", caption: "" },
        { src: "assets/projects/ecuador/Team_Photo.jpg", caption: "" },
        { src: "assets/projects/ecuador/No_wifi.jpg", caption: "" },
        { src: "assets/projects/ecuador/farm_.jpg", caption: "" },
        { src: "assets/projects/ecuador/farm_plan.jpg", caption: "" },
        { src: "assets/projects/ecuador/Water_filter.jpg", caption: "" },
        { src: "assets/projects/ecuador/compost_tea.jpg", caption: "" },
      ],

      video: "",

      tags: ["Agroecological Transition", "Kichwa Communities", "Fundación Maquita", "Biological Inputs", "Qualitative Research", "Adoption Barriers", "Capacity Building"],
    },
  },


  // ──────────────────────────────────────────────────────────
  //  PROJECT 4: GAIN STUDENT CHALLENGE — MOZAMBIQUE
  // ──────────────────────────────────────────────────────────
  {
    id: "gain",
    country: "Mozambique",
    year: "2024 · GAIN Student Challenge · Winner",
    featured: false,

    card: {
      title: "GAIN Student Challenge: BSF for Farmers in Mozambique",
      coverPhoto: "assets/projects/GAIN/Presenting.jfif",
      bullets: [
        "Won the 2024 GAIN Student Challenge",
        "Nature-inspired BSF solution for protein access in rural Mozambique",
        "Empowering female farmers through home-grown insect feed",
        "Pitched to GAIN Executive Director & Chief Investment Officer",
      ],
      tags: ["GAIN", "Black Soldier Fly", "Food Security", "Bio-Inspired Innovation"],
    },

    page: {
      title: "GAIN Student Challenge: BSF for Farmers in Mozambique 🇲🇿",
      heroPhoto: "assets/projects/GAIN/Presenting.jfif",
      lead: `Our team won the 2024 GAIN Student Challenge with a nature-inspired solution tackling protein access and food security for rural communities in Mozambique. We designed a model that empowers female farmers in the Erati and Monapo regions to cultivate Black Soldier Fly larvae in their own compost, creating a home-grown, affordable source of nutrient-rich chicken feed.`,

      sections: [
        {
          heading: "The challenge",
          text: `The GAIN Student Challenge is an intense two-day competition that brings together students from diverse backgrounds and nationalities to tackle real nutritional challenges. Our brief focused on insufficient protein and limited access to animal-sourced foods in rural communities in Mozambique. The question was straightforward but tough: how do you improve nutrition in a context where resources are scarce, supply chains are fragile, and solutions need to work at household level?`,
        },
        {
          heading: "Our solution",
          text: `We designed a system where female farmers cultivate Black Soldier Fly larvae using locally available organic waste, right in their own compost. The larvae serve as a cheap, sustainable, nutrient-rich feed for chickens, boosting poultry yields while simultaneously improving compost quality. It's a closed-loop approach: waste becomes feed, feed becomes protein, and the by-product improves the soil. The result is a direct impact on food accessibility and livelihoods without dependence on expensive external inputs.

I contributed my background in biology and bio-inspired design, applying the kind of systems thinking and regenerative design philosophy I'd developed through my studies with Jaco Appelman at Utrecht University. That perspective helped shape our solution around natural cycles rather than conventional linear approaches. Collaborating with local students from Mozambique was essential: they brought firsthand knowledge of the context, and the solution was stronger because of it.`,
        },
        {
          heading: "The outcome",
          text: `We won the opportunity to present our ideas to Lawrence Haddad, Executive Director of GAIN, and Steve Godfrey, Chief Investment Officer. Hearing their positive feedback and genuine belief in the potential of our concept for real-world impact was a highlight. The knowledge that this idea might actually make a difference for communities in Mozambique is something I carry with me.

Working alongside an amazing team of students from different study backgrounds and nationalities made the experience even richer. It reminded me that the best ideas come from diverse teams who bring genuinely different perspectives to the table.`,
        },
      ],

      photos: [
        { src: "assets/projects/GAIN/classroom.jfif", caption: "" },
        { src: "assets/projects/GAIN/Group.jfif", caption: "" },
      ],

      video: "",

      tags: ["GAIN Student Challenge", "Black Soldier Fly", "Food Security", "Bio-Inspired Innovation", "Female Empowerment", "Circular Economy", "Mozambique"],
    },
  },


  // ──────────────────────────────────────────────────────────
  //  PROJECT 5: SURINAME — MSc THESIS
  // ──────────────────────────────────────────────────────────
  {
    id: "suriname",
    country: "Suriname",
    year: "2023 · MSc Thesis · Grade: 7.9",
    featured: false,

    card: {
      title: "Wildlife Tolerance & Indigenous Farming Systems: Suriname",
      coverPhoto: "assets/projects/suriname/lapotop_interview.jfif",
      coverPosition: "center 30%",
      bullets: [
        "Lived & worked with Wayana and Trio Indigenous communities",
        "Applied the Wildlife Tolerance Model in remote field conditions",
        "Qualitative interviews, participatory observation, daily immersion",
        "Thesis grade: 7.9. Co-author on upcoming publication",
      ],
      tags: ["Indigenous Knowledge", "Wildlife Tolerance Model", "MSc Thesis"],
    },

    page: {
      title: "Wildlife Tolerance & Indigenous Farming Systems: Suriname 🇸🇷",
      heroPhoto: "assets/projects/suriname/lapotop_interview.jfif",
      lead: `My MSc thesis took me to remote regions of Suriname to live and work alongside the Wayana and Trio Indigenous peoples, studying how smallholder farmers in these communities understand, tolerate, and coexist with crop-raiding wildlife. I'm a co-author on the publication that followed.`,

      sections: [
        {
          heading: "The research",
          text: `The project applied the Wildlife Tolerance Model to understand what drives tolerance, or the lack of it, toward crop-raiding animals in Maroon and Indigenous communities in Suriname's interior. This meant exploring not just the material impacts of wildlife on harvests, but the deeper social, cultural, and ecological values that shape how people relate to the animals around them.

In practice, that required qualitative interviews, participatory observation, and spending enough time in these communities that people actually talked to me honestly, which is harder than it sounds, and took longer than any methodology section admits.`,
        },
        {
          heading: "What I actually did",
          text: `Understanding a community starts far beyond books and a laptop. With the Wayana in Apetina, I was warmly welcomed from early on: taken on hunts, shown medicinal plants, and introduced to the daily rhythms of life in the forest. In Sipa, with the Trio people, integration took a bit longer, but I eventually felt even more like part of the community. There, I saw how deep their connection to the forest runs, and how strong the sense of collectivity is: everything is shared, from harvests to labour. Villagers help each other on their farms and get "paid" at the end of the day with a collective cassava beer.

Spending my free time harvesting cassava and playing football, opening myself up to their language, stories, and jokes, it worked. People began to share things I hadn't expected: deeply personal stories, sensitive cultural practices, complex political tensions within the community. Things they might never have said to an outsider without that shared sense of trust.`,
        },
        {
          heading: "What I took away",
          text: `Science isn't just about numbers, p-values, and data. The human story is essential to truly understanding what lives within a community. What I learned above all is how valuable genuine mutual trust is in sociological research. And that trust isn't built through interviews or surveys alone, but through sports, play, jokes, shared adventures, and a friendly cassava beer.

This experience shapes how I approach every project I work on now: practically, people-centred, and grounded in real field conditions. I am deeply grateful for the trust those communities placed in me and the knowledge they shared.

*Research conducted in collaboration with Utrecht University (supervisor: Ronja Knippers) and Amazon Conservation Team. Publication forthcoming; I am a co-author.*`,
        },
      ],

      photos: [
        { src: "assets/projects/suriname/boat.jfif", caption: "" },
        { src: "assets/projects/suriname/cassavaplant.jfif", caption: "" },
        { src: "assets/projects/suriname/cassava.jfif", caption: "" },
        { src: "assets/projects/suriname/airplan.jfif", caption: "" },
      ],

      video: "",

      tags: ["Wildlife Tolerance Model", "Indigenous Knowledge", "Wayana · Trio · Maroon", "Qualitative Research", "MSc Thesis", "Co-authored Publication", "Amazon Conservation Team"],
    },
  },


  // ──────────────────────────────────────────────────────────
  //  PROJECT 6: BIOMIMICRY DESIGN CHALLENGE — ECUADORIAN AMAZON
  // ──────────────────────────────────────────────────────────
  {
    id: "biomimicry",
    country: "Ecuador",
    year: "2025",
    featured: false,

    // ── CARD (shown in the project grid) ──
    card: {
      title: "Bio-Inspired Design Challenge: Ecuadorian Amazon",
      coverPhoto: "assets/projects/biomimicry/group.jfif",
      bullets: [
        "Initiated & organised a biomimicry design challenge at ESPOCH Macas",
        "Environmental Engineering students, many from Indigenous backgrounds",
        "One-week crash course: biological principles → practical design concepts",
        "Final symposium with international panel of Spanish-speaking experts",
      ],
      tags: ["Biomimicry", "Workshop Facilitation", "Bio-Inspired Design"],
    },

    // ── FULL PAGE (shown when project is opened) ──
    page: {
      title: "Bio-Inspired Design Challenge: Ecuadorian Amazon 🇪🇨",
      heroPhoto: "assets/projects/biomimicry/students.jfif",
      lead: `I initiated and organised a bio-inspired design challenge at ESPOCH Macas, a university located right in the Amazon rainforest. After getting a professor at ESPOCH enthusiastic about the idea, we built the challenge together from scratch, introducing Environmental Engineering students to biomimicry as a practical tool for solving sustainability challenges in their own ecosystems. Many of the students came from Indigenous backgrounds, and their connection to nature gave the whole experience a depth I hadn't expected.`,

      sections: [
        {
          heading: "The context",
          text: `Biomimicry, the practice of designing solutions by learning from nature's strategies, is a powerful framework, but it's rarely taught in universities outside of Europe and North America. In the Ecuadorian Amazon, surrounded by one of the most biodiverse ecosystems on the planet, the gap felt especially striking. These students live in the jungle. Their classrooms are surrounded by the very organisms that biomimicry draws inspiration from. The potential was obvious; the infrastructure to unlock it just wasn't there yet.

I reached out to a professor at ESPOCH Macas and managed to get him genuinely enthusiastic about the concept. Together we organised the challenge from the ground up. From the Netherlands, Jaco Appelman supported the initiative, and Biomimicry Granada offered the winning students the opportunity to dive further into the field.`,
        },
        {
          heading: "What I did",
          text: `I designed and delivered a week-long biomimicry crash course, guiding student teams through the full process, from observing biological principles to translating them into practical design concepts for challenges in agriculture and environmental management. My role covered project coordination, curriculum design, workshop facilitation, and hands-on mentoring of student teams throughout the design process.

At the end of the week, the students pitched their nature-inspired solutions to an international panel of Spanish-speaking experts. The winning team, a group of women representing all three of Ecuador's ecosystems (the coast, the Andes, and the Amazon), tackled the problem of humidity by mimicking the water-retaining capacity of local lichens. It showed a genuinely deep understanding of biomimicry, not just as a method but as a way of thinking.`,
        },
        {
          heading: "What made this special",
          text: `What stood out was how naturally biomimicry came to these students. They shared stories about their own connections to nature, taught me about native species I'd never heard of, and sometimes spoke in their own Indigenous languages to describe ecological concepts that don't translate neatly into Spanish. Surrounded by nature every day, they came up with ideas that felt fresher and more grounded than anything I've seen in a European classroom. Of course they did; their classroom is literally in the jungle.

Beyond the educational component, the project created a real bridge between academic learning and local environmental knowledge, encouraging students to look at their own ecosystems as sources of innovation rather than something separate from their studies. The university is now exploring the possibility of launching a Biomimicry Master's programme, and honestly, a campus in the Amazon rainforest might just be the best place in the world to study it.`,
        },
      ],

      photos: [
        { src: "assets/projects/biomimicry/students.jfif", caption: "" },
        { src: "assets/projects/biomimicry/listening_presentation.jfif", caption: "" },
        { src: "assets/projects/biomimicry/jury_panel.jfif", caption: "" },
        { src: "assets/projects/biomimicry/group.jfif", caption: "" },
      ],

      video: "",

      tags: ["Biomimicry", "Bio-Inspired Design", "Workshop Facilitation", "ESPOCH Macas", "Cross-Cultural Collaboration", "Participatory Education", "Amazon Rainforest"],
    },
  },


  // ──────────────────────────────────────────────────────────
  //  PROJECT 7: DE-BACTE — UTRECHT BIO-INSPIRED DESIGN CHALLENGE
  // ──────────────────────────────────────────────────────────
  {
    id: "debacte",
    country: "Netherlands",
    year: "2023 · Bio-Inspired Design Challenge · Winner",
    featured: false,

    card: {
      title: "De-Bacte: Shark-Inspired Drinking Water Innovation",
      coverPhoto: "assets/projects/shark biomimicry/winners photo.jfif",
      bullets: [
        "Won the Utrecht University Bio-Inspired Design Challenge 2023",
        "Tackled biofouling in Dutch drinking water systems",
        "Shark skin microstructures to prevent bacterial growth & reduce drag",
        "Awarded prize money, UtrechtInc incubator support & patent guidance",
      ],
      tags: ["Biomimicry", "Drinking Water", "Bio-Inspired Design", "Innovation"],
    },

    page: {
      title: "De-Bacte: Shark-Inspired Drinking Water Innovation 🦈",
      heroPhoto: "assets/projects/shark biomimicry/winners photo.jfif",
      lead: `Our team won the 2023 Bio-Inspired Design Challenge at Utrecht University, competing against all other master's students in a challenge to design a solution for any UN Sustainable Development Goal. We investigated the most prevalent issue with the Dutch drinking water system, biofouling, and found our answer by looking at the skin of sharks.`,

      sections: [
        {
          heading: "The problem",
          text: `Biofouling, the formation and build-up of bacteria inside water pipes, is one of the biggest challenges in drinking water infrastructure. It compromises water safety, increases energy consumption through added drag, and current solutions often rely on chlorine, which brings its own health and environmental concerns. We wanted to find a way to keep pipes clean without chemicals.`,
        },
        {
          heading: "Our solution",
          text: `We looked at how fast-swimming marine animals deal with the same problem. Sharks have evolved microstructures on their skin, tiny ridged patterns called dermal denticles, that prevent organisms from attaching and reduce hydrodynamic drag at the same time. Our design, De-Bacte, applies these microstructures to the interior surface of drinking water pipes, preventing biofilm formation while also reducing energy costs through lower drag. No chlorine, no chemicals, just a surface geometry that nature already perfected.

The approach was a genuine application of biomimicry: not just copying a shape, but understanding the biological principle behind it and translating it into an engineering context where it solves a real problem.`,
        },
        {
          heading: "The outcome",
          text: `De-Bacte was selected as the most promising bio-inspired solution by a jury of biomimicry experts, state patent specialists, and a university startup incubator expert. They recognised the scientific backing and potential impact of the innovation, and awarded us substantial prize money to develop a prototype and conduct experiments.

The challenge was a masterclass in biomimicry, teaching me about creativity within a collaborative environment. It sharpened my skills in design thinking, pitching, stakeholder analysis, and expert interviews. The competition was genuinely close, and every team presented creative and promising designs. That made winning it even more meaningful.

We were offered support from UtrechtInc, the university's startup incubator, and guidance from the patent office of the RVO to take De-Bacte further toward becoming a real product.`,
        },
      ],

      photos: [
        { src: "assets/projects/shark biomimicry/shark flow.png", caption: "" },
        { src: "assets/projects/shark biomimicry/antifouling.gif", caption: "" },
      ],

      video: "",

      tags: ["Biomimicry", "Bio-Inspired Design", "Drinking Water", "Biofouling", "Shark Skin", "Utrecht University", "UtrechtInc"],
    },
  },

];
