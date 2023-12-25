# Use the official Go image as the base image
FROM golang:alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . ./

RUN go build -o /go-docker-demo

EXPOSE 3000

CMD [ "/go-docker-demo" ]
