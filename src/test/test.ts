
import { HttpClient} from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { toInteger } from 'lodash';

@autoinject
export class Test {
    public message: string = 'Testing!';

    constructor(client: HttpClient) {
        var x = toInteger("43");
    }
}