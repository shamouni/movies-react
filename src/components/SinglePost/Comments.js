import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';


const Comments = ({data = [], addComment}) => {

    const [list, setList] = useState([]);

    const [input, setInput] = useState({
        user: '',
        email: '',
        comment: ''
    });

    useEffect(() => {
        // Not a good practice, just for api simulation
        if(data && data.length > 0) {
            setList(data);
        }
    }, [data, data.length]);


    const handleChange = e => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    const addHandle = e => {
        e.preventDefault();

        addComment({
            ...input, 
            id: Math.ceil(Math.random() * 32767) + 1,
            like: 0,
            dislike: 0
        });

        setInput({
            user: '',
            email: '',
            comment: ''
        });
    }

    const voteClick = (id, action) => () => {

        // Prev like and dislike
        const {like, dislike} = data.find(i => i.id === id);

        const updated = list.map(i => {

            if(i.id === id) {

                let lk = 0;
                let dk = 0;
                
                if(action === 'like') {
                    lk = i.like > like ? like : like + 1;
                    dk = dislike;
                }
                else {
                    dk = i.dislike > dislike ? dislike : dislike + 1;
                    lk = like;
                }

                return {
                    ...i, 
                    like: lk, 
                    dislike: dk
                };
            }

            return i;
        });

        setList(updated);
    }

    const {user, email, comment} = input;


    return (
        <section className="comments">
            <div className="container">
                <div className="head flex-between">
                    <h4>
                        <i className="fa fa-commenting mr-05" aria-hidden="true"></i>
                        {list.length} comments
                    </h4>
                    <a href="#form" className="btn">Add a comment</a>
                </div>

                <div className="opinions">
                    {(list instanceof Array) && list.map((i, k) => (
                        <div className='item' key={k}>
                            <div className="c-info">
                                <span>
                                    <i className="fa fa-user mr-1" aria-hidden="true"></i>
                                    <b>{i.user}</b>
                                    <time>{getDate()}</time>
                                </span>
                                <div className='vote'>
                                    <span onClick={voteClick(i.id, 'like')}>
                                        <i className="fa fa-thumbs-up like" aria-hidden="true"></i> {i.like || 0}
                                    </span>
                                    <span onClick={voteClick(i.id, 'dislike')}>
                                        <i className="fa fa-thumbs-down dislike" aria-hidden="true"></i> {i.dislike || 0}
                                    </span>
                                </div>
                            </div>
                            <p>{i.comment}</p>
                        </div>
                    ))}
                </div>

                <form id="form" className="form" onSubmit={addHandle}>
                    <h4 className="head">Leave a comment</h4>
                    <textarea value={comment} onChange={handleChange} name="comment" placeholder='How was this movie?' />
                    <div>
                        <input value={user} onChange={handleChange} type="text" name="user" placeholder='Name' />
                        <input value={email} onChange={handleChange} type="email" name="email" placeholder='Email' />
                        <button className='btn'>Send it</button>
                    </div>
                </form>

            </div>
        </section>
    )
}

const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return (yyyy + '-' + mm + '-' + dd);
}

Comments.prototype = {
    data: PropTypes.array,
    addComment: PropTypes.func.isRequired
}

export default Comments
