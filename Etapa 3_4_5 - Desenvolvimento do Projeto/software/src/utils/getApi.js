import axios from 'axios'

export default function getApi(){
    return axios.get('https://9c7e-186-232-36-168.ngrok.io/api').then(response => response.data)
}