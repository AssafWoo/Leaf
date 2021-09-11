export interface UserType {
        account_owner:string;
        email:string;
        company_name:string;
        credits:number;
        trees_saved:number;
        total_co2_saved_in_tons:number;
        siteURL:string;
        accessKey:string;
        address:{
            country:string
        };
    loggedIn:boolean;
    authKey:string;
    error:any;
}