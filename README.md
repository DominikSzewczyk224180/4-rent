# 4Rent — strona internetowa

Statyczna, industrialna strona firmy **4Rent Wypożyczalnia Maszyn Budowlanych sp. z o.o.**
(wynajem podestów ruchomych i ładowarek teleskopowych — Śląsk).

Zbudowana w czystym HTML + CSS + odrobinie JavaScriptu. Bez frameworków,
bez procesu budowania (build), bez zależności do instalowania. Pliki wgrywasz
i działa — idealne pod **GitHub Pages**.

---

## Struktura plików

```
4rent-website/
├── index.html                  ← strona główna
├── podesty-ruchome.html        ← oferta: podesty ruchome
├── ladowarki-teleskopowe.html  ← oferta: ładowarki teleskopowe
├── kontakt.html                ← kontakt + formularz zapytania
├── css/
│   └── styles.css              ← cały wygląd strony (kolory, układ, fonty)
├── js/
│   └── main.js                 ← menu mobilne, animacje, drobna interaktywność
└── assets/
    ├── favicon.svg             ← ikonka strony (w karcie przeglądarki)
    ├── equipment/              ← autorskie ilustracje maszyn (SVG)
    │   ├── podest-nozycowy.svg
    │   ├── podest-przegubowy.svg
    │   ├── ladowarka-teleskopowa.svg
    │   └── ladowarka-obrotowa.svg
    └── photos/                 ← tu wgrasz prawdziwe zdjęcia (instrukcja w środku)
        └── README.txt
```

---

## Jak uruchomić lokalnie (podgląd na własnym komputerze)

Najprościej: kliknij dwukrotnie `index.html` — otworzy się w przeglądarce.

Wszystkie podstrony i style zadziałają. (Formularz kontaktowy otwiera
program pocztowy — patrz sekcja „Formularz" niżej.)

---

## Jak wrzucić na GitHub Pages (publikacja w internecie)

1. Załóż repozytorium na GitHub (np. `4rent-website`).
2. Wgraj do niego **całą zawartość tego folderu** (pliki `index.html`,
   `css/`, `js/`, `assets/` itd. mają leżeć w głównym katalogu repo —
   NIE w podfolderze).
3. W repozytorium wejdź w **Settings → Pages**.
4. W sekcji „Build and deployment" → „Source" wybierz **Deploy from a branch**.
5. Branch: wybierz `main` (lub `master`), folder: `/ (root)`. Kliknij **Save**.
6. Poczekaj ~1 minutę. Na górze strony Pages pojawi się adres, np.
   `https://twoja-nazwa.github.io/4rent-website/` — to Twoja strona online.

### Własna domena (np. www.4-rent.com.pl)
W **Settings → Pages → Custom domain** wpisz swoją domenę i zapisz.
Następnie u operatora domeny ustaw rekordy DNS zgodnie z instrukcją
GitHuba (CNAME na `twoja-nazwa.github.io` lub rekordy A na adresy GitHub Pages).
Zaznacz też „Enforce HTTPS".

---

## Jak edytować treści

Treść jest wpisana wprost w plikach `.html` — otwórz dowolny w edytorze
(np. darmowy **VS Code** lub nawet Notatnik) i zmień tekst między znacznikami.
Przykład:

```html
<h2 class="h-lg">Nasz sprzęt</h2>     ←  zmień tekst tutaj
```

**Telefon i e-mail** powtarzają się w kilku miejscach (nagłówek, stopka,
sekcje kontaktowe). Jeśli będziesz je zmieniać, podmień wszędzie:
- telefon w linkach: `tel:+48509238087` oraz wyświetlany `509 238 087`
- e-mail w linkach: `mailto:biuro@4-rent.com.pl` oraz wyświetlany `biuro@4-rent.com.pl`

Najszybciej: w VS Code użyj „Zamień we wszystkich plikach" (Ctrl+Shift+H).

---

## Jak zmienić kolory i fonty

Cała kolorystyka jest sterowana z jednego miejsca — góra pliku
`css/styles.css`, sekcja `:root`. Zmieniasz wartość w jednym miejscu,
a kolor aktualizuje się na całej stronie. Najważniejsze:

```css
:root {
  --navy:   #152F4F;   /* główny granat marki      */
  --steel:  #52748F;   /* stalowy niebieski         */
  --amber:  #f5a623;   /* akcent (przyciski, detale) */
  --concrete: #f1f0ec; /* jasne tło sekcji          */
  ...
  --font-display: "Saira Condensed", ...;  /* nagłówki         */
  --font-body:    "Hanken Grotesk", ...;   /* tekst            */
  --font-mono:    "JetBrains Mono", ...;   /* dane techniczne  */
}
```

Fonty pobierane są z Google Fonts — odnośnik (`<link ... fonts.googleapis>`)
znajdziesz w sekcji `<head>` każdej strony. Jeśli zmienisz font na inny
z Google Fonts, podmień zarówno ten odnośnik, jak i nazwę w `--font-...`.

---

## Zdjęcia maszyn

Strona ma gotowe, spójne **ilustracje techniczne** maszyn (folder
`assets/equipment/`). Działają od razu. Gdy będziesz mieć prawdziwe
zdjęcia sprzętu — pełna instrukcja podmiany jest w pliku
**`assets/photos/README.txt`**.

---

## Formularz kontaktowy

GitHub Pages serwuje wyłącznie pliki statyczne (nie ma serwera/PHP),
dlatego formularz na stronie `kontakt.html` działa przez **mailto**:
po wypełnieniu i kliknięciu „Wyślij zapytanie" otwiera się domyślny
program pocztowy z gotową, uzupełnioną wiadomością do `biuro@4-rent.com.pl`,
którą klient już tylko wysyła. Pod formularzem jest też telefon jako
szybsza alternatywa.

Jeśli w przyszłości chcesz, by formularz wysyłał się „sam" w tle (bez
otwierania poczty) i zbierał zgłoszenia, można podpiąć darmową usługę
typu **Formspree** lub **Getform** — wystarczy wtedy drobna zmiana w
`kontakt.html`. Daj znać, jeśli będzie potrzebne.

---

## Dane firmy (dla porządku)

- 4Rent Wypożyczalnia Maszyn Budowlanych sp. z o.o.
- NIP: 6472595920 · KRS: 0000934178 · REGON: 520513790
- tel. 509 238 087 · biuro@4-rent.com.pl
