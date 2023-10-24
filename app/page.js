import Link from 'next/link'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'

export default function Home() {
  return (
    <main>
      <AddUser/>
      <DisplayUser/>
      <br/>
      <br/>
      <Link href="/removedusers">Removed Users</Link>
    </main>
  )
}
