import './ComponentComposition.css';
export default function ComponentCompositionCard({name, children}){
    return(
       <div className = "card">
            <h2>{name}</h2>
            {children}
       </div>
    ) 
}