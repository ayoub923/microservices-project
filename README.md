# Microservices Project

## Description

Ce projet présente la mise en place d’une architecture microservices complète en utilisant Node.js, Docker et Kubernetes (Minikube).

L’objectif est de concevoir, déployer et sécuriser plusieurs services communicants dans un environnement distribué.

---

# 1. Service en local (10/20)

Un premier microservice a été développé avec Node.js et testé en local.

## Résultat attendu

Le service doit répondre sur le port 3000.

![User Service Local](images/user-service-local.jpeg)

Ce test valide le bon fonctionnement de l’application avant conteneurisation.

---

# 2. Conteneurisation avec Docker

Le service a été conteneurisé avec Docker :

* création d’un Dockerfile
* build de l’image
* exécution du conteneur

## Résultat attendu

Le service fonctionne dans un conteneur Docker.

![User Service Docker](images/user-service.jpeg)

---

# 3. Déploiement Kubernetes (12/20)

Le service a été déployé dans Kubernetes avec :

* Deployment
* Service (NodePort)

## Résultat attendu

Les pods doivent être en état *Running*.

![Pods Kubernetes](images/kubernetes-pods.jpeg)

Cela confirme que Kubernetes orchestre correctement le service.

---

# 4. Mise en place d’une Gateway (Ingress)

Un Ingress a été configuré pour exposer le service avec une URL propre.

## Résultat attendu

Accès via :
http://user-service.local

![Ingress](images/user-service-ingress.jpeg)

Cela permet d’accéder au service sans utiliser de port technique.

---

# 5. Ajout d’un deuxième microservice (14/20)

Un second service (product-service) a été développé et déployé.

Les routes sont maintenant accessibles via :

* /users
* /products

## Résultat attendu

### API Users

![API Users](images/api-users.jpeg)

### API Products

![API Products](images/api-products.jpeg)

Cela valide le bon fonctionnement de plusieurs microservices.

---

# 6. Communication entre microservices

Le user-service communique avec le product-service via Kubernetes :

```
http://product-service
```

Cela permet une architecture distribuée réelle.

---

# 7. Ajout d’une base de données (16/20)

Une base PostgreSQL a été déployée dans Kubernetes.

Le user-service est connecté à cette base.

## Résultat attendu

![Database](images/api-database.jpeg)

Le service retourne des données issues de la base.

---

# 8. Sécurisation du cluster (18/20)

Mise en place de RBAC pour contrôler les accès.

## Résultat attendu

### Autorisation

![RBAC OK](images/rbac-security_2.jpeg)

### Refus

![RBAC DENIED](images/rbac-security_1.jpeg)

Certaines actions sont autorisées (list), d’autres interdites (delete).

---

# 9. Architecture globale

## Structure du projet

![Structure](images/project-structure.png)

## Architecture logique

```
Client → Ingress
        ↓
   user-service → product-service
            ↓
        PostgreSQL
```

---

# 10. Lancer le projet

```bash
minikube start
kubectl apply -f k8s/
minikube tunnel
```

Configurer :

```bash
127.0.0.1 app.local
```

---

# Conclusion

Ce projet démontre :

* la création de microservices
* leur conteneurisation avec Docker
* leur orchestration avec Kubernetes
* la mise en place d’une gateway
* la communication entre services
* l’intégration d’une base de données
* la sécurisation du cluster

---

# Auteurs

Ayoub ERRAHMANI
Samuel DARMALINGON
