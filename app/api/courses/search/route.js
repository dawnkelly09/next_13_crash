import { NextResponse } from "next/server";
import courses from "../data.json"

//add search for courses 
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const filteredCourses = courses.filter((course) => {
        //convert course title and input to lowercase to compare them
        return course.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredCourses)
}