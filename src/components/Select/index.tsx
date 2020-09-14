import React from 'react'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'

const Select: React.FC<SelectProps<OptionTypeBase>> = ({ ...props }) => {
  return (
    <ReactSelect
      {...props}
      styles={{
        control: (styles: any) => ({
          ...styles,
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderColor: 'rgba(32, 34, 37, 0.5)',
          borderRadius: '3px',
          borderStyle: 'solid',
          borderWidth: '1px',
          minHeight: '40px',
          transition: 'border 0.15s ease 0s',
          '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.6)'
          }
        }),
        singleValue: (styles: any) => ({
          ...styles,
          color: 'rgb(246, 246, 247)'
        }),
        dropdownIndicator: (styles: any, { isFocused }: any) => ({
          ...styles,
          cursor: 'pointer',
          padding: '8px 8px 8px 0',
          transition: 'color 150ms ease 0s',
          color: 'rgb(246, 246, 247)',
          opacity: isFocused ? 1 : 0.3,
          '&:hover': {
            color: 'rgb(246, 246, 247)',
            opacity: 1
          }
        }),
        indicatorSeparator: (styles: any) => ({
          ...styles,
          display: 'none'
        }),
        menu: (styles: any) => ({
          ...styles,
          margin: 0,
          borderRadius: 0
        }),
        menuList: (styles: any) => ({
          ...styles,
          backgroundColor: 'var(--scrollbar-auto-track)'
        }),
        option: (styles: any, { isSelected, isFocused }: any) => ({
          ...styles,
          cursor: 'pointer',
          backgroundColor: isSelected
            ? 'var(--scrollbar-auto-thumb)'
            : isFocused
            ? 'var(--scrollbar-auto-thumb)'
            : 'var(--background-secondary)',
          opacity: isFocused ? 0.7 : 1,
          ':active': {
            backgroundColor: 'var(--scrollbar-auto-thumb)',
            opacity: 0.7
          }
        })
      }}
      isSearchable={false}
      isClearable={false}
    />
  )
}

export default Select
