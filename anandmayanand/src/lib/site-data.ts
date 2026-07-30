// Central content source. Keeping real organisational copy here (rather than
// scattered inline strings) means every page pulls from one source of truth —
// swap this file for a CMS query later without touching component code.

export const site = {
  name: "Shree Guru Dr. Anandmayanand",
  domain: "drswamianandmayanand.com",
  tagline: "Aatma Milan — Sankalp Siddhi",
  description:
    "Dharma, Dhyaan, Divya Gyan: a global spiritual mission for self-awakening, meditation and human welfare, guided by H.H. Shree Guru Dr. Anandmayanand.",
};

export const guru = {
  name: "H.H. Shree Guru Dr. Anandmayanand",
  formerName: "Vijay Raj — known to Vaishnav devotees as Vijay Krishna Shastri",
  origin: "Nathdwara, Rajasthan",
  quote:
    "Those who leave everything in God's hand, will eventually see God's hand in everything.",
  bio: [
    "Shree Guru hails from Nathdwara, a renowned pilgrim town in Rajasthan for devotees of Shree Krishna. He grew up in this holy place and completed his schooling and graduation — B.A. Honours (Sanskrit) — followed by a post-graduation, M.A. (Sanskrit), from M.L.S. University, Udaipur, Rajasthan.",
    "He studied law at M.S. University, Vadodara, Gujarat, and later acquired a doctorate in Astrology from M.L.S. University, Udaipur.",
    "When Shree Guru was six months old, he was blessed with Thakur Ji's divine brilliance and sat on the Vyaspith from early childhood. At the age of eighteen, he awakened the primal energy within him through deep meditation — after which he could perceive his previous births while meditating.",
    "Since then, Shree Guru has been imparting Bhagwat Katha and Ram Katha not only throughout India but across the world, carrying Indian spiritual culture to as many people as possible.",
  ],
  belief:
    "He believes that no spiritual discourse or culture is greater than service to humanity — Gau Seva (service of the cow) and Prabhu Seva (service of God).",
};

export const timeline = [
  {
    year: "Childhood",
    title: "Blessed at Nathdwara",
    text: "At six months old, blessed with Thakur Ji's divine brilliance; seated on the Vyaspith from early childhood.",
  },
  {
    year: "Age 18",
    title: "Awakening of primal energy",
    text: "Through deep meditation, awakened the primal energy within and began perceiving previous births while meditating.",
  },
  {
    year: "Education",
    title: "Sanskrit, Law & Astrology",
    text: "B.A. Honours and M.A. in Sanskrit (M.L.S. University, Udaipur), Law (M.S. University, Vadodara), and a Doctorate in Astrology (M.L.S. University, Udaipur).",
  },
  {
    year: "Global Mission",
    title: "Bhagwat Katha & Ram Katha worldwide",
    text: "Began imparting Bhagwat Katha and Ram Katha across India and internationally, spreading Indian spiritual culture globally.",
  },
];

export const aatmaMilanPillars = [
  {
    key: "dharma",
    hindi: "धर्म",
    title: "Religion",
    subtitle: "Astrology, Navgrah Dhyaan Sadhana",
    description:
      "Grounding practice in astrology and planetary meditation (Navgrah Dhyaan Sadhana) as the first pillar of self-awakening.",
  },
  {
    key: "dhyaan",
    hindi: "ध्यान",
    title: "Meditation",
    subtitle: "Yog, Dhyaan, Bindu Dhyaan, Kundalini Jagran, Shaktipaat Kriya, Sudarshan Kriya, Shiv Yog, Hatha Yog, Raj Yog",
    description:
      "A complete meditative system spanning bindu-focus, kundalini awakening, shaktipaat and multiple yogic disciplines.",
  },
  {
    key: "gyan",
    hindi: "दिव्यज्ञान",
    title: "Divine Knowledge",
    subtitle: "Bhaagvat Katha, Ram Katha & Satsang",
    description:
      "Discourse and collective satsang drawn from the Bhagavatam and Ramayana, carrying scriptural wisdom into daily life.",
  },
];

export const aatmaMilanBenefits = [
  "Reduced stress, anxiety and irritability",
  "Mental, physical and emotional balance",
  "Improved health & strengthened immune system",
  "Inner peace and joy",
  "Improving concentration and memory",
  "Improvement of communication skills",
  "Giving up self-defeating habits and lifestyle",
  "Promoting better sleep",
  "Strengthening one's self-esteem and self-confidence",
  "Awakening of collective consciousness to optimize human potential",
  "Overcoming divisive patterns between individuals, communities and cultures",
];

export const hospital = {
  name: "SBK Cancer Charitable Hospital",
  campaign: "Hospital of Hope",
  trust: "Radhesharanam Manav Kalyan Charitable Trust",
  intro:
    "No mother sees her child suffer from cancer. A charitable cancer hospital and research campus, built on the belief that healing belongs to everyone regardless of means.",
  facilities: [
    {
      title: "Naturopathy",
      items: "Therapy rooms, massage, diet centre, physiotherapy, pharmacy",
    },
    {
      title: "Spiritual & Holistic Center",
      items: "Reception, waiting area, restaurant, conference hall",
    },
    {
      title: "100 Rooms Luxury Hotel & 50 VVIP Rooms",
      items: "Lounge, restaurant, bar counters, guest area, conference rooms",
    },
    {
      title: "Cancer Research & Development Center",
      items: "Laboratories, conference room, lecture rooms, blood bank, store room",
    },
  ],
  donation: {
    accountName: "Radhe Sharnam Manav Kalyan Charitable Trust",
    accountNo: "03841450000082",
    ifsc: "HDFC0000384",
    taxNote:
      "Donation is exempt under Section 80G of the Income Tax Act, 1961 (Vide No. CIT/UDAI/2012-13/1575/13.08.2012).",
    address: "Shree Guru Dham, Sundar Vilas Kund Ke Paas, Nathdwara, Rajasamand, Rajasthan 313301, India",
    phones: ["+91-7373894646", "+91-8980798888"],
    email: "sbkcancercharitablehospital@gmail.com",
  },
};

export const contact = {
  registrationPhones: ["+91-9898176662", "+91-9998539835"],
  registrationEmail: "dranandmay@gmail.com",
  legacySites: ["www.shreeguru.co", "www.shreeguru.info"],
};

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Guru",
    href: "/about-guru",
    megaMenu: [
      { label: "Biography", href: "/about-guru#biography" },
      { label: "Timeline", href: "/about-guru#timeline" },
      { label: "Mission & Vision", href: "/about-guru#mission" },
      { label: "Gallery", href: "/about-guru#gallery" },
    ],
  },
  {
    label: "Aatma Milan",
    href: "/aatma-milan",
    megaMenu: [
      { label: "Introduction", href: "/aatma-milan#intro" },
      { label: "Sankalp Siddhi", href: "/aatma-milan#sankalp-siddhi" },
      { label: "Benefits", href: "/aatma-milan#benefits" },
      { label: "How It Works", href: "/aatma-milan#how-it-works" },
      { label: "Join Program", href: "/aatma-milan#join" },
    ],
  },
  { label: "Meditation", href: "/meditation" },
  { label: "Events", href: "/events" },
  { label: "Hospital Project", href: "/hospital-project" },
  { label: "Charity", href: "/charity" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
