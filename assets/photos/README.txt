====================================================================
 4RENT — JAK DODAĆ WŁASNE ZDJĘCIA MASZYN
====================================================================

Strona jest dostarczona z autorskimi ilustracjami technicznymi maszyn
(folder assets/equipment/*.svg). Wyglądają spójnie i działają od razu,
ale w każdej chwili możesz podmienić je na PRAWDZIWE ZDJĘCIA sprzętu.
Ten folder (assets/photos/) jest na to przygotowany.


--------------------------------------------------------------------
 1. PRZYGOTUJ ZDJĘCIA
--------------------------------------------------------------------
Zalecane:
  • Format:        JPG (zdjęcia) lub WEBP (mniejszy rozmiar, nowoczesny)
  • Wymiary:       ok. 1200 x 950 px (proporcje zbliżone do 4:3)
  • Waga pliku:    poniżej 300 KB na zdjęcie (skompresuj przed wgraniem,
                   np. na squoosh.app albo tinypng.com)
  • Tło:           najlepiej jasne, jednolite lub plac/budowa —
                   maszyna wyraźnie na pierwszym planie
  • Kadr:          cała maszyna w kadrze, podobne ujęcie dla każdego typu
                   (spójność = bardziej profesjonalny efekt)

Proponowane nazwy plików (małe litery, bez spacji i polskich znaków):
  podest-nozycowy.jpg            — podest nożycowy
  podest-przegubowy.jpg          — podest teleskopowo-przegubowy
  ladowarka-teleskopowa.jpg      — ładowarka teleskopowa klasyczna
  ladowarka-obrotowa.jpg         — ładowarka teleskopowa obrotowa 360°

Wgraj te pliki TUTAJ, do folderu assets/photos/.


--------------------------------------------------------------------
 2. PODMIEŃ ILUSTRACJE NA ZDJĘCIA W KODZIE
--------------------------------------------------------------------
W plikach HTML znajdź odwołania do "assets/equipment/...svg"
i zmień je na "assets/photos/...jpg".

Przykład — BYŁO:
  <img src="assets/equipment/podest-nozycowy.svg" alt="Podest nożycowy elektryczny">

Ma być:
  <img src="assets/photos/podest-nozycowy.jpg" alt="Podest nożycowy elektryczny">

(Sam tekst alt="..." zostaw — opisuje maszynę dla Google i osób
niewidomych. Atrybuty width/height/loading też możesz zostawić.)


--------------------------------------------------------------------
 3. GDZIE DOKŁADNIE SĄ TE ODWOŁANIA (pełna lista)
--------------------------------------------------------------------
Możesz podmieniać pojedynczo lub wszystkie naraz.

index.html
  • hero (duża grafika na górze)          — podest-przegubowy.svg
  • sekcja "split" (2 kafle usług)        — podest-nozycowy.svg,
                                            ladowarka-obrotowa.svg
  • katalog "Nasz sprzęt" (6 kart):
       podest nożycowy elektr.            — podest-nozycowy.svg
       podest nożycowy diesel             — podest-nozycowy.svg
       podest przegubowy elektr.          — podest-przegubowy.svg
       podest przegubowy diesel           — podest-przegubowy.svg
       ładowarka teleskopowa              — ladowarka-teleskopowa.svg
       ładowarka obrotowa 360°            — ladowarka-obrotowa.svg

podesty-ruchome.html  (4 sekcje produktowe)
       podest nożycowy elektr. / diesel   — podest-nozycowy.svg (x2)
       podest przegubowy elektr. / diesel — podest-przegubowy.svg (x2)

ladowarki-teleskopowe.html  (2 sekcje produktowe)
       ładowarka klasyczna                — ladowarka-teleskopowa.svg
       ładowarka obrotowa 360°            — ladowarka-obrotowa.svg

WSKAZÓWKA: w wielu edytorach (np. VS Code) możesz użyć funkcji
"Zamień we wszystkich plikach" (Ctrl+Shift+H) i podmienić np.
   assets/equipment/podest-nozycowy.svg
na assets/photos/podest-nozycowy.jpg
jednym kliknięciem we wszystkich stronach.


--------------------------------------------------------------------
 4. MOŻESZ MIESZAĆ
--------------------------------------------------------------------
Nie musisz mieć od razu wszystkich zdjęć. Możesz np. wstawić realne
zdjęcia podestów, a ładowarki zostawić jako ilustracje SVG — strona
nadal będzie wyglądać spójnie. Podmieniaj stopniowo.

W razie wątpliwości zachowaj kopię oryginalnych plików SVG
(folder assets/equipment/ zostaje — nic z niego nie usuwaj).
====================================================================
