import React from 'react'

const Posts = ({posts}) => {
console.log(posts)
    return (
       <ul>
           {posts.map( post =>(
             <li  key={post.id}>{post.title }</li >
            
           ))}
       </ul>

    )
}

export default Posts
