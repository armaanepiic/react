export default function Profile({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length}</b> ({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b> {person.discovery}
        </li>
      </ul>
    </div>
  );
}
