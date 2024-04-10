import { CircularProgress, Grid, Paper, Slide, SlideProps, Snackbar } from "@mui/material";
import NewsItem from "./NewsItem";

interface ListNewsProps{
    loading: boolean;
    items: any[]
}

const slideTransition = (props: SlideProps) => {
    return <Slide {...props} direction="down" />;
  };
  
export default function ListNews({loading, items}: ListNewsProps){
    
    return <>
        <div style={{flexFlow:"1"}}>
            <Grid container>
            {items &&
                items.map((item: any, index: number) => (
                <Grid
                    container
                    item
                    xs={3}
                    justifyContent="center"
                    sx={{p:1}}
                    key={index}
                >
                    <NewsItem item={item} />
                </Grid>
                ))}
            </Grid>
        </div>
        <Snackbar
            anchorOrigin={{
            vertical: "top",
            horizontal: "center",
            }}
            open={loading}
            TransitionComponent={slideTransition}
            key=""
        >
            <Paper sx={{
                width: 60, 
                height: 60, 
                borderRadius: "50%", 
                justifyContent:"center", 
                alignItems:"center", 
                display:"flex"
            }}>
                <CircularProgress size={30} />
            </Paper>
        </Snackbar>
    </>
}