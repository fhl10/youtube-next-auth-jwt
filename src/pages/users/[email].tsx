import type { User } from '../../../interfaces'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function UserPage() {
  const router = useRouter()
  const { data, error } = useSwr<User>(
    router.query.email ? `/api/user/${router.query.email}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.senha}</div>
}