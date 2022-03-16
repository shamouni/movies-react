import DataMock from '../data-mock.json';

const FetchMock = (type) => {

    const delay = type.includes('POSTS') ? 1500 : 0;

    return new Promise((resolve) => {
        setTimeout(() => resolve(DataMock), delay);
    })
};

const Paginate = (data, page, limit, count) => {

    const start = (page - 1) * limit;

    if(data && data instanceof Array && start <= count) {
        return data.slice(start, page * limit);
    }
    else {
        return data;
    }
}

const postMiddleware = store => next => action => {
    
    const {
        successType,
        failedType,
        isEndpointCall,
        endpoint,
        method,
        reduxData = {},
    } = action;

    const {page, limit} = reduxData;
    

    next(action);

    if(isEndpointCall) {

        try {
            return (
                FetchMock(successType, method, endpoint)
                .then(res => {
                    const { posts, sliders, comments } = res;
                    const count = posts.length;

                    next({
                        type: successType,
                        sliders,
                        posts: Paginate(posts, page, limit, count),
                        comments,
                        count,
                        ...reduxData
                    });

                    return new Promise(resolve => resolve(res));
                })

                // fetch('https://jsonplaceholder.typicode.com/todos')
                // .then(res => res.json())
                // .then(payload => {
                //     const { posts, sliders, comments } = DataMock;
                //     const count = posts.length;

                //     next({
                //         type: successType,
                //         sliders,
                //         posts: Paginate(posts, page, limit, count),
                //         comments,
                //         count,
                //         ...reduxData
                //     });

                //     return new Promise(resolve => resolve(DataMock));
                // })
                // .catch(e => console.log(e))
            );
        } 
        catch (error) {

            next({
                type: failedType,
                error
            });

            return new Promise((resolve, reject) => reject(error));
        }
    }

}

export default postMiddleware;