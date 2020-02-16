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
                this.onerror(new Event('error'));
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
        try{
            console.log('setUsers is working');
            const users = await loadJson(url);

            if(Array.isArray(users)){
                this._users = users;
                this._error=null;
                this.isFetching = false;
            }
            else{
                throw new TypeError('Wrong data type');
            }
        } catch(e){

//            this.error = e;
            console.error(e);
        }
    }

    /**
    *
    *@param {string} url
    */
    loadTeam(url){
        console.log('loadTeam is working');
        this.onload = () =>{
            this.render();
        }
        this.onerror = () =>{
            this.render();
        }
        this.isFetching = true;
        this.setUsers(url);
        this.render();
    }

    renderError(){
        this.loadingElem.remove();
    }

    renderLoading(){
    //    this.loadingElem = new Spinner(spinnerOptions).spin(
    //        this.userListContainer
    //    ).el;
    }

    render(){
        if(this.isFetching){
            this.renderLoading();
        }
        else if(this.error){
            this.renderError();
        }
        else{
            console.log('Render is working')
            this.userListContainer.appendChild(createUserList(this.users));
        }
    }

}



