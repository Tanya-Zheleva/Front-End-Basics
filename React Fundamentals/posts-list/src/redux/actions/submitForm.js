import SUBMIT_FORM from '../actions/actionTypes/SUBMIT_FORM';

const submitForm = (payload) => {
    return {
        type: SUBMIT_FORM,
        payload
    };
}

export default submitForm;