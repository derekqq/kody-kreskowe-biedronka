"""
Przykład użycia API kodyzbiedry.pl w Pythonie.
Pobiera dzisiejsze top przeceny i wyświetla je w konsoli.
"""

import requests


def get_price_drops(min_drop: int = 20, limit: int = 10):
    """Pobierz aktualne przeceny z Biedronki."""
    url = "https://api.kodyzbiedry.pl/api/recent-price-drops"
    params = {
        "minDropPercent": min_drop,
        "sortBy": "dropPercent",
        "sortOrder": "desc",
        "limit": limit,
        "groupDuplicates": "true",
    }

    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()["data"]


def get_product(ean: str):
    """Pobierz szczegóły produktu po kodzie EAN."""
    url = f"https://api.kodyzbiedry.pl/api/products/{ean}"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()["data"]


def main():
    print("🔥 Dzisiejsze TOP przeceny w Biedronce\n")
    print("-" * 60)

    data = get_price_drops(min_drop=25, limit=10)

    for i, drop in enumerate(data["drops"], 1):
        pct = round(drop["dropPercent"])
        print(
            f"{i:2}. {drop['name'][:45]:<45} "
            f"{drop['previousPrice']:>6.2f} → {drop['currentPrice']:>6.2f} zł "
            f"(-{pct}%)"
        )

    print("-" * 60)
    stats = data["stats"]
    print(f"\n📊 Łącznie przecen: {stats['totalDrops']}")
    print(f"   Średnia obniżka: {stats['avgDropPercent']:.1f}%")
    print(f"   Max obniżka: {stats['maxDropPercent']:.1f}%")
    print(f"\n🔗 Więcej na: https://kodyzbiedry.pl/najlepsze-przeceny-z-24h/")


if __name__ == "__main__":
    main()
