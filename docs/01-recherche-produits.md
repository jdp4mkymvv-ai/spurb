# Recherche produit — framework de sélection

## 1. Les outils

### TrendTrack (l'outil principal choisi)

TrendTrack piste les boutiques Shopify qui montent : trafic, croissance, produits ajoutés, ads actives. Sa force : repérer **les boutiques qui gagnent déjà** plutôt que des produits en vrac.

**Décision (2026-07-20) : outil retenu, plan Starter en mensuel.** Tarifs EUR TTC constatés sur la page de pricing :

| Plan | Mensuel | Contenu |
|---|---|---|
| **Starter** ✅ | 59 € | Shops illimité, BrandTracker ×2, 30 crédits mail, **API 10 000 crédits** (alimente le MCP), **pas d'accès Ads/Advertisers** |
| Pro | 89 € | + Ads illimité, 1 000 advertisers, mail illimité, BrandTracker ×30 |
| Business | 149 € | tout illimité — hors sujet à notre stade |

**Pourquoi Starter malgré l'absence d'ads :** la brique irremplaçable est la découverte de boutiques (Shops illimité + MCP). La partie ad-spy a un substitut gratuit : la Meta Ad Library consultée manuellement dans le navigateur (étape 2 du process §4). Passer au Pro (+30 €/mois) seulement si, après 2-3 semaines d'usage réel, la vérification manuelle des ads devient le goulot d'étranglement du process quotidien.

- **Argument décisif : l'intégration MCP** — TrendTrack se connecte à Claude, ce qui permet de faire la recherche (boutiques, ads, annonceurs) directement en session avec l'assistant au lieu de tout faire à la main. Aucun concurrent connu ne l'offre.
- Avant de payer : passer par l'accès gratuit du site pour voir l'interface, et installer l'**extension Chrome gratuite** (trafic estimé, CA, apps, thème de n'importe quelle boutique Shopify).
- **Mensuel uniquement au début** malgré les -20 % en annuel : réévaluer après 1 mois d'usage réel.
- Dès l'abonnement actif : **connecter le MCP TrendTrack à Claude** pour automatiser le process quotidien (§4).

### Compléments gratuits (à utiliser dès maintenant, même sans TrendTrack)

| Outil | Usage |
|---|---|
| **Meta Ad Library** (facebook.com/ads/library) | Voir toutes les ads actives d'une marque. Une ad qui tourne depuis 30+ jours = elle est rentable. |
| **TikTok Creative Center** | Top ads par pays et par secteur, gratuit. |
| Google Trends | Vérifier si la tendance monte, stagne ou meurt. Comparer FR vs US (les tendances US arrivent souvent en FR avec 3-6 mois de décalage — c'est une fenêtre). |
| AliExpress "commandes" + DSers | Volume de commandes réel du fournisseur. |

### Alternatives payantes (si TrendTrack déçoit)

Minea (fort sur le spy d'ads FR), Dropship.io (analyse de boutiques), Winning Hunter. Ne pas cumuler les abonnements : **un seul outil payant à la fois**.

---

## 2. Critères éliminatoires (un seul "non" = produit écarté)

1. **Effet waouh / résout un problème** — on doit comprendre l'intérêt en 3 secondes de vidéo. Pas de produit "banal" achetable au supermarché.
2. **Prix de vente possible ≥ 25 €** avec **marge brute ≥ 60 %** (prix fournisseur + livraison ≤ 40 % du prix de vente). En dessous, les ads mangent tout — voir `04-legal-finances.md`.
3. **Pas disponible en grande surface / Amazon au même prix** en un clic.
4. **Léger et incassable de préférence** — pas de verre, pas de batterie lithium si évitable (douanes, casse, litiges).
5. **Pas de niche interdite ou risquée** : santé/minceur (allégations interdites), contrefaçon, marques déposées, produits électriques non certifiés CE.
6. **Livrable en 7-12 jours max** vers FR/BE/CH (entrepôt européen du fournisseur = gros plus).
7. **Démontrable en vidéo** — si on ne peut pas faire une créa UGC convaincante, on ne pourra pas vendre.

## 3. Critères de scoring (pour classer les survivants)

Noter chaque critère de 1 à 5, total sur 25 :

| Critère | 1 point | 5 points |
|---|---|---|
| Momentum (TrendTrack/Trends) | tendance plate ou déclinante | croissance forte et récente |
| Concurrence FR | 10+ boutiques FR actives dessus | ads actives à l'étranger mais quasi rien en FR |
| Marge brute | 60 % | 75 %+ |
| Potentiel d'AOV (upsell/bundle) | produit isolé | bundles et consommables évidents |
| Largeur d'audience | niche très étroite | tout le monde peut se sentir concerné |

**On teste en priorité les scores ≥ 18/25.**

---

## 4. Process quotidien (30-45 min/jour)

1. **TrendTrack** : trier les boutiques par croissance de trafic sur 7/30 jours, filtrer Europe. Noter les produits phares des 5 boutiques qui montent le plus.
2. **Meta Ad Library** : pour chaque produit repéré, chercher qui l'annonce et depuis combien de temps. Ads actives depuis 3+ semaines chez plusieurs annonceurs = demande confirmée.
3. **Google Trends** : vérifier la courbe FR sur 12 mois. Attention à la saisonnalité (un produit d'été testé en novembre = échec garanti).
4. **AliExpress/DSers** : trouver 2-3 fournisseurs, comparer prix + délais + note vendeur (≥ 95 %, 2+ ans d'ancienneté).
5. Remplir `templates/fiche-produit.md`, l'ajouter dans `tracking/produits-testes.csv` avec statut `candidat`.

## 5. Pièges classiques

- **Produit saturé** : s'il est dans tous les tops "winning products" publics depuis 2 mois, la fenêtre FR est probablement fermée. TrendTrack sert justement à voir les boutiques *avant* qu'elles soient énormes.
- **Tomber amoureux d'un produit** : la fiche et le score décident, pas l'enthousiasme.
- **Sauter l'échantillon** : toujours commander le produit avant de scaler. Qualité réelle, délais réels, et ça fournit la matière pour les créas.
- **Tester 1 seul produit** : le jeu est statistique. Sur 3-4 produits bien sélectionnés, on cherche 1 gagnant.
