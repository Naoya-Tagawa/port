import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function but(){
  return (
    <div id= "3dprinterdetail "class= " z-0 fixed top-1/4  left-0 w-full  text-center bg-gray-100 ">
    <button type='botton' id = "xmark">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <h1>Top</h1>
    <h1>jj</h1>



  </div>



  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <head>
        <title>
          Naoya's Portfolio
        </title>
      </head>

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
          <a  href = "#portfolio" className='mr-5 hover:text-blue-400 duration-300'>Portfolio</a>
          <a  href = "#career" className=' hover:text-blue-400 duration-300'>Career</a>
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
          <div className='md:w-3/4 lg:max-w-lg '>
            <img  class="hover:animate-bounce" src = "./img/denkyuinu.png" alt = "" />
          </div>

        </div>
      </section>





      <section className='text-gray-700 border-t border-gray-200 'id='about'>




        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <hi className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">about me</hi>
        
          </div>

          <div className='flex container mx-auto py-5 px-5   flex-col md:flex-row items-center '>
            <div className='md:w-3/2 lg:max-w-lg'>
              <img src = "./img/door.jpg" alt = "" />
            </div>

          
            <div className='md:w-1/2 flex-grow mb-16 lg:pl-10 md:pr-16 text-left  lg:text-left'>
              <p className='text-xl  text-gray-800 font-normal mb-1 ' >
               名前:田川直弥
              </p>
              <p className='text-xl  text-gray-800 font-normal mb-1 ' >
               年齢:22歳
              </p>
              <p className='text-xl  text-gray-800 font-normal mb-1 ' >
               出身:大阪府
              </p>
              <p className='text-xl  text-gray-800 font-normal mb-1 ' >
                学歴:大阪府立天王寺高等学校 → 大阪府立大学 → 大阪公立大学院 在学中
              </p>
              <p className='text-xl  text-gray-800 font-normal mb-1 ' >
               趣味:麻婆豆腐を食べに行くこと、カードゲームを少し
              </p>
              <p className='text-xl  text-gray-800 font-normal mb-1 ' >
               情報技術を用いた視覚障害者を支援するシステムについて研究、開発しています
              </p>

              <p className='text-xl  text-gray-800 font-normal mb-3 ' >
               Pythonによる画像処理、カメラ幾何などができます
              </p>


              <div className="flex items-center mb-3">
                <div className='px-3'>
                <a href="https://www.instagram.com/naoya187/" >  
                  <svg width="40" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=' hover:scale-150'><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor" /><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor" />
                
                  </svg>
                </a>
                </div>

                <div className='px-3'>
                <a href="mailto:ntagawasyu84@gmail.com" >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=' hover:scale-150'><path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" /></svg>
                </a>
                </div>

                <div className='px-3'>
                  <a href = "https://github.com/Naoya-Tagawa/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" className=' hover:scale-150'><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                </div>
 
              </div>



            </div>
          </div>
        </div>
      </section>
        
      
      <section className='text-gray-700 border-t border-gray-200 'id='skills'>
        <div className='text-center mb-20'>
            <hi className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">Skills</hi>
        
        </div>


          {/*スキルのdivタグ   */}
        <div className='flex flex-wrap scroll-smooth hover:scroll-auto'>
            <div className='md:w-1/3 p-4 '>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                
                  <div className='bg-green-500 text-white rounded-full'>
                  <a href="https://www.instagram.com/naoya187/">
                  <svg width="40" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor" /><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor" />
                
                  </svg>
                  </a>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                  プログラミング
                  </h2>
                </div>
                <div>
                  <p>
                    ・Python/C++/Java
                  </p>
                  <p>
                    ・React/Django
                  </p>

                </div>

              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>

                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                  好きなこと
                  </h2>
                </div>
                <div>
                  <p>
                    ・バレーボール(母校でコーチとして後輩たちを指導していました！)
                  </p>
                  <a href = "https://tenkovolley.jimdofree.com/" className='hover:text-blue-500 duration-300'>母校のバレーボール部のブログはこちら</a>
                  <p>
                    ・料理
                  </p>

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
                  資格など
                  </h2>
                </div>
                <div>
                  <p>
                    ・普通自動車第一種免許
                  </p>
                  <p>
                    ・世界遺産検定2級
                  </p>
                  <p>
                    ・SIG-ACIで学会発表
                  </p>
                  <p>
                    ・TOEIC 790点
                  </p>
                  
                </div>

              </div>
            </div>
        </div>
        



      </section>
      <section className='text-gray-700 border-t border-gray-200 'id='portfolio'>
        <div className='text-center mb-20'>
            <hi className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">Portfolio</hi>
        
        </div>


          {/*スキルのdivタグ   */}
        <div className='flex flex-wrap scroll-smooth hover:scroll-auto'>
            <div className='md:w-1/3 p-4 '>
              

              
                <botton type="botton" id = "3dprinter" onClick={but()} >
                  <img src = "./img/3dprinter.jpg" alt = ""  />

                </botton>

            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>

                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                  好きなこと
                  </h2>
                </div>
                <div>
                  <p>
                    ・バレーボール(母校でコーチとして後輩たちを指導していました！)
                  </p>
                  <a href = "https://tenkovolley.jimdofree.com/" className='hover:text-blue-500 duration-300'>母校のバレーボール部のブログはこちら</a>
                  <p>
                    ・料理
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
                  資格など
                  </h2>
                </div>
                <div>
                  <p>
                    ・普通自動車第一種免許
                  </p>
                  <p>
                    ・世界遺産検定2級
                  </p>
                  <p>
                    ・SIG-ACIで学会発表
                  </p>
                  <p>
                    ・TOEIC 790点
                  </p>
                  
                </div>

              </div>
            </div>
        </div>
        



      </section>
        
  

    

    

    </>
  );
}

export default App