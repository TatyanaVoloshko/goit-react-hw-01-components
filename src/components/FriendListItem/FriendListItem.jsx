import { StatList, Item, Photo, Name, Status } from "components/FriendList/FriendList.styled"
import propTypes from 'prop-types';

export const FriendListItem = ({ props }) => {
    const friends = props.map(({id, avatar, name, isOnline}) => {
       
      return(
      <Item key={id}>
       <Status isHide={isOnline}></Status>
       <Photo src={avatar}  alt={name} width="48" />
       <Name>{name}</Name>
     </Item>

     ) })
       return friends
    }
       
    FriendListItem.propTypes = {
        props: propTypes.arrayOf(
          propTypes.shape({
            avatar: propTypes.string,
            name: propTypes.string,
            isOnline: propTypes.bool.isRequired,
            id: propTypes.number.isRequired,
          })
        ),
      };