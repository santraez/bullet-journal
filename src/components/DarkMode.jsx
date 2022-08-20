import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkMode = () => {
	const [dark, setDark] = useState(0);

	const changeDark = () => {
		setDark(1);
	};

	const changeLight = () => {
		setDark(0);
	};


  return (
		<>
		<div className="dark-mode-box">
			<div onClick={changeDark} className={dark ? 'display-none' : 'container-light-mode'}>
				<HiMoon className="light-mode" />
			</div>
			<div onClick={changeLight} className={dark ? 'container-dark-mode' : 'display-none'}>
				<HiSun className="dark-mode"/>
			</div>
		</div>
		{dark}
		</>
	);
};

export default DarkMode;