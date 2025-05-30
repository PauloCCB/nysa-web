# Etapa 1: Build de la app
FROM node:18-alpine AS builder

WORKDIR /app

# Copia los archivos de dependencias y los instala
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install; \
  else npm install; \
  fi

# Copia el resto del código fuente
COPY . .

# Build de producción
RUN npm run build --force

# Etapa 2: Servir con Nginx
FROM nginx:1.25-alpine

# Copia el build de Vite al directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración custom de Nginx para SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 