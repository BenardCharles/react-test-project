import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput({ options = [], className = '', onChange, value, ...props }, ref) {
    const select = ref ? ref : useRef();

    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };
    return (
        <select
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={select}
            onChange={handleChange}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
});