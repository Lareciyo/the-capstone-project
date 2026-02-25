FROM node:20-alpine
WORKDIR /app

# Use a wildcard to find the package files even if the lockfile is missing
COPY package*.json ./

# This check will stop the build and tell us exactly what Docker sees
RUN ls -la

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]