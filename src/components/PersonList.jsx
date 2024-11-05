import Person from './Person';

const PersonList = ({ people }) => {
  return (
    <article>
      {people.map((person) => (
        <Person {...person} key={person.id} />
      ))}
    </article>
  );
};
export default PersonList;
