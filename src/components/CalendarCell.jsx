import { useRef, useState } from "react";

const CalendarCell = () => {
	const [day, setDay] = useState('01');
	const [data, setData] = useState('Add new ...');
	const [showTx, setShowTx] = useState(false);
	const textarea = useRef();
	const showDay = () => {
		setDay('Lunes');
	};
	const showDate = () => {
		setDay('01');
	};
	const showTextarea = () => {
		setShowTx(true);
	};
	const hideTextarea = () => {
		setShowTx(false);
		setData(textarea.current.value);
	};
  return (
		<>
		<div className="calendar-cell__container">
			{
				showTx ? (
					<div className="calendar-cell__container">
						<div className="calendar-cell__day-tx">
							<div className="calendar-cell__day-tx-text">
								<p className="calendar-cell__day--default">01</p>
							</div>
							<button onClick={hideTextarea}>Press to save</button>
						</div>
						<textarea onBlur={hideTextarea} maxLength="50" className="calendar-cell__textarea" ref={textarea} defaultValue={data} />
					</div>
				) : (
					<div className="calendar-cell__container">
						<div onMouseEnter={showDay} onMouseLeave={showDate} className="calendar-cell__day">
							<p className="calendar-cell__day--default">{day}</p>
						</div>
						<div className="calendar-cell__show" onDoubleClick={showTextarea}>
							<p>{data}</p>
						</div>
					</div>
				)
			}
		</div>
		{data}
		</>
	);
};

export default CalendarCell;