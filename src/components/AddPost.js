import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const AddPost = ({token, posts, setPosts}) => {
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("");
  
  

  const handleClick = async(event) => {
    if(!token){return alert("Whoa there Nelly, you can't put your junk here until we deem you worthy. Log in or register to join the cool kids.")}
    event.preventDefault();
    setAuthor(author)
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {  
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify({
          post: {
            title,
            price,
            description,
            location,
            author
          }
        })
})
  
const data = await response.json();
console.log(data)
setPosts([data.data.posts, ...posts])
console.log(data)
  };




return (
<>
<form onSubmit= {AddPost}>
  <input type='text'  placeholder='Title' onChange={(ev) => setTitle( ev.target.value )} />
  <input type='text'  placeholder='Price' onChange={(ev) => setPrice( ev.target.value )} />
  <input type='text'  placeholder='description' onChange={(ev) => setDescription( ev.target.value )} />
  <input type='text'  placeholder='Location' onChange={(ev) => setLocation( ev.target.value )} />
  <button type='submit' onClick={handleClick}>ADD AWESOMENESS</button>
</form>

</>
)
};


export default AddPost;