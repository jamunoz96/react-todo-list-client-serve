FROM node:14
# Create app directory
WORKDIR /usr/src/app

# Copy app source code
COPY . /usr/src/app/

# Install app dependencies
RUN npm install --silent

#Expose port and start application
EXPOSE 5000

CMD ["node", "index.js"]