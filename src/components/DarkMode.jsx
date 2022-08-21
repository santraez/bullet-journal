import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkMode = () => {
	const [dark, setDark] = useState(0);

	const changeDark = () => {
		setDark(0);
	};

	const changeLight = () => {
		setDark(1);
	};


  return (
		<>
		<div className="dark-mode-box">
			{
				dark ? (
					<div onClick={changeDark} className="container-dark-mode">
						<HiSun className="dark-mode"/>
					</div>
				) : (
					<div onClick={changeLight} className="container-light-mode">
						<HiMoon className="light-mode" />
					</div>
				)
			}
		</div>
		{dark}
		</>
	);
};

export default DarkMode;