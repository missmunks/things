import React, {useState} from "react";



const MessageForm = ({postId, posts}) => {
  const myToken = localStorage.getItem('myToken')
  console.log(myToken, "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
  const [messages, setMessages] = useState("");

 console.log(posts, "XXXXXXXXXXXXXXXXXXXXXX")

  const handleMessage = async (ev) => {
    ev.preventdefault();

    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${_id}/messages`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Bearer ${myToken}`
            },
            body: JSON.stringify({
              posts: {
                messages
              }
            })
          })
          const data = await response.json();
          console.log(data, "handle message dataaaaaaaaaaaaaaaaaaaaaaaa")
          setMessages("")
        }
  console.log("this is the post from message form", posts)
  return(<>
    <form onSubmit={handleMessage}>
      <textarea placeholder="Write Message" value = {messages} onChange={(ev) => setMessages(ev.target.value)}></textarea>
      <button type="submit">Send Message</button>
    </form>
        </>
  );

  
}


// const MessageForm = ({post}) => {
//   const [messages, setMessages] = useState([]);

//   const handleMessage= async (id) => {
//     const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": 'application/json',
//               'Authorization': `Bearer ${token}`
//             }
//           })
//           const data = await response.json();
//           console.log(data, "handle message data")
//         }
//   console.log("this is the post from message form", post)
//   return(
//     <form onSubmit={MessageForm}>
//       <textarea placeholder="Write Message" onChange={(ev) => setMessages(ev.target.value)}></textarea>
//       <button type="submit" onClick={handleMessage}>Send Message</button>
//     </form>
//   );
// }

export default MessageForm;
            
          
        
       
     
        



