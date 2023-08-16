// index.js
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import validator from 'validator';

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]
const formElement = ({ placeholder, handleChange, handleBlur, value, name, type }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  );
};
const elementswithStyles = (CompParam, type, name) => {
  return (props) => {
    const { handleChange, handleBlur, value } = props; // Extract props
    return <CompParam {...props} type={type} name={name} value={value} />;
  };
};
const FirstName=elementswithStyles(formElement,'text','firstName');
const LastName=elementswithStyles(formElement,'text','lastName');
const Email=elementswithStyles(formElement,'email','email');
const Tel=elementswithStyles(formElement,'tel','tel');
const DOB=elementswithStyles(formElement,'date','dateOfBirth');
const FavouriteColor=elementswithStyles(formElement,'color','favouriteColor');
const Weight=elementswithStyles(formElement,'number','weight');

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option value={value}> {label}</option>
))

class App extends Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
      email : false,
      telephone : false,
      weight : false,
    },
  }
  handleChange = (e) => {
    /*
    // we can get the name and value like this but we can also destructure it from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    // [variablename] this we can make a value stored in a certain variable could be a key for an object, in this case a key for the state

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = (e) => {
    const { name, value } = e.target
    this.setState({ touched: { ...this.state.touched, [name]: true ,} })
  }
 
  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
      lastName : '',
      email: '',
      tel: '0',
      weight:'',
      date:'',
    }
    if(validator.isMobilePhone(this.state.tel)===false){
      errors.tel="Invalid Number"
    }
    if(validator.isNumeric(this.state.weight)===false){
      errors.weight="Invalid Weight"
    }
    if((validator.isEmail(this.state.email)===false)){
      errors.email="Invalid Email"
    }
    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12'
      console.log(this.state.firstName.length)
    }
    else if(this.state.touched.firstName && (/[A-Z]*[a-z]+$/.test(this.state.firstName)===false)){
      errors.firstName = 'Invalid FirstName';
      console.log(this.state.firstName)
    }
    if (
      (this.state.touched.lastName && this.state.lastName.length < 3) ||
      (this.state.touched.lastName && this.state.lastName.length > 12)
    ) {
      errors.lastName = 'Last name must be between 2 and 12'
    }
    else if(this.state.touched.lastName && (/[A-Z]*[a-z]+$/.test(this.state.lastName)===false)){
      errors.lastName = 'Invalid LastName';
    }
    return errors
  }
  handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    }
    console.log(data)
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    const { firstName,lastName,email,tel,date} = this.validate()
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} >
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <FirstName placeholder='First Name' handleChange={this.handleChange} handleBlur={this.handleBlur}/>{' '}
              <br />
              <small>{firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <LastName placeholder='Last Name' handleChange={this.handleChange} handleBlur={this.handleBlur}/>
              {' '}
              <small>{lastName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <Email placeholder='Email' handleChange={this.handleChange} handleBlur={this.handleBlur}/>
              {' '}
              <small>{email}</small>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <Tel placeholder='Tel' handleChange={this.handleChange} handleBlur={this.handleBlur}/>
              <br/>
              <small>{tel}</small>
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <DOB placeholder='Date of Birth' handleChange={this.handleChange} handleBlur={this.handleBlur}/>
            <br />
            <small>{date}</small>
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <FavouriteColor placeholder='Favourite Color' handleChange={this.handleChange} handleBlur={this.handleBlur}/>
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <Weight placeholder='Weight in Kg' handleChange={this.handleChange} handleBlur={this.handleBlur}/>
            <br />
            {/* <small>{weight}</small> */}
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={()=>this.validate}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
