import { combineReducers } from 'redux';

// Container reducers
import pokemonList from '@Containers/pokemon-list/store/reducers';
import pokemonDetail from '@Containers/pokemon-detail/store/reducers';

const appReducer = combineReducers({
  pokemonList,
  pokemonDetail,
});

export default (state, action) => appReducer(state, action);
