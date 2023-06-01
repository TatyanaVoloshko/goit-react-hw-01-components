import { Container } from "components/Profile/Profile.styled"
import { FriendListItem } from '../FriendListItem/FriendListItem'


export const FriendList = ({friends}) => {
    return (
      <Container>
       <FriendListItem props={friends}/>
      </Container>  
    )
}

