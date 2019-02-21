import React from 'react';
import axios from 'axios';
import SignUpModal from '../components/SignUpModal.jsx';

class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const formData = {email: this.state.user.email, name: this.state.user.name, password: this.state.user.password};

    axios.post('/auth/signup', formData) 
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                this.setState({ errors: {} });
                localStorage.setItem('successMessage', res.message);
                // this.props.history.push('/dashboard'); // ?
                this.props.reload();
            }
            else { 
              this.setState({ errors: res.json });
              console.log(res.json);
            }
            
        }).catch(err => { console.log(err)})
    }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  clearInfo() {
    let user = {...this.state.user};
    user['email'] = '';
    user['name'] = '';
    user['password'] = '';
    this.setState({ user })
    this.props.hide();
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpModal
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
        show={this.props.show}
        hide={this.props.hide}
        clear={this.clearInfo}
      />
    );
  }

}

export default SignUpPage;
