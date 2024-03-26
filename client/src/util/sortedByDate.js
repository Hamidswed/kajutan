export default function sortedByDate(list, sort = "asec") {
  return [...list]?.sort((a, b) => {
    const dateA = new Date(a.DOB).getTime();
    const dateB = new Date(b.DOB).getTime();
    if (sort === "asec") return dateA - dateB;
    if (sort === "desc") return dateB - dateA;
  });
}
