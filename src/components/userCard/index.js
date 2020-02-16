import createPersonPhotoElem from './picture.js'
import createPersonFullNameElem from './fullName.js'
import createPersonPositionElem from './position.js'
import createPersonDescriptionElem from './description.js'
import createPersonContactsElem from './contacts.js'

/**
*
*@param {object} employee
*@returns {HTMLElement}
*/

export default function(employee){

    const personWrapperOuter = document.createElement('div');
    personWrapperOuter.className ='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 card-wrapper';
    const personWrapperInner = document.createElement('div');
    personWrapperInner.classList.add('cardItem');
    personWrapperInner.appendChild(createPersonPhotoElem(employee));
    const information = document.createElement('div');
    information.classList.add('information');
    console.log('UserCard is working');
    information.appendChild(createPersonFullNameElem(employee));
    information.appendChild(createPersonPositionElem(employee));
    personWrapperInner.appendChild(information);
    const description = document.createElement('div');
    description.classList.add('description');
    description.appendChild(createPersonDescriptionElem(employee));
    personWrapperInner.appendChild(description);
    const socialNetworks = document.createElement('div');
    socialNetworks.classList.add('socialNetworks');
    socialNetworks.appendChild(createPersonContactsElem(employee));
    personWrapperInner.appendChild(socialNetworks);
    personWrapperOuter.appendChild(personWrapperInner);
    return personWrapperOuter;
}