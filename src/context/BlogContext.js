import React, { useState } from 'react';
import CreateContext from './CreateContext';

// const BlogContext = React.createContext();

// what is children prop here?
// const App = () => {
//     <customcomponent>
//         <Text>Hi I am the children</Text>
//     </customcomponent>
// }
// App -> children: <Text>Hi I am the children</Text> -> customcomponent

// Context - Pass information from parent to nested child components but it uses some special terms.
// Provider -  is the one which passes the value we pass.


// Code using useState
// export const BlogProvider = ({ children }) => {

//     const [blogPosts, setBlogPosts] = useState([]);

//     const addBlogPost = (blogPost) => {
//         setBlogPosts([...blogPosts, {title: `Blog post ${blogPosts.length + 1}`}])
//     }

//     return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost}}>
//         {children}
//     </BlogContext.Provider>;
// }

// Refactored code using useReducer
// const blogReducer = (state, action) => {
//     switch (action.type) {
//       case 'add_blogpost':
//         return [...state, { title: `Blog post ${state.length + 1 }` }];
//       default:
//         return state;
//     }
// };

// export const BlogProvider = ({ children }) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);

//     const addBlogPost = () => {
//         dispatch({ type: 'add_blogpost' });
//     };

//     return (
//         <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//             {children}
//         </BlogContext.Provider>
//     );
// };

// Refactored code using context creation
const blogReducer = (state, action) => {
    switch (action.type) {
      case 'edit_blogpost':
        return state.map((blogpost) => {
          return blogpost.id === action.payload.id ? action.payload : blogpost;
        })
      case 'add_blogpost':
        return [...state, { title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random() * 99999) }];
      case 'delete_blogpost':
        return state.filter((blogpost) => blogpost.id != action.payload)
      default:
        return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
      dispatch({ type: 'add_blogpost', payload: { title, content } });
      callback();
    };

    // If we make call to outside api....

    // return async (title, content, callback) => {
    //   try {
    //     await axios.post('/url', title, content);
    //     callback();
    //   } catch (e) {

    //   }
    // };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
      dispatch({ type: 'delete_blogpost', payload: id });
    };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content} });
    callback();
  };
};

export const { Context: BlogContext, Provider: BlogProvider} = CreateContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, []);



