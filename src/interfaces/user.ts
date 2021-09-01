export interface UserType {
    userData: {
        name:string;
        email:string;
        company:string;
        credits:number;
        profileImage:string;
        accountOwner:string;
        totalCO2Saved:number;
        treesEquilavant:number;
        siteURL:string;
        accessKey:string;
        address:string;
    };
    loggedIn:boolean;
    authKey:string;
    error:any;
}