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
import propTypes from 'prop-types';

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
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
};
