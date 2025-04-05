import { useState } from "react"

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')
    const updateTerm = (event) => {
        setTerm(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={updateTerm} />
        </form>
    )
}

export default SearchBar