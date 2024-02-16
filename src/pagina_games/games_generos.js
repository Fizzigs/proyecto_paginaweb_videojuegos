// function ListaDeGeneros() {
//   const [generos, setGeneros] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGeneros = async () => {
//       try {
//         const { data } = await axios.get('https://api.rawg.io/api/genres?key=a2a12ad6958442a49222489fa57fe7c8');
//         setGeneros(data.results);
//       } catch (error) {
//         console.error('Hubo un error al obtener los datos:', error);
//         setError('Hubo un error al obtener los datos');
//       }
//     };

//     fetchGeneros();
//   }, []);

//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Lista de Géneros</h1>
//       {generos.length > 0 ? (
//         <ul>
//           {generos.map((genero) => (
//             <li key={genero.id}>
//               <h2>{genero.name}</h2>
//               <img src={genero.image_background} alt={genero.name} width="300" />
//               <ul>
//                 {genero.games.map((juego) => (
//                   <li key={juego.id}>
//                     {juego.name}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Cargando géneros...</p>
//       )}
//     </div>
//   );
// }