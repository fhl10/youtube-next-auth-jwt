import type { User } from '../../interfaces'
import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr<User[]>('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((user) => (
        <li key={user.email}>
          <Link href="/user/[id]" as={`/user/${user.email}`}>
            {`User ${user.email}`}
          </Link>
        </li>
      ))}
    </ul>
  )
}