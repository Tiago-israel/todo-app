import Axios from "axios";
import { from, of } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export default class HttpService {

    apiUrl = 'http://localhost:3003/api';
    resource = '';

    constructor(resource) {
        this.resource = resource;
    }

    get = (action = '', queryParams = '', next, error, complete) => {
        return from(Axios.get(`${this.apiUrl}/${this.resource}/${action}?${queryParams}`))
            .pipe(flatMap(this.tratarResponse))
            .pipe(catchError(this.tratarError))
            .subscribe(next, error, complete);
    }

    delete = (action = '', id, next, error, complete) => {
        return from(Axios.delete(`${this.apiUrl}/${this.resource}/${action}${id}`))
            .pipe(flatMap(this.tratarResponse))
            .pipe(catchError(this.tratarError))
            .subscribe(next, error, complete);
    }

    post = (action = '', body, next, error, complete) => {
        return from(Axios.post(`${this.apiUrl}/${this.resource}/${action}`, body))
            .pipe(flatMap(this.tratarResponse))
            .pipe(catchError(this.tratarError))
            .subscribe(next, error, complete);
    }

    put = (action = '', body, id, next, error, complete) => {
        return from(Axios.put(`${this.apiUrl}/${this.resource}/${action}${id}`, body))
            .pipe(flatMap(this.tratarResponse))
            .pipe(catchError(this.tratarError))
            .subscribe(next, error, complete);
    }

    tratarError = (error) => throwError(error);

    tratarResponse = resp => of(resp.data);

}



