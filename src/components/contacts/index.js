import {LINKS_ICON_MAP} from '../../constants'

/**
*
*@param {string} href
*@param {Array<string>} classNames
*@returns {HTMLAnchorElement}
*/

export default function createContactLink(href, classNames){
    const link = document.createElement('a');
    link.setAttribute('href', href);
    link.target = 'blank';
    link.classList.add(...classNames);
    const icon = document.createElement('i');
    const {hostname} = new URL(href);
    if(LINKS_ICON_MAP.has(hostname)){
        icon.classList.add(...LINKS_ICON_MAP.get(hostname));
    } else {
        icon.classList.add('fa', 'fa-heart', 'pulse');
        link.appendChild(icon);
        return link;
    }

}