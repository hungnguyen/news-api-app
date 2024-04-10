import { addFavorite } from "../slices/favoriteSlice";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, OpenInNew } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../app/hooks";

interface NewsItemProps {
    item: any
}

const NewsItem = ({ item }: NewsItemProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state)=>state.favorites.data);
  return (
    <Card sx={{maxWidth: 345, display:"flex", flexDirection:"column"}}>
      <Link href={item.url} target="_blank" color="inherit" underline="none">
        <CardActionArea>
          <CardMedia
            sx={{height: 140}}
            image={item.urlToImage}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions disableSpacing sx={{mt: "auto"}} >
        <IconButton
          size="small"
          color="primary"
          onClick={() => dispatch(addFavorite(item))}
        >
          {favorites.some((x: any)=>x.url === item.url)?<Favorite />:<FavoriteBorder/>}
        </IconButton>
        <Link href={item.url} target="_blank">
          <IconButton size="small" color="primary">
            <OpenInNew />
          </IconButton>
        </Link>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{ml: "auto"}}
        >
          {item.source.name}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
