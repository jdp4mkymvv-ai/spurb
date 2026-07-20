# Playbook Ads — test, validation, scaling

Budget de référence : 1 500 – 5 000 € sur 2-3 mois. **La discipline compte plus que le budget** : la majorité des budgets dropshipping meurent parce qu'on laisse tourner des tests perdants "encore un jour".

## 1. Choix du canal de départ

**Un seul canal au début.**

| | Meta (FB/IG) | TikTok |
|---|---|---|
| Audience Europe FR | large, 25-55 ans, pouvoir d'achat | plus jeune, CPM moins chers |
| Type de produit | problème/solution, confort, maison | effet waouh visuel, impulsif |
| Stabilité du tracking | bonne (avec API Conversions) | moyenne |
| Risque compte | bans fréquents sur comptes neufs | modération stricte des créas |

**Recommandation : Meta d'abord** pour l'Europe francophone (audience plus large, meilleur pouvoir d'achat, achat moins impulsif = clients qui remboursent moins). TikTok en 2e canal une fois un gagnant validé — sauf si le produit est ultra-visuel/waouh, auquel cas inverser.

Précaution compte neuf : lancer une petite campagne à 5-10 €/jour quelques jours avant les vrais tests, ne jamais changer brutalement de budget, remplir toutes les infos business. Un ban à J1 est courant et fait perdre une semaine.

## 2. Protocole de test (par produit : ~150 € max, 3 jours)

### Setup
- 1 campagne CBO ou ABO simple : 3 ad sets à 15 €/jour
- Ciblage **large** (Advantage+ / broad) — en 2026 l'algo cible mieux que les intérêts manuels ; c'est la créa qui cible
- 3-5 créas différentes (angles différents, pas 5 variantes de la même vidéo) : problème/solution, démonstration, UGC témoignage, unboxing
- Zone : France + Belgique + Suisse

### Kill rules — mécaniques, pas négociables

À vérifier chaque matin :

| Situation | Décision |
|---|---|
| 15 € dépensés sur une créa, CTR < 1 %, aucun ajout panier | couper la créa |
| 25-30 € dépensés sur un ad set, aucun achat ni checkout initié | couper l'ad set |
| 100-150 € dépensés sur le produit, 0-1 vente et métriques molles | **tuer le produit**, noter le verdict dans le tracker, passer au suivant |

### Signaux de validation (passer en Phase 3)

- CPA ≤ marge brute unitaire (voir `04-legal-finances.md` pour le calcul du CPA max)
- CTR ≥ 1,5 % sur la meilleure créa
- Taux de conversion boutique ≥ 1,5-2 %
- Au moins 3-5 ventes sur le test

Un produit "moyen" (1-2 ventes, métriques limites) : une seule relance autorisée avec de nouvelles créas ou une fiche produit retravaillée, +100 € max. Ensuite verdict définitif.

## 3. Validation (produit prometteur → gagnant confirmé)

- Monter à 50-70 €/jour pendant 10-14 jours
- Dupliquer les ad sets gagnants, couper les perdants chaque 3-4 jours
- Travailler l'AOV en parallèle (bundle, upsell post-achat) : passer de 30 € à 42 € d'AOV change tout le calcul du CPA max
- Suivre le **CPA réel sur 7 jours glissants**, pas celui d'une bonne journée

**Gagnant confirmé = 2 semaines profitables d'affilée, toutes charges comprises** (produit, ads, cotisations, coûts fixes, remboursements).

## 4. Scaling

- **Vertical** : +20-30 % de budget tous les 2-3 jours sur ce qui marche (jamais doubler d'un coup, l'algo repart en learning)
- **Horizontal** : dupliquer les gagnants dans de nouvelles campagnes, nouveaux angles créas chaque semaine (la fatigue créative tue les campagnes en 2-3 semaines)
- Ajouter le 2e canal seulement quand le 1er est stable
- Retargeting (visiteurs 7-14 jours, paniers abandonnés) dès ~500 visiteurs/jour
- Email/SMS (Klaviyo) : panier abandonné = revenu quasi gratuit, à installer dès la validation

## 5. Suivi

Remplir `tracking/budget-ads.csv` **chaque jour de dépense**. Les métriques qui comptent, dans l'ordre :

1. **Profit net/jour** (pas le ROAS de la plateforme, le vrai calcul en incluant cotisations et coûts fixes)
2. CPA réel 7 jours vs CPA max
3. AOV
4. Taux de remboursement/litiges (> 5 % = alerte qualité produit ou délais)
