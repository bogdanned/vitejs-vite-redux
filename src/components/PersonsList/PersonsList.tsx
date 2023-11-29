import { Person } from '../../store/features/personSlice';
import { useAppSelector } from '../../store/store';
const PersonsList = () => {
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <div>
      <h3>Persons List</h3>
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>Name</th>
            <th>isActive</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person: Person) => (
            <tr key={person._id}>
              <td>{person._id}</td>
              <td>{person.name}</td>
              <td>{person.isActive ? 'yes' : 'no'}</td>
              <td>{person.age}</td>
              <td>{person.gender}</td>
              <td>{person.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsList;
