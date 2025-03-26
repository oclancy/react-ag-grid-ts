FROM node:22-alpine AS BUILD

# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY . ./
 
# Install dependencies
RUN yarn install --production --frozen-lockfile
 
RUN yarn workspace ui build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=BUILD /app/ui/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
