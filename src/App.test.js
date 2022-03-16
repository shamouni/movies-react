import { cleanup } from '@testing-library/react';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import Types from './store/types/post-types';


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const data = [{
  id: 1,
  title: "my test",
}];

const FETCH_SUCCESS = {
    type: Types.FETCH_POSTS_SUCCESS
}

const addNewItem = ({
    type: Types.ADD_COMMENT_SUCCESS,
});

const fetchPosts = dispatch => (
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(() => dispatch(FETCH_SUCCESS))
)


describe('<App />', () => {

  let store;

  beforeEach(() => {

      store = mockStore({});

      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(data)
      });
  });
    
  afterEach(cleanup);

    it('should execute fetch posts', () => {
        return store.dispatch(fetchPosts).then(r => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(FETCH_SUCCESS)
        });
    });

    it('add a new comment', () => {

        store.dispatch(addNewItem)
        const actions = store.getActions();

        expect(actions[0].type).toEqual(Types.ADD_COMMENT_SUCCESS);
    });
});