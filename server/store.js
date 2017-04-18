import {createStore} from 'redux';
import reducer from 'server/reducers/hangman';

export default function setupStore(){
	return createStore(reducer);
}