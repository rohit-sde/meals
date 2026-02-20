import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    ids: [] as string[],
    addFavourite: (id: string) => { },
    removeFavourite: (id: string) => { },
})

export default function FavouriteContextProvider({ children }: { children: React.ReactNode }) {
    const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([])

    function addFavorite(id: string) {
        setFavouriteMealIds((prevIds) => [...prevIds, id])
    }

    function removeFavorite(id: string) {
        setFavouriteMealIds((prevIds) => prevIds.filter((mealId) => mealId !== id))
    }
    return (
        <FavouriteContext.Provider value={{
            ids: favouriteMealIds,
            addFavourite: addFavorite,
            removeFavourite: removeFavorite,
        }}>
            {children}
        </FavouriteContext.Provider>
    )
}