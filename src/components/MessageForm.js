import React from "react";


const MessageForm = ({post}) => {
  console.log("this is the post from message form", post)
  return(
    <form>
      <textarea placeholder="Write Message" onChange={(ev) => {post.message = post.message.ev.target.value}}></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
            
          
        
       
  export default MessageForm       
        



