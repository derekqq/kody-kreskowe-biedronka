# 📡 API Dokumentacja — kodyzbiedry.pl

Publiczne API do wyszukiwania produktów, sprawdzania cen i śledzenia przecen w sieci Biedronka.

**Base URL:** `https://api.kodyzbiedry.pl`

**Limity:** 60 requestów / minutę (bez klucza API)

---

## 📦 Produkty

### Wyszukaj produkty

```
GET /api/products?search={query}&limit={limit}&page={page}
```

| Parametr | Typ | Domyślnie | Opis |
|----------|-----|-----------|------|
| `search` | string | — | Szukaj po nazwie lub EAN |
| `category` | string | — | Filtruj po kategorii |
| `page` | number | 1 | Numer strony |
| `limit` | number | 20 | Wyników na stronę (max 100) |
| `sort` | string | — | Sortowanie |

**Przykład:**
```bash
curl "https://api.kodyzbiedry.pl/api/products?search=mleko&limit=5"
```

---

### Pobierz produkt po EAN

```
GET /api/products/{ean}
```

**Przykład:**
```bash
curl https://api.kodyzbiedry.pl/api/products/5901234123457
```

**Odpowiedź:**
```json
{
  "success": true,
  "data": {
    "ean": "5901234123457",
    "name": "Cukier Słodka Łyżeczka 1kg",
    "price": 1.99,
    "image": "https://assets.prod.biedronka.cloud/products/resized/156159_105.webp",
    "category": "Inne",
    "existsInBiedronka": true,
    "description": "Biały cukier kryształ z buraków cukrowych...",
    "metaDescription": "CUKIER SŁODKA ŁYŻECZKA 1kg, kod EAN 5901234123457..."
  }
}
```

---

## 🔥 Przeceny

### Dzisiejsze przeceny

```
GET /api/recent-price-drops
```

| Parametr | Typ | Domyślnie | Opis |
|----------|-----|-----------|------|
| `minDropPercent` | number | 5 | Minimalna obniżka (%) |
| `maxDropPercent` | number | — | Maksymalna obniżka (%) |
| `category` | string | — | Filtruj po kategorii |
| `page` | number | 1 | Numer strony |
| `limit` | number | 30 | Wyników na stronę (max 100) |
| `sortBy` | string | `dropPercent` | `dropPercent` / `dropAbsolute` / `currentPrice` / `recordedAt` |
| `sortOrder` | string | `desc` | `asc` / `desc` |
| `groupDuplicates` | boolean | true | Grupuj duplikaty |

**Przykład:**
```bash
# Top 10 przecen powyżej 30%
curl "https://api.kodyzbiedry.pl/api/recent-price-drops?minDropPercent=30&limit=10&sortBy=dropPercent&sortOrder=desc"
```

**Odpowiedź:**
```json
{
  "success": true,
  "data": {
    "drops": [
      {
        "ean": "5906702209367",
        "name": "Gusto Bello Cannoli z pistacją 150g",
        "category": "Inne",
        "image": "https://img.kodyzbiedry.pl/i/example.webp",
        "previousPrice": 14.99,
        "currentPrice": 2.99,
        "dropAbsolute": 12.00,
        "dropPercent": 80.05,
        "recordedAt": "2026-03-11T01:08:26.374Z"
      }
    ],
    "total": 297,
    "page": 1,
    "totalPages": 30,
    "stats": {
      "totalDrops": 297,
      "avgDropPercent": 41.05,
      "maxDropPercent": 94.42,
      "dropsOver50": 68
    }
  }
}
```

---

## 📈 Historia cen

### Pobierz historię cen produktu

```
GET /api/price-history/{ean}
```

| Parametr | Typ | Domyślnie | Opis |
|----------|-----|-----------|------|
| `days` | number | 90 | Ile dni wstecz |
| `limit` | number | 365 | Max rekordów |

**Przykład:**
```bash
curl "https://api.kodyzbiedry.pl/api/price-history/5901234123457?days=30"
```

---

## 📸 Skan produktu

### Zeskanuj produkt w sklepie

```
POST /api/public/scan/{ean}?storeId={storeId}
```

| Parametr | Typ | Wymagany | Opis |
|----------|-----|----------|------|
| `ean` | string | ✅ | Kod EAN produktu |
| `storeId` | string | ✅ | ID sklepu Biedronka |

**Limit:** 5 requestów / minutę

---

## 🏪 Sklepy

### Lista sklepów

```
GET /api/public/stores?page={page}&limit={limit}
```

### Wyszukaj sklep

```
GET /api/public/stores/search?q={query}&limit={limit}
```

**Przykład:**
```bash
# Szukaj sklepów w Warszawie
curl "https://api.kodyzbiedry.pl/api/public/stores/search?q=Warszawa&limit=5"
```

### Lista miast

```
GET /api/public/stores/cities
```

---

## 📰 Blog

### Lista artykułów

```
GET /api/blog/public?page={page}&limit={limit}
```

### Pojedynczy artykuł

```
GET /api/blog/public/{slug}
```

**Przykład:**
```bash
curl https://api.kodyzbiedry.pl/api/blog/public/kody-plu-biedronka-pelna-lista-owoce-warzywa-pieczywo
```

---

## 🏥 Health Check

```
GET /api/health
```

Zwraca status API, wersję i informacje o połączeniach.

---

## ⚠️ Limity i zasady

- **Rate limit:** 60 req/min (bez klucza API)
- **Cache:** Odpowiedzi są cache'owane 10 min — 24h w zależności od endpointu
- **Format:** Wszystkie odpowiedzi w JSON
- **Encoding:** UTF-8
- **CORS:** Włączony dla wszystkich domen

### Kody odpowiedzi

| Kod | Znaczenie |
|-----|-----------|
| 200 | OK |
| 400 | Błędne parametry |
| 404 | Nie znaleziono |
| 429 | Zbyt wiele requestów (rate limit) |
| 500 | Błąd serwera |

---

## 💡 Przykłady użycia

### Python
```python
import requests

# Pobierz przeceny
response = requests.get(
    "https://api.kodyzbiedry.pl/api/recent-price-drops",
    params={"minDropPercent": 30, "limit": 5}
)
drops = response.json()["data"]["drops"]

for drop in drops:
    print(f"{drop['name']}: {drop['previousPrice']} → {drop['currentPrice']} zł (-{drop['dropPercent']:.0f}%)")
```

### JavaScript
```javascript
const res = await fetch(
  'https://api.kodyzbiedry.pl/api/recent-price-drops?minDropPercent=30&limit=5'
);
const { data } = await res.json();

data.drops.forEach(drop => {
  console.log(`${drop.name}: ${drop.currentPrice} zł (-${Math.round(drop.dropPercent)}%)`);
});
```

### cURL
```bash
# Dzisiejsze top przeceny
curl -s "https://api.kodyzbiedry.pl/api/recent-price-drops?minDropPercent=20&limit=10" | jq '.data.drops[] | {name, currentPrice, dropPercent}'
```

---

<p align="center">
  <a href="https://kodyzbiedry.pl">🌐 kodyzbiedry.pl</a> — Darmowa baza kodów kreskowych z Biedronki
</p>
