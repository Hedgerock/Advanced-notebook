import { useState } from "react";

export const useGetAllnotations = ({ filteredTodo }) => {
  const rawAllNotaions = filteredTodo
  ?.map(el => el.text
  .filter(val => !val.deleted)
  .map(val => val.notation?.filter(v => v.text).map((v, ind) => {
    const title = v.text[0].toUpperCase() + v.text.slice(1).toLowerCase();
    return { id: ind, title, status: v.isActive}
  })))
  ?.flat()
  ?.filter(el => el?.length)
  ?.flat();

  const obj = {};

  rawAllNotaions.forEach((el) => {
    obj[el.title] ? obj[el.title]++ : obj[el.title] = 1;
  })

  const allNotations = Object.entries(obj).map((el, index) => {
    const findElement = rawAllNotaions.find(val => {
      return val.title === el[0]
    })
    const status = findElement?.status

    return { id: index + 1, title: el[0], count: el[1], status }
  })

  const [ isSearchByNote, setIsSearchByNote ] = useState(!!allNotations.length);

  return { allNotations, isSearchByNote, setIsSearchByNote }
}