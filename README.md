# Pokedex

Pokedex is a web application built with Next.js that allows users to explore and search for their favorite Pokémon. The application utilizes the Pokémon API to fetch data and display it in a user-friendly manner. Users can search by Pokémon name or number, and view detailed information about each Pokémon including stats, abilities, and evolutions.

![Pokedex Demo](./pokedex-demo.gif)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Branching Strategy](#branching-strategy)
- [Contributors](#contributors)

## Features

- Browse through the list of Pokémon
- Search by Pokémon name or number
- View detailed information about each Pokémon
- Responsive design for desktop and mobile devices
- Fast and optimized with Next.js

## Getting Started

Before you start, make sure you have Node.js and npm installed on your machine.

1. Clone the repository:

```
git clone https://github.com/yourusername/pokedex.git
```

2. Navigate to the project directory:

```
cd pokedex
```

3. Install the dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application running.

## Usage

- Browse through the list of Pokémon by scrolling down the page.
- Use the search bar at the top of the page to search for Pokémon by name or number.
- Click on a Pokémon card to view more detailed information about that Pokémon.
- Use the back button in your browser or the "Back to List" button on the Pokémon details page to return to the list view.

## Branching Strategy

The following branching strategy is used in this project:

1. `main`: This branch represents the stable production-ready codebase.
2. `development`: This branch is used for active development and should always be in a stable state. All feature branches should branch off from and merge back into `development`.
3. `staging`: This branch is used for testing and quality assurance before deploying to production. It should always be in a deployable state.
4. Feature branches: For each new feature or bug-fix, create a new branch from `development`. Use descriptive names like `feature/pokemon-search` or `bugfix/pokemon-details`.
5. `hotfix`: This branch is used for urgent fixes that need to be applied directly to the production environment. Create a new branch from `main`, apply the fix, and merge it back into both `main` and `development`.

When working on a feature or bug-fix, follow these steps:

1. Create a new branch from `development` with a descriptive name.
2. Work on your changes and commit them with clear and descriptive commit messages.
3. Once the work is complete, merge the latest changes from `development` into your feature branch to ensure it's up-to-date.
4. Create a pull request to merge your feature branch into `development`.
5. After the pull request is approved and merged, delete your feature branch.

For hotfixes, follow these steps:

1. Create a new branch from `main` with a descriptive name.
2. Work on your changes and commit them with clear and descriptive commit messages.
3. Create a pull request to merge your hotfix branch into both `main` and `development`.
4. After the pull requests are approved and merged, delete your hotfix branch.

## Contributors

We appreciate contributions from the community! If you'd like to contribute to the Pokedex project, please follow these steps:

1. Fork the repository and create your branch from the `development` branch.
2. Make your changes and commit them with a clear and descriptive commit message.
3. Push your changes to your fork