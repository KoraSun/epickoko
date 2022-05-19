import {observer} from 'mobx-react'

import { useStores } from '../stores'


export const Login =observer(()=>{
    const {AuthStore} =useStores()
    return(
        <>
        <h1>Login:{AuthStore.values.username}</h1>
        </>
    )
    
})