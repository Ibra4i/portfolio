export default function WorkExperience() {
  return (
    <section id="work" className="work-section py-12">
      <h2 className="section-heading">Work Experience</h2>
      <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card work-card bg-white rounded-lg p-6 shadow-md">
          <h3 className="card-title text-lg font-bold">Software Intern</h3>
          <p className="card-desc text-gray-600">Ad Fontes Society — (1/2026 – 3/2026)</p>
        </div>
        <div className="card work-card bg-white rounded-lg p-6 shadow-md">
          <h3 className="card-title text-lg font-bold">Board Member (Volunteer Work)</h3>
          <p className="card-desc text-gray-600"> DFUNK North Jutland — (2023 – Present)</p>
        </div>
        <div className="card work-card bg-white rounded-lg p-6 shadow-md">
          <h3 className="card-title text-lg font-bold">Madmekka (Volunteer Work) </h3>
          <p className="card-desc text-gray-600"> DFUNK North Jutland — (2020 – 2026)</p>
        </div>
        <div className="card work-card bg-white rounded-lg p-6 shadow-md">
          <h3 className="card-title text-lg font-bold">Waiter </h3>
          <p className="card-desc text-gray-600"> (2024 – 2025)</p>
        </div>
      </div>
    </section>
  );
}
