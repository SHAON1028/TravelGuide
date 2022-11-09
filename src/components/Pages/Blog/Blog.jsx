import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Blog = () => {
    return (

        <div>
            <p className='text-4xl font-mono text-slate-50 mt-10 text-center ' >Blog</p>
            
     
  <section class="w-full bg-gray-900 border divide-y rounded divide-slate-200 border-slate-200 my-20">
  <details class="p-4 group" open>
    <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-300 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-100 ">
    <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac09 desc-ac09"
            >
              <title id="title-ac09">Leading icon</title>
              <desc id="desc-ac09">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
      Difference between SQL and NoSQL
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac26 desc-ac26">
        <title id="title-ac26">Open icon</title>
        <desc id="desc-ac26">icon that represents the state of the summary</desc>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </summary>
    <p class="mt-4 text-slate-300">
    SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
    </p>
  </details>
  <details class="p-4 group">
    <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-300 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-100 ">
    <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac09 desc-ac09"
            >
              <title id="title-ac09">Leading icon</title>
              <desc id="desc-ac09">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
      What is JWT, and how does it work?
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac28 desc-ac28">
        <title id="title-ac28">Open icon</title>
        <desc id="desc-ac28">icon that represents the state of the summary</desc>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </summary>
    <p class="mt-4 text-slate-300">
    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
    </p>
  </details>
  <details class="p-4 group">
    <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-300 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-100 ">
    <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac09 desc-ac09"
            >
              <title id="title-ac09">Leading icon</title>
              <desc id="desc-ac09">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
      What is the difference between javascript and NodeJS?
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac30 desc-ac30">
        <title id="title-ac30">Open icon</title>
        <desc id="desc-ac30">icon that represents the state of the summary</desc>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </summary>
    <p class="mt-4 text-slate-300">
    JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
    </p>
  </details>
  <details class="p-4 group">
    <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-300 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-100 ">
    <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  shrink-0  stroke-emerald-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac09 desc-ac09"
            >
              <title id="title-ac09">Leading icon</title>
              <desc id="desc-ac09">Icon that describes the summary</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
      How does NodeJS handle multiple requests at the same time?
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac32 desc-ac32">
        <title id="title-ac32">Open icon</title>
        <desc id="desc-ac32">icon that represents the state of the summary</desc>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </summary>
    <p class="mt-4 text-slate-300">
    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
    </p>
  </details>
</section>
        </div>
    );
};

export default Blog;