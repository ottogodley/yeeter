FROM node:alpine

RUN apk add gifsicle git go

ENV GOPATH /go
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH

RUN go get -u github.com/sgreben/yeetgif/cmd/gif

WORKDIR /app

COPY ./ /app
RUN npm install

EXPOSE 3000