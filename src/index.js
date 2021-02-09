import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

  import {
    AccountForm,
    AllPosts,
    AddPost,
    Profile,
    MessageForm,
    // EditPost,
    Nav
  } from './components';

import './bootstrap.css'
import './style.css'
 

  const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);
    





    return <>
    <h1 className='title'>Strangers Things</h1>
    <Nav token = {token} setToken= {setToken}/>
    
    {user.username && <h2>Hello {user.username}</h2>}
    {/* <button type= "submit" onClick={setPostId(postId)}>Edit</button> */}
    <Route path="/login">
    <AccountForm setToken={setToken} type={'login'} setUser={setUser} posts={posts}/>
    </Route>
    <Route path="/register">
    <AccountForm setToken={setToken} type={'register'} setUser={setUser}/>
    </Route>
    <Route path='/Profile'>
    <Profile token= {token} setToken={setToken} user={user} setUser={setUser} posts={posts} />
    </Route>
    <Route path = '/AllPosts'>
    <AllPosts MessageForm = {MessageForm} token={token} posts={posts} setPosts={setPosts}/>
    </Route>
    {/* <Route>
      <EditPost  postId={postId} setPostId={setPostId}/>
    </Route> */}
    <Route  path = '/AddPost' >
      <AddPost token={token} posts={posts} setPosts={setPosts}/>
    </Route>
        </>
  }


  ReactDOM.render(
    <Router>
          <App />
    </Router>,
     document.getElementById('app')
  );
