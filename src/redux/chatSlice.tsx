import { createSlice } from '@reduxjs/toolkit'


export interface ChatState {
    listUser: any
    ,
    current: {
        id: number,
    },

}

const initialState: ChatState = {
    listUser: [
        {
            id: 2,
            image: '/static/images/avatar/5.jpg',
            name: 'Nguyễn Văn A',
            text: "Bạn đang làm gì đấy?",
            messager: [
                { id: 1, message: 'Xin chao ban nha', time: '22:05' },
                { id: 2, message: 'Xin chao ban nha', time: '22:05' },
                { id: 2, message: 'Xin chao ban nha', time: '22:05' }
            ]
        },
        {
            id: 3,
            image: '/static/images/avatar/5.jpg',
            name: 'Hoàng Hùng',
            text: "Welcome to GOFW",
            messager: [
                { id: 1, message: 'Xin chao ba', time: '22:05' },
                { id: 2, message: 'Xin chao ban nha', time: '22:05' },
                { id: 2, message: 'Xin chao ', time: '22:05' }
            ]
        }
    ],
    current: {
        id: 2,
    },
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        changeCurrent: (state, actions) => {
            state.current = actions.payload
        },
        changeMessage: (state, actions) => {
            const messager = state.listUser[0].messager
            const newMessager = [ actions.payload, ...messager ]
            const index = state.listUser.findIndex( (item: any) => item.id === state.current.id )
            state.listUser[index].messager = newMessager
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeCurrent, changeMessage } = chatSlice.actions

export default chatSlice.reducer