import { Form, TextInput, PasswordInput, Button, Stack } from '@carbon/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../utils/auth/useAuth'

export default function Login() {
  const router = useRouter()
  const { login } = useAuth()
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(credentials)
    if (success) {
      router.push('/dashboard')
    }
  }

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}>
        <Stack gap={7}>
          <TextInput
            id="email"
            labelText="Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <PasswordInput
            id="password"
            labelText="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </Form>
    </div>
  )
}
