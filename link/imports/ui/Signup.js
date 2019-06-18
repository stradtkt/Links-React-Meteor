import React, {Component} from 'react';

class Signup extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Accounts.createUser({email, password}, (err) => {});
    }
    render() {
        return (
            <div>
                <p>Signup Here</p>
            </div>
        );
    }
}

export default Signup;