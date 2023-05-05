export interface counterState{
    counter:number
    appName: string
}
export const initialState: counterState = {
    counter: 2,
    appName: "Counter Application"
}