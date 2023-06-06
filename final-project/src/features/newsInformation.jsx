import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	post: [],
	isLoading: true
}

let apiKey=  "pub_23652e5dbc7d74701e3dd0cefa0cad1271ced"
let url = `https://newsdata.io/api/1/news?apikey=pub_23652e5dbc7d74701e3dd0cefa0cad1271ced&q=pegasus&language=en`;

export const fetchPosts = createAsyncThunk('/posts', async () => {
	const { data } = await axios.get(url)
	return data
})

export const newsInformation = createSlice({
	name: 'info',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.pending]: (state) => {
			// state.posts = ''
			state.isLoading = true
		},
		[fetchPosts.fulfilled]: (state, action) => {
            console.log(action)
			// state.humidity = action.payload.main.humidity
            state.post = action.payload.results
			state.isLoading = false
		},
		[fetchPosts.rejected]: (state) => {
			// state.posts = ''
			state.isLoading = false
		}
	}
})

export const newsReducer = newsInformation.reducer