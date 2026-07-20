# Boutique — choix de la plateforme et checklist de lancement

## 1. Pourquoi Shopify (la décision et sa justification)

| Option | Coût | Verdict |
|---|---|---|
| **Shopify Basic** | ~36 €/mois + frais transaction | ✅ **Choix retenu.** Lancement en jours, apps dropshipping matures (DSers, Zendrop), checkout au taux de conversion prouvé, thèmes optimisés mobile, pixels Meta/TikTok natifs. |
| WooCommerce | ~10 €/mois d'hébergement | Moins cher mais maintenance technique, plugins à assembler, checkout moins bon. Le temps perdu coûte plus que l'abonnement Shopify. |
| Custom (Next.js + Stripe) | 0 €/mois | Pertinent plus tard pour une vraie marque installée. Pour tester des produits vite, c'est le mauvais outil : chaque itération (upsell, avis, bundle) demande du dev au lieu d'une app en 1 clic. |

**Règle de coût :** en phase test, on veut des coûts fixes minuscules et une vitesse d'itération maximale. 36 €/mois s'amortit dès la 2e vente. On pourra re-évaluer le custom quand une marque sera validée et stable (économie d'apps + contrôle total).

## 2. Type de boutique pour démarrer

**Boutique de niche** (pas mono-produit, pas généraliste fourre-tout) :
- assez large pour tester 3-5 produits d'une même thématique sans refaire la boutique,
- assez cohérente pour paraître crédible (une boutique "gadgets divers" convertit mal en 2026, le marché FR a mûri).

La boutique mono-produit viendra en Phase 5, dédiée au gagnant validé.

## 3. Checklist de lancement

### Structure
- [ ] Nom de marque neutre par rapport à la niche (réutilisable), domaine en `.com` ou `.fr`
- [ ] Thème gratuit optimisé (Dawn ou Sense) — ne pas acheter de thème premium en phase test
- [ ] Pages légales **obligatoires en France** : CGV, mentions légales, politique de confidentialité, politique de retour (14 jours de rétractation minimum, c'est la loi), page contact avec email + adresse
- [ ] Politique de livraison honnête sur les délais réels (les litiges "où est ma commande" tuent les comptes de paiement)

### Fiche produit (là où tout se joue)
- [ ] Titre orienté bénéfice, pas descriptif ("Fini les nuits hachées" > "Oreiller ergonomique cervical")
- [ ] 6-8 visuels : produit porté/utilisé, gifs, infographie bénéfices, comparatif avant/après
- [ ] Bloc réassurance : livraison suivie, retour 14/30 jours, paiement sécurisé
- [ ] Avis clients (app Loox ou Judge.me) — importés honnêtement du fournisseur, jamais inventés
- [ ] Upsell/bundle dès le départ (x2 = -10 %, produit complémentaire) : l'AOV est le levier n°1 de rentabilité avec des ads chères

### Technique
- [ ] Pixel Meta + API Conversions (via l'app Meta officielle)
- [ ] Pixel TikTok
- [ ] DSers (ou équivalent) connecté pour le fulfillment automatique
- [ ] Emails transactionnels vérifiés (confirmation, expédition avec tracking)
- [ ] Test de commande complet réel (payer, recevoir les emails, rembourser)
- [ ] Vitesse mobile correcte (compresser les images, pas plus de 5-6 apps installées)

### Paiements
- [ ] Shopify Payments activé (CB) + PayPal si possible
- [ ] **Prévoir la réserve** : les processeurs gèlent souvent une partie des fonds des nouveaux comptes (rolling reserve). Ne jamais compter sur le cash des ventes de la semaine pour payer les ads de la semaine — c'est le budget ads qui finance, pas la trésorerie des ventes.

## 4. Ce que je peux faire directement

- Rédiger toutes les pages légales adaptées à ton statut autoentrepreneur
- Écrire les fiches produit (copywriting FR complet) à partir des fiches de `templates/`
- Rédiger les scripts des créas vidéo
- Générer les visuels/infographies
- Préparer les séquences email (panier abandonné, post-achat)
