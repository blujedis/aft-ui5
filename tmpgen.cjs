const cals = ['golf', 'dining', 'clubhouse', 'sports'];
function getNum(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getDateTime(start, end) {
  var startHour = 8;
  var endHour = 18;
  var startMin = 0;
  var endMin = 59;
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  var min = startMin + Math.random() * (endMin - startMin) | 0;
  date.setHours(hour);
  date.setMinutes(min);
  return date;
}
const dates = [
  '2024/10/25 11:30:52',
  '2024/08/10 17:04:04',
  '2024/08/22 23:32:46',
  '2024/08/08 02:18:43',
  '2024/08/17 06:44:58',
  '2024/08/30 18:16:08',
  '2024/09/16 05:39:42',
  '2024/09/28 22:50:46',
  '2024/08/06 06:29:45',
  '2024/09/04 19:48:40',
  '2024/10/26 04:50:58',
  '2024/09/22 17:06:03',
  '2024/08/13 19:13:32',
  '2024/10/25 15:21:45',
  '2024/09/28 15:56:26',
  '2024/10/22 05:30:56',
  '2024/10/16 04:15:56',
  '2024/09/05 07:32:54',
  '2024/08/03 14:25:29',
  '2024/08/12 21:37:44',
  '2024/08/14 06:11:41',
  '2024/08/14 06:25:18',
  '2024/08/15 22:15:08',
  '2024/09/13 05:48:07',
  '2024/08/21 07:23:42',
];
const today = (new Date(Date.now())).getDate();
const events = dates.reduce((a, c, i) => {
  // const d = new Date(c);
  const d = getDateTime(new Date(2024, 9, today, 12), new Date(2024, 11, 1, 12, 0));
  const minutes = getNum(1, 59);
  const calIdx = getNum(1, cals.length) - 1;

  const obj = {
    id: `event-${i}`,
    calendarId: cals[calIdx],
    title: cals[calIdx].charAt(0).toUpperCase() + cals[calIdx].slice(1) + ` calendar event.`,
    start: d.toISOString(),
    end: (new Date(d.getTime() + minutes * 60000)).toISOString()
  };
  a = [...a, obj];
  return a;
}, []);

console.log(JSON.stringify(events, null, 2));
