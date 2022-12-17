import {  configureStore } from '@reduxjs/toolkit'
import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducerpro from './Reducerpro'
const store = createStore(Reducerpro,composeWithDevTools())
export default store