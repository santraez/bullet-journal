import { useState } from "react";

const CalendarCell = () => {
	const [day, setDay] = useState('01');
	const showDay = () => {
		setDay('Lunes');
	};
	const showDate = () => {
		setDay('01');
	};
  return (
		<>
		<div className="calendar-cell__container">
			<div onMouseEnter={showDay} onMouseLeave={showDate} className="calendar-cell__day">
				<p className="calendar-cell__day--default">{day}</p>
				<div className="calendar-cell__day--add-container">
					<p className="calendar-cell__day--default">{day}</p>
					<div className="calendar-cell__day--add">
						<p>Press to save</p>
					</div>
				</div>
			</div>
			<div className="calendar-cell__textarea"></div>
		</div>
		</>
	);
};

export default CalendarCell;