import PostsStore from 'stores/postsStore'

export class RootStore {
  postsStore: PostsStore

  constructor() {
    this.postsStore = new PostsStore(this)
  }
}

export const rootStore = new RootStore()
