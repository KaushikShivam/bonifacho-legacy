import React, { useState } from 'react';

import './Checkbox.scss';

const CheckBox = ({ children, handleFilter }) => {
	const [checked, setChecked] = useState(false);

	const handleClick = () => {
		handleFilter(children, !checked);
		setChecked(!checked);
	};

	return (
		<span onClick={handleClick} className={`CheckBox ${checked && 'checked'}`}>
			{children}
		</span>
	);
};

export default CheckBox;
