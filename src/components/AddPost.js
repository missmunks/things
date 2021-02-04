import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const AddPost = ({token, posts, setPosts}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("Jess");
  

  const handleClick = async(event) => {
    event.preventDefault();
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
  <input type='text' value={title} placeholder='Title' onChange={(ev) => setTitle( ev.target.value )} />
  <input type='text' value={price} placeholder='Price' onChange={(ev) => setPrice( ev.target.value )} />
  <input type='text' value={description} placeholder='description' onChange={(ev) => setDescription( ev.target.value )} />
  <input type='text' value={location} placeholder='Location' onChange={(ev) => setLocation( ev.target.value )} />
  <button type='submit' onClick={handleClick}>ADD AWESOMENESS</button>
</form>
<Link to='./Allposts'></Link>
</>
)
};


export default AddPost;