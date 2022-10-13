import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== action.payload
      );
    },
    addFilter: (state, action) => {
      state.contacts.filter = action.payload.toLowerCase();
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const { addContact, removeContact, addFilter } = phonebookSlice.actions;

export const selectContactsItems = state => state.phonebook.contacts.items;
export const selectContactsFilter = state => state.phonebook.contacts.filter;