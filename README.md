# Microservices Project

## Introduction

Dans le cadre de ce projet, nous avons mis en place une architecture microservices complète en utilisant Node.js, Docker et Kubernetes (Minikube).

L’objectif est de concevoir une application distribuée composée de plusieurs services indépendants, capables de communiquer entre eux, tout en respectant les bonnes pratiques de déploiement et de sécurité.

Ce projet illustre les différentes étapes nécessaires à la mise en production d’une application moderne, depuis le développement local jusqu’à son orchestration dans un cluster Kubernetes.

---

## 1. Développement d’un microservice

Un premier microservice a été développé avec Node.js (Express).
Ce service expose une API REST simple permettant de vérifier son bon fonctionnement.

### Résultat

![User Service Local](images/user-service-local.jpeg)

Le service répond correctement en local, ce qui permet de valider le bon fonctionnement de l’API avant toute étape de conteneurisation ou de déploiement.

---

## 2. Conteneurisation avec Docker

Le microservice a ensuite été conteneurisé avec Docker afin de garantir sa portabilité et sa reproductibilité.

Les étapes réalisées sont :

* création d’un Dockerfile
* construction de l’image Docker
* exécution du conteneur

### Résultat

![User Service Docker](images/user-service.jpeg)

Le service est accessible depuis un conteneur, ce qui confirme que l’application peut être exécutée indépendamment de l’environnement local.

---

## 3. Déploiement avec Kubernetes

Le service a été déployé dans Kubernetes (Minikube) avec :

* un Deployment pour gérer les pods
* un Service pour exposer l’application

### Résultat

![Pods Kubernetes](images/kubernetes-pods.jpeg)

Les pods sont en état *Running*, ce qui confirme que le déploiement Kubernetes est correctement configuré et que le service fonctionne dans le cluster.

---

## 4. Mise en place d’une Gateway (Ingress)

Une gateway a été mise en place à l’aide d’Ingress afin de faciliter l’accès aux services via un nom de domaine.

### Résultat

![Ingress](images/user-service-ingress.jpeg)

Le service est accessible via une URL personnalisée, ce qui évite l’utilisation de ports techniques et correspond à un usage réel en production.

---

## 5. Ajout d’un second microservice

Un second microservice (product-service) a été développé et intégré à l’architecture.

Cela permet de passer d’une application simple à une architecture distribuée composée de plusieurs services.

### Résultats

#### Service utilisateurs

![API Users](images/api-users.jpeg)

Le service retourne correctement les données utilisateurs.

#### Service produits

![API Products](images/api-products.jpeg)

Le service retourne correctement les données produits.

Ces résultats montrent que plusieurs microservices peuvent fonctionner simultanément.

---

## 6. Communication entre microservices

Les microservices communiquent entre eux via le DNS interne de Kubernetes :

```
http://product-service
```

Cette communication interne permet aux services d’échanger des données sans exposition externe, ce qui est essentiel dans une architecture microservices.

---

## 7. Intégration d’une base de données

Une base de données PostgreSQL a été déployée dans Kubernetes.

Le microservice principal est connecté à cette base afin de stocker et récupérer des données.

### Résultat

![Database](images/api-database.jpeg)

Le service retourne des données provenant de la base de données, ce qui valide l’intégration et la persistance des données.

---

## 8. Sécurisation du cluster

Des règles RBAC (Role-Based Access Control) ont été mises en place afin de contrôler les accès au cluster Kubernetes.

### Résultats

#### Action autorisée

![RBAC OK](images/rbac-security_2.jpeg)

#### Action refusée

![RBAC DENIED](images/rbac-security_1.jpeg)

Certaines actions sont autorisées tandis que d’autres sont interdites, ce qui permet de sécuriser l’accès aux ressources Kubernetes.

---

## 9. Architecture globale

### Structure du projet

![Structure](images/project-structure.png)

### Organisation logique

```
Client → Ingress
        ↓
   user-service → product-service
            ↓
        PostgreSQL
```

Cette architecture illustre le fonctionnement global du système et la communication entre les différents composants.

---

## 10. Lancement du projet

Pour lancer le projet, les commandes suivantes sont utilisées :

```
minikube start
kubectl apply -f k8s/
minikube tunnel
```

Configuration du fichier `/etc/hosts` :

```
127.0.0.1 app.local
```

Ces étapes permettent de déployer l’ensemble de l’architecture sur un cluster local.

---

## Difficultés rencontrées

Plusieurs difficultés ont été rencontrées au cours de ce projet :

* Problèmes de compatibilité d’images Docker (architecture différente)
* Erreurs de configuration Kubernetes (pods en erreur ou images introuvables)
* Mise en place de l’Ingress nécessitant une configuration spécifique (tunnel, DNS local)
* Compréhension du réseau interne Kubernetes pour la communication entre services

Ces difficultés ont permis de mieux comprendre le fonctionnement interne de Kubernetes et les enjeux liés au déploiement d’applications distribuées.

---

## Conclusion

Ce projet met en œuvre une architecture microservices complète en respectant les bonnes pratiques de développement et de déploiement.

Il démontre :

* la création de services REST
* la conteneurisation avec Docker
* l’orchestration avec Kubernetes
* la communication entre microservices
* l’intégration d’une base de données
* la sécurisation du cluster

Ce travail constitue une base solide pour le déploiement d’applications distribuées dans des environnements plus complexes, notamment dans le cloud.

---

## Auteurs

Ayoub ERRAHMANI

Samuel DARMALINGON
