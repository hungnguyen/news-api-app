import { useParams } from "react-router-dom"
import { useGetByCategoryQuery } from "../services/news";
import ListNews from "../components/ListNews";
import Layout from "../components/Layout";

export default function ByCategory(){
    const params = useParams();
    const {data, isLoading} = useGetByCategoryQuery(params.categoryid ?? "");
    return <>
        <Layout>
            <ListNews items={data?.articles} loading={isLoading} />
        </Layout>
    </>
}