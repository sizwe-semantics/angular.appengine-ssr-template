import * as express from 'express';
import {User} from '../model/user';
import {AngularFirestore} from "../providers/angular.firestore";
import BaseController from './base.controller';

export default class UserController extends AngularFirestore, BaseController{
  public routerPath = '/api/users/';
  private dbPath = 'users';


  constructor() {
    super();
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.routerPath, this.getAllPosts);
    this.router.post(this.routerPath, this.createAPost);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    console.log(request.headers)
    this.collection<User>(this.dbPath).then(allUsers => {
      console.log(allUsers);
      response.send(allUsers);
    });
  }

  createAPost = (request: express.Request, response: express.Response) => {
    const post: User = request.body;
    response.send(post);
  }
}

