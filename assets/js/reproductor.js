import {Multimedia} from './multimedia.js';

export class Reproductor extends Multimedia {

    constructor(url, id) {
        super(url)
        this._id = id;
    }

    get id () {
        return `El tipo de animal es un: ${this._id}`;
    }

    playMultimedia(fun) {
        fun(this.url, this._id);
    }

}
