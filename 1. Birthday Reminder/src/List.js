import React,{useState} from 'react';
import data from './data'

const List = () => {
  const [people,setPeople] = useState(data)

  const removePerson = (id) =>{
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      <h3>{people.length} Birthdays today</h3>
      {people.map((person) => {
        const {id, name, age, image} = person
        return(
          <article key={id} className='person'>
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button onClick={()=>{removePerson(id)}}>remove</button>
            </div>
          </article>
        )
      })}
      <button onClick={()=> setPeople([])}>
          clear all
      </button>
    </>
  );
};

export default List;
