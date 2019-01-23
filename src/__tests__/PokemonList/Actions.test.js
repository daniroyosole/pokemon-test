import { getPokemonList, getPokemonListSuccess, getPokemonListFailure } from '@Containers/pokemon-list/store/actions';

test("getPokemonList", () => {
  expect(getPokemonList(1)).toMatchSnapshot();
});

test("getPokemonListSuccess", () => {
    expect(getPokemonListSuccess({results: []})).toMatchSnapshot();
});

test("getPokemonListFailure", () => {
    expect(getPokemonListFailure({})).toMatchSnapshot();
});