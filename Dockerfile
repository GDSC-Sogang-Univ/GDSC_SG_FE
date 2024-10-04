

# Use a smaller base image
FROM node:20-alpine AS builder
ENV NODE_ENV production

WORKDIR /app

ARG NEXT_PUBLIC_GA_ID

ENV NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}


# Copy all source files
COPY . .

# Set Yarn version and install dependencies
RUN yarn set version berry && yarn install --frozen-lockfile

# Build the application
RUN yarn build

# Production image
FROM node:20-alpine AS runner

ENV NODE_ENV production

WORKDIR /app

# Copy only necessary files for production
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/out ./out

# Rebuild binaries if necessary (only needed for production environment)
RUN rm -rf /app/.yarn/unplugged && yarn rebuild

# Expose the port
EXPOSE 3000

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Start the Next.js application
CMD ["yarn", "start"]
