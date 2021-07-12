FROM node:14
# Create app directory
WORKDIR /usr/src/app

# Copy app source code
COPY . /usr/src/app/

# Install app dependencies
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

#Expose port and start application
EXPOSE 3000

CMD ["npm", "start"]