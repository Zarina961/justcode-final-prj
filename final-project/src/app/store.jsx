import { configureStore } from '@reduxjs/toolkit'

import { postsReducer } from '../features/weatherInformation'
import { newsReducer } from '../features/newsInformation'

export const store = configureStore({
	reducer: {
		postsReducer,
		newsReducer
	},
})

