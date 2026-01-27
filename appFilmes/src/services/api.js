import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes 
//  - Links para usado na requisição da API, e perceba que só
//     usamos ate o .com/


const api = axios.create({
 baseURL: 'https://sujeitoprogramador.com/'
});

export default api;
