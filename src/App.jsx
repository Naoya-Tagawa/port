import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'> 
        <a href= "#" className='font-medium text-gray-900 mb-4 md:mb-0'> 
          <span className='text-xl ml-3'>
            Shincode
          </span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a  href = "#home" className='mr-5 hover:text-blue-400 duration-300' >Home</a> 
          <a  href = "#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a  href = "#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a  href = "#portfolio" className=' hover:text-blue-400 duration-300'>Portfolio</a>
        </nav>


      </div>


      </header>

      <section className='text-gray-700' id='home'> 
        <div className='flex container mx-auto py-20 px-20 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray=900 font-medium mb-4' >
              ようこそ!
              <br />田川直弥のポートフォリオへ<br />
            </h1>
            <p className='mb-8 leading-relaxed'>
              このサイトでは田川直弥のことが大体わかるようになります
            </p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>
              contact
            </button>
          </div>
          <div className='md:w-3/2 lg:max-w-lg '>
            <img src = "./img/door.jpg" alt = "" />
          </div>

        </div>
      </section>


      <section className='text-gray-700 border-t border-gray-200 'id='about'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <hi className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">about me</hi>
            <p className='pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eligendi at temporibus veniam et dicta velit obcaecati tempore repellat asperiores. Saepe dicta repudiandae itaque quasi ipsa quas dolor impedit in.

            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sapiente illo sunt distinctio in, aliquam velit quam ipsum, consequuntur quasi ab enim pariatur tenetur soluta quaerat est dolor architecto omnis?

            </p>
          </div>
          {/*カードのdivタグ   */}
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z" fill="currentColor" /><path d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z" fill="currentColor" />
                  </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                  web
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum optio ab perspiciatis placeat ad nulla quae hic ducimus maiores voluptate cumque, praesentium itaque. Quasi eveniet rem sint mollitia corporis.
                  </p>
                  <a href="#" className='flex mt=3 text-green-500 text-ce
                  '>
                    もっとみる
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z" fill="currentColor" /></svg>


                  </a>
                </div>

              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z" fill="currentColor" /><path d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z" fill="currentColor" />
                  </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                  web
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum optio ab perspiciatis placeat ad nulla quae hic ducimus maiores voluptate cumque, praesentium itaque. Quasi eveniet rem sint mollitia corporis.
                  </p>
                  <a href="#" className='flex mt=3 text-green-500 text-ce
                  '>
                    もっとみる
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z" fill="currentColor" /></svg>


                  </a>
                </div>

              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z" fill="currentColor" /><path d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z" fill="currentColor" />
                  </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                  web
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum optio ab perspiciatis placeat ad nulla quae hic ducimus maiores voluptate cumque, praesentium itaque. Quasi eveniet rem sint mollitia corporis.
                  </p>
                  <a href="#" className='flex mt=3 text-green-500 text-ce
                  '>
                    もっとみる
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z" fill="currentColor" /></svg>


                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>



      </section>
    </>
  );
}

export default App
