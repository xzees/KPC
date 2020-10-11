

const sleep: any = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values: any) => {
    const userJson = localStorage.getItem('Storage');
    const jsonString = userJson !== null ? JSON.parse(userJson): [];
    jsonString.push(values)
    localStorage.setItem('Storage', JSON.stringify(jsonString));
}

export default asyncValidate;
