# 📘 Projet TypeScript - Holberton School Web React

## 📋 Description

Ce projet est une introduction complète à TypeScript, couvrant les concepts fondamentaux jusqu'aux fonctionnalités avancées. Il fait partie du curriculum Holberton School et explore les interfaces, classes, types avancés, namespaces et bien plus encore.

## 🎯 Objectifs d'apprentissage

- Maîtriser les bases de TypeScript et son système de typage
- Comprendre et implémenter des interfaces et classes
- Utiliser des types avancés et des génériques
- Travailler avec des namespaces et des déclarations ambiantes
- Configurer et utiliser Webpack avec TypeScript

## 📂 Structure du projet

```
holbertonschool-web_react/
└── TypeScript/
    ├── task_0/          # Interface Student et rendu de table
    ├── task_1/          # Interfaces Teacher et Directors
    ├── task_2/          # Types avancés et classes
    ├── task_3/          # Namespaces ambiants et CRUD
    ├── task_4/          # Namespaces et declaration merging
    └── task_5/          # Brand convention et nominal typing
```

## 🚀 Installation

### Prérequis

- Node.js (version 12+)
- npm ou yarn
- TypeScript

### Installation globale

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd holbertonschool-web_react/TypeScript

# Pour chaque tâche, naviguer dans le dossier et installer les dépendances
cd task_X
npm install
```

## 📝 Tâches

### Task 0: Creating an interface for a student
**Objectif**: Créer une interface `Student` et afficher un tableau HTML avec Vanilla JavaScript.

**Fichiers requis**:
- `task_0/js/main.ts`
- Configuration: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

**Fonctionnalités**:
- Interface Student avec firstName, lastName, age, location
- Création d'un tableau d'étudiants
- Rendu d'un tableau HTML dynamique

### Task 1: Let's build a Teacher interface
**Objectif**: Créer une interface `Teacher` avec des propriétés readonly et optionnelles.

**Fichiers requis**:
- `task_1/js/main.ts`

**Fonctionnalités**:
- Propriétés readonly (firstName, lastName)
- Propriétés optionnelles (yearsOfExperience)
- Index signature pour propriétés dynamiques

### Task 2: Extending the Teacher class
**Objectif**: Créer une interface `Directors` qui étend `Teacher`.

**Fonctionnalités**:
- Héritage d'interface
- Ajout de la propriété `numberOfReports`

### Task 3: Printing teachers
**Objectif**: Créer une fonction avec son interface de type.

**Fonctionnalités**:
- Fonction `printTeacher`
- Interface `printTeacherFunction`

### Task 4: Writing a class
**Objectif**: Implémenter une classe `StudentClass` avec interfaces.

**Fonctionnalités**:
- Méthodes: `workOnHomework()`, `displayName()`
- Interface pour le constructeur et la classe

### Task 5: Advanced types Part 1
**Objectif**: Créer des interfaces et classes pour Director et Teacher.

**Fichiers requis**:
- `task_2/js/main.ts`

**Fonctionnalités**:
- Interfaces `DirectorInterface` et `TeacherInterface`
- Classes `Director` et `Teacher`
- Fonction factory `createEmployee`

### Task 6: Creating functions specific to employees
**Objectif**: Implémenter des type guards et des fonctions conditionnelles.

**Fonctionnalités**:
- Type predicate `isDirector`
- Fonction `executeWork` avec logique conditionnelle

### Task 7: String literal types
**Objectif**: Utiliser les types littéraux de chaînes.

**Fonctionnalités**:
- Type `Subjects` ('Math' | 'History')
- Fonction `teachClass` avec types littéraux

### Task 8: Ambient Namespaces
**Objectif**: Créer des déclarations de types pour une bibliothèque externe.

**Fichiers requis**:
- `task_3/js/interface.ts`
- `task_3/js/crud.d.ts`
- `task_3/js/main.ts`

**Fonctionnalités**:
- Type `RowID` et interface `RowElement`
- Fichier de déclarations ambiantes pour crud.js
- Utilisation des fonctions CRUD

### Task 9: Namespace & Declaration merging
**Objectif**: Utiliser les namespaces et la fusion de déclarations.

**Fichiers requis**:
- `task_4/js/subjects/Teacher.ts`
- `task_4/js/subjects/Subject.ts`
- `task_4/js/subjects/Cpp.ts`
- `task_4/js/subjects/React.ts`
- `task_4/js/subjects/Java.ts`

**Fonctionnalités**:
- Namespace `Subjects`
- Declaration merging pour étendre l'interface Teacher
- Classes spécifiques par matière

### Task 10: Brand convention & Nominal typing
**Objectif**: Implémenter le nominal typing avec des brands.

**Fichiers requis**:
- `task_5/js/main.ts`

**Fonctionnalités**:
- Interfaces `MajorCredits` et `MinorCredits` avec brands
- Fonctions `sumMajorCredits` et `sumMinorCredits`

## 🛠️ Commandes utiles

```bash
# Compiler le TypeScript
npm run build

# Lancer le serveur de développement (si configuré)
npm run dev

# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Linter le code
npm run lint
```

## ⚙️ Configuration TypeScript

### tsconfig.json de base
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## 📋 Requirements

- ✅ Aucune erreur TypeScript lors de la compilation
- ✅ Utilisation de TypeScript pour toutes les variables quand c'est possible
- ✅ Webpack doit retourner "No type errors found"
- ✅ Respect des conventions de nommage et de structure

## 🤝 Contribution

Ce projet fait partie du curriculum Holberton School. Les contributions doivent respecter les guidelines de l'école.

## 📚 Ressources

- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Webpack Documentation](https://webpack.js.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 👥 Auteur

Projet réalisé dans le cadre du programme Holberton School

## 📄 License

© Holberton School - Tous droits réservés