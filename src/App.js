import React , {useState, useEffect} from 'react';

import PopUp from './components/PopUp'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Spinner from './components/Spinner'


function App() {

   const [open, setOpen] = useState(false);
   const [photos, setPhotos] = useState([]);
   const [title, setTitle] = useState('');
   const [loading , setLoading] = useState(false);
   const [current , setCurrent] = useState({})
   
   useEffect(() => {
      setLoading(true)

      fetch('https://pixabay.com/api/?key=16229574-dc0305a345f048a240cd3f66c')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setPhotos(data.hits);
            setLoading(false)
         })
   },[])

   const onSearch = (e) => {
      fetch(`https://pixabay.com/api/?key=16229574-dc0305a345f048a240cd3f66c&q=${e}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setPhotos(data.hits);
            setTitle(e)
         })
   }


   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const popHandle = (e) => {
      setCurrent(e)
   }

   if(loading){
      return <Spinner />
   }
   else{
      return (
         <div>
            <Navbar />
            <main >
               <div> 
                  <h1>
                     The Best Photos from talanted creators.
                  </h1>
               <Search 
                  onSearch={onSearch}
               />
               </div>
            </main>
            <section>
               <h1 className="tag-name">{title}</h1>
               <div className="cards">
                  <Cards photos={photos} handleOpen={handleOpen} popHandle={popHandle} />
               </div>
            </section>

            <PopUp handleClose={handleClose} open={open} current={current} />
            
         </div>
      );
   }
}

export default App;
