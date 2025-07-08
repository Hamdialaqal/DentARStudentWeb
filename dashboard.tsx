import Navbar from  ../components/Navbar 
import Link from  next/link 

export default function Dashboard() {
  return (
    <>
      {/* الشريط العلوي */}
      <Navbar />

      {/* المحتوى الرئيسي */}
      <main className="p-8 space-y-6">
        <h1 className="text-2xl font-bold">
          مرحبًا بك في DentAR-Student (نسخة الويب)
        </h1>

        {/* روابط مبدئية للميزات القادمة */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard href="/books" title="مكتبة الكتب" />
          <FeatureCard href="/videos" title="الفيديوهات التعليمية" />
          <FeatureCard href="/schedule" title="جدول المحاضرات" />
          <FeatureCard href="/appointments" title="المواعيد" />
          <FeatureCard href="/cases" title="الحالات المرضية" />
        </section>
      </main>
    </>
  )
}

/* مكوّن بطاقة ميزة مصغّر */
function FeatureCard({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
    >
      <span className="text-lg font-semibold text-blue-700">{title}</span>
    </Link>
  )
}
