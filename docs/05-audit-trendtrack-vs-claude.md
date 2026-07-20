# Audit — puis-je répliquer TrendTrack sans payer ?

Audit technique réalisé le 2026-07-20, avec tests réels exécutés depuis mon environnement. Question posée : « TrendTrack est un SaaS probablement construit avec l'IA — est-ce que Claude peut fournir un résultat similaire en se connectant aux mêmes sources de données ? »

## 1. Ce que fait TrendTrack, décomposé en 4 briques

| Brique | Source de données sous-jacente | Réplicable par moi ? |
|---|---|---|
| **A. Découverte des boutiques qui montent** (le cœur : 1,3 M+ boutiques suivies avec historique de trafic/CA) | Infrastructure de crawling continue + données de trafic (panel d'extension navigateur / fournisseurs payants type Similarweb) accumulées sur des mois/années | ❌ **Non** |
| **B. Ad spy agrégé** (ads Meta/TikTok filtrables par ancienneté, dépense, pays) | Collecte massive et continue des bibliothèques publicitaires | ❌ **Non depuis mon environnement** |
| **C. Intelligence par boutique** (catalogue, nouveaux produits, best-sellers, thème, apps) | Endpoints publics Shopify (`/products.json`) + analyse HTML | ⚠️ **Partiellement oui** |
| **D. Estimation de ventes/CA** | Croisement trafic × catalogue × heuristiques propriétaires | ❌ Non (dépend de A) |

## 2. Résultats des tests réels (2026-07-20)

| Test | Résultat | Conclusion |
|---|---|---|
| `tentree.com/products.json` (catalogue Shopify public) | ✅ HTTP 200, JSON complet | L'analyse par boutique fonctionne sur une partie des boutiques |
| `allbirds.com`, `kith.com` `/products.json` | ❌ HTTP 503 (anti-bot Shopify) | Beaucoup de boutiques bloquent les accès automatisés |
| `gymshark.com/products.json` | ❌ HTTP 403 (CloudFront) | Idem |
| Meta Ad Library (fetch direct) | ❌ HTTP 403 | Pas d'accès programmatique simple |
| Meta Ad Library (navigateur headless Chromium + proxy) | ❌ Connexion refusée / 403 | Meta inaccessible depuis mon environnement (blocage réseau/datacenter) |
| API officielle Meta Ad Library | ❌ Limitée aux publicités politiques | Les ads e-commerce ne sont pas exposées par l'API officielle |
| Similarweb endpoint public (trafic estimé) | ❌ HTTP 403 | Pas de source de trafic gratuite ; l'API officielle coûte bien plus que 49 $/mois |
| API TikTok Creative Center | ❌ `no permission` sans authentification | Fermée en accès programmatique |

## 3. Verdict honnête

**Je ne peux pas répliquer la valeur principale de TrendTrack.** Deux raisons de fond :

1. **La valeur n'est pas dans le code IA, elle est dans la donnée accumulée.** Même si l'interface de TrendTrack a été codée avec l'IA (probable), leur actif est une base historique : des mois de relevés de trafic et de catalogue sur 1,3 M de boutiques. C'est ça qui permet de dire « cette boutique FR a pris +400 % de trafic en 3 semaines ». Même avec un crawler parfait monté aujourd'hui, il faudrait des mois de collecte pour avoir un historique — et aucune source de trafic gratuite n'existe (testé et confirmé).
2. **Les sources d'ads sont fermées à l'automatisation.** L'API officielle Meta ne couvre que les pubs politiques ; la version web est bloquée depuis mon environnement ; TikTok Creative Center exige une authentification. Un humain peut les consulter gratuitement dans son navigateur — un agent ne peut pas les agréger légalement/techniquement à l'échelle.

**Conclusion : l'abonnement Starter (49 $/mois) achète des données qu'aucun montage gratuit ne remplace. Décision confirmée : on le prend.**

## 4. Ce que je fais quand même gratuitement (en complément, pas en remplacement)

- **Watchlist tracker** (à construire, coût 0 €) : script qui surveille quotidiennement les boutiques candidates repérées via TrendTrack — snapshot du catalogue, détection de nouveaux produits, changements de prix, mouvements de best-sellers. TrendTrack découvre, mon tracker approfondit.
- **Analyse ponctuelle de n'importe quelle boutique accessible** : catalogue, positionnement prix, apps/thème.
- **Toi dans ton navigateur** : Meta Ad Library et TikTok Creative Center restent gratuits en consultation manuelle — tu me transmets les liens et je fais l'analyse.
- **Via le MCP TrendTrack** une fois abonné : j'interroge leur base directement en session, ce qui automatise le process quotidien de `01-recherche-produits.md`.
