import React from 'react'

const SignUp = () => {
    return (
        <div>
            <div className='form'>
                <form>
                    <label>Enter your First Name :</label><input className='fname' type="text" /><br />
                    <label>Enter your Last Name :</label><input className='lname' type="text" /><br />
                    <label>Enter your Email :</label><input className='email' type="email" /><br />
                    <label>Enter your Password :</label><input className='password' type="password" /><br />
                    <input type="submit" id='submit' value="Sign Up" />
                    {/* <Link to='/' type="submit" id='submit'>Create account</Link> */}
                </form>
            </div>
        </div>
    )
}

export default SignUp
