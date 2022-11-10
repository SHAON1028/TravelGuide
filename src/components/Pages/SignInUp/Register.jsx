import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
const Register = () => {
  const navigate = useNavigate()
const location  = useLocation()
const from = location.state?.from?.pathname || '/'
const [error,setError] = useState('')
  const {signInWithGoogle,createUser,signInWithGithub,updateUserProfile,user} = useContext(AuthContext) 
  useTitle('Register')

  const handleSubmit = (e)=>{
    e.preventDefault()
    const form  = e.target
    const name = form.name.value
    const email = form.email.value
    const photoURL = form.photo.value
    const password = form.password.value
    console.log(email,password,name)
    createUser(email,password)
    .then(results=>{
      const user = results.user
      console.log(user)
      toast.success('Successfully Registered!')
      form.reset();
      
      navigate(from,{replace:true})
   
  
        handleUpdateProfile(name,photoURL)
      
     
      
      navigate(from,{replace:true})
    })
    .catch(error=>setError(error.message))

     // ----------------Google-------------

 const handleGoogleSignIn = ()=>{
  signInWithGoogle()
  .then(results=>{
    const user = results.user
    console.log(user); 
    
    navigate(from,{replace:true}) 
 
    
  })
  .catch(error=>setError(error.message))

}


  }

  // upadte profile

  const handleUpdateProfile = (name,photoURL)=>{
    const profile = {
        displayName:name,
        photoURL:photoURL
    }
    updateUserProfile(profile)
    .then(()=>{
     toast.success('Update success!')
    })
    .catch(error=>setError(error.message))
  }
    return (
        <div
        className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white "
      >
      
        <form onSubmit={handleSubmit} className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Sign Up</div>
          <p className='text-red-700'><small>{error}</small></p>
          <div
            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
          >
            <input
              type="text"
              placeholder="Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              name='name'
              required
            />
          </div>
          <div
            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
          >
            <input
              type="text"
              placeholder="Photo url"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              name='photo'
              required
            />
          </div>
      
          <div
            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              name='email'
              required
            />
          </div>
      
          <div
            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
          >
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              required
              name='password'
            />
          </div>
      
          <button
            className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          >
            Register
          </button>
      

      
          <p className="text-center text-lg">
            Already have an account?
            <Link
              to="/login"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
              >Sign In
              </Link>
            </p>
         
            {/*  */}
            <div className="flex items-center  ">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
            <button className=" group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
       hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100  ">
                                  <div className=" flex items-center space-x-2 justify-center ">
                                      <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className=" left-0 w-5" alt="google logo "/>
                                      <span className=" block w-max font-semibold tracking-wide text-gray-300 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base "> Continue with Google</span>
                                  </div>
                              </button>
            {/*  */}
          
        </form>
      </div>
    );
};

export default Register;