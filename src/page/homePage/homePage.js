import React from 'react'
import { connect } from 'react-redux'
import ItemCard from '../../components/home/ItemCard'
import { toggleTodo } from '../../store/actions'
import './homePage.scss'

const getArticleList = (lists, filter) => {
  switch (filter) {
    case 'SHOW_FRONT':
      return lists.filter(t => t.completed)
    case 'SHOW_BACK':
      return lists.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return lists
  }
}


const mapStateToProps = state => {
  return {
    lists: getArticleList(state.lists, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const HomeList = connect(mapStateToProps,mapDispatchToProps)(ItemCard)
export default HomeList