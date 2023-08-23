'use client'
//you can't embed server components here if you're using 'use client'
import { useState, useEffect} from 'react'
import Link from "next/link"
import LoadingPage from './loading'
import Courses from "./components/Courses"
import CourseSearch from './components/CourseSearch'

const HomePage = () => {
  //set state for courses, loading
  const [courses, setCourses] = useState([])
  //loading is needed here because this is client component
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      //fetch from api/courses
      const res = await fetch('api/courses')
      //wait for the json
      const data = await res.json()
      //pass returned data to setCourses
      setCourses(data)
      //update setLoading state
      setLoading(false)
        }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome to Traversy Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <Courses courses={courses} />
      
    </>
  )
}

export default HomePage