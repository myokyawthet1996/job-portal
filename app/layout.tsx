import './globals.css'
import Link from 'next/link' // 👈 ဒါမပါလို့ Error တက်တာပါ

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="flex justify-between items-center px-6 md:px-20 py-5 bg-white border-b sticky top-0 z-50 shadow-sm">
          <Link href="/" className="text-2xl font-extrabold text-cyan-600 tracking-tighter">
            JOB<span className="text-gray-900">PORTAL</span>
          </Link>
          
          <div className="flex items-center gap-4 md:gap-8 font-semibold">
            <Link href="/login" className="text-sm text-gray-600 hover:text-cyan-600">Login</Link>
            <Link href="/dashboard/post-job" className="bg-cyan-600 text-white px-5 py-2.5 rounded-full text-sm shadow-md hover:bg-cyan-700 transition-all">
              Post a Job
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}