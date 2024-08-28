# Angular Renaissance : on restaure la chapelle Sixtine !

## Lancer le projet

Nous mettons à votre disposition un StackBlitz afin d'éviter les problèmes potentiels avec un environment local !

<a href="https://stackblitz.com/fork/github/angular-devs-france/workshop-migration" target="_blank">
  <img alt="Open in StackBlitz" src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" />
</a>  

Si vous souhaitez absolument être en local, les étapes de l'installation sont décrites ci-dessous, mais c'est à vos risques et périls, nous ne prendrons pas de temps pour débugger de l'installation. 

### Prérequis

- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://angular.io/cli)

### Installer les dépendances
```bash
npm install
```

### Lancer le serveur puis l'application Angular
```bash
npm run server
```

```bash
npm run start
```

## Objectifs

Le site d'Angular Devs France pour partager les dates de ses lives Youtube mensuels a été codé il y a quelques années en Angular 14.  
Aujourd'hui (octobre 2024), la dernière version d'Angular est la 18.2, ca fait un peu de retard ...  
Notre objectif est de remettre notre site à jour avec cette version mais surtout d'appliquer les nouveautés de ces dernières versions !  
Comme on connait bien les réseaux des conférences on s'est permis de faire les `ng update` un par un pour vous.  
Vous allez donc coder les nouvelles features directement sur un site en Angular v18.2 : c'est parti !

---

## Standalone Component 

TODO: résumé du cours 

### Mise en pratique

1. Migrer le composant `EventList` en standalone
2. Appliquer la migration automatique avec les schematics suivantes : 
- `ng g @angular/core:standalone --path ./ --mode convert-to-standalone` pour "Convertir les components, directives et pipes en standalone"
- `ng g @angular/core:standalone --path ./ --mode prune-ng-modules` pour "Supprimer les  classes NgModule inutiles"
- `ng g @angular/core:standalone --path ./ --mode standalone-bootstrap` pour "Bootstrap le projet en utilisant la standalone APIs"
3. Vérifier que tout compile bien, que les tests passent toujours et qu'il n'y a plus de `NgModule`

---

## Functionnal Guard/Resolver

TODO: résumé du cours 

### Mise en pratique

1. Passer toutes les injections de dépendances dans un constructeur avec la nouvelle méthode `inject()`
2. Migrer le resolver existant `EventResolver` en Functionnal Resolver 
3. Vérifier que tout compile bien et que les tests passent toujours

---

## Built-in Control Flow

TODO: résumé du cours 

### Mise en pratique

1. Dans le composant `EventList` remplacer la boucle sur `filteredEvents` avec la directive *ngFor en @for
2. Ajouter un message si la liste `filteredEvents` est vide 
3. Appliquer la migration automatique avec la schematics : 
- `ng g @angular/core:control-flow --path ./ --format true` 
4. Vérifier que tout compile bien, que les tests passent toujours et qu'il n'y a pas d'imports inutiles

---

## Deferrable View

TODO: résumé du cours 

### Mise en pratique

1. Remplacer le @if par un bloc @defer
2. Vérifier dans le network que l'appel est bien déclenché après

---

## Signal

TODO: résumé du cours 

### Mise en pratique

1. Dans le composant `EventList` utiliser les `Signal`

---


// TODO : extends pour hostdirectives
