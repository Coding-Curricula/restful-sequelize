import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:8080/api/categories'

export default function CategoryComponent() {
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categoryToUpdate, setCategoryToUpdate] = useState('')

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(API_URL)
            setCategories(data)
        } catch (error) {
            console.error(error)
        }
    }

    const createCategory = async () => {
        try {
            const { data } = await axios.post(API_URL, { name: newCategory })
            setCategories([...categories, data])
            setNewCategory('')
        } catch (error) {
            console.error(error)
        }
    }

    const deleteCategory = async (categoryId) => {
        try {
            await axios.delete(`API_URL/${categoryId}`)
            setCategories(categories.filter(category => category.id !== categoryId))
            setSelectedCategory('')
        } catch (error) {
            console.error(error)
        }
    }

    const updateCategory = async () => {
        try {
            await axios.put(`API_URL/${selectedCategory}`, { name: categoryToUpdate });
            fetchCategories();
            setSelectedCategory('');
            setCategoryToUpdate('');
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div>
            <h1>Categories</h1>
            <div>
                <input type="text" value={newCategory} onChange={e => setNewCategory(e.target.value)} />
                <button onClick={createCategory}>Create Category</button>
            </div>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}
                        <button onClick={() => {
                            setSelectedCategory(category.id);
                            setCategoryToUpdate(category.name);
                        }}>Edit</button>
                        <button onClick={() => deleteCategory(category.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="number"
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    placeholder="ID of Category to Update"
                />
                <input
                    type="text"
                    value={categoryToUpdate || ''}
                    onChange={(e) => setCategoryToUpdate(e.target.value)}
                    placeholder="New Category Name"
                />
                <button onClick={updateCategory}>Update Category</button>
            </div>
        </div>
    )
}
