# 🛒 Kody z Biedry — Darmowa baza kodów kreskowych EAN produktów z Biedronki

[![Website](https://img.shields.io/badge/🌐_Strona-kodyzbiedry.pl-green?style=for-the-badge)](https://kodyzbiedry.pl)
[![Products](https://img.shields.io/badge/Produkty-85_000+-blue?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**[kodyzbiedry.pl](https://kodyzbiedry.pl)** to największa darmowa baza kodów kreskowych EAN produktów dostępnych w sieci sklepów Biedronka. Sprawdź cenę, historię cen, zeskanuj kod kreskowy telefonem i znajdź najlepsze przeceny.

---

## ✨ Funkcje

- 🔍 **Wyszukiwarka produktów** — szukaj po nazwie, kodzie EAN lub kategorii
- 📸 **Skaner kodów kreskowych** — zeskanuj produkt aparatem w telefonie i sprawdź cenę
- 📊 **Historia cen** — śledź jak zmieniały się ceny produktów w czasie
- 🔥 **Przeceny dnia** — codziennie aktualizowana lista największych obniżek
- 📱 **PWA** — działa jak aplikacja na telefonie (dodaj do ekranu głównego)
- 🗺️ **Mapa sklepów** — znajdź najbliższą Biedronkę

## 📊 Statystyki

| Metryka | Wartość |
|---------|---------|
| Produkty w bazie | **85 000+** |
| Produkty zweryfikowane | **85 000+** |
| Aktualizacja cen | **Codziennie** |
| Przeceny śledzone | **24/7** |
| Dostęp | **Darmowy, bez rejestracji** |

## 🔗 Darmowe API

Udostępniamy publiczne API do wyszukiwania produktów i sprawdzania cen. Idealne do integracji z aplikacjami zakupowymi, porównywarkami cen czy projektami edukacyjnymi.

👉 **[Pełna dokumentacja API →](API.md)**

### Szybki start

```bash
# Wyszukaj produkt po EAN
curl https://api.kodyzbiedry.pl/api/products/5901234123457

# Pobierz dzisiejsze przeceny (min. 20% taniej)
curl "https://api.kodyzbiedry.pl/api/recent-price-drops?minDropPercent=20&limit=10"

# Sprawdź historię cen
curl "https://api.kodyzbiedry.pl/api/price-history/5901234123457?days=90"

# Wyszukaj produkty
curl "https://api.kodyzbiedry.pl/api/products?search=mleko&limit=10"
```

### Przykładowa odpowiedź — przeceny

```json
{
  "success": true,
  "data": {
    "drops": [
      {
        "ean": "5906702209367",
        "name": "Gusto Bello Cannoli z pistacją 150g",
        "image": "https://img.kodyzbiedry.pl/i/example.webp",
        "previousPrice": 14.99,
        "currentPrice": 2.99,
        "dropPercent": 80.05
      }
    ],
    "total": 297,
    "stats": {
      "avgDropPercent": 41.05,
      "maxDropPercent": 94.42,
      "dropsOver50": 68
    }
  }
}
```

## 🏗️ Technologie

| Warstwa | Technologia |
|---------|-------------|
| Frontend | Gatsby 5 (React), TypeScript |
| Backend / API | Node.js, Express, TypeScript |
| Baza danych | MongoDB |
| Cache | Redis |
| Hosting | VPS + Cloudflare CDN |
| Skaner | Web API (Camera) |

## 📖 Jak korzystać

### Na stronie
1. Wejdź na **[kodyzbiedry.pl](https://kodyzbiedry.pl)**
2. Wpisz nazwę produktu lub kod EAN w wyszukiwarkę
3. Kliknij na produkt aby zobaczyć szczegóły, cenę i historię cen

### Skaner kodów
1. Wejdź na **[kodyzbiedry.pl/skaner](https://kodyzbiedry.pl/skaner/)**
2. Zezwól na dostęp do kamery
3. Skieruj aparat na kod kreskowy produktu
4. Gotowe! Zobaczysz cenę i informacje o produkcie

### Przeceny
1. Wejdź na **[kodyzbiedry.pl/najlepsze-przeceny-z-24h](https://kodyzbiedry.pl/najlepsze-przeceny-z-24h/)**
2. Przeglądaj produkty posortowane od największej obniżki
3. Filtruj po kategorii lub minimalnym % obniżki

## 🤔 FAQ

<details>
<summary><strong>Czy korzystanie jest darmowe?</strong></summary>
Tak! Strona i API są w pełni darmowe, bez rejestracji i bez reklam.
</details>

<details>
<summary><strong>Jak często aktualizowane są ceny?</strong></summary>
Ceny produktów aktualizujemy codziennie. Przeceny sprawdzane są co godzinę.
</details>

<details>
<summary><strong>Skąd bierzecie dane?</strong></summary>
Dane pochodzą z publicznego API sieci Biedronka oraz z baz GS1 (kody EAN). Wszystkie informacje są publicznie dostępne.
</details>

<details>
<summary><strong>Czy mogę użyć API w swoim projekcie?</strong></summary>
Tak! API jest publiczne. Prosimy jedynie o rozsądne korzystanie (max 60 req/min). Przy większych potrzebach skontaktuj się z nami.
</details>

<details>
<summary><strong>Czy macie aplikację mobilną?</strong></summary>
Strona działa jako PWA — możesz dodać ją do ekranu głównego telefonu i korzystać jak z natywnej aplikacji. Natywna aplikacja jest w planach.
</details>

## 📝 Blog

Publikujemy poradniki i artykuły o kodach kreskowych, zakupach w Biedronce i oszczędzaniu:

- [Gdzie jest kod kreskowy na produkcie? Poradnik](https://kodyzbiedry.pl/blog/gdzie-jest-kod-kreskowy-na-produkcie-poradnik/)
- [Kody PLU w Biedronce — pełna lista](https://kodyzbiedry.pl/blog/kody-plu-biedronka-pelna-lista-owoce-warzywa-pieczywo/)
- [Jak odczytać kod kreskowy EAN?](https://kodyzbiedry.pl/blog/jak-odczytac-kod-kreskowy-ean-co-oznaczaja-cyfry/)
- [Kasa samoobsługowa w Biedronce — poradnik](https://kodyzbiedry.pl/blog/kasa-samoobslugowa-biedronka-poradnik-skanowania/)
- [Jak sprawdzić cenę produktu po kodzie kreskowym?](https://kodyzbiedry.pl/blog/jak-sprawdzic-cene-produktu-biedronka-kod-kreskowy/)

👉 **[Więcej artykułów →](https://kodyzbiedry.pl/blog/)**

## 📬 Kontakt

- 🌐 Strona: [kodyzbiedry.pl](https://kodyzbiedry.pl)
- 📧 Kontakt: przez formularz na stronie
- 🐛 Błędy: [Issues](https://github.com/USER/kody-kreskowe-biedronka/issues)

## 📄 Licencja

Ten projekt jest udostępniony na licencji MIT. Szczegóły w pliku [LICENSE](LICENSE).

---

<p align="center">
  <strong>⭐ Jeśli projekt Ci się podoba, zostaw gwiazdkę!</strong><br>
  <a href="https://kodyzbiedry.pl">kodyzbiedry.pl</a> — Twoja darmowa baza kodów kreskowych z Biedronki
</p>
