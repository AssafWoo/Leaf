export interface TransactionType {
    id:string,
    name:string,
    country:string,
    status:string,
    type:string,
    amountCo2:number,
    amountDollars:number,
    date:{
        created_at:string,
        updated_at:string
    },
}
