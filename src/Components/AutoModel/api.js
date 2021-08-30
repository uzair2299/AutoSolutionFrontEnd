import axios from "axios";

const BASE_URL = 'http://localhost:50268/api/';

export const ENDPIONTS = {
    AUTOMANUFACTURER: 'AutoManufacture',
    AUTOMODEL: 'AutoModel',
    FOODITEM: 'FoodItem',
    ORDER: 'Order'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';
    return {
        fatchAllModel:()=> axios.get(url),
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}