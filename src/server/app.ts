import express, { Application, json, urlencoded } from "express";
import cors from 'cors';
import morgan from "morgan";
import baseRouter from '../modules/baseRouter'
import bodyParser from "body-parser";

interface ServerInterface {
  server(): Promise<Application>;
}

// const whitelist = ['*']

const configCors : cors.CorsOptions = {
  origin: "*"
  // origin: function (origin = '', callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // }
}

class Server implements ServerInterface {

  async server(): Promise<express.Application> {
    const app = express();
    app.use(json());

    app.use(cors(configCors));
    app.use(morgan('dev'))
    
    app.use(bodyParser.json())
    app.use(urlencoded({ extended: true }));

    app.use('/api/v1', baseRouter.routes);//setting up base route
    // define a route handler for the default home page
    app.get("/", (req, res) => {
      res.send("Welcome to express application!");
    });
    return app;
  }
}

export default new Server();