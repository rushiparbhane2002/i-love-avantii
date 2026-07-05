import "../styles/Timeline.css";

export default function Timeline() {
  const memories = [
    {
      date: "April 28, 2025 – Monday | 3:21 PM",
      title: "The First Time I Saw You ❤️",
      text: "Saw the prettiest girl ever walking across the floor to her seat. Something about her instantly caught my attention.",
    },

    {
      date: "May 7, 2025 – Wednesday",
      title: "Seeing You Again 😊",
      text: "Spotted her again, this time with a group of girls.",
    },

    {
      date: "May 15, 2025",
      title: "A Small Glimpse 💕",
      text: "Saw her on the 1st floor.",
    },

    {
      date: "June 12, 2025",
      title: "Customer Feedback Day 💖",
      text: "She asked for customer feedback. A small conversation, but memorable.",
    },

    {
      date: "Diwali 2025",
      title: "The Saree Day ✨",
      text: "She looked absolutely gorgeous in a saree. One of the most beautiful moments I remember.",
    },

    {
      date: "December 25, 2025",
      title: "Christmas Memory 🎄",
      text: "Saw her again — the gorgeous girl. She looked unbelievably beautiful that day.",
    },

    {
      date: "April 17, 2026 – Friday | 10:26 PM",
      title: "The Best Conversation ❤️",
      text: "Got her number. Had one of the best conversations ever with her. The gossip, the laughs, the comfort — everything felt amazing. She even shared her sketches with me, and honestly, they were as beautiful as her. We talked from 10:27 PM till 5:38 AM.",
    },

    {
      date: "May 8, 2026 – Friday | 8:15 PM",
      title: "Coffee Together ☕",
      text: "Had a memorable coffee time with Avantii.",
    },

    {
      date: "May 13, 2026 – Wednesday | 11:10 AM",
      title: "Paratha Day ❤️",
      text: "She was alone on the first floor, called me over, and we had parathas together. Later she showed me a picture of both Adv and Avantii.",
    },

    {
      date: "May 14, 2026 – Thursday | 9:39 PM",
      title: "Goa Trip 🌴",
      text: "She called and told me she was going to Goa for a family trip.",
    },

    {
      date: "May 15, 2026 – Friday | 8:07 PM",
      title: "A Painful Moment 🥺",
      text: "She sent me a snap that made me uncomfortable and hurt me deeply.",
    },

    {
      date: "May 19, 2026 – Tuesday | 9:20 PM",
      title: "Missed Call 📞",
      text: "I had a missed call from her but my mobile was in the locker. Couldn't receive her call.",
    },

    {
      date: "June 5, 2026 – Friday | 6:55 PM",
      title: "The Café Memory ❤️",
      text: "Spent around two hours in the same café with my favourite person ever. She showed me the photos she had clicked during her Baramati trip. Every picture looked amazing simply because she was in them. She looked absolutely beautiful, and I couldn't stop admiring her.",
    },

    {
      date: "Unspoken Feelings ❤️",
      title: "Destiny",
      text: "God, if she’s not written in my destiny, I’m okay with that… Just keep her safe in every timeline, in every version of life.",
    },

    {
      date: "Silent Love ✨",
      title: "Stepping Back",
      text: "Looking at her, I realized… she loves someone the way I love her. And maybe that’s why I silently stepped back.",
    },

    {
      date: "One Glimpse 🖤",
      title: "Just One Look",
      text: "Main tere ek jhalak ko bhi taras jata hoon… Kitne khushnaseeb honge woh log jo tujhe roz dekhte hain.",
    },

    {
      date: "Dreams ❤️",
      title: "Every Dream",
      text: "How can I love someone else, when every dream I ever had somehow ended with you?",
    },

    {
      date: "Never Ever 🖤",
      title: "Forever",
      text: "I've never, ever loved anyone the way I loved you. And I keep repeating it to myself… Never ever.",
    },

    {
      date: "Memory ✨",
      title: "Some Memories Never Fade",
      text: "Some people become a memory without even becoming yours. Still, your heart keeps choosing them every single day.",
    },

    {
      date: "Maybe Love ❤️",
      title: "Maybe That's Love",
      text: "Maybe loving you was never about having you. Maybe it was just about wishing the world stays kind to you, forever.",
    },

    {
      date: "The Saddest Part 🥺",
      title: "The Truth",
      text: "The saddest part isn’t that you don’t love me… It’s knowing that someone else gets the smile I prayed for, the attention I waited for, and the version of you I would’ve protected forever.",
    },

    {
      date: "Today ❤️",
      title: "Still loving you",
      text: "No matter what happens tomorrow, you'll always be one of the most beautiful chapters of my life.",
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
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
