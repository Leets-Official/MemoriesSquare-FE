FROM node:16 as builder

WORKDIR /workspace
COPY . .

RUN npm ci
RUN npm run build

FROM node:16

ENV NODE_ENV production
ENV TZ Asia/Seoul
ENV PORT 8081
EXPOSE 8081

COPY --from=builder /workspace/build ./build
COPY --from=builder /workspace/package.json ./package.json

CMD ["node", "build"]
