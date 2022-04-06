import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    debugger;
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;