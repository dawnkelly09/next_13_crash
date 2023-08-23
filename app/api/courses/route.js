import { NextResponse } from 'next/server'
//allows for creation of a random unique id
import { v4 as uuidv4 } from 'uuid'
import courses from './data.json'

export async function GET(request) {
    return NextResponse.json(courses)
}

export async function POST(request) {
    //deconstruct to what you want back in the body
    const { title, description, level, link } = await request.json()
    //the items to add to the database
    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    }

    courses.push(newCourse)

    return NextResponse.json(courses)
}