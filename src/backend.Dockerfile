FROM node:22-alpine AS BUILD

# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY . .
 
# Install dependencies
RUN yarn install  --production --frozen-lockfile \
    && yarn global add typescript
RUN yarn workspace backend build

FROM node:22-alpine AS FINAL
RUN mkdir /app 
COPY --from=build /app/backend/dist .
EXPOSE 3001
CMD [ "node", "main.js"]
