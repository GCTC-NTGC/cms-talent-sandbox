import Link from 'next/link'

function Menu() {
  return (
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/posts"><a>Posts</a></Link></li>
    </ul>
  )
}


export default Menu