import {createContext, useReducer} from 'react';

export const BlogsContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return {
        blogs: action.payload,
      };
    case 'CREATE_BLOG':
      return {
        blogs: [action.payload, ...state.blogs],
      };
    default:
      return state;
  }
};

export const BlogsContextProvider = ({children}) => {
  // this is a hook with reducer and empty onject
  const [state, dispatch] = useReducer(blogsReducer, {blogs: null});

  return (
    <BlogsContext.Provider value={{...state, dispatch}}>
      {children}
    </BlogsContext.Provider>
  );
};
