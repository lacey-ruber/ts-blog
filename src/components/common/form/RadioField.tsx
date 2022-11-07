interface IOptions {
  name: string
  value: string
}

interface RadioFieldProps {
  options: IOptions[]
  name: string
  onChange: any
  value: string | undefined
}

const RadioField: React.FC<RadioFieldProps> = ({
  options,
  name,
  onChange,
  value,
}) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: target.name, value: target.value })
  }
  return (
    <div className='mb-4'>
      <div>
        {options.map((option) => (
          <div
            key={option.name + '_' + option.value}
            className='form-check form-check-inline'
          >
            <input
              className='form-check-input dark'
              type='radio'
              name={name}
              id={option.name + '_' + option.value}
              checked={option.value === value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className='form-check-label'
              htmlFor={option.name + '_' + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioField
