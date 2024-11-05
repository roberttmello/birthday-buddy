const Person = ({ age, image, name }) => {
  return (
    <section className="person">
      <img className="img" src={image} alt={name + 'Perfil Image'} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </section>
  );
};
export default Person;
