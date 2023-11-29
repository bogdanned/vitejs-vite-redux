import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../../store/features/personSlice';

const AddPerson = () => {
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch();

  return (
    <form className="border rounded-md p-2 shadow-md m-2">
      <label htmlFor=""> Person Name: </label>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch(addPerson({ name }))}>Add</button>
    </form>
  );
};

export default AddPerson;
