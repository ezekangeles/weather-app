import React from 'react'

const Weather = ({data}) => {
  return (
    <div className='w-full '>
      <div className='w-4/5 mx-auto'>
        <div className='flex  items-center justify-around bg-white/10 my-5 rounded-lg'>
            <img className='w-40' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
            <h1 className='text-6xl text-white font-bold'>
                {Number((data.main.temp-32)*5/9).toFixed(0)}&#176;C
            </h1>
        </div>   

        <div className='my-10 bg-black/30 rounded-lg p-3'>
            <h3 className='text-center text-2xl text-slate-200 py-3'>Weather in {data.name}</h3>
            <div className='text-slate-200 flex flex-row justify-around'>
                <div >
                    <p className='text-xl text-center font-bold'>{Number((data.main.feels_like-32)*5/9).toFixed(0)}&#176;</p>
                    <p className='text-center text-sm'>Feels Like</p>
                </div>
                <div >
                    <p className='text-xl text-center font-bold'>{data.main.humidity.toFixed(0)}%</p>
                    <p className='text-center text-sm'>Humidity</p>
                </div>
                <div >
                    <p className='text-xl text-center font-bold'>{data.wind.speed.toFixed(0)} MPH</p>
                    <p className='text-center text-sm'>Wind</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
