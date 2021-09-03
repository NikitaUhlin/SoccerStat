import moment from "moment";

const getQueryFilter = (location) => {
    const querySearch = location.search.replace("?filter=range", "");
    if (querySearch.length) {
        const initialFilter = querySearch.split("to");
        const startDate = moment(initialFilter[0], "DD.MM.YYYY");
        const endDate = moment(initialFilter[1], "DD.MM.YYYY");
        return [startDate, endDate];
    }
};
export default getQueryFilter;
