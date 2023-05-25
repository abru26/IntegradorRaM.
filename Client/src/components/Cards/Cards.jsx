
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";


function Cards({ characters, onClose, onSearch }) {
   console.log(characters)

   return(
      <div>
      
         <div className={styles.container}>
            <div className={styles.titulo} >
               <h1>HOME</h1>
            </div>
            {
               characters.map((character, index) => {
                  return(
                     <Card
                     key={index}
                     id={character.id}
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     onClose={() => onClose(character.id)}
                     />
                  );
               })
            }
         </div>

      </div>
   );
   
}

export default Cards;
