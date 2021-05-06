import Link from 'next/link'

function Menu() {
  return (
    <div data-h2-flex-grid="b(middle, contained, padded, m)" data-h2-bg-color="b(pink)" data-h2-text-align="b(center)" data-h2-font-family="b(sans)">
      <div data-h2-flex-item="b(1of3)"><Link href="/"><a>Home</a></Link></div>
      <div data-h2-flex-item="b(1of3)"><Link href="/posts"><a>Posts</a></Link></div>
      <div data-h2-flex-item="b(1of3)"><Link href="/users"><a>Users</a></Link></div>
    </div>
  )
}


export default Menu