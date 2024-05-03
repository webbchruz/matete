import { ApiError } from "./types/ApiError"

export const getError =(error:ApiError)=>{
    return error.respond && error.response.data.message
    ?error.respond.data.message
    :error.message
}