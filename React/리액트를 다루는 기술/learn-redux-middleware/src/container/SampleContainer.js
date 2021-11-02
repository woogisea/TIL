import React, { useEffect } from 'react';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';
import { connect } from 'react-redux';
const SampleContainer = ({ getPost, getUsers, loadingPost, loadingUser, post, users }) => {

    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);

    return (
        <Sample loadingPost = {loadingPost} loadingUser = {loadingUser} post = {post} users = {users} />
    );
};

export default connect(
    ({sample, loading}) => (
        {
            loadingPost : loading['sample/GET_POST'],
            loadingUser : loading['sample/GET_USERS'],
            post : sample.post,
            users : sample.users 
        }
    ),
    {
        getPost,
        getUsers
    }
)(SampleContainer);