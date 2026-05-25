const teacher = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
const chemistsObj = teacher.filter((item) => item.profession === 'chemist')
const chemists = chemistsObj.map((item) => <li key={item.id}>{item.name}</li>);

const physicistObj = teacher.filter((item) => item.profession === 'physicist')
const physicists = physicistObj.map((item) => <li key={item.id}>{item.name}</li>);

const mathematicianObj = teacher.filter((item) => item.profession === 'mathematician')
const mathematician = mathematicianObj.map((item) => <li key={item.id}>{item.name}</li>)

export default function App() {
  return (
    <div>
      {/* {listItem} */}
      <h1 className="text-2xl font-bold">List of Chemists:</h1>
      {chemists}
      <h1 className="text-2xl font-bold">List of Physicists:</h1>
      {physicists}
      <h1 className="text-2xl font-bold">List of Mathematician:</h1>
      {mathematician}

    </div>
  );
}
