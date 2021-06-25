import * as express from 'express';
import {AngularFirestore} from "../providers/angular.firestore";
export class BaseController extends  AngularFirestore {

    public router = express.Router();

    constructor() {
        super();
    }

}