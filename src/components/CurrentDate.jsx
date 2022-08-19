const CurrentDate = () => {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const numberDay = new Date().getDay();
    const dayName = dayNames[numberDay - 1]

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const numberMonth = new Date().getMonth();
    const monthName = monthNames[numberMonth];

    const year = new Date().getFullYear();

    const dateDay = new Date().getDate();

    const today = `${dayName} ${dateDay}th ${monthName} ${year}`;

    return (
        <p className="current-day">{today}</p>
    );
};

export default CurrentDate;