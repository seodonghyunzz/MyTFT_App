import { getFavorites} from "../firebase/firebase";
import FavoritesCard from "./favoritesCard";

export default async function Favorites() {
    try {
        const favorites = await fetchFavorites();
        return <FavoritesCard favorites={favorites} />;
    } catch (error) {
        console.error("Failed to fetch favorites:", error);
        return <p>즐겨찾기 데이터를 불러오는 데 문제가 발생했습니다.</p>;
    }
}

export async function fetchFavorites() {
    const data = await getFavorites();
    return data
}
