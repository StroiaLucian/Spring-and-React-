import RestApiClient from "../../commons/api/rest-client";
import {HOST} from '../../commons/hosts';

const endpoint = {
    signup: '/SignUp',
};


function insertUser(user, callback){
    let request = new Request(HOST.backend_api + endpoint.signup , {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

export {
    insertUser,
};


