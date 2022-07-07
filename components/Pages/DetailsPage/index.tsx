import { useEffect } from 'react'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import { useForm, FormProvider } from 'react-hook-form'
import { toast } from 'react-toastify'
import { deletePostsById, updatePostsById } from 'API/posts'
import PostsForm from 'components/Common/PostsForm'
import { IPostsFormValues } from 'components/Common/PostsForm/interfaces'
import { useStores } from 'hooks/useStores'
import { IPosts } from 'interfaces'
import routes from 'routes'
import styles from './detailsPage.module.scss'

const DetailPage = () => {
  const router = useRouter()
  const methods = useForm<IPostsFormValues>({
    reValidateMode: 'onChange',
    mode: 'onChange'
  })
  const { postsStore } = useStores()

  const postsId: string | undefined = Array.isArray(router.query?.id) ? router.query?.id?.[0] : router.query?.id

  async function updateFormValues(): Promise<void> {
    if (!postsId) return
    const selectedPosts = await postsStore.fetchSelectedPosts(postsId)

    if (selectedPosts?.id) {
      methods.reset({
        title: selectedPosts.title,
        body: selectedPosts.body
      })
    }
  }

  useEffect(() => {
    updateFormValues()
  }, [postsId])

  async function onSubmit(event: IPostsFormValues): Promise<void> {
    if (!postsStore.selectedPosts?.id) {
      toast.error('postsId should not empty')
      return
    }

    const updatePosts: Partial<IPosts> = {
      title: event.title,
      body: event.body
    }
    try {
      await updatePostsById(postsStore.selectedPosts.id, updatePosts)
      toast.success('Update posts successfully')
    } catch (error) {
      toast.error('Update posts failed')
    }
  }

  async function onDeletePosts(): Promise<void> {
    if (!postsStore.selectedPosts?.id) {
      toast.error('postsId should not empty')
      return
    }
    try {
      await deletePostsById(postsStore.selectedPosts.id)
      toast.success('Delete posts successfully')
      router.replace(routes.home.value)
    } catch (error) {
      toast.error('Delete posts failed')
    }
  }

  return (
    <Container className={styles.container} maxWidth="md">
      <FormProvider {...methods}>
        <PostsForm isEditMode={true} onSubmit={methods.handleSubmit(onSubmit)} onCancel={() => onDeletePosts()} />
      </FormProvider>
    </Container>
  )
}

export default DetailPage
