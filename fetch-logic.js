// AUTHOR :TSAFACK SYLVIA STELA
let name = 'john';
function greet(){
    console.log("hello , " +  name);
    
}
greet();
// the logic Trap
console.log("Step 1 :Ordering Coffee...");
const data = fetch("https://jsonplaceholder.typicode.com/users/1");
console.log("Step 2 : Coffee Owner Data is:",data);
console.log("Step 3 : Talking to a friend...");


const getUserData = async () => {
    // Await step 1 :the request is sent to the API  and we wait for the response
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    // Await step 
    const data = await response.json();
    console.log(`Success! Name: ${data.name} from ${data.address.city} at ${data.address.zipcode} company name:${data.company} from ${data.company.name}`);
    console.log("Step 4 : Coffee Owner Data is :" , data)
}

console.log("I am non-blocking blocking task , I will execute  before the data is fecthed .")
const getSafeUserData = async () => {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok){
            throw new Error (`Could Not find User , HTTP eror ! status : ${response.status }`);
        }
        const data = await response.json ();
        console.log(`Bonjour! Name : ${data.name} from ${data.address.city} with company ${data.company.name}`,);

    } catch (error ){
        console.log("Error Caught :", error.message);
        console.error("Error fetchingv user data :" , error);
        console.log("Please check the API endpoind and try again.");
        
    }
};

getSafeUserData();
const getPostInfo = async (postId) =>{
    try {
const response = await fetch ("https://jsonplaceholder.typicode.com/posts/${postId}");
if(!response.ok){
    throw new Error (`Nous ne pouvons pas trouver un utilisateur , HTTP error status : ${response.status }`);
}
    const data = await response.json();
   console.log(`Bonjour ! title : at ${data.title} ` ,);
    } catch (error ){
        console.log("Error Caught :", error.message);
        console.error("Error fetchingv user data :" , error);
        console.log("Please check the API endpoind and try again.");
        
}
}
getPostInfo();
