import createContactLink from '../contacts';

/**
*
*@param {string} link
*@returns {HTMLElement}
*/

export default function createPersonContactsListItemElem(link){
    const personContactsListItem = document.createElement('li');
    personContactsListItem.appendChild(createContactLink(link));
    return personContactsListItem;
}