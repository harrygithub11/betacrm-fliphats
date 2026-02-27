# ---------- Builder ----------
FROM node:18-bullseye AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build


# ---------- Production ----------
FROM node:18-bullseye

WORKDIR /app

# Copy standalone output only
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js", "-H", "0.0.0.0"]
