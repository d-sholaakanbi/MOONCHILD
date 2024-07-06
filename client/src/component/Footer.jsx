import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  const links = [
    {
      name: 'facebook',
      href: 'facebook.com',
      id: 1,
    },
    {
      name: 'twitter',
      href: 'twitter.com',
      id: 2,
    },
    {
      name: 'instagram',
      href: 'instagram.com',
      id: 3,
    },
    {
      name: 'pinterest',
      href: 'pinterest.com',
      id: 4,
    },
  ]

  const infos = [
    { name: 'cookies settings', id: 1 },
    { name: 'privacy policy', id: 2 },
    { name: 'returns', id: 3 },
    { name: 'store', id: 4 },
  ]

  return (
    <Container className='py-5 px-2 d-flex align-items-center justify-content-center'>
      <div className='d-flex flex-column gap-5 justify-content-center text-center'>
        <h1>JOIN OUR NEWSLETTER</h1>
        <div className='d-md-flex gap-4 justify-content-center align-items-center'>
          {links.map((item) => (
            <a href={`${item.href}`} target='_blank' key={item.id}>
              <p className='text-uppercase font-normal text-sm text-black-50'>
                {item.name}
              </p>
            </a>
          ))}
        </div>
        <div className='d-md-flex justify-content-center align-items-center gap-4'>
          {infos.map((it) => (
            <p
              className='uppercase font-normal text-xs mx-2'
              key={it.id}
            >
              {it.name}|
            </p>
          ))}
        </div>
      </div>
    </Container>
  )
}





















// import React from 'react'

// export default function Footer() {
//   return (
//     <div>
//         <div className="d-flex justify-content-center px-5 mt-3">
//             <h1>JOIN OUR NEWSLETTER</h1>
//         </div>
//         <div className="d-grid justify-content-center gap-3 d-lg-flex py-5 text-center">
//             <h5>Facebook</h5>
//             <h5>Twitter</h5>
//             <h5>Instagram</h5>
//             <h5>Pinterst</h5>
//         </div>

//         <pre className="d-grid justify-content-center gap-3 d-lg-flex px-5 text-center">
//             <h5>COOKIES SETTING|</h5>
//             <h5>PRIVACY POLICY|</h5>
//                 <h5>RETURN|</h5>
//                 <h5>STORE|</h5>
//         </pre>

//     </div>
//   )
// }
