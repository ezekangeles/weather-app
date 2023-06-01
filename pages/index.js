import { Inter } from 'next/font/google'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import {BsSearch} from 'react-icons/bs'
import Weather from './components/Weather'
import Spinner from './components/Spinner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [city, setCity] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const blankData = useRef('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

    const getData = (e) =>{
      e.preventDefault()
      setLoading(true)
      if(city == ''){
        alert('Please Enter Valid City')
      }else{
        axios.get(url).then((response) =>{
          setData(response.data)
          console.log(response.data)
        })
      }
      setCity('')
      setLoading(false)
    }

    if(loading){
      return <Spinner />
    }else{
      return (
       <div className='h-screen w-screen'>
          <img className='object-cover h-full w-full'
            src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
          <div className='h-full w-full bg-black/30 z-10 absolute top-0 left-0 '>
            <div className='mx-auto w-full max-w-[500px] py-10 h-full flex flex-col'>
              <form onSubmit={getData} className='pr-1 flex w-4/5 mx-auto items-center justify-between border border-slate-100 rounded-lg'>
                <div className=' w-full'>
                  <input ref={blankData} type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} 
                  className='capitalize  w-full bg-transparent rounded-md focus:outline-none p-2 text-xl text-white placeholder:text-slate-300 hover:text-white cursor-pointer'/>
                </div>
                <button onClick={getData}>
                  <BsSearch size={20} className='text-white'/>
                </button>
              </form>
              {data.main && <Weather data={data}/>}
            </div> 
          </div>
       </div>
      )
    }
    

}
