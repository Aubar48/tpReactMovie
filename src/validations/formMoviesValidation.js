// Synchronous validation
export const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required Title';
    }
    if (!values.rating) {
        errors.rating = 'Required Rating';
    }
    if (!values.awards) {
        errors.awards = 'Required Awards';
    }
    if (!values.release_date) {
        errors.release_date = 'Required Date';
    }
    if (!values.length) {
        errors.length = 'Required Length';
    }

    if (!values.genre_id) {
        errors.genre_id = 'Required Genre';
    }


    return errors;
};
