import userCard from '../userCard';

/**
*
*@param {Array<string>} team
*@returns {HTMLDivElement}
*/

export default function createUserList(team){
    const teamContainer = document.createElement('div');
    teamContainer.classList.add('row');
    teamContainer.setAttribute('style', 'margin:0');
    team.forEach(employee => {
        teamContainer.appendChild(userCard(employee));
    });
    return teamContainer;
}