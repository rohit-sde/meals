import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    ids: [] as string[],
    addFavourite: (id: string) => { },
    removeFavourite: (id: string) => { },
})

export default function FavouriteContextProvider({ children }: { children: React.ReactNode }) {
    const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([])

    function addFavourite(id: string) {
        setFavouriteMealIds((prevIds) => [...prevIds, id])
    }

    function removeFavourite(id: string) {
        setFavouriteMealIds((prevIds) => prevIds.filter((mealId) => mealId !== id))
    }
    return (
        <FavouriteContext.Provider value={{
            ids: favouriteMealIds,
            addFavourite: addFavourite,
            removeFavourite: removeFavourite,
        }}>
            {children}
        </FavouriteContext.Provider>
    )
}