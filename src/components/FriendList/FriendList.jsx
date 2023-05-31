import { Container } from "components/Profile/Profile.styled"
import { StatList, Item, Photo, Name, Status } from "components/FriendList/FriendList.styled"
import propTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
      <Container>
        <StatList>
       {friends.map(({id, avatar, name, isOnline}) => {
       return(<Item key={id}>
       <Status isHide={isOnline}></Status>
       <Photo src={avatar}  alt={name} width="48" />
       <Name>{name}</Name>
     </Item>)
       }

       )}
       
      </StatList> 
      </Container>  
    )
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(propTypes.shape({ avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,}))
 
};