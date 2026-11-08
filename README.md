# Alignements

Un jeu de réflexion sur un plateau de 9 × 9 cases : déplace les billes pour former des lignes de cinq billes de la même couleur. Chaque coup qui ne fait pas de ligne fait arriver trois nouvelles billes. Tiens le plus longtemps possible avant que le plateau soit plein.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- **Clique sur une bille** pour la sélectionner, puis **clique sur une case libre** pour l'y envoyer.
- La bille ne se déplace que si un **chemin libre** existe jusqu'à la case : elle avance case par case, en haut, en bas, à gauche ou à droite (jamais en diagonale), et ne traverse pas les autres billes.
- Les **trois prochaines couleurs** sont affichées en haut du plateau : prévois où elles risquent de te gêner.
- **Échap** désélectionne la bille. Quand le plateau est plein, un clic relance une partie ; le bouton **Nouvelle partie** recommence à tout moment.

## Les règles

- La partie commence avec cinq billes posées au hasard, parmi sept couleurs.
- Une **ligne de cinq billes ou plus** de la même couleur disparaît, horizontalement, verticalement ou **en diagonale**.
- Si ton déplacement forme une ligne, aucune nouvelle bille n'arrive : tu gagnes un coup de répit.
- Sinon, trois billes tombent sur des cases libres choisies au hasard ; si elles complètent une ligne à leur arrivée, elle disparaît aussi.
- La partie s'arrête quand il ne reste plus aucune case libre.

## Les points

Une ligne rapporte 2 points par bille, plus 4 points par bille au-delà de la cinquième : 10 points pour cinq billes, 16 pour six, 22 pour sept. Les lignes longues et les croisements (deux lignes d'un coup) valent donc bien plus que des lignes de cinq faites une par une.

## Statistiques

Le panneau **Records** garde ton meilleur score, le score de la partie en cours, le nombre total de lignes faites et le nombre de parties jouées.

## Données et synchronisation

Le meilleur score et les lignes faites sont enregistrés par NeoDex, sauvegardés avec le reste de tes données et synchronisés entre tes PC si la synchro est activée. Le plugin n'a besoin d'aucune autre autorisation et ne se connecte pas à Internet.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Alignements → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
