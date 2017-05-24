FROM node:boron-alpine

LABEL maintainer "Zhenyu Lin <zhenyu.lyn@gmail.com>"

# Install Yarn
ENV PATH /root/.yarn/bin:$PATH
RUN apk --update add git curl bash binutils tar \
	&& rm -rf /var/cache/apk/* \
	&& /bin/bash \
	&& touch ~/.bashrc \
	&& curl -o- -L https://yarnpkg.com/install.sh | bash \
	&& apk del git curl tar binutils

# Create user and app directory
RUN adduser -S hangman
RUN mkdir -p /home/hangman/app
WORKDIR /home/hangman/app

# Install Dependencies
ADD package.json yarn.lock /home/hangman/app/
RUN yarn --pure-lockfile \
	&& chown -R hangman /home/hangman/app \
	&& yarn cache clean

# Bundle app source and remove src
ADD . /home/hangman/app/
RUN yarn build \
	&& rm -rf client server config test

USER hangman
EXPOSE 3000
ENTRYPOINT yarn serve