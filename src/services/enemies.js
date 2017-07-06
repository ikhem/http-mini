import axios from 'axios';
import { turnApiObjIntoArray } from '../utils/turnApiObjIntoArray';

export function getEnemies(){
  // return axios.get('http://192.168.2.119:3005/all').then(response => turnApiObjIntoArray(response.data));
    return axios.get('http://localhost:3005/all').then(response => turnApiObjIntoArray(response.data));

}

export function patchEnemy(name, id){
  // return axios.patch(`http://192.168.2.119:3005/${name}/minions/${id}`, {type: 'frog'})
    return axios.patch(`http://localhost:3005/${name}/minions/${id}`, {type: 'frog'})

}

export function deleteArmy(name, id){
  // return axios.delete(`http://192.168.2.119:3005/${name}/${id}`)
  return axios.delete(`http://localhost:3005/${name}/${id}`)

}