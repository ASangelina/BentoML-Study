import type { InputProps } from 'baseui/input'
import { connect } from '@formily/react'
import { Input as BaseUIInput } from 'baseui/input'

export interface IInputProps extends Omit<InputProps, 'onChange'> {
  onChange?: (value: string) => void
}

export function Input({ onChange, ...restProps }: IInputProps) {
  return (
    <BaseUIInput onChange={e => onChange?.(e.target.value)} {...restProps} />
  )
}

export default connect(Input)