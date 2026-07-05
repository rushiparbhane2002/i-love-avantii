// import "./Timeline.css";
import "../styles/Timeline.css";

export default function Timeline() {
  const memories = [
    {
      date: "April 28, 2025",
      title: "The First Time I Saw You ❤️",
      text: "The day my heart quietly chose you.",
    },
    {
      date: "May 7, 2025",
      title: "Seeing You Again 😊",
      text: "I knew you were someone special.",
    },
    {
      date: "June 12, 2025",
      title: "Customer Feedback Day 💖",
      text: "One of my favorite memories with you.",
    },
    {
      date: "Today",
      title: "Still Loving You ❤️",
      text: "Every day my feelings grow stronger.",
    },
  ];

  return (
    <section className="timeline-section">
      <h1>My Beautiful Memories ❤️</h1>

      <div className="timeline">
        {memories.map((item, index) => (
          <div
            key={index}
            className={`container ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <span>{item.date}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
