export interface PostState {
    post: {
        id: string;
        title: string;
        description: string;
    }[]
}

const initialState: PostState = {
    post: [
        {id:'1', title:'test1', description:'Sample 1' },
        {id:'2', title:'test2', description:'Sample 2' },
        {id:'3', title:'test3', description:'Sample 3' },
        {id:'4', title:'test4', description:'Sample 4' },
        {id:'5', title:'test5', description:'Sample 5' }
    ]
}