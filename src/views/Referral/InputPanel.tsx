import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, Text } from '@pancakeswap-libs/uikit'

const StyledInputPanel = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`

const Field = styled.div`
  align-items: center;
  display: block;


  & > ${Text} {
    font-size: 14px;
    margin-left: 8px;
  }
`

const InputPanel = () => {

    const [value, setValue] = useState<string | null>(null) // deadline in minutes
    const [error, setError] = useState<string | null>(null)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = evt.target
        setValue(inputValue)
    }

    // Updates local storage if value is valid
    useEffect(() => {
        try {
            const rawValue = value
            if (rawValue != null) {
                setError(null)
            } else {
                setError('Enter a referral address')
            }
        } catch {
            setError('Enter a valid referral address')
        }
    }, [value, setError])

    return (
        <StyledInputPanel>
            <Label>
                <Text style={{ fontWeight: 600 }}>
                    Referral address
                </Text>
            </Label>
            <Field>
                <Input type="text" value={value} onChange={handleChange} />
            </Field>
            {error && (
                <Text mt="8px" color="failure">
                    {error}
                </Text>
            )}
        </StyledInputPanel>
    )
}

export default InputPanel
