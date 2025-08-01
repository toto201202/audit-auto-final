# Projet Audit Automatique

Ce projet contient :
- backend/ : API Flask qui génère des fichiers PowerPoint
- frontend/ : Interface web React pour envoyer les données

## Déploiement sur Render

### Backend (Web Service)
- Root Directory: backend
- Build Command: pip install -r requirements.txt
- Start Command: gunicorn app:app

### Frontend (Static Site)
- Root Directory: frontend
- Build Command: npm install && npm run build
- Publish Directory: build