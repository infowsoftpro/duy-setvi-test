import { AxiosResponse } from 'axios'
import { IPosts } from 'interfaces'
import { errorHandler } from 'utils/errorHandler'
import { api } from './index'

export async function getPosts(): Promise<IPosts[]> {
  try {
    const response: AxiosResponse = await api.get('/posts')
    return response?.data
  } catch (error) {
    errorHandler(error)
    return []
  }
}

export async function getPostsById(postsId: string): Promise<IPosts | undefined> {
  if (!postsId) {
    return undefined
  }
  try {
    const response: AxiosResponse = await api.get(`/posts/${postsId}`)
    return response?.data
  } catch (error) {
    errorHandler(error)
    return undefined
  }
}

export async function createPosts(posts: IPosts): Promise<void> {
  try {
    const response: AxiosResponse = await api.post('/posts', posts)
    return response?.data
  } catch (error) {
    errorHandler(error)
    throw error
  }
}

export async function updatePostsById(postsId: number, posts: Partial<IPosts>): Promise<void> {
  if (!postsId) {
    throw new Error('postsId should not empty')
  }
  try {
    const response: AxiosResponse = await api.put(`/posts/${postsId}`, posts)
    return response?.data
  } catch (error) {
    errorHandler(error)
    throw error
  }
}

export async function deletePostsById(postsId: number): Promise<void> {
  if (!postsId) {
    throw new Error('postsId should not empty')
  }
  try {
    const response: AxiosResponse = await api.delete(`/posts/${postsId}`)
    return response?.data
  } catch (error) {
    errorHandler(error)
    throw error
  }
}
