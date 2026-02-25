import { createClient } from "@/lib/supabase";
import Link from "next/link";

export default async function Home({ searchParams }: { searchParams: { q?: string } }) {
  const supabase = createClient();
  const { data: jobs } = await supabase.from("jobs").select("*").order("created_at", { ascending: false });

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Beach Background"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Background မှောင်စေရန် */}
        
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
           JOB PORTAL 
            သင့်အနာဂတ်ကို ဒီမှာရှာဖွေပါ
          </h1>
          
          <form action="/" method="GET" className="bg-white/95 p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
            <input 
              name="q" 
              className="flex-[3] p-4 text-black outline-none rounded-xl text-lg" 
              placeholder="အလုပ်ရာထူး သို့မဟုတ် ကုမ္ပဏီ..." 
              defaultValue={searchParams.q}
            />
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">
              ရှာဖွေမည်
            </button>
          </form>
        </div>
      </div>

      {/* Job List Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 border-l-8 border-cyan-600 pl-4">နောက်ဆုံးရ အလုပ်အကိုင်များ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs?.map((job) => (
            <div key={job.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="bg-cyan-50 text-cyan-700 w-fit px-3 py-1 rounded-lg text-xs font-bold mb-4 uppercase tracking-widest">
                {job.company}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 leading-tight h-14 overflow-hidden">{job.title}</h3>
              <div className="flex items-center text-gray-500 mb-8 font-medium">
                📍 {job.location}
              </div>
              <Link 
                href={`/jobs/${job.id}`} 
                className="block text-center bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-cyan-600 transition-all"
              >
                အသေးစိတ်ကြည့်မည်
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}