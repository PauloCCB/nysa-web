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
RUN npm run build 

# Etapa 2: Servir con Nginx
FROM nginx:1.25-alpine AS production

# Instala gettext para envsubst
RUN apk add --no-cache gettext

# Puerto en el que escuchará Nginx, por defecto 80 pero Railway asigna PORT
ARG PORT=80
ENV PORT=${PORT}

# Copia el build de Vite al directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia plantilla de configuración y genera el config final usando envsubst
COPY nginx.template /etc/nginx/templates/default.conf.template

# Expone el puerto configurado
EXPOSE ${PORT}

# Genera default.conf con el puerto dinámico y arranca Nginx
CMD envsubst '${PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;' 