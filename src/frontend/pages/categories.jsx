import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { db } from '../../firebase'
import hstar from './hstar.png'
import ProductCard from '../components/ProductCard'
import './css/categories.css'
import { useStateValue } from '../../StateProvider'

const capitalize = str => {
  str = str.split(" ");
  str = str.map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");
  return str
}

const Categories = (props) => {
  return (
    <div className='Categories'>
      {/* sidebar for big screen(Grid1) */}
      <Sidebar {...props}/>
      {/* scrollbar for mobile */}
      {/* main-content(Grid2) */}
      <MainContent {...props}/>
    </div>
  )
}

const Ratings = ({ratings, category}) => {
  const [{filters} , dispatch] = useStateValue()
  let stars = [...Array(ratings)]
  let dry = [...Array(5 - ratings)]
  stars = stars.map(_ => <img width='20px' alt='star' src='https://cdn.clipartsfree.net/vector/medium/58261-yellow-star-images.png' />)
  dry = dry.map(_ => <img width='20px' alt='star' src={hstar} />)
  const handleClick = () => {
    dispatch({
      type: 'ADD_FILTER',
      filters: {
        'Product Rating': ratings, 
        category: category
      }
    })
  }
  const remove = () => dispatch({
    type: 'ADD_FILTER',
    filters: {}
  })
  return (
    <React.Fragment>
      <p className='stars' onClick={handleClick}>
        {stars}
        {dry}
        <span> & up </span>
      </p>
      {filters['Product Rating'] === ratings && filters.category === category && <img className='img' width='30px' onClick={remove} src='https://icon-library.com/images/cancel-icon-png/cancel-icon-png-12.jpg' alt='X' />}
    </React.Fragment>
  )
}

const Sidebar = ({ match }) => {
  const [{filters}] = useStateValue()
  const location = useLocation()
  const [ categories, ] = useState(['Electronics', 'Amazon Basic', 'Computers & Accessories'])
  //useEffect(() => {
  //  (async () => {
  //    try {
  //      const doc = await db.collection('Categories').doc('categories').get()
  //      if(doc.exists) setCategories(doc.data().Categories)
  //      else alert('no doc')
  //    } catch ( err ) {
  //      alert(err)
  //    }
  //  })()
  //}, [categories])
  const category = match?.params.slug
  ? capitalize(match.params.slug) 
  : null;
  const stars = React.useMemo(() => [1,2,3,4], [])
  const _stars = React.useMemo(() => {
    if(filters['Product Rating'] && filters.category === category) return <Ratings category={category} ratings={filters['Product Rating']} />
    else return stars.map(i => <Ratings category={category} ratings={i} />).reverse() 
  }, [filters, stars, category])
  return (
    <div className='sidebar'>
      <h3>Departments</h3>
      <ul>
        {categories.map(category => <li className={location.pathname === `/categories/${category.toLowerCase()}` ? 'highlight' : null}><Link  to={'/categories/' + category.toLowerCase()}>{category}</Link></li>)}
      </ul>
      <div className='sidebar_review'>
        <h3> Avg. Customer Review </h3>
        {_stars}
      </div>
    </div>
  )
}

const MainContent = ({ match }) => {
  const [{filters}] = useStateValue()
  const [ products, setProducts ] = useState([])
  const category = match?.params.slug
  ? capitalize(match.params.slug) 
  : null;
  useEffect(() => {
    (async () => {
      try {
        let items = []
        const snapshot = await db.collection('Categories').where('Category', '==', category).get()
        if (snapshot) {
          snapshot.forEach(doc => doc.data()['Product Rating'] >= (filters['Product Rating'] | 0) ? items.push(doc.data()) : null)
          setProducts(items)
        } else alert('nodoc')
        items = []
      } catch (err) {
        alert(err)
      }
    })()
  }, [category, filters])
  return (
    <div className='maincontent'>
      <h1>{category}</h1>
      <Products products={ products } />
    </div>
  )
}

const Products = (props) => {
  const rows = [...Array( Math.ceil(props.products.length / 3) )];
  const productRows = rows.map( (row, idx) => props.products.slice(idx * 3, idx * 3 + 3) )
  const content = productRows.map((row, idx) => (
    <div className={(productRows.length-1) === idx ? "maincontent_row noborder": "maincontent_row"} key={idx}>    
      { row.map( product => <ProductCard id={product['Product ID']} title={product['Product Name']} price={product['Product Price']} rating={product['Product Rating']} imageSrc={product['Product Image']} /> )} 
    </div> 
  ));
   return (
   <div>
     {content}
   </div>
  );
}
export default Categories 
