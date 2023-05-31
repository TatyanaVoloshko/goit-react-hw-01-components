import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
};


Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired
  }))
  
};