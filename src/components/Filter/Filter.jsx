import { PropTypes } from "prop-types";
import {
    FilterForm,
    FilterLabel,
    FilterInput,
} from './Filter.styled';

export const Filter = ({ title, value, filterText }) => {
    return (
        <>
            <FilterForm autoComplete="off">
                <FilterLabel htmlFor="filter">
                    {title}
                    <FilterInput
                        type="text"
                        name="filter"
                        value={value}
                        onChange={filterText}
                    />
                </FilterLabel>
            </FilterForm>
        </>
    );
};

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    filterText: PropTypes.func.isRequired,
};