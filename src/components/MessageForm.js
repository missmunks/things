import { useEffect } from "react";


const MessageForm = ({token, user, setUser, setToken}) =>{

  useEffect(() => {
    getMessages()
  }, [])

  


const getMessages = async () => {
        if({token}){
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me`, {
              method: 'GET',
              headers: {
                "Authorization": `Bearer ${token}`, 
              },
          
            }) 
            const {data} = await response.json();
            console.log('message form data' , data);
            setUser({user}) 
          
            
            }
    
          }

return (
  <h1>this is the message form</h1>
)
};
 
export default MessageForm;