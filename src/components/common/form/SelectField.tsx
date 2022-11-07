import React from 'react'

interface SelectFieldProps {
  label?: string
  value: string
  onChange: any
  defaultOption: string
  options: Array<string>
  error?: string
  name: string
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
  name,
}) => {
  const handleChange = ({ target }: any) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return 'form-select' + (error ? ' is-invalid' : '')
  }

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value=''>
          {defaultOption}
        </option>
        {options.length > 0 &&
          options.map((option: string) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

export default SelectField
