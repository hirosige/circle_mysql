FROM kkarczmarczyk/node-yarn:latest

WORKDIR /admin

# install latest version of yarn
RUN npm uninstall yarn -g
RUN npm install yarn -g

# global install for lazy people
RUN yarn global add mocha
RUN yarn global add karma-cli
RUN yarn global add karma
RUN yarn global add webpack
RUN yarn global add browser-sync

EXPOSE 3001
EXPOSE 8080