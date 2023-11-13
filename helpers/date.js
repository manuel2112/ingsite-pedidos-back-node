
const dateFormat = (value = '') => {

    const date = value == '' ? new Date() : new Date(value) ;
    
    const year  = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day   = String(date.getDate()).padStart(2, '0');

    const obj = {
        fecha:   `${year}-${month}-${day}`,
        latina:  `${day}-${month}-${year}`,
    };

    return obj;
}

module.exports = {
    dateFormat
}