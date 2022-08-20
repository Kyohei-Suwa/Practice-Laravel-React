# Practice-Laravel-React

Starting Up Laravel + React + Docker Sample

## Versions
Laravel 9 (Routed by Apache2), React 18

## Editor
VisualStudio Code
(develop in Container via VSCode devcontainer plugin)

## PreCondition
Belows Installed (Default Installed)

Docker Desktop
Visual Studio Code

## What You Can
Access localhost:8080, Show "Hello" Page using Laravel and React

## Usage
```
cd lav-react
docker-compose up -d
(wait for build container)
docker-compose exec php-apache /bin/bash
npm run dev
(vite can hot deploy)
```

Access localhost:8080 on Your Brouser

## Tags

vanila_laravel_react:laravel and react(+typescrit) settings

EsLint_AND_Devcontainer:devcontainer setting and eslint in container (javascript ruled by airbnb)


