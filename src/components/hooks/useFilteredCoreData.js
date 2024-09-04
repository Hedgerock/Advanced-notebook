import { useState } from "react";
import { getFilteredSearchData } from "../utils";

export const useFilteredCoreData = ({ todo }) => {
  const [ searchParam, setSearchParam ] = useState('')

  const filteredTodoTitles = getFilteredSearchData({ data: todo, searchParam, key: 'title' })

  const filteredTodoItems = todo.filter(el => getFilteredSearchData({ data: el.text, searchParam, key: 'text' }).length)

  const combinedFilteredTodo = [...filteredTodoTitles, ...filteredTodoItems]

  const filteredTodo = Array.from(new Set(combinedFilteredTodo.map(item => item.id)))
    .map(id => combinedFilteredTodo.find(item => item.id === id))
    .sort((a, b) => b.id - a.id)

  return { searchParam, setSearchParam, filteredTodo }
}
