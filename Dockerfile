FROM node:18
WORKDIR /app
ENV APP_PORT 8080
ENV MODEL_URL="https://storage.googleapis.com/prediction_cancer/model.json"
ENV PORT 8080
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "start"]
