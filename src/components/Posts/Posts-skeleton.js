import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const bColor = '#34343b';
const hColor = '#454545';

const PostsSkeleton = () => {

    return (
        <>
        {[...Array(4)].map((i, k) => (
            <div className='post-item flex-center' key={k}>
                <div className="col col-auto figure">
                    <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
                        <Skeleton count={1} width={92} height={92} circle={true} />
                    </SkeletonTheme>
                </div>
                <div className="col">
                    <div className="desc">
                        <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
                            <Skeleton count={8} height={4} />
                        </SkeletonTheme>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default PostsSkeleton;