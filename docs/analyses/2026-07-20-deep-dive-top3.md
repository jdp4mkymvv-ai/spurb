# Deep-dive top 3 — session du 2026-07-20

Réponse à la question : « sur quoi se base la sélection ? ». Ce document trace la méthodologie complète, les données brutes par candidat, et les vérifications restantes avant décision d'investissement.

## 1. L'entonnoir de sélection (traçable, reproductible)

| Étape | Volume | Critère appliqué |
|---|---|---|
| Base TrendTrack | 1,3 M boutiques | — |
| Requête filtrée | **288** | marché principal FR, 10k-500k visites/mois, croissance 30j ≥ 50 %, ≥ 5 ads actives Meta |
| Page 1 analysée | 20 | tri par croissance décroissante |
| Candidats profil « produit gagnant » | 5 | ≤ 30 produits au catalogue, ads ≥ 70, prix ≥ 25 €, boutique < 24 mois |
| Retenus avec fiche | 3 | scoring framework ≥ 20/25 |

Écartés nominativement (et pourquoi) : minasbeauty + bionethik (marché algérien, DZD), plagron (B2B growshop), vivace (parfums AED, hors marché), laprovidence (wholesale B2B), mcb-paris + kalyora + moi-et-marie (marques établies, pas des produits testables), noelse (fintech), brunomars (merch officiel), airton (marque clim installée), on-sky (« Clоudtіlt » avec caractères cyrilliques dans le titre = contrefaçon On Running quasi certaine — rédhibitoire), julietteclaire (bijoux généraliste 791 refs, pas un produit), thekiddospace (marque 2022 installée, 415k visites — trop tard).

## 2. Données brutes par candidat (source : API TrendTrack, 2026-07-20)

### MyTamra — gourde cuivre 49,90 € (mytamra.com)
- Boutique créée le **28/04/2026**. Trafic mensuel : 0 → 2 621 (mai) → **35 724** (juin), dont **82 % France**, 13 % US.
- Ads Meta hebdo : 65 → 118 → 171 → 234 → 318 → 364 → 365 → **⚠️ 233 → 254** (repli de ~30 % depuis le pic du 29/06).
- 2 annonceurs liés. Ciblage ads : 44 % BE / 44 % FR / 11 % CA.
- Google Ads : 2 ads live (Search + Shopping) FR. TikTok : **absent**.
- Lecture : la rampe la plus violente de la session, MAIS le repli d'ads de juillet est le seul signal négatif du top 3. À trancher avec l'audit de saturation.

### Morleni — surlunettes polarisées 39,99 € (morleni.com)
- Boutique créée le **08/05/2026** (10 semaines). Trafic : 1 576 (mai) → **14 467** (juin), **100 % France**.
- Ads Meta hebdo : 13 → 29 → 49 → 41 → 24 → 68 → 68 → 119 → 144 → **198**. **Accélération continue, y compris cette semaine.**
- 1 seul annonceur lié = opérateur unique, pas encore copié.
- Ciblage ads déjà international (FR 17 %, BE 16 %, CA, AU, GB…) = l'opérateur prépare le scaling geo.
- Google Ads : **0**. TikTok : **absent**. → deux canaux entièrement libres.
- Lecture : le momentum le plus sain du top 3 en ce moment même. Fenêtre saisonnière = juillet.

### Titanox — poêle 100 % titane 59,99 € (titanoxfrance.com)
- Boutique créée le **04/04/2026**. Trafic : 66 → 1 639 → **21 211**, dont **92 % France**.
- Ads Meta hebdo : 22 → … → 92 → 108 → 116 → 103 → 136 → **143**. Croissance régulière sur 3 mois, sans à-coup.
- 2 annonceurs liés. Google Ads : 8 live dont 7 lancées ces 30 derniers jours (Search + Shopping FR/BE) = ils étendent leurs canaux.
- TikTok : absent.
- Lecture : le plus « durable » des trois (produit non saisonnier, extension multi-canal en cours), mais marge la plus incertaine (produit lourd).

## 3. Signaux transverses exploitables

- **Aucune des 3 boutiques n'est sur TikTok** → si on attaque un de ces produits, TikTok est un canal vierge.
- Google Ads quasi vide chez les 3 → Shopping FR disponible.
- Les 3 sont des boutiques *récentes d'opérateurs uniques*, pas des marques : la concurrence est un individu avec un budget, pas une entreprise.

## 4. Vérifications restantes AVANT décision (audit de saturation)

À exécuter via l'API TrendTrack (bloqué temporairement par une déconnexion du connecteur le 20/07 en fin de session) :

- [ ] `find_similar_shops` sur chacun des 3 domaines → combien de boutiques vendent le même produit
- [ ] `search_advertisers` par mot-clé produit (« gourde cuivre », « surlunettes », « poêle titane ») marché FR → nombre d'annonceurs actifs distincts
- [ ] `search_ads` triées par ancienneté → depuis combien de temps les plus vieilles ads du produit tournent (ancienneté = rentabilité)
- [ ] `search_tiktok_library` → confirmer que le produit est bien absent de TikTok FR
- [ ] Analyse des transcripts d'ads des références (angles exacts utilisés → angles libres)

**Règle de décision post-audit** : si > 8 annonceurs FR actifs sur le produit → saturation, on passe. Si 2-5 annonceurs et des ads > 30 jours d'ancienneté → demande prouvée + place disponible → GO test.

## 5. Sourcing (parallèle, à faire manuellement)

- [ ] 2-3 fournisseurs AliExpress/CJ par produit : prix, délai réel FR, note, entrepôt UE
- [ ] Confirmation marge ≥ 60 % après frais de port réels
- [ ] Échantillon commandé pour le produit qui passe l'audit de saturation
