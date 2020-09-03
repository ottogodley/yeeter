FROM node:alpine

RUN apk add git go build-base libc6-compat gifsicle

ENV GOPATH /go
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH

RUN go get -u github.com/sgreben/yeetgif/cmd/gif

WORKDIR /app

COPY ./ /app
# FIX FOR RASPBERRY PI - UNCOMMENT LINE BELOW to allow lossy gif conversion on ARM processors
# You'll need to build a version of gifsicle that supports the --lossy flag if you want to run this on a Raspberry Pi
#RUN rm /usr/bin/gifsicle && cp bin/gifsicle /usr/bin/
RUN npm install -g

EXPOSE 3000
