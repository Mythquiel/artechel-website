# Instrukcja dodawania zdjęć do strony

Strona zawiera obecnie 2 placeholdery na zdjęcia, które czekają na dodanie prawdziwych obrazów.

## Lokalizacja placeholderów

### 1. Zdjęcie sklepu z zewnątrz
**Lokalizacja:** Sekcja między Hero a ofertą sklepu
**Plik:** `src/components/ImageGallery/ImageGallery.jsx`
**Linia:** 9-17
**Sugerowane zdjęcie:** Fasada sklepu, wejście, szyld

### 2. Zdjęcie wnętrza/właścicielki
**Lokalizacja:** Sekcja "O nas"
**Plik:** `src/components/sections/AboutSection.jsx`
**Linia:** 35-43
**Sugerowane zdjęcie:** Wnętrze sklepu, właścicielka, półki z produktami

## Jak dodać zdjęcia?

### Krok 1: Przygotuj zdjęcia
- Format: JPG lub WebP (dla lepszej wydajności)
- Rozmiar:
  - Zdjęcie 1 (galeria): 1200x675px (16:9)
  - Zdjęcie 2 (o nas): 800x1000px (3:4)
- Optymalizuj zdjęcia przed dodaniem (np. używając TinyPNG)

### Krok 2: Dodaj zdjęcia do projektu
Umieść zdjęcia w katalogu `public/images/`:
```
public/
  └── images/
      ├── sklep-zewnatrz.jpg
      └── sklep-wnetrze.jpg
```

### Krok 3: Zamień placeholder w ImageGallery
W pliku `src/components/ImageGallery/ImageGallery.jsx`:

**Przed:**
```jsx
<div className="image-placeholder">
  <div className="placeholder-content">
    <svg>...</svg>
    <p>Miejsce na zdjęcie sklepu z zewnątrz</p>
  </div>
</div>
```

**Po:**
```jsx
<img
  src="/images/sklep-zewnatrz.jpg"
  alt="Sklep - widok z zewnątrz"
  loading="lazy"
/>
```

### Krok 4: Zamień placeholder w AboutSection
W pliku `src/components/sections/AboutSection.jsx`:

**Przed:**
```jsx
<div className="image-placeholder">
  <div className="placeholder-content">
    <svg>...</svg>
    <p>Miejsce na zdjęcie sklepu / wnętrza</p>
  </div>
</div>
```

**Po:**
```jsx
<img
  src="/images/sklep-wnetrze.jpg"
  alt="Wnętrze sklepu Artechel"
  loading="lazy"
/>
```

### Krok 5: Zaktualizuj style (jeśli potrzeba)
Dodaj style dla obrazów w odpowiednich plikach CSS:

**ImageGallery.css:**
```css
.gallery-grid img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(29, 43, 36, 0.12);
  object-fit: cover;
}
```

**AboutSection.css:**
```css
.about img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(29, 43, 36, 0.12);
  object-fit: cover;
}
```

## Format WebP (opcjonalnie, dla lepszej wydajności)

Możesz użyć formatu WebP z fallbackiem:

```jsx
<picture>
  <source srcSet="/images/sklep-zewnatrz.webp" type="image/webp" />
  <img
    src="/images/sklep-zewnatrz.jpg"
    alt="Sklep - widok z zewnątrz"
    loading="lazy"
  />
</picture>
```

## Narzędzia do optymalizacji zdjęć

- [TinyPNG](https://tinypng.com/) - kompresja JPG/PNG
- [Squoosh](https://squoosh.app/) - konwersja do WebP
- [ImageOptim](https://imageoptim.com/) - optymalizacja na Mac
- CLI: `npm install -g sharp-cli` - przetwarzanie wsadowe

## Checklist

- [ ] Przygotowałem 2 zdjęcia w odpowiednich wymiarach
- [ ] Zoptymalizowałem zdjęcia (< 200KB każde)
- [ ] Umieściłem zdjęcia w `public/images/`
- [ ] Zamieniłem placeholdery na elementy `<img>`
- [ ] Dodałem odpowiednie atrybuty `alt` dla dostępności
- [ ] Dodałem `loading="lazy"` dla lepszej wydajności
- [ ] Przetestowałem lokalnie (`npm run dev`)
- [ ] Zbudowałem projekt (`npm run build`)
