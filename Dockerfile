FROM node:8.12.0

# Copy current directory contents into the container
COPY . /www/app

# Install packages
RUN npm install -g ionic

# Set working directory
WORKDIR /www/app

RUN npm install

# Make port 8100 available to the world outside this container
EXPOSE 8100

# Run app when container launches
ENTRYPOINT ["ionic"]
CMD ["serve", "8100", "--address", "0.0.0.0"]
