import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Category, ExpandLess, ExpandMore, Public, Source } from "@mui/icons-material";
import React from "react";
import { useGetSourcesQuery } from "../services/sources";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { countries } from "../data/countries";



export default function LeftMenu(){
    const [expanMenu, setExpandMenu] = React.useState<number>(0);
    const handleExpand = (id: number) => {
        if (expanMenu !== id) setExpandMenu(id);
        else setExpandMenu(0);
      };
      const {data} = useGetSourcesQuery();
      const navigate = useNavigate();
    return (
        <>
        <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItemButton onClick={() => handleExpand(1)}>
                    <ListItemIcon>
                        <Source />
                    </ListItemIcon>
                    <ListItemText primary="Sources" />
                    {expanMenu === 1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={expanMenu === 1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {data?.sources &&
                        data?.sources.map((item: any) => (
                            <ListItemButton
                            sx={{pl: 2}}
                            key={item.id}
                            onClick={() => navigate(`/source/${item.id}`)}
                            >
                            <ListItemText primary={item.name} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={() => handleExpand(2)}>
                    <ListItemIcon>
                        <Category />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                    {expanMenu === 2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={expanMenu === 2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {categories.map((item:any) => (
                        <ListItemButton
                            sx={{pl: 2}}
                            key={item.id}
                            onClick={() => navigate(`/category/${item.id}`)}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={() => handleExpand(3)}>
                    <ListItemIcon>
                        <Public />
                    </ListItemIcon>
                    <ListItemText primary="Countries" />
                    {expanMenu === 3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={expanMenu === 3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {countries.map((item: any) => (
                        <ListItemButton
                            sx={{pl: 2}}
                            key={item.code}
                            onClick={() => navigate(`/country/${item.code}`)}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Box>
            
        </>
    )
}