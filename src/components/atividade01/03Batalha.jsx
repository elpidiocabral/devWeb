import { Children, cloneElement } from "react";

const styles = {
    Fighters: {
      height: '100%',
      width: '80%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'column',
      border: '1px solid #000',
    },
    FightersImage: {
      width: '90%',
      height: '90%',
      objectFit: 'cover',
      borderRadius: '6%',
    },
    Arena: {
      display: 'grid',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      justifyItems: 'center',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '100px 1fr',
      gap: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '20px',
      border: '2px solid black',
      width: '80%',
      height: '80%',
      padding: '0 0 5px 0px',
      
    },
    World: {
      widht: '100%',
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      padding: '10px',
      border: '2px solid black',
      borderRadius: '20px',
      backgroundColor: '#151515',
    },
    ArenaName: {
        padding: '35px 28px',
        margin: '0',
        borderRight: '2px solid black',
        borderBottom: '2px solid black',
        borderLeft: '2px solid black',
        borderRadius: '10px 10px 0 0',
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        gridColumn: '1 / span 2',
      }
  }
  
  styles.Hero = {
    ...styles.Fighters,
    backgroundColor: '#0000FF',
    borderRadius: '20px 0 0 20px',
    borderRight: '2px solid black',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    padding: '35px 28px',
  }
  
  styles.Enemy = {
    ...styles.Fighters,
    backgroundColor: '#ff0000',
    borderRadius: '0 20px 20px 0',
    borderLeft: '2px solid black',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    padding: '35px 28px',
  }

const Hero = ({name, img}) => {
    return (
        <div style={styles.Hero}>
            <h3>{name}</h3>
            <img style={styles.FightersImage} src={img} alt="Hero" />
        </div>
    );
}

const Enemy = ({name, img}) => {
    return (
        <div style={styles.Enemy}>
            <h3>{name}</h3>
            <img style={styles.FightersImage} src={img} alt="Enemy" />
        </div>
    );
}

const Arena = ({children, name}) => {
    return (
        <div style={styles.Arena}>
            <h2 style={styles.ArenaName}>Arena: <b>{name}</b></h2>
            {children}
        </div>
    );
}

const World = ({ children }) => {
    return (
        <div style={styles.World}>
            {children}
        </div>
    );
}


export { Arena, World, Hero, Enemy };