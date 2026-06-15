# 4Rent · strona internetowa

Industrialna strona-wizytówka firmy **4Rent Wypożyczalnia Maszyn Budowlanych sp. z o.o.**
(wynajem podestów ruchomych i ładowarek teleskopowych · Śląsk).

Całość to **jedna strona** (`index.html`) z płynnym przewijaniem do sekcji:
Oferta → Realizacje → Atuty → Obszar → O nas → Kontakt.

Zbudowana w czystym HTML + CSS + odrobinie JavaScriptu. Bez frameworków,
bez procesu budowania, bez zależności do instalowania. Wgrywasz pliki, gotowe.
Idealne pod **GitHub Pages**.

---

## Struktura plików

```
4rent-website/
├── index.html              ← CAŁA strona (wszystkie sekcje na jednej stronie)
├── artykuly.html           ← strona "Artykuły" (wszystkie wpisy na jednej stronie, pod SEO)
├── css/
│   └── styles.css          ← cały wygląd (kolory, układ, fonty, animacje)
├── js/
│   └── main.js             ← menu mobilne, podświetlanie nawigacji, animacje
└── assets/
    ├── logo-4r.svg         ← logo (emblemat 4R) jako czysty wektor
    ├── favicon.svg         ← ikonka strony (w karcie przeglądarki)
    ├── articles/           ← zdjęcia do artykułów
    └── photos/             ← zdjęcia maszyn (już dodane, instrukcja podmiany w środku)
        ├── hero.jpg
        ├── podest-nozycowy.jpg
        ├── podest-nozycowy-diesel.jpg
        ├── podest-przegubowy.jpg
        ├── podest-przegubowy-elektryczny.jpg
        ├── ladowarka-teleskopowa.jpg
        ├── ladowarka-obrotowa.jpg
        ├── realizacja-magazyn.jpg
        └── README.txt
```

---

## Podgląd na własnym komputerze

Kliknij dwukrotnie `index.html`, otworzy się w przeglądarce i zadziała w całości.
(Formularz kontaktowy otwiera program pocztowy, patrz sekcja „Formularz" niżej.)

---

## Publikacja na GitHub Pages

1. Załóż repozytorium na GitHub (np. `4rent-website`).
2. Wgraj **całą zawartość tego folderu** (pliki `index.html`, `css/`, `js/`,
   `assets/`) do głównego katalogu repozytorium, nie do podfolderu.
3. W repo: **Settings → Pages**.
4. W „Build and deployment" → **Source: Deploy from a branch**.
5. Wybierz gałąź **main** i folder **/ (root)**, kliknij **Save**.
6. Po chwili strona będzie pod adresem `https://twoja-nazwa.github.io/4rent-website/`.

### Własna domena (4-rent.com.pl)

1. W **Settings → Pages → Custom domain** wpisz `www.4-rent.com.pl` i zapisz
   (GitHub doda do repo plik `CNAME`).
2. U operatora domeny ustaw rekordy DNS:
   - **CNAME** dla `www` → `twoja-nazwa.github.io`
   - dla domeny głównej (bez `www`) cztery rekordy **A** na adresy GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Wróć do **Settings → Pages** i zaznacz **Enforce HTTPS** (po propagacji DNS).

---

## Edycja treści

Wszystko jest w `index.html`, posekcjonowane czytelnymi komentarzami
(`<!-- ===== OFERTA ===== -->` itd.). Otwórz plik w dowolnym edytorze tekstu
i zmień to, co chcesz: opisy maszyn, parametry, listę miast, dane kontaktowe.

- **Telefon / e-mail** zmieniasz w trzech miejscach: górny pasek, sekcja Kontakt,
  stopka. Szukaj `509238087` oraz `biuro@4-rent.com.pl`.
- **Parametry sprzętu** to wiersze `specs__row` w kartach oferty.
- **Miasta** to lista `city` w sekcji „Obszar".

## Zmiana kolorów

Kolory są zdefiniowane raz, na górze `css/styles.css`, w sekcji `:root`.
Najważniejsze:

```css
--navy:   #152F4F;   /* granat, kolor marki, tła sekcji */
--steel:  #52748F;   /* stal, kolor marki, detale */
--accent: #2E90E5;   /* azure, akcent (przyciski, podkreślenia, kropki) */
```

Zmieniasz wartość w jednym miejscu, zmienia się w całej stronie.

## Zdjęcia

Prawdziwe zdjęcia maszyn są już wgrane w `assets/photos/`. Żeby podmienić
któreś na lepsze (np. zdjęcia własnego sprzętu), podłóż plik o tej samej nazwie.
Szczegóły (zalecane wymiary, waga) w pliku `assets/photos/README.txt`.

## Artykuły (poradnik pod SEO)

Strona ma osobną zakładkę **Artykuły** (plik `artykuly.html`), dostępną z górnego
menu. Wszystkie wpisy są na tej jednej stronie, jeden pod drugim. To miejsce na
treści o maszynach, które z czasem pomogą stronie wybić się wyżej w Google
(im więcej wartościowych tekstów ze słowami, których szukają klienci, tym lepiej
dla pozycjonowania).

Jak dodać nowy artykuł (prosto, bez zakładania nowych plików):

1. Otwórz plik `artykuly.html`.
2. Znajdź dowolny blok artykułu, czyli fragment od `<article class="post">`
   do `</article>` (na stronie jest już 6 artykułów od Teresy).
3. Skopiuj cały ten blok i wklej go pod spodem (nad linią "KONIEC listy artykułów").
4. W nowym bloku wpisz: tytuł, kategorię i datę, a treść od Teresy wklej w środku
   `<div class="article__body">`: akapity w `<p>...</p>`, śródtytuły w `<h3>...</h3>`,
   listy w `<ul><li>...</li></ul>`.
6. Wgraj zmieniony plik na GitHub.

Wskazówka pod SEO: gdyby z czasem artykułów było dużo, każdy może stać się
osobną podstroną (wtedy każdy osobno pojawia się w wynikach Google). Układ jest
przygotowany tak, że taka zmiana będzie łatwa. Na początek jedna strona w zupełności
wystarcza.

## Fonty

Strona używa fontów Google (Saira Condensed, Hanken Grotesk, JetBrains Mono),
ładowanych automatycznie z internetu, nic nie trzeba instalować.

## Formularz kontaktowy

Formularz w sekcji Kontakt działa przez **mailto**: po wysłaniu otwiera program
pocztowy klienta z gotową, uzupełnioną wiadomością do `biuro@4-rent.com.pl`.
Nie wymaga serwera ani backendu, działa na GitHub Pages od razu.

Jeśli wolisz, żeby zgłoszenia przychodziły bez otwierania poczty (klasyczny
formularz wysyłany w tle), można go podłączyć pod darmową usługę typu
**Formspree** lub **Getform** (wystarczy podmienić obsługę wysyłki). Daj znać.
