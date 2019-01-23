import { getList, getListSuccess, getListFailure } from '@Containers/pokemon-list/store/sagas';
import "isomorphic-fetch";

test("getList", () => {
    const action = {payload: 1};
    const gen = getList(action);
    gen.next();
    expect(gen.next({results: []}).value).toMatchSnapshot();
    expect(gen.next({results: []}).done).toEqual(true);
});

test("failList", () => {
    const action = {payload: 1};
    const gen = getList(action);
    gen.next();
    expect(gen.next({}).value).toMatchSnapshot();
    expect(gen.next({}).done).toEqual(true);
});
