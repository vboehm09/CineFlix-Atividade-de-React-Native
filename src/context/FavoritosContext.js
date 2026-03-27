import { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    function addFavorito(id) {
        setFavoritos((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }

    function removeFavorito(id) {
        setFavoritos((prev) => prev.filter((i) => i !== id));
    }

    function toggleFavorito(id) {
        setFavoritos((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    }

    function isFavorito(id) {
        return favoritos.includes(id);
    }

    return (
        <FavoritosContext.Provider
            value={{ favoritos, addFavorito, removeFavorito, toggleFavorito, isFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}

export function useFavoritos() {
    return useContext(FavoritosContext);
}
