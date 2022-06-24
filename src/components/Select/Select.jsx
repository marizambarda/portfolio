import React from 'react'

const Select = ({ options, onChange }) => {
  return (
    <select className='select' onChange={e => onChange(e?.target?.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
