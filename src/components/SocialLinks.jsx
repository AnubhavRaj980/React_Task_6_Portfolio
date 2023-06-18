import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

function SocialLinks() {
    const links=[
    {
        id: 1,
        child: (
          <>
          LinkedIn <FaLinkedin size={30} />
          </>
        ),
        href:'https://www.linkedin.com/in/anubhav-raj-5175851b4/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
          <>
          GitHub <FaGithub size={30} />
          </>
        ),
        href:'https://github.com/AnubhavRaj980',
    },
    {
        id: 3,
        child: (
          <>
          Mail <HiOutlineMail size={30} />
          </>
        ),
        href:'mailto:anubhav.raj972@gmail.com',
    },
    {
        id: 4,
        child: (
          <>
          Resume <BsFillPersonLinesFill size={30} />
          </>
        ),
        href:'/Anubhav Raj VIT Bhopal University (20BCE10678).pdf',
        style: 'rounded-br-md',
        download: true,
    }
    ]
    return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download})=>(
            <l1 key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-b from-blue-500 to-purple-500 " +
            " " +
            style}>
            <a
             href={href}
             className='flex justify-between items-center w-full text-white'
             download={download}
             target="_blank"
             rel="noreferrer"
             >
                {child}
            </a>
            </l1>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks
