const { useState } = require("react");

const Colors = () => {
	const [color, setColor] = useState('')
	const selectColor = e => {
		setColor(e.target.value)
	};
  return (
		<>
		<div className="colors-container">
			<button onClick={selectColor} value='a' className="colors-bar color-a" />
			<button onClick={selectColor} value='b' className="colors-bar color-b" />
			<button onClick={selectColor} value='c' className="colors-bar color-c" />
			<button onClick={selectColor} value='d' className="colors-bar color-d" />
			<button onClick={selectColor} value='e' className="colors-bar color-e" />
			<button onClick={selectColor} value='f' className="colors-bar color-f" />
			<button onClick={selectColor} value='g' className="colors-bar color-g" />
		</div>
		{color}
		</>
	);
};

export default Colors;