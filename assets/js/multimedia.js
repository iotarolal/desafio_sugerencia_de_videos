//import {Reproductor} from './reproductor.js';

export class Multimedia {
    constructor (url) {
        this._url = url;
    }
// metodo getter
    get url() {
        return this._url;
    }

    setInicio(url) {
        return `Esta es la Url: ${url}`;
    }
}
