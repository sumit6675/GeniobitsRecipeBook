import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./Auth.Types"

const init={
    isAuth:false,
    token:"",
    name:"",
    email:"",
    loading:false,
    error:false,
    id:"",
};
export const Authreducer=(state=init,{type,payload})=>{
    switch(type){

        case LOGIN_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                token:payload.token,
                isAuth:true,
                name:payload.name,
                email:payload.email,
                id:payload.id,
            }
        }
        case LOGOUT:{
            return{
                ...state,
                isAuth:false,
                token:"",
                name:"",
                email:"",
                id:"",
                user:""
            }
        }

        default:{
            return state;
        }
    }
}