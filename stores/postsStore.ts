import { action, makeObservable, observable } from 'mobx'
import { getPosts, getPostsById } from 'API/posts'
import { IPosts } from 'interfaces'
import { RootStore } from 'stores'

class PostsStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      posts: observable,
      selectedPosts: observable,
      fetchPosts: action,
      fetchSelectedPosts: action
    })
  }

  public posts: IPosts[] = []

  public selectedPosts: IPosts | undefined = undefined

  public async fetchPosts(): Promise<void> {
    this.posts = await getPosts()
  }

  public async fetchSelectedPosts(postsId: string): Promise<IPosts | undefined> {
    this.selectedPosts = await getPostsById(postsId)
    return this.selectedPosts
  }
}

export default PostsStore
