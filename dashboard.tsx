
import Navbar from '@/components/Navbar'
export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">مرحبًا بك في DentAR-Student (نسخة الويب)</h1>
        <p className="mt-4">هذه صفحة لوحة التحكم المبدئيّة. سنضيف المكتبة، الفيديوهات، وجدول المحاضرات هنا.</p>
      </main>
    </>
  )
}
