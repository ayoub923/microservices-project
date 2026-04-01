# Microservices Project

## Description

Ce projet présente la mise en place d’une architecture microservices complète en utilisant Node.js, Docker et Kubernetes (Minikube).

L’objectif est de concevoir, déployer et sécuriser plusieurs services communicants dans un environnement distribué.

---

## Architecture

Le projet est composé de :

* user-service : gestion des utilisateurs et point d’entrée principal
* product-service : gestion des produits
* PostgreSQL : base de données
* Ingress (Gateway) : point d’accès externe
* RBAC : gestion des droits Kubernetes

### Schéma logique

```
Client → Ingress (Gateway)
        ↓
   ┌───────────────┬───────────────┐
   │ user-service  │ product-service │
   └───────────────┴───────────────┘
            ↓
        PostgreSQL
```

---

## Technologies utilisées

* Node.js (Express) : API REST
* Docker : conteneurisation
* Kubernetes (Minikube) : orchestration
* Ingress NGINX : gateway HTTP
* PostgreSQL : base de données
* RBAC Kubernetes : sécurité

---

## Docker

Chaque service a été conteneurisé avec Docker :

* Création de Dockerfile
* Build et publication sur Docker Hub

---

## Kubernetes

Déploiement complet avec :

* Deployment
* Service (NodePort / ClusterIP)
* Ingress (gateway)
* Base de données PostgreSQL

---

## Gateway (Ingress)

Un Ingress a été configuré pour exposer les services via :

* http://app.local/users
* http://app.local/products
* http://app.local/products-from-user
* http://app.local/db

---

## Communication entre microservices

Le user-service communique avec le product-service via le DNS interne Kubernetes :

```
http://product-service
```

---

## Base de données

* PostgreSQL déployé dans Kubernetes
* Connexion depuis user-service
* Endpoint de test : /db

---

## Sécurité

Mise en place de bonnes pratiques :

* RBAC Kubernetes (contrôle des accès)
* Limitation des ressources (CPU / RAM)
* Sécurisation des conteneurs (runAsNonRoot)
* imagePullPolicy: Always

---

## Structure du projet

```
microservices-project/
├── user-service/
├── product-service/
├── k8s/
```

---

## Lancer le projet

```
minikube start
kubectl apply -f k8s/
minikube tunnel
```

Configurer le fichier /etc/hosts :

```
127.0.0.1 app.local
```

---

## Objectifs atteints

* Architecture microservices
* Déploiement Docker et Kubernetes
* Communication inter-services
* Gateway avec Ingress
* Base de données intégrée
* Sécurisation du cluster

---

## Conclusion

Ce projet démontre la mise en œuvre complète d’une application distribuée moderne en respectant les bonnes pratiques de développement, de déploiement et de sécurité.

---

## Auteurs

Ayoub ERRAHMANI

Samuel DARMALINGON
