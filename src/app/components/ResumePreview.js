export default function ResumePreview({ resume }) {
    return (
      <div className="p-6 bg-gray-100 shadow-md rounded">
        <h2 className="text-2xl font-bold">{resume.fullName}</h2>
        <p>Email: {resume.email}</p>
        <p>Phone: {resume.phone}</p>
        <h3 className="font-semibold">Education</h3>
        <p>{resume.education}</p>
        <h3 className="font-semibold">Experience</h3>
        <p>{resume.experience}</p>
        <h3 className="font-semibold">Skills</h3>
        <p>{resume.skills.join(", ")}</p>
      </div>
    );
  }
  