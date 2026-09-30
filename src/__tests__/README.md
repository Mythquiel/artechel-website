# Testy projektu Artechel

## Struktura testów

Testy są zorganizowane w katalogu `src/__tests__/components/` i pokrywają kluczowe komponenty aplikacji.

## Uruchamianie testów

```bash
# Uruchomienie testów w trybie watch (domyślnie)
npm test

# Uruchomienie testów jeden raz
npm test -- --run

# Uruchomienie testów z interfejsem UI
npm run test:ui

# Uruchomienie testów z raportem pokrycia
npm run test:coverage
```

## Pokrycie testami

### Komponenty podstawowe
- **Card** - reużywalny komponent karty (3 testy)
- **Hero** - sekcja hero z godzinami otwarcia (4 testy)
- **Gate** - bramka z hasłem (3 testy)
- **TopBar** - górna nawigacja (3 testy)
- **Footer** - stopka strony (2 testy)
- **ReviewWidget** - widget opinii Google (3 testy)

### Sekcje
- **ShopSection** - sekcja oferty sklepu (4 testy)
- **InsuranceSection** - sekcja ubezpieczeń (4 testy)
- **AboutSection** - sekcja "O nas" (4 testy)

**Łącznie: 30 testów w 9 plikach**

## Stack technologiczny

- **Vitest** - framework testowy (kompatybilny z Vite)
- **React Testing Library** - testowanie komponentów React
- **@testing-library/jest-dom** - dodatkowe matchery
- **@testing-library/user-event** - symulacja interakcji użytkownika
- **jsdom** - środowisko DOM dla testów

## Wskazówki

- Wszystkie testy używają `describe`, `it`, `expect` z Vitest
- Komponenty są renderowane za pomocą `render` z React Testing Library
- Używamy `screen` do wyszukiwania elementów w DOM
- Testy sprawdzają zarówno renderowanie, jak i podstawową funkcjonalność

## Dodawanie nowych testów

1. Utwórz plik `*.test.jsx` w katalogu `src/__tests__/components/`
2. Zaimportuj niezbędne narzędzia z Vitest i Testing Library
3. Napisz testy zgodnie z wzorcem AAA (Arrange-Act-Assert)
4. Uruchom testy: `npm test`
