export function convertToMySqlDate(date) {

    const convertDate = new Date(date).toISOString().slice(0,19).replace('T',' ');

    console.log(convertDate)
    return convertDate

}
