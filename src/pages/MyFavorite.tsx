import { Typography } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import Layout from "../components/Layout";
import ListNews from "../components/ListNews";

export default function MyFavorite(){
    const favorites = useAppSelector((state) => state.favorites.data);
    return (
        <>
            <Layout>
                {
                    favorites.length === 0 ? (
                        <Typography variant="subtitle1" gutterBottom display="block" sx={{textAlign:"center"}}>No favorite item!</Typography>
                    ) : (
                        <ListNews items={favorites} loading={false} />
                    )
                }
                
            </Layout>
        </>
    )
}