import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { v4 as uuidv4 } from 'uuid';
// import { data } from '../../resources/personsData';

export interface Person {
  _id: string;
  isActive: boolean;
  age?: number;
  name: string;
  gender: string;
  company: string;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      const id = uuidv4();
      state.persons.push({
        _id: id,
        isActive: true,
        name: action.payload.name,
        company: 'ABC',
        gender: 'male',
        age: 35,
      });
      return state;
    },
  },
});

export default PersonSlice.reducer;

export const { addPerson } = PersonSlice.actions;
