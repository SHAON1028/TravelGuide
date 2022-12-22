import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState('')


  // props drilling-----------------
  const { signInWithGoogle, signIn } = useContext(AuthContext)

  // handler----------------------
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(false)
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    signIn(email, password)
      .then(result => {
        const user = result.user;

        setLoading(true)
        const currentUser = {
          email: user.email
        }

        console.log(currentUser);

        // get jwt token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem('genius-token', data.token);
            navigate(from, { replace: true });
          });

      })
      .catch(error => setError(error.message))

  }
  // ----------------Google-------------

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(results => {
        const user = results.user
        console.log(user);
        navigate(from, { replace: true })

      })
      .catch(error => setError(error.message))

  }

  return (
    <div
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white "
    >
      {loading === false ? <> <div className="flex items-center justify-center mb-96">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
      </div></> : ""}
      <form onSubmit={handleSubmit} className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Sign In</div>
        <p className='text-red-700'><small>{error}</small></p>

        <div
          className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="email"
            name='email'
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            required
          />
        </div>

        <div
          className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="password"
            name='password'
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            required
          />
        </div>

        <button type='submit'
          className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
        >
          LOG IN
        </button>

        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
        >FORGOT PASSWORD?</a
        >

        <p className="text-center text-lg">
          No account?
          <Link
            to="/register"
            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
          >Create One</Link>
        </p>

        {/*  */}
        <div className="flex items-center  ">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button onClick={handleGoogleSignIn} className=" group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100  ">
          <div className=" flex items-center space-x-2 justify-center ">
            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className=" left-0 w-5" alt="google logo " />
            <span className=" block w-max font-semibold tracking-wide text-gray-300 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base "> Continue with Google</span>
          </div>
        </button>
        {/*  */}

      </form>
    </div>
  );
};

export default Login;