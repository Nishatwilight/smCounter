export interface PostState {
    posts: {
        id: string;
        title: string;
        description: string;
        language: boolean
    }[]
}

const initialState: PostState = {
    posts: [
        {id:'1', title:'test1', description:'Sample 1', language: true },
        {id:'2', title:'test2', description:'Sample 2', language: false },
        {id:'3', title:'test3', description:'Sample 3', language: true },
        {id:'4', title:'test4', description:'Sample 4', language: false },
        {id:'5', title:'test5', description:'Sample 5', language: true }
    ]
}