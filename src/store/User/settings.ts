


const userJson = localStorage.getItem('Storage');
export const DEFAULT_SETTINGS = userJson !== null ? JSON.parse(userJson): [];
