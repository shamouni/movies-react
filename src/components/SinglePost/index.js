import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {
    Fetch_Single_Post, 
    Add_Comment_And_Fetch
} from '../../store/actions/post-actions';

import Comments from './Comments';
import Details from './Details';
import Download from './Download';
import Similars from './Similars';
import Trailer from './Trailer';

const classList = document.querySelector('body').classList;


const SinglePost = (props) => {

    const { 
        post, 
        comments, 
        Fetch_Single_Post, 
        Add_Comment_And_Fetch 
    } = props;

    const {id} = useParams();

    useEffect(() => {

        Fetch_Single_Post(id);

        classList.add('page-post');

        // document.querySelector('body').scrollIntoView({
        //     behavior: 'smooth'
        // }, 200)

        window.scrollTo(0, 0);
        
        return () => {
            classList.remove('page-post')
        }
        // eslint-disable-next-line
    }, [id]);


    const addComment = c => {
        Add_Comment_And_Fetch(id, c);
    }


    return (
        <>
        <section className='post-detail'>
            <Details post={post} />
            <Trailer post={post} />
            <Download />
        </section>

        <Similars />
        <Comments data={comments} addComment={addComment} />
        </>
    )
}

const mapStateToProps = state => ({
    post: state.post, 
    comments: state.comments, 
    fetching: state.fetching
});

const mapDispatchToProps = {
    Fetch_Single_Post,
    Add_Comment_And_Fetch
}

SinglePost.propTypes = {
    post: PropTypes.object.isRequired, 
    comments: PropTypes.array.isRequired, 
    Fetch_Single_Post: PropTypes.func.isRequired, 
    Add_Comment_And_Fetch: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
