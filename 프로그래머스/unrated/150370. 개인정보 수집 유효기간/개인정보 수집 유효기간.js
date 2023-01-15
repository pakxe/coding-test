const MONTH = 28;

function solution(today, terms, privacies) {
  const list = [];
  privacies.forEach((person, i) => {
    const [date, term] = person.split(' ');
    const t = Number(
      terms.reduce((l, te) => {
        const [tt, m] = te.split(' ');
        if (tt === term) l.push(m);
        return l;
      }, []),
    );

    if (addMonth(t, date) <= Number(today.split('.').join(''))) {
      list.push(i + 1);
    }
  });
  return list;
}

const addMonth = (terms, date) => {
  let [year, month, day] = date.split('.');
  year = Number(year) + Math.floor(terms / 12);

  if (Number(month) + (terms % 12) > 12) {
    year += 1;
    month = (terms % 12) + Number(month) - 12;
    month = month < 10 ? `0${month}` : month;
  } else {
    month = Number(month) + (terms % 12);
    month = month < 10 ? `0${month}` : month;
  }
  return Number([year, month, day].join(''));
};
