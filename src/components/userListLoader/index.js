import createUserList from '../userList';
import {loadJson} from '../../utils';
//import {Spinner}  from 'spin.js';
//import {spinnerOptions} from '../../constants/index.js';

export default class UserListLoader{
/**
*
*@param {HTMLElement} userListContainer
*@param {string} url
*/

constructor(userListContainer, url){
    this._userListContainer= userListContainer;
    this._users = null;
    this._error = null;
    this._isFetching = false;
    this.onload = null;
    this._loadingElem = null;
    this.loadTeam(url);
}

get loadingElem(){
    return this._loadingElem;
}

/**
*
*@param {HTMLElement} value
*/
set loadingElem(value){
    if(value instanceof HTMLElement){
        this._loadingElem = value;
    } else throw new TypeError();
}

get userListContainer(){
    return this._userListContainer;
}

get users(){
    return this._users;
}

/**
*
*@param {Array<Object>} value
*/
set users(value){
    this._users = value;
}

get isFetching(){
    return this._isFetching;
}

/**
*
*@param {Boolean} value
*/
set isFetching(value){
    if(typeof value !== 'boolean'){
        throw new TypeError();
    }
    this._isFetching= value;
    if(!value && !this._error && typeof this.onload === 'function'){
        this.onload();
    }
}

get error(){
    return this._error;
}

set error(value){
    if(value instanceof Error){
        this._error = value;
        this.isFetching = false;
        if(typeof this.onerror === 'function'){
            this.onerror(newEvent('error'));
        }
    } else {
        throw new TypeError();
    }
}

/**
*
*@param {string} url
*@returns {Promise<void>}
*/
async setUsers(url){

}


}



