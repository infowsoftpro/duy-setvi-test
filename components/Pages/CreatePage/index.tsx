import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import { useForm, FormProvider } from 'react-hook-form'
import { toast } from 'react-toastify'
import { createPosts } from 'API/posts'
import PostsForm from 'components/Common/PostsForm'
import { IPostsFormValues } from 'components/Common/PostsForm/interfaces'
import { IPosts } from 'interfaces'
import routes from 'routes'
import { getRandomInt } from 'utils/common'
import styles from './createPage.module.scss'

const CreatePage = () => {
  const router = useRouter()
  const methods = useForm<IPostsFormValues>({
    reValidateMode: 'onChange',
    mode: 'onChange'
  })

  async function onSubmit(event: IPostsFormValues): Promise<void> {
    const newPosts: IPosts = {
      id: getRandomInt(1000),
      userId: getRandomInt(1000),
      title: event.title,
      body: event.body
    }

    try {
      await createPosts(newPosts)
      toast.success('Create posts successfully')
      methods.reset({
        title: '',
        body: ''
      })
      router.push(routes.home.value)
    } catch (error) {
      toast.error('Create posts failed')
    }
  }

  return (
    <Container className={styles.container} maxWidth="md">
      <FormProvider {...methods}>
        <PostsForm
          isEditMode={false}
          onSubmit={methods.handleSubmit(onSubmit)}
          onCancel={() => router.push(routes.home.value)}
        />
      </FormProvider>
    </Container>
  )
}

export default CreatePage
