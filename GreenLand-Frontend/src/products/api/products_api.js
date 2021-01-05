import RestApiClient from "../../commons/api/rest-client";
import {HOST} from '../../commons/hosts';

const endpoint = {
    products: '/Products',
};

function getProducts(callback) {
    let request = new Request(HOST.backend_api + endpoint.products, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}
export {
    getProducts
};
