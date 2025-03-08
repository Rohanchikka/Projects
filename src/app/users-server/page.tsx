type User = {
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}

export  default async function usersServer(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();//data is an users array
    for(const user of data){
        console.log(`user is {$user.name}`);
    }

}