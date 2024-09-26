import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [data, setData] = useState({})

  useEffect(() => {
    const collectData = async () => {
        const data = await fetch("http://localhost:5002/aboutmedata")
        const data_parsed = await data.json()
        setData(data_parsed)
    }
    collectData()
  }, [])

  return (
    <>
      <h1>{data.name}</h1>
      <img src={data.img}></img>
      <p>{data.aboutUs}</p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
