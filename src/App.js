// import React from 'react';
import './App.css';
// import { Paging } from './Pagination/Paging';
// import Posts from './Posts/Posts';

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       loading: true,
//       posts: [],
//       currentPage: 1,
//       postsPerPage: 20

//     }
//   }

//   componentDidMount() {


//     // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(data => this.setState({ posts: data, loading: false }))


//   }
//   paginate = (event, value) => {
//     return (
//       this.setState({ currentPage: value })
//     )
//   }


//   render() {
//     const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
//     const currentPost = this.state.posts.slice(indexOfFirstPost, indexOfLastPost)


//     if (this.state.loading) {
//       return "Loading...."
//     }

//     return (

//       <div>
//         <Posts posts={currentPost} />
//         <Paging totalPost={this.state.posts.length}
//           currentPage={this.state.currentPage}
//           postPerPage={this.state.postsPerPage}
//           Paginate={this.paginate}
//         />
//       </div>
//     );
//   }
// }
// export default App;





import React from 'react'
import SlickCarousel from './Slick/Slick'                                                                                                                                                                                                                                                                                                                                             




class App extends React.Component {
render(){


  return (
    <div>
      <SlickCarousel />
    </div>
  )
}
}
export default App
