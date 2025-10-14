# ---- Stage 1: Build the app ----
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your app and build it
COPY . .
RUN npm run build

# ---- Stage 2: Serve with NGINX ----
FROM nginx:stable-alpine

# Copy built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Replace the default NGINX config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the container
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
