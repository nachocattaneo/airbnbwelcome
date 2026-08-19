const icalUrl =
  "https://www.airbnb.com/calendar/ical/1304453912093502589.ics?t=94c0043fb64c4ce0beea9632b6a2915e";

export default async () => {
  const response = await fetch(icalUrl);

  if (!response.ok) {
    throw new Error(`Airbnb iCal error: ${response.status}`);
  }

  const ical = await response.text();

  const events = ical
    .split("BEGIN:VEVENT")
    .slice(1)
    .map((event) => {
      const start = event.match(/DTSTART;VALUE=DATE:(\d{8})/);
      const end = event.match(/DTEND;VALUE=DATE:(\d{8})/);
      const summary = event.match(/SUMMARY:(.+)/);

      return {
        start: start ? start[1] : null,
        end: end ? end[1] : null,
        summary: summary ? summary[1].trim() : "",
      };
    })
    .filter(
      (event) =>
        event.start &&
        event.end &&
        event.summary === "Reserved"
    );

  events.sort((a, b) => a.start.localeCompare(b.start));

  const today = new Date();
  const todayString = today.toISOString().slice(0, 10).replaceAll("-", "");

  const nextReservation = events.find(
    (event) => event.start >= todayString
  );

  if (!nextReservation) {
    console.log("No upcoming Airbnb reservations.");
    return new Response("No upcoming reservation", { status: 200 });
  }

  const checkIn = formatDate(nextReservation.start);
  const checkOut = formatDate(nextReservation.end);

  console.log({
    checkIn,
    checkOut,
  });

  return new Response(
    JSON.stringify({
      checkIn,
      checkOut,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

function formatDate(date) {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  return `${day}/${month}/${year}`;
}