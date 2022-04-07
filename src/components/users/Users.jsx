import React from "react";
import style from './Users.module.css';

import User from './user/User';
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.props.updateUsers(response.data);
            });
    }

    render() {

        let posts = this.props.users.map(item => {
            return <User state={item} />
        });

        return (
            <section>
                { posts }
            </section>
        )
    }
}

export default Users;