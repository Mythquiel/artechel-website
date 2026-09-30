# Artechel — Strona firmowa

Strona internetowa dla sklepu Art. Techniczne, Motoryzacyjne i Elektryczne w Nowym Miasteczku.

## O projekcie

Rodzinny sklep z ponad 35-letnią tradycją oferujący:
- Artykuły elektryczne i oświetlenie
- Baterie i akumulatory
- Artykuły motoryzacyjne
- Akcesoria rowerowe
- Małe AGD
- Ubezpieczenia majątkowe

## Technologie

- **React 19.2** — biblioteka UI
- **Vite 8** — bundler i dev server
- **Formspree** — obsługa formularza kontaktowego
- **Vitest** — framework testowy
- **React Testing Library** — testowanie komponentów
- **CSS** — stylowanie (bez frameworków)

## Struktura projektu

```
src/
├── main.jsx                      # Punkt wejścia aplikacji
├── App.jsx                       # Główny komponent (40 linii)
├── App.css                       # Główne style (52 linie)
├── config/
│   └── company.js                # Konfiguracja danych firmy
├── components/
│   ├── Gate/                     # Komponent bramki z hasłem
│   ├── ReviewWidget/             # Widget opinii Google
│   ├── Layout/                   # TopBar + Footer
│   ├── Hero/                     # Sekcja hero
│   ├── Card/                     # Reużywalny komponent karty
│   ├── ContactForm/              # Formularz kontaktowy
│   └── sections/                 # 5 sekcji strony
├── styles/                       # Współdzielone style
│   ├── variables.css
│   ├── buttons.css
│   └── sections.css
└── __tests__/                    # 30 testów w 9 plikach
    └── components/
```

## Rozwój lokalny

```bash
# Instalacja zależności
npm install

# Uruchomienie dev servera
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu
npm run preview

# Linting
npm run lint
```

## Testowanie

```bash
# Uruchomienie testów w trybie watch
npm test

# Uruchomienie testów jeden raz
npm test -- --run

# Testy z interfejsem UI
npm run test:ui

# Testy z raportem pokrycia
npm run test:coverage
```

**Pokrycie testami:**
- 30 testów w 9 plikach
- ~63% pokrycia linii kodu
- Wszystkie kluczowe komponenty przetestowane

## Refaktoryzacja

Projekt został zrefaktoryzowany z monolitycznej struktury do modularnej architektury:

### Przed:
- App.jsx: 438 linii
- App.css: 818 linii
- 3 pliki łącznie

### Po:
- App.jsx: 40 linii (91% redukcja)
- App.css: 52 linii (94% redukcja)
- 29 plików łącznie

### Korzyści:
- ✅ Łatwiejsza modyfikacja i utrzymanie
- ✅ Reużywalność komponentów
- ✅ Separacja odpowiedzialności
- ✅ Centralna konfiguracja
- ✅ Łatwe testowanie
- ✅ Lepsze code review

## Konfiguracja

### Dane firmy
Edytuj `src/config/company.js` aby zaktualizować:
- Dane kontaktowe
- Godziny otwarcia
- Ofertę sklepu
- Ubezpieczenia

### Formularz kontaktowy
Używa [Formspree](https://formspree.io/). Zaktualizuj `ENDPOINT_FORMULARZA` w `company.js`.

### Widget opinii
Używa [GetReviewWidget.com](https://getreviewwidget.com/). Zaktualizuj `REVIEW_WIDGET_ID` w `company.js`.

### Bramka z hasłem
Strona zawiera tymczasową bramkę z hasłem.

Aby usunąć bramkę:
1. Usuń import `Gate` w `App.jsx`
2. Usuń logikę warunkowego renderowania
3. Usuń katalog `src/components/Gate/`

## Wdrożenie

Strona jest wdrażana automatycznie na **GitHub Pages** przy każdym push do gałęzi `main`.

URL: `https://Mythquiel.github.io/artechel/`

## Kontakt

**Magda**
Email: ma.switala@gmail.com

## Licencja

© 2026 Mythquiel. Wszelkie prawa zastrzeżone.
