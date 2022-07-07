import { ErrorMessage } from '@hookform/error-message'
import { Grid, Button } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import Input from '../Input'
import { PostsFormValues } from './constants'
import styles from './postsForm.module.scss'

interface IPostsFormProps {
  onSubmit: () => void
  onCancel: () => void
  isEditMode: boolean
}

const PostsForm = (props: IPostsFormProps) => {
  const { onSubmit, onCancel, isEditMode } = props
  const { control, formState } = useFormContext()
  const { errors } = formState

  return (
    <Grid className={styles.container}>
      <Grid>
        <Controller
          name={PostsFormValues.TITLE}
          control={control}
          render={({ field }) => (
            <Input
              containerClassName={styles.containerInput}
              onChange={event => field.onChange(event.target.value)}
              value={field.value}
              inputLabel="Title"
              inputError={
                <ErrorMessage errors={errors} name={PostsFormValues.TITLE} render={({ message }) => message} />
              }
            />
          )}
          rules={{
            required: {
              message: 'Title is required',
              value: true
            }
          }}
        />
        <Controller
          name={PostsFormValues.BODY}
          control={control}
          render={({ field }) => (
            <Input
              containerClassName={styles.containerInput}
              onChange={event => field.onChange(event.target.value)}
              value={field.value}
              inputLabel="Description"
              inputError={
                <ErrorMessage errors={errors} name={PostsFormValues.BODY} render={({ message }) => message} />
              }
            />
          )}
          rules={{
            required: {
              message: 'Description is required',
              value: true
            }
          }}
        />
      </Grid>
      <Grid className={styles.footer}>
        <Button variant="contained" color="error" onClick={onCancel}>
          {isEditMode ? 'Delete' : 'Cancel'}
        </Button>
        <Button className={styles.submitButton} variant="contained" color="success" onClick={onSubmit}>
          {isEditMode ? 'Update' : 'Save'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default PostsForm
