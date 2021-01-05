import RestApiClient from "../../commons/api/rest-client";
import {HOST} from '../../commons/hosts';

const endpoint = {
    signin: '/SignUp',
};

function read(callback) {
    let request = new Request(HOST.backend_api + endpoint.signin, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}
export {
    read
};


