const getDatesArr = () => {
    datesArr = []
    var prevDate = new Date();

    // Use the setDate() method to subtract 1 day from the date
    prevDate.setDate(prevDate.getDate() - 1);
    prevDate1 = getDateString(prevDate)
    prevDate.setDate(prevDate.getDate() - 1);
    prevDate2 = getDateString(prevDate)
    prevDate.setDate(prevDate.getDate() - 1);
    prevDate3 = getDateString(prevDate)
    prevDate.setDate(prevDate.getDate() - 1);
    prevDate4 = getDateString(prevDate)
    prevDate.setDate(prevDate.getDate() - 1);
    prevDate5 = getDateString(prevDate)        
    datesArr.push(prevDate1,prevDate2,prevDate3,prevDate4,prevDate5)
    return datesArr
};

export default getDatesArr;