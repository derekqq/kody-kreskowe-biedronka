# 🛒 Kody z Biedry — Darmowa baza kodów kreskowych EAN produktów z Biedronki

[![Website](https://img.shields.io/badge/🌐_Strona-kodyzbiedry.pl-green?style=for-the-badge)](https://kodyzbiedry.pl)
[![Products](https://img.shields.io/badge/Produkty-85_000+-blue?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**[kodyzbiedry.pl](https://kodyzbiedry.pl)** to największa w Polsce **darmowa baza kodów kreskowych EAN** produktów z sieci sklepów **Biedronka**. Projekt open-source — **zapraszamy do współpracy!** 🤝

---

## 📋 O projekcie

Szukasz **kodu kreskowego produktu z Biedronki**? Chcesz sprawdzić **cenę produktu**, zobaczyć **historię cen** albo dowiedzieć się, czy warto czekać na **promocję**? **Kody z Biedry** to narzędzie stworzone z myślą o klientach Biedronki, którzy chcą robić **mądrzejsze zakupy**.

Projekt powstał, bo brakowało w internecie prostego narzędzia do **wyszukiwania kodów EAN produktów z Biedronki**. W bazie mamy ponad **85 000 zweryfikowanych produktów** z aktualnymi cenami, zdjęciami i pełnymi opisami. Ceny aktualizowane są codziennie, a **przeceny śledzone 24/7**.

### Co możesz zrobić na stronie?

- 🔍 **Wyszukać produkt** po nazwie, kodzie kreskowym EAN lub kategorii
- 📸 **Zeskanować kod kreskowy** telefonem — skieruj kamerę na kod i od razu zobaczysz cenę
- 📊 **Sprawdzić historię cen** — zobacz wykres jak zmieniała się cena w czasie
- 🔥 **Znaleźć najlepsze przeceny** — codziennie aktualizowana lista produktów z największą obniżką
- 🚚 **Znaleźć najbliższy outlet/truck** — sprawdź gdzie jest outlet Biedronki lub truck outletowy
- 📱 **Zainstalować jako aplikację** — działa jako PWA, dodaj do ekranu głównego telefonu

---

## 🔢 Czym jest kod kreskowy EAN?

**Kod kreskowy EAN** (European Article Number) to unikalny numer identyfikujący produkt w sklepie. Każdy produkt w Biedronce posiada swój **kod EAN** — to te czarne kreski z cyframi na opakowaniu. Standardowy **kod EAN-13** składa się z 13 cyfr i zawiera informacje o kraju pochodzenia, producencie oraz samym produkcie.

W Biedronce obok kodów EAN spotkasz też **kody PLU** (Price Look-Up) — to krótkie kody numeryczne (zwykle 4-5 cyfr) używane na **kasach samoobsługowych** do ważenia owoców, warzyw i pieczywa na wagę. Na [kodyzbiedry.pl](https://kodyzbiedry.pl) znajdziesz zarówno produkty z **kodami kreskowymi EAN**, jak i z **kodami PLU**.

### Gdzie jest kod kreskowy na produkcie?

Kod kreskowy znajdziesz najczęściej na **tylnej lub dolnej stronie opakowania**. Na butelkach — zazwyczaj na **etykiecie z tyłu**. Na owocach i warzywach luzem — na **małej naklejce**. Jeśli nie możesz znaleźć kodu, sprawdź nasz [poradnik →](https://kodyzbiedry.pl/blog/gdzie-jest-kod-kreskowy-na-produkcie-poradnik/)

---

## 📸 Skaner kodów kreskowych

Wbudowany **skaner kodów kreskowych online** pozwala zeskanować dowolny produkt aparatem w telefonie — bez instalowania żadnej aplikacji. Wystarczy wejść na **[kodyzbiedry.pl/skaner](https://kodyzbiedry.pl/skaner/)**, zezwolić na kamerę i skierować aparat na kod kreskowy.

Skaner odczytuje kody **EAN-13**, **EAN-8**, **UPC-A** oraz **kody QR**. Działa na każdym smartfonie z przeglądarką — Android, iPhone, Samsung, Xiaomi, Huawei. Nie wymaga instalacji — to **skaner kodów kreskowych online za darmo**.

---

## 🔥 Przeceny w Biedronce

Codziennie monitorujemy ceny produktów i automatycznie wykrywamy **największe przeceny i obniżki**. Na stronie **[najlepsze przeceny z 24h](https://kodyzbiedry.pl/najlepsze-przeceny-z-24h/)** zobaczysz produkty, które dzisiaj spadły o największy procent — często nawet **50-90% taniej**!

Możesz filtrować przeceny po:
- **Minimalnym % obniżki** (np. tylko powyżej 30%)
- **Kategorii** (nabiał, napoje, mięso, słodycze...)
- **Cenie** — od najtańszych

---

## 📊 Statystyki

| Metryka | Wartość |
|---------|---------|
| Produkty w bazie | **85 000+** |
| Zweryfikowane EAN-y | **85 000+** |
| Kody PLU (owoce, warzywa, pieczywo) | **500+** |
| Aktualizacja cen | **Codziennie** |
| Przeceny śledzone | **24/7** |
| Dostęp | **Darmowy, bez rejestracji** |

---

## 🏗️ Technologie

| Warstwa | Technologia |
|---------|-------------|
| Frontend | Gatsby 5 (React), TypeScript |
| Backend | Node.js, Express, TypeScript |
| Baza danych | MongoDB |
| Cache | Redis |
| CDN | Cloudflare |
| Skaner | Web Camera API (MediaDevices) |
| PWA | Service Worker, manifest.json |

---

## 📖 Jak korzystać

### Wyszukiwarka produktów
1. Wejdź na **[kodyzbiedry.pl](https://kodyzbiedry.pl)**
2. Wpisz **nazwę produktu**, **kod EAN** lub **kod PLU** w wyszukiwarkę
3. Kliknij na produkt — zobaczysz cenę, zdjęcie, opis i historię cen

### Skaner kodów kreskowych
1. Wejdź na **[kodyzbiedry.pl/skaner](https://kodyzbiedry.pl/skaner/)**
2. Zezwól na dostęp do kamery
3. Skieruj aparat na **kod kreskowy** produktu
4. Gotowe! Od razu zobaczysz cenę i informacje

### Najlepsze przeceny dnia
1. Wejdź na **[kodyzbiedry.pl/najlepsze-przeceny-z-24h](https://kodyzbiedry.pl/najlepsze-przeceny-z-24h/)**
2. Przeglądaj produkty od największej obniżki
3. Sprawdź ile oszczędzasz na każdym produkcie

---

## 🤔 FAQ — Najczęściej zadawane pytania

<details>
<summary><strong>Czy korzystanie z kodyzbiedry.pl jest darmowe?</strong></summary>
Tak! Strona jest w pełni darmowa — bez rejestracji, bez opłat i bez reklam. Wyszukiwarka produktów, skaner kodów kreskowych, historia cen i przeceny — wszystko za darmo.
</details>

<details>
<summary><strong>Jak zeskanować kod kreskowy w Biedronce?</strong></summary>
Wejdź na <a href="https://kodyzbiedry.pl/skaner/">kodyzbiedry.pl/skaner</a> w przeglądarce na telefonie, zezwól na kamerę i skieruj aparat na kod kreskowy produktu. Nie musisz niczego instalować — skaner działa online w przeglądarce.
</details>

<details>
<summary><strong>Jak często aktualizowane są ceny produktów?</strong></summary>
Ceny produktów aktualizujemy codziennie. System monitoringu przecen działa 24/7 i wykrywa obniżki automatycznie.
</details>

<details>
<summary><strong>Co to jest kod PLU i gdzie go wpisać?</strong></summary>
Kod PLU (Price Look-Up) to krótki numer (4-5 cyfr) używany na kasach samoobsługowych do ważenia owoców, warzyw i pieczywa. Wpisz go w wyszukiwarkę na stronie głównej <a href="https://kodyzbiedry.pl">kodyzbiedry.pl</a>.
</details>

<details>
<summary><strong>Jak sprawdzić cenę produktu w Biedronce?</strong></summary>
Masz kilka opcji: 1) Wpisz nazwę produktu w wyszukiwarkę na <a href="https://kodyzbiedry.pl">kodyzbiedry.pl</a>, 2) Zeskanuj kod kreskowy skanerem, 3) Wpisz kod EAN (13 cyfr z opakowania) w wyszukiwarkę. Zobaczysz aktualną cenę i historię zmian.
</details>

<details>
<summary><strong>Skąd pochodzą dane o produktach?</strong></summary>
Dane pochodzą z publicznie dostępnych źródeł sieci Biedronka, baz GS1 (międzynarodowy rejestr kodów kreskowych EAN) oraz ze skanów użytkowników. Wszystkie produkty są weryfikowane.
</details>

<details>
<summary><strong>Czy macie aplikację mobilną?</strong></summary>
Strona działa jako PWA (Progressive Web App) — możesz dodać ją do ekranu głównego telefonu i korzystać jak z natywnej aplikacji. Działa offline, szybko się ładuje i ma ikonę jak zwykła apka. Natywna aplikacja mobilna jest w planach.
</details>

<details>
<summary><strong>Gdzie znajdę kod kreskowy na produkcie?</strong></summary>
Kod kreskowy znajduje się najczęściej na tylnej lub dolnej stronie opakowania. Na butelkach — na etykiecie z tyłu. Na puszkach — na dnie lub boku. Na owocach luzem — na małej naklejce. Przeczytaj nasz <a href="https://kodyzbiedry.pl/blog/gdzie-jest-kod-kreskowy-na-produkcie-poradnik/">szczegółowy poradnik</a>.
</details>

---

## 📝 Blog — poradniki i artykuły

Publikujemy poradniki o **kodach kreskowych**, **zakupach w Biedronce**, **kasach samoobsługowych** i **oszczędzaniu na zakupach**:

- 📍 [Gdzie jest kod kreskowy na produkcie? Poradnik](https://kodyzbiedry.pl/blog/gdzie-jest-kod-kreskowy-na-produkcie-poradnik/) — jak znaleźć kod kreskowy na różnych opakowaniach
- 🔢 [Kody PLU w Biedronce — pełna lista owoców, warzyw i pieczywa](https://kodyzbiedry.pl/blog/kody-plu-biedronka-pelna-lista-owoce-warzywa-pieczywo/) — wszystkie kody PLU do kas samoobsługowych
- 🔍 [Jak odczytać kod kreskowy EAN? Co oznaczają cyfry?](https://kodyzbiedry.pl/blog/jak-odczytac-kod-kreskowy-ean-co-oznaczaja-cyfry/) — budowa kodu EAN-13 krok po kroku
- 🛒 [Kasa samoobsługowa w Biedronce — poradnik skanowania](https://kodyzbiedry.pl/blog/kasa-samoobslugowa-biedronka-poradnik-skanowania/) — jak korzystać z kasy samoobsługowej
- 💰 [Jak sprawdzić cenę produktu w Biedronce po kodzie kreskowym?](https://kodyzbiedry.pl/blog/jak-sprawdzic-cene-produktu-biedronka-kod-kreskowy/) — poradnik krok po kroku

👉 **[Więcej artykułów na blogu →](https://kodyzbiedry.pl/blog/)**

---

## 🤝 Zapraszamy do współpracy!

**Kody z Biedry** to projekt open-source i **szukamy osób, które chcą go rozwijać!** Niezależnie czy jesteś programistą, designerem, testerem czy po prostu chcesz pomóc — jest wiele sposobów na zaangażowanie się.

### Jak możesz pomóc?

- ⭐ **Zostaw gwiazdkę** — to najprostszy sposób wsparcia, pomaga w widoczności projektu
- 🐛 **Zgłoś błąd** — widzisz coś nie tak? [Otwórz Issue](https://github.com/derekAllegro/kody-kreskowe-biedronka/issues/new)
- 💡 **Zaproponuj funkcję** — masz pomysł na nową funkcjonalność? Opisz ją w Issue
- 🔧 **Wyślij Pull Request** — poprawki, nowe funkcje, tłumaczenia
- 📣 **Udostępnij** — podziel się projektem ze znajomymi, na forach, w social media

### 💡 Pomysły na kontrybucje

Szukasz inspiracji co możesz zrobić? Oto lista pomysłów:

| Pomysł | Opis | Trudność |
|--------|------|----------|
| 🤖 Bot do Discorda | Bot wysyłający codzienne przeceny na kanał Discord | ⭐⭐ |
| 📱 Bot Telegram | Bot do sprawdzania cen i przecen przez Telegram | ⭐⭐ |
| 📊 Dashboard przecen | Wizualizacja trendów cenowych w Biedronce | ⭐⭐⭐ |
| 🎙️ Asystent głosowy | Integracja z Alexa / Google Home | ⭐⭐⭐ |
| 📱 Aplikacja mobilna | Natywna apka React Native / Flutter | ⭐⭐⭐⭐ |
| 🧩 Rozszerzenie Chrome | Extension pokazujący ceny z Biedronki | ⭐⭐ |
| 🐍 Wrapper Python | Biblioteka Python do łatwego korzystania z danych | ⭐⭐ |
| 📋 Lista zakupów | Tworzenie list zakupów z obliczaniem kosztów | ⭐⭐⭐ |

Przeczytaj [CONTRIBUTING.md](CONTRIBUTING.md) żeby dowiedzieć się więcej o procesie kontrybucji.

---

## 📬 Kontakt

- 🌐 Strona: **[kodyzbiedry.pl](https://kodyzbiedry.pl)**
- 📧 Kontakt: przez [formularz na stronie](https://kodyzbiedry.pl)
- 🐛 Zgłoś błąd: [GitHub Issues](https://github.com/derekAllegro/kody-kreskowe-biedronka/issues)

## 📄 Licencja

Ten projekt jest udostępniony na licencji MIT. Szczegóły w pliku [LICENSE](LICENSE).

---

## 🔑 Słowa kluczowe

`kody kreskowe biedronka` · `kod EAN biedronka` · `skaner kodów kreskowych` · `ceny produktów biedronka` · `historia cen biedronka` · `przeceny biedronka` · `kody PLU biedronka` · `kasa samoobsługowa biedronka` · `kod kreskowy produktu` · `sprawdź cenę biedronka` · `promocje biedronka` · `obniżki biedronka` · `EAN-13` · `wyszukiwarka produktów biedronka` · `baza kodów kreskowych` · `gdzie jest kod kreskowy`

---

<p align="center">
  <strong>⭐ Jeśli projekt Ci się podoba, zostaw gwiazdkę! Każda gwiazdka pomaga!</strong><br><br>
  <a href="https://kodyzbiedry.pl">🌐 kodyzbiedry.pl</a> — Twoja darmowa baza kodów kreskowych z Biedronki<br>
  <sub>Baza kodów EAN · Skaner kodów kreskowych · Historia cen · Przeceny · Kody PLU · Kasa samoobsługowa</sub>
</p>
