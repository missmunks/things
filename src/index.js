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
    // EditPost,
    Nav
  } from './components';

import './bootstrap.css'
 

  const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);



    return <>
    <Nav />
    <h1>Strangers Things</h1>
    {user.username && <div>Hello {user.username}</div>}
    {/* <button type= "submit" onClick={setPostId(postId)}>Edit</button> */}

    <Route path="/login">
    <AccountForm setToken={setToken} type={'login'} setUser={setUser}/>
    </Route>
    <Route path="/register">
    <AccountForm setToken={setToken} type={'register'} setUser={setUser}/>
    </Route>
    <Route path = '/AllPosts'>
    <AllPosts token={token} posts={posts} setPosts={setPosts}/>
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
