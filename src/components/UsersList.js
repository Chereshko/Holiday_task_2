import createUserCard from './components/UserCard';
import './styles.scss';

/**
 *
 * @param {Array<object>} users
 * @return
 */
export default function (users) {
  const listContainer = document.createElement( 'div' );

  users.forEach( user => {
    listContainer.appendChild( createUserCard( user ) );
  } );
  return listContainer;
}