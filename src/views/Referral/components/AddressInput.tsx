import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input<{ error?: boolean; fontSize?: string; align?: string }>`
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.text)};
  width: 0;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  font-size: 16px;
  text-align: ${({ align }) => align && align};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

export const Input = React.memo(function InnerInput({
  value,
  placeholder,
  ...rest
}: {
  value: string
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {


  return (
    <StyledInput
      {...rest}
      value={value}
      onChange={event => {
        // replace commas with periods, because uniswap exclusively uses period as the decimal separator

        console.log(event.target.value);
      }}
      // universal input options
      inputMode="text"
      title="Referral address"
      autoComplete="off"
      autoCorrect="off"
      // text-specific options
      type="text"
      placeholder={placeholder || 'address'}
      minLength={1}
      maxLength={79}
      spellCheck="false"
    />
  )
})

export default Input

// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
