import {configureStore} from '@reduxjs/toolkit'
import postsReducer from './slices/index'
export const store=configureStore({
    reducer:{
        posts:postsReducer
    }
})
