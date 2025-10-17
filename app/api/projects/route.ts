import { NextResponse } from "next/server"

const buttons = [
  {
    href: 'https://github.com/vncscds',
    icon: './github.svg',
    alt: 'Github Logo'
  },
  {
    href: 'https://www.linkedin.com/in/vncscds/',
    icon: './linkedin.svg',
    alt: 'Linkedin Logo'
  }
]

export async function GET() {
  try {
    return NextResponse.json({ buttons })
  } catch (err) {
    console.log(err)
  }
}