
import { useRouter } from 'next/router'
export default function Login() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded"
        onClick={() => router.push('/dashboard')}>
        تسجيل الدخول (تجريبي)
      </button>
    </div>
  )
}
