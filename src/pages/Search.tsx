import { useParams } from "react-router-dom"
import ListNews from "../components/ListNews";
import { useGetEverythingQuery } from "../services/news";
import Layout from "../components/Layout";

export default function Search(){
    const params = useParams();
    const {data, isLoading} = useGetEverythingQuery(params.keyword ?? "");
    return <>
        <Layout>
            <ListNews items={data?.articles} loading={isLoading} />
        </Layout>
    </>
}