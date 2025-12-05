import PropTypes from 'prop-types'

import Asset from '@components/Asset/Asset';
import { roundedRating } from '@utils/roundedRating';

import FilledStar from '@assets/filledStar.svg'
import EmptyStar from '@assets/emptyStar.svg'

const Review = ({ rating, reviewsCount }) => {
    const arrayOf5 = Array(5).fill(null);
    const normalizedRating = roundedRating(rating);

    return (
        <div role='img' aria-label={`Rating: ${rating} out of 5`} className='flex gap-[0.3rem] items-center'>
            {arrayOf5.map((_, index) => (
                <Asset
                    key={index}
                    image={normalizedRating >= index + 1 ? FilledStar : EmptyStar}
                    customClasses='size-[14px]'
                />
            ))}
            <span className='text-[0.9rem] text-light-gray'>
                ({reviewsCount}{" "}
                {reviewsCount === 1 ? "review" : "reviews"})
            </span>

        </div>
    );
};

Review.propTypes = {
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number.isRequired,
}

export default Review