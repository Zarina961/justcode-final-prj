import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import WeatherPage from '../pages/WeatherPage/WeatherPage';


const initialState = {
	humidity: '',
    wind_speed: '',
    pressure: '',
	rain_probability: '',
	temperature: '',
	isLoading: true
}

// 'https://jsonplaceholder.typicode.com/posts'

// API ключ
let apiKey = "c8cac12a55d6e04ff172e10ab34ab176";
// Город погода которого нужна

// Формируем url для GET запроса
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;



export const fetchPosts = createAsyncThunk('/weather', async (city) => {
	const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`)
	return data
})
// axios.get(url).then(res => {
//     // Выводим результат в консоль браузера
//     console.log(res.data);
//  })
export const weatherInformation = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.pending]: (state) => {
			// state.posts = ''
			state.isLoading = true
		},
		[fetchPosts.fulfilled]: (state, action) => {
            console.log(action)
			state.humidity = action.payload.main.humidity
			state.wind_speed = action.payload.wind.speed
			state.pressure = action.payload.main.pressure
			state.rain_probability = action.payload.clouds.all
			state.temperature = action.payload.main.temp
			state.isLoading = false
		},
		[fetchPosts.rejected]: (state) => {
			// state.posts = ''
			state.isLoading = false
		}
	}
})

export const postsReducer = weatherInformation.reducer