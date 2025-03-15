FROM golang:latest AS builder

WORKDIR /app

COPY . .

RUN go build -o main ./cmd/service/main.go

FROM ubuntu:latest

WORKDIR /app

COPY --from=builder /app/main /app/
COPY ./config /app/config

EXPOSE 8000

CMD ["/app/main"]