import { useParams } from "react-router-dom";
import ListNews from "../components/ListNews";
import { useGetByCountryQuery } from "../services/news";
import Layout from "../components/Layout";

export default function Headline(){
    const params = useParams();
    const {data, isLoading} = useGetByCountryQuery(params.countryid ?? "us");
    return <>
        <Layout>
            <ListNews items={data?.articles} loading={isLoading} />
        </Layout>
    </>
}