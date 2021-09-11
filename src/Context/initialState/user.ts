import { UserType } from "../../interfaces/user";


export const userInitialState: UserType = {
        account_owner:'',
        email:'',
        company_name:'',
        credits:0,
        trees_saved:0,
        total_co2_saved_in_tons:0,
        siteURL:'',
        accessKey:'',
        address:{
            country:''
        },
    loggedIn:false,
    authKey:'',
    error:null
};

