import React, {useState} from 'react'
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const App = () => {
  const [menuList, setMenuList] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuList(items)
      return
    }
    const selectedItems = items.filter((item) => item.category === category)
      setMenuList(selectedItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu Items</h2>
          <div className="underline"></div>
        </div> 
        <Categories filterItems={filterItems} />
        <Menu items={menuList} />
      </section>
    </main>
  )
}

export default App