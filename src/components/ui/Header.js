import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar className='bg-dark header' variant='dark'>
        <Navbar.Brand className='d-block mt-2' href='/'>
          <ul className='d-flex list-unstyled mt-3'>
            <li className='p-2'>
              <i className='fa fa-phone'></i>
            </li>
            <li className='p-2'>
              <h6 className='mt-1'>(713) 478 - 8723</h6>
            </li>
          </ul>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <ul className='d-flex list-unstyled mt-3'>
              <li className='p-2'>
                <i className='far fa-envelope'></i>
              </li>
              <li className='p-2'>
                <i className='fab fa-facebook-f'></i>
              </li>
              <li className='p-2'>
                <i className='fab fa-twitter'></i>
              </li>
            </ul>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
