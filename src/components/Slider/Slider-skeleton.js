import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SliderSkeleton = () => {
    return (
        <>
        {[...Array(9)].map((i, k) => (
            <div className="slide skeleton bg-skeleton" key={k}>
                <SkeletonTheme baseColor="#23232b" highlightColor="#333">
                    <Skeleton count={4} height={2} />
                </SkeletonTheme>
            </div>
        ))}
        </>
    );
}

export default SliderSkeleton
