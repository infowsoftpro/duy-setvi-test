import React from 'react'
import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import cx from 'classnames'
import styles from './table.module.scss'

const CommonTable = (props: DataGridProps) => {
  const { className, ...rest } = props
  return <DataGrid className={cx(styles.container, className)} {...rest} />
}

export default CommonTable
