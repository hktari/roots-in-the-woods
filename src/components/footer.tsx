import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='mt-5 bg-dark p-2 p-md-4 d-flex flex-row justify-content-center align-items-center'>
        <small className='text-muted'>Roots in the Woods</small>
        <span className='mx-2 text-muted'>|</span>
        <a className='text-decoration-none text-muted' href="https://www.bostjankamnik.com"><small>bkamnik 2023</small></a>
    </footer>
  )
}

export default Footer