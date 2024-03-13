import axios from 'axios'
import {defineStore} from 'pinia'

export const useChatStore = defineStore({
    id: 'msg',

    state: () => ({
        msg: {
            id: null,
            role: null,
        }


    })
})