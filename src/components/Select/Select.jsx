import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import './Select.scss'


const Select = ({ label, options, onChange }) => {

  return (
    <Dropdown className='dropdown' onSelect={value => onChange(value)}>
      <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
        <FontAwesomeIcon icon={faLanguage} className='icon' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map(option => (
          <Dropdown.Item key={option.value} eventKey={option.value}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Select
