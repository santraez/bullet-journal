const CurrentDate = () => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const numberDay = new Date().getDay();
    const dayName = dayNames[numberDay];

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const numberMonth = new Date().getMonth();
    const monthName = monthNames[numberMonth];

    const year = new Date().getFullYear();

    const dateDay = new Date().getDate();

    const today = `${dayName} ${dateDay}th ${monthName} ${year}`;

    return (
        <>
        <p className="current-day">{today}</p>
        {numberDay}
        </>
    );
};

export default CurrentDate;