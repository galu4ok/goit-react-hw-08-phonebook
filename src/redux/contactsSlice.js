import { createSlice, nanoid } from '@reduxjs/toolkit';
//Cлайс списку контактів, у стані якого зберігається масив контактів,прапор статусу завантаження та дані можливої помилки.

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      payload: {
        id: nanoid(),
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

// Експортуємо редюсер та генератори екшенів
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
