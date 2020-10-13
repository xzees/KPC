


const userJson = localStorage.getItem('Storage');
const DEFAULT_SETTINGS = {
    users: userJson !== null ? JSON.parse(userJson): [],
    edit: {
        title: 'Mr',
        nationality: 'Thai',
        phone_number: '+66'
    }
};

export default DEFAULT_SETTINGS
