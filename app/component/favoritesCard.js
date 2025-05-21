'use client'
import { deleteFavorites ,getFavorites } from "../firebase/firebase";
import { useState, useEffect } from "react";
export default function FavoritesCard({favorites:initialFavorites}){
    const [favorites, setFavorites] = useState(initialFavorites);
    
    const deleteFavoritesFunction = async (id) => {      
            try {
                await deleteFavorites(id);
                await fetchAndUpdateFavorites();
            } catch (error) {
                console.error(error);
            }
        }

    const fetchAndUpdateFavorites = async () => {
        const data = await getFavorites();
        setFavorites(data);
    };
    useEffect(() => {
        setFavorites(initialFavorites);
    }, [initialFavorites]);
    return(
        <div className="favorites">
            <p className="contents_title">즐겨찾기</p>
            <div className="favorites_container">
                {favorites.length === 0 ? (
                <div className="favorite_empty">
                    <img src="/nofavorites.png" alt="no favorites" width={150} height={150}></img>
                </div>               
                ) : favorites.map((favorite) => (
                    <div key={favorite.id} className="favorite_card" >
                        <button className="favorite_delete" onClick={() => deleteFavoritesFunction(favorite.id)}>x</button>             
                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/${favorite.profileIconId}.png`}
                        className="favorite_profile_img" onError={(e) => e.target.src = "https://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/29.png"}
                        onClick={() => window.location.href = `/search?query=${favorite.gameName}#${favorite.gameTag}`}/>
                        <div className="favorite_info" onClick={() => window.location.href = `/search?query=${favorite.gameName}#${favorite.gameTag}`}>
                            <div className="favorite_info_name">
                                <p>{favorite.gameName}</p>#<p>{decodeURIComponent( favorite.gameTag )}</p>
                            </div>   
                            <div>       
                                <div className={`favorite_info_tier rank-${favorite.rank}`}>{favorite.rank}</div>
                                <div className="favorite_info_level">Lv{favorite.summonerLevel}</div>
                            </div>  
                        </div>                      
                    </div>
                ))}
            </div>
        </div>
    )
}