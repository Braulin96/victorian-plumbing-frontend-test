import PropTypes from 'prop-types'

import { selectorOptions } from '../../data/selectorOptions';

const Selector = ({ onChange, value }) => {
    return (
        <div className="flex items-center gap-2">
            <label
                className="text-dark-gray text-sm font-medium"
            >
                Sort by:
            </label>
            <select
                name="sortOrder"
                className="bg-white border border-light-gray px-2 py-2 text-sm 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    cursor-pointer text-primary-green text-[0.8rem] rounded"
                value={value}
                onChange={onChange}
                aria-label="Sort products by"
            >
                {selectorOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

Selector.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
}

export default Selector