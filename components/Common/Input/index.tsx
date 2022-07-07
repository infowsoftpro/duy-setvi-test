import { ReactNode } from 'react'
import { Input, InputProps, Grid } from '@mui/material'
import cx from 'classnames'
import styles from './input.module.scss'

interface ICommonInputProps extends InputProps {
  inputLabel: string
  inputError?: string | ReactNode | undefined
  containerClassName?: string
}

const CommonInput = (props: ICommonInputProps) => {
  const { className, inputLabel, inputError, containerClassName, ...rest } = props
  return (
    <Grid className={cx(styles.container, containerClassName)}>
      <label className={styles.label}>{inputLabel}</label>
      <Input className={className} {...rest} />
      {inputError && <label className={styles.error}>{inputError}</label>}
    </Grid>
  )
}

export default CommonInput
