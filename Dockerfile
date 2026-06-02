# Use the official Node.js Alpine image for a highly secure, small footprint
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install ONLY production dependencies (ignores eslint, jest, typescript, etc.)
RUN npm ci --omit=dev

# Copy the compiled output from the GitHub Actions runner
COPY dist/ ./dist/

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.js"]