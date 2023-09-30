import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65186ac7818c4e98ac5fc3b9.mockapi.io';

//виконуємо HTTP-запит та отримуємо усі контакти
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // HTTP-запит
      const response = await axios.get('/contacts');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
      console.log('response.data', response.data);
    } catch (e) {
      // При помилці запиту повертаємо проміс,який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
