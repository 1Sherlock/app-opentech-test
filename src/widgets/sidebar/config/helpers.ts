export const getBeautifulNumber = (number: number) => {
    if (number)
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    else
        return number;
}