import PropTypes from 'prop-types'

import Asset from '../Asset/Asset'

import Arrow from '../../assets/arrow.svg'

const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <section>
            <div className="flex items-center gap-[1rem] justify-center text-base">
                <Asset
                    image={Arrow}
                    alt="Previous page"
                    variant="iconButton"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    disabled={page === 0}
                    ariaLabel="Go to previous page"
                    customClasses="rotate-180 size-5"
                />
                <span className="text-center text-dark-gray text-[1rem]">
                    Page {page + 1} of {totalPages}
                </span>
                <Asset
                    image={Arrow}
                    alt="Next page"
                    variant="iconButton"
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={page === totalPages - 1}
                    ariaLabel="Go to next page"
                    customClasses="size-5"
                />
            </div>
        </section>
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
}

export default Pagination