import { useState } from "react";

export const useFilteredCoreData = ({ todo }) => {
    const [ searchParam, setSearchParam ] = useState('')

  const filteredTodoTitles = todo.filter(el => {
    const elementValue = el.title?.toLowerCase();
    const searchParamValue = searchParam?.toLowerCase().trim();

    return elementValue.includes(searchParamValue)
  })

  const filteredTodoItems = todo.filter(el => el.text.filter(val => {
      const elementValue = val.text?.toLowerCase();
      const searchParamValue = searchParam?.toLowerCase();

      return elementValue?.includes(searchParamValue)
  }).length)

  const filteredTodo = filteredTodoTitles.concat(filteredTodoItems).sort((a,b) => b.id - a.id);

  return { searchParam, setSearchParam, filteredTodo }
}