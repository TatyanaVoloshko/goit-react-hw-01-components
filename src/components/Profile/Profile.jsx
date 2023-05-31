import {
  Container,
  Div,
  Name,
  Photo,
  Tag,
  Location,
  Stats,
  StatsList,
  Label,
  Quantity
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Div>
        <Photo src={avatar} alt={username}/>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Div>

      <Stats>
        <StatsList>
          <Label>Follower</Label>
          <Quantity> {stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity> {stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity> {stats.likes}</Quantity>
        </StatsList>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
