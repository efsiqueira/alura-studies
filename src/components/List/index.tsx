import React from 'react'
import Item from './Item'
import style from './List.module.scss'

function List() {
  const tasks =[{
    task: 'React',
    time: '02:00:00'
  },
  {
    task: 'Typescript',
    time: '01:30:00'
  }]
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
          key={index}  
          {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List