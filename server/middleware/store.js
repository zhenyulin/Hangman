import { createStore } from 'redux';
import reducer from './reducers';

export default function setupStore() {
  return createStore(reducer);
}
