import React from 'react'
import { Color } from '../..'
import styles from './styles.module.scss'

function createUUID() {
  let dt = new Date().getTime()
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

type SelectItem = {
  title: string
  description?: string
  value: string
  color?: Color
  default?: boolean
}

type SelectBoxProps = { items: Array<SelectItem> } & React.InputHTMLAttributes<
  HTMLInputElement
>

const SelectBox = ({ onChange, items }: SelectBoxProps) => {
  const [name] = React.useState(createUUID())

  return (
    <div className={styles.group}>
      {items.map((item, idx) => (
        <label key={idx} className={styles.label}>
          <input
            type='radio'
            value={item.value}
            defaultChecked={item.default}
            onChange={onChange}
            name={name}
          />
          <span
            className={`${styles.background} ${styles[item.color || 'purple']}`}
          >
            <div className={styles.checkboxDisplayContainer}>
              <svg
                className={styles.svg}
                aria-hidden='true'
                width='18'
                height='18'
                viewBox='0 0 24 24'
              >
                <path
                  className={styles.path}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z'
                />
              </svg>
            </div>
            <span className={styles.titleContainer}>
              {item.title}
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </span>
          </span>
        </label>
      ))}
    </div>
  )
}

export default SelectBox
