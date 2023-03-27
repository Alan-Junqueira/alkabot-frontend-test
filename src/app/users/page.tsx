import { Suspense } from 'react'
import { User as UserType } from '../@types/user'
import { User } from '../components/User'
import { UserLoading } from '../components/skeletion/UserLoading'
import { axiosInstance } from '../services/axiosInstance'

export default async function Users() {
  const getUsers = await axiosInstance.get('users', {
    headers: {
      'Cache-Control': 'no-store',
    },
  })

  const users: UserType[] = getUsers.data

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {users.map((user) => (
        <>
          <Suspense fallback={<UserLoading />}>
            <User
              key={user.id}
              email={user.email}
              name={user.name}
              userId={user.id}
              username={user.username}
            />
          </Suspense>
        </>
      ))}
    </div>
  )
}
