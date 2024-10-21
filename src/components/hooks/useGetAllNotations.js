import { useState } from "react";

export const useGetAllnotations = ({ filteredTodo }) => {
  const rawAllNotaions = filteredTodo
  ?.map(el => el.text
  .map(val => val.notation?.filter(v => v.text).map(v => v.text[0].toUpperCase() + v.text.slice(1).toLowerCase())))
  ?.flat()
  ?.filter(el => el?.length)
  ?.flat();

  const obj = {};

  rawAllNotaions.forEach((el) => {
    obj[el] ? obj[el]++ : obj[el] = 1;
  })

  const allNotations = Object.entries(obj).map((el, index) => {
    return { id: index + 1, title: el[0], count: el[1] }
  })

  const [ isSearchByNote, setIsSearchByNote ] = useState(!!allNotations.length);

  return { allNotations, isSearchByNote, setIsSearchByNote }
}