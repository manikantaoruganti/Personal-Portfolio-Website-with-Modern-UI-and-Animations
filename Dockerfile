# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's default static content directory
COPY --from=build /app/dist /usr/share/nginx/html

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
