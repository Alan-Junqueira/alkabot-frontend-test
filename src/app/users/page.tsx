import { User as UserType } from '../@types/user'
import { User } from '../components/User'
import { axiosInstance } from '../services/axiosInstance'

export default async function Users() {
  const getUsers = await axiosInstance.get('users', {
    headers: {
      'Cache-Control': 'no-store',
    },
  })

  const users: UserType[] = getUsers.data

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <User
          key={user.id}
          email={user.email}
          name={user.name}
          userId={user.id}
          username={user.username}
        />
      ))}
    </div>
  )
}
