


const userJson = localStorage.getItem('Storage');
const DEFAULT_SETTINGS = {
    users: userJson !== null ? JSON.parse(userJson): []
};

export default DEFAULT_SETTINGS
