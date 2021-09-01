import { UserType } from "../../interfaces/user";


export const userInitialState: UserType = {
    userData: {
        name:'',
        email:'',
        company:'',
        credits:0,
        profileImage:'',
        accountOwner:'',
        totalCO2Saved:0,
        treesEquilavant:0,
        siteURL:'',
        accessKey:'',
        address:{
            country:''
        }
    },
    loggedIn:false,
    authKey:'',
    error:null
};

