import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const bColor = '#34343b';
const hColor = '#454545';

const PostsSidebar = ({ loading = true }) => {

    return (
        <>

        {loading ? (
            [...Array(14)].map((_i, k) => (
                <div className=" col col-12" key={k}>
                    <Link to={`/post/${k < 8 ? k + 1 : k - 7}`}>
                        <img src={`assets/images/s${k+1}.jpg`} alt="" />
                        <span className='date'>{Math.ceil(Math.random() * 22 + 2)}  days ago</span>
                    </Link>
                </div>
            ))
        ) : (
            [...Array(7)].map((i, k) => (
                <div className="col col-12 d-flex flex-center bg-skeleton py-4" key={k}>
                    <div className="col col-auto">
                        <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
                            <Skeleton count={1} width={52} height={52} circle={true} />
                        </SkeletonTheme>
                    </div>
                    <div className="col">
                        <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
                            <Skeleton count={4} height={3} />
                        </SkeletonTheme>
                    </div>
                </div>
            ))
        )}
        </>
    )
}

export default PostsSidebar
