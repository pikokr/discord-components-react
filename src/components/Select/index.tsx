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
          backgroundColor: 'var(--select-control-background)',
          borderColor: 'var(--select-control-border-color)',
          borderRadius: '3px',
          borderStyle: 'solid',
          borderWidth: '1px',
          minHeight: '40px',
          transition: 'border 0.15s ease 0s',
          '&:hover': {
            borderColor: 'var(--select-control-border-color--hover)'
          }
        }),
        singleValue: (styles: any) => ({
          ...styles,
          color: 'var(--select-single-value-color)'
        }),
        dropdownIndicator: (styles: any, { isFocused }: any) => ({
          ...styles,
          cursor: 'pointer',
          padding: '8px 8px 8px 0',
          transition: 'color 150ms ease 0s',
          color: 'var(--select-dropdown-indicator-color)',
          opacity: isFocused ? 1 : 0.3,
          '&:hover': {
            color: 'var(--select-dropdown-indicator-color)',
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
          backgroundColor: 'var(--select-menulist-background)',
          '::-webkit-scrollbar': {
            width: '16px',
            height: '16px'
          },
          '::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent'
          },
          '::-webkit-scrollbar-thumb': {
            border: '4px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: '8px',
            backgroundColor: 'var(--scrollbar-auto-thumb)',
            minHeight: '40px'
          },
          '::-webkit-scrollbar-track': {
            border: '4px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: '8px',
            marginBottom: '8px',
            backgroundColor: 'var(--scrollbar-auto-track)'
          }
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
