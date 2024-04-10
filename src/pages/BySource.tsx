import { useParams } from "react-router-dom"
import { useGetBySourceQuery } from "../services/news";
import ListNews from "../components/ListNews";
import Layout from "../components/Layout";

export default function BySource(){
    const params = useParams();
    const {data, isLoading} = useGetBySourceQuery(params.sourceid ?? "");
    return <>
        <Layout>
            <ListNews items={data?.articles} loading={isLoading} />
        </Layout>
    </>
}