"use client";
export default function JobDetails() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm border border-gray-100">
        <div className="mb-10">
          <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">HIRING NOW</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">Frontend Developer</h1>
          <p className="text-xl text-gray-500 font-medium">KBZ Bank • Yangon</p>
        </div>

        <div className="h-[2px] bg-gray-100 mb-10"></div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-[32px] border-2 border-dashed border-gray-200">
          <h3 className="text-2xl font-bold mb-8 text-center">ဤအလုပ်ကို လျှောက်ထားရန်</h3>
          <form className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="သင့်အမည် အပြည့်အစုံ" className="p-5 rounded-2xl border bg-white outline-none focus:ring-4 focus:ring-cyan-100" />
            <input type="email" placeholder="အီးမေးလ် လိပ်စာ" className="p-5 rounded-2xl border bg-white outline-none focus:ring-4 focus:ring-cyan-100" />
            <div className="p-10 border-2 border-dotted rounded-2xl bg-white text-center">
               <p className="text-gray-400 font-medium mb-2">CV (PDF) ဖိုင်တင်ရန်</p>
               <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-cyan-50 file:text-cyan-700" />
            </div>
            <button type="button" onClick={() => alert('CV တင်ပို့ပြီးပါပြီ။')} className="bg-cyan-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-cyan-700 transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}