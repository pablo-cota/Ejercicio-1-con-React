import React from 'react';
import { createRoot } from 'react-dom/client'
 
const container = document.getElementById('root')
const root = createRoot(container)

const Header = (props) => {
  return(
    <div>
    <p>Materia {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
    <p>Contenido: </p>
    <ul>
      {props.array.map(item => (
        <li key={item.key}>{item.titulo} {item.ejercicios}</li>
      ))}
    </ul>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
    <p>Total de ejercicios {props.Total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Lenguajes Web'
  const part1 = 'Introduction to React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a Component'
  const exercises3 = 14 
  const contenido = [
    {key: '1', titulo: part1, ejercicios: exercises1},
    {key: '2', titulo: part2, ejercicios: exercises2},
    {key: '3', titulo: part3, ejercicios: exercises3}
  ]

  return (
    <div>
      <Header course = {course} />
      <Content array = {contenido}/>
      <Total Total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

root.render(<App />)