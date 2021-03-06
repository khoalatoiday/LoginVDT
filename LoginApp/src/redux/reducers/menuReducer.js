import user from "../../api/user"


const defaultMenu = []

export default async(state = defaultMenu,action) =>{
    console.log("Action Type", action.type)
    switch(action.type){
        case "GET_ALL_MENUS": {
            
            try {
                console.log("action role", action.role)
                const respones = await user.getAllMenu(action.role)
                console.log("Respones Of Get All Menu", respones)
                const result = respones.data
                return result
            } catch (error) {
                console.log(error.message)
            }
            break
        }
        
        default:{
            return state
        }
    }
}