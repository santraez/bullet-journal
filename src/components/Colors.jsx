const { useState } = require("react");

const Colors = () => {
	const [color, setColor] = useState('')
	const selectColor = e => {
		setColor(e.target.value)
	};
  return (
		<>
		<div className="colors-container">
			<div className="color-box">
				<button onClick={selectColor} value='a' className="colors-bar color-a" />
			</div>
			<div className="color-box">
				<button onClick={selectColor} value='b' className="colors-bar color-b" />
			</div>
			<div className="color-box">
				<button onClick={selectColor} value='c' className="colors-bar color-c" />
			</div>
			<div className="color-box">
				<button onClick={selectColor} value='d' className="colors-bar color-d" />
			</div>
			<div className="color-box">
				<button onClick={selectColor} value='e' className="colors-bar color-e" />
			</div>
			<div className="color-box">
				<button onClick={selectColor} value='f' className="colors-bar color-f" />
			</div>
			<div className="color-box">
				<button onClick={selectColor} value='g' className="colors-bar color-g" />
		</div></
		div>
		{color}
		</>
	);
};

export default Colors;