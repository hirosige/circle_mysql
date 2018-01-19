#FROM keymetrics/pm2:8-alpine
#
#WORKDIR /front
#
#EXPOSE 9001
#
#CMD [ "pm2-runtime", "start", "dist/production.js" ]

# Pull base image.
FROM node:8-alpine

# Define working directory
WORKDIR /front

# Listen on the specified network ports
EXPOSE 9001

# Executing defaults
CMD ["node", "dist/production.js"]