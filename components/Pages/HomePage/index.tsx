import { useMemo } from 'react'
import { Button, Container, Grid } from '@mui/material'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useStores } from 'hooks/useStores'
import { IPosts } from 'interfaces'
import routes from 'routes'
import CommonTable from '../../Common/Table'
import { getTableColumns } from './utils'
import styles from './homePage.module.scss'

const HomePage = () => {
  const router = useRouter()
  const { postsStore } = useStores()
  const { posts } = postsStore

  function onCellClick(postsId: number): void {
    if (postsId) {
      router.push(routes.home.details.value(postsId))
    }
  }

  const tableColumns = getTableColumns(onCellClick)
  const tableRows = useMemo(() => posts?.map((postsDetail: IPosts) => ({ ...postsDetail })), [posts])

  return (
    <Container maxWidth="lg">
      <Grid className={styles.container}>
        <Grid className={styles.headerSection}>
          <Button variant="contained" onClick={() => router.push(routes.home.create.value)}>
            Create
          </Button>
        </Grid>
        <Grid>
          <CommonTable className={styles.table} columns={tableColumns} rows={tableRows} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default observer(HomePage)
