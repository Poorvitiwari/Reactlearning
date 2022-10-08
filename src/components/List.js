import React from 'react'
import Person from './Person'

function List() {
    const persons=[
        {
            id:1,
            name:'Diana',
            age:28,
            skill:'Vue'
        },
        {
            id:2,
            name:'ABC',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'XYZ',
            age:21,
            skill:'JavaScript'
        },
        {
            id:4,
            name:'Harry',
            age:38,
            skill:'React'
        }
    ]
    const personList=persons.map(person=><Person key={person.id} person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default List