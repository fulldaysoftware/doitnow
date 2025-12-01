type MonthInfo = { 
  count: number; 
  order: number; 
  name: string; 
  previous: string; 
  next: string; 
};

export const generator = (month: number, year: number) => {

  const isLeapYear = (y: number) =>
    (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);

  const getFebCount = () => (isLeapYear(year) ? 29 : 28);

  const monthData: MonthInfo[] = [
    { count: 31, order: 0, name: "January", previous: "December", next: "February" },
    { count: getFebCount(), order: 1, name: "February", previous: "January", next: "March" },
    { count: 31, order: 2, name: "March", previous: "February", next: "April" },
    { count: 30, order: 3, name: "April", previous: "March", next: "May" },
    { count: 31, order: 4, name: "May", previous: "April", next: "June" },
    { count: 30, order: 5, name: "June", previous: "May", next: "July" },
    { count: 31, order: 6, name: "July", previous: "June", next: "August" },
    { count: 31, order: 7, name: "August", previous: "July", next: "September" },
    { count: 30, order: 8, name: "September", previous: "August", next: "October" },
    { count: 31, order: 9, name: "October", previous: "September", next: "November" },
    { count: 30, order: 10, name: "November", previous: "October", next: "December" },
    { count: 31, order: 11, name: "December", previous: "November", next: "January" }
  ];

  const current = monthData.find(m => m.order === month);
  if (!current) throw new Error("Invalid month");

  const previous = monthData[(current.order + 11) % 12];
  const next = monthData[(current.order + 1) % 12];

  const date = new Date(year, current.order, 1);
  const startIndex = date.getDay();

  const generateArray = (n: number, start: number = 1) =>
    Array.from({ length: n }, (_, i) => i + start);

  const prevOffset = generateArray(startIndex, previous.count - startIndex + 1);
  const monthNumbers = generateArray(current.count);

  const padded = 42 - (prevOffset.length + monthNumbers.length);
  const postPadding = generateArray(padded);

  const markup = (arr: number[], active: boolean) =>
    arr.map(n => ({ t: active, c: n }));

  const allDays = [
    ...markup(prevOffset, false),
    ...markup(monthNumbers, true),
    ...markup(postPadding, false)
  ];

  const weeks = [];
  for (let i = 0; i < 42; i += 7) {
    weeks.push(allDays.slice(i, 7 + i));
  }

  return {
    year: date.getFullYear(),
    month: current.name,
    
    previous,
    next,
    days: weeks
  };
};
