import axios from "axios";


const baseURL = "http://localhost:50268/api/";

/*export default function autosolutionAPi(url = baseURL + 'AutoManufacture/') {
    console.log("api");
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }*/


    export default {

        dCandidate(url = baseURL + 'AutoManufacture/') {
            return {
                fetchAll: () => axios.get(url),
                fetchById: id => axios.get(url + id),
                create: newRecord => axios.post(url, newRecord),
                update: (id, updateRecord) => axios.put(url + id, updateRecord),
                delete: id => axios.delete(url + id)
            }
        }
    }

/*export default function autosolutionAllAPi(url = baseURL + 'AutoManufacture/') {
    console.log("Url :",url);
    return axios.get(url);
}*/
