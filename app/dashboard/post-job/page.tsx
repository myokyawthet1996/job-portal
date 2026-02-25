import { createClient } from "@/lib/supabase";

export default async function Home({
  searchParams,
}: {
  searchParams: { q?: string; location?: string };
}) {
  const supabase = createClient();

  // Query logic
  let query = supabase.from("jobs").select("*");
  if (searchParams.q) query = query.ilike("title", `%${searchParams.q}%`);
  if (searchParams.location) query = query.eq("location", searchParams.location);

  const { data: jobs } = await query.order("created_at", { ascending: false });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Job Portal</h1>

      {/* Search Bar UI */}
      <form className="flex gap-2 mb-8">
        <input 
          name="q" 
          placeholder="Search jobs..." 
          className="border p-2 rounded w-full text-black"
          defaultValue={searchParams.q}
        />
        <input 
          name="location" 
          placeholder="Location (e.g. Yangon)" 
          className="border p-2 rounded text-black"
          defaultValue={searchParams.location}
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Search</button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Latest Jobs ({jobs?.length || 0})</h2>

      <div className="space-y-4">
        {jobs?.map((job) => (
          <div key={job.id} className="border p-6 rounded-lg shadow-sm hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-bold text-blue-600">{job.title}</h3>
            <p className="font-medium">{job.company}</p>
            <p className="text-gray-500 text-sm">📍 {job.location}</p>
            <button className="mt-4 text-sm bg-gray-100 px-3 py-1 rounded">View Details</button>
          </div>
        ))}
        {jobs?.length === 0 && <p>No jobs found.</p>}
      </div>
    </div>
  );
}