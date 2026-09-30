// ====== DANE FIRMY — uzupełnij prawdziwymi ======
export const FIRMA = {
  nazwa: "Dorota Świtała",
  podtytul: "Art. Techniczne, Motoryzacyjne i Elektryczne · Ubezpieczenia",
  telefon: "68 388 84 54",
  email: "artechel@wp.pl",
  adres: "ul. Kościelna 1a, 67-124 Nowe Miasteczko",
  godziny: [
    ["Pon–Pt", "8:30–16:00"],
    ["Sobota", "9:00–13:00"],
    ["Niedziela", "nieczynne"],
  ],
};

// Adres usługi odbierającej formularz, np. Formspree: "https://formspree.io/f/xxxxxxxx"
// Dopóki jest pusty, przycisk otworzy program pocztowy z gotową wiadomością.
export const ENDPOINT_FORMULARZA = "https://formspree.io/f/mljdvppe";

// Link do wizytówki firmy w Google Maps (Udostępnij → Kopiuj link). Puste = wyszukiwarka Google.
export const GOOGLE_LINK = "https://share.google/0bwJuWNNPAPvWnjUD";

// Prawdziwe opinie wklejaj tutaj, np. { autor: "Anna K.", ocena: 5, tekst: "Miła obsługa." }
export const OPINIE = [];

export const SKLEP = [
  {
    t: "Artykuły elektryczne",
    d: "Kompleksowa oferta materiałów elektroinstalacyjnych i osprzętu elektrycznego. Znajdziesz u nas wszystko, czego potrzebujesz do instalacji elektrycznej w domu czy mieszkaniu – gniazdka, wyłączniki, przewody, kable oraz inne niezbędne elementy instalacji.",
    emoji: "💡"
  },
  {
    t: "Baterie i akumulatory",
    d: "Bogaty asortyment baterii jednorazowych i akumulatorów do pilotów, zegarków, zabawek, aparatów słuchowych oraz urządzeń elektronicznych. Oferujemy baterie wszystkich popularnych rozmiarów (AAA, AA, C, D, 9V) oraz akumulatory wielokrotnego ładowania.",
    emoji: "🔋"
  },
  {
    t: "Akcesoria rowerowe",
    d: "Wszystko dla rowerzystów – lampki, dzwonki, blokady, kaski, pompki, dętki, liczniki rowerowe oraz drobne części zamienne. Zarówno dla miłośników codziennych przejażdżek, jak i wymagających cyklistów.",
    emoji: "🚴"
  },
  {
    t: "Małe AGD i artykuły gospodarstwa domowego",
    d: "Praktyczne sprzęty AGD ułatwiające codzienne życie – czajniki, tostery, grzejniki, wentylatory oraz szeroki wybór drobnych artykułów dla domu. Doradzamy przy wyborze urządzeń dostosowanych do Twoich potrzeb.",
    emoji: "🏠"
  },
];

export const UBEZP = [
  {
    t: "Ubezpieczenia komunikacyjne",
    d: "Kompleksowa obsługa w zakresie ubezpieczeń OC, AC oraz assistance dla samochodów osobowych, ciężarowych i motocykli. Pomożemy Ci wybrać najkorzystniejszą ofertę spośród wielu towarzystw ubezpieczeniowych.",
    emoji: "🚙"
  },
  {
    t: "Ubezpieczenia majątkowe",
    d: "Ochrona Twojego domu, mieszkania i mienia domowego. Ubezpieczenia od ognia, zalania, kradzieży i innych zdarzeń losowych. Indywidualne dopasowanie zakresu ochrony do Twoich potrzeb i możliwości finansowych.",
    emoji: "🏡"
  },
  {
    t: "Fachowe doradztwo",
    d: "Wieloletnie doświadczenie w branży ubezpieczeniowej pozwala nam profesjonalnie doradzić i dobrać optymalną ochronę ubezpieczeniową. Pomożemy w razie szkody i przeprowadzimy przez cały proces likwidacji.",
    emoji: "📋"
  },
];

// Widżet opinii z Google (getreviewwidget.com). Skrypt ładuje się wewnątrz własnego kontenera.
export const REVIEW_WIDGET_ID = "17a45725-7e89-4968-8947-adcf1018f523";
