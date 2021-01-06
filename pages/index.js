import Layout from "../components/layout";
import MainHero from "../components/main_hero";
import Customers from "../components/customers";
import Features from "../components/features";
import Docs from "../components/docs";
import Pricing from "../components/pricing";
import CTA from "../components/cta";

export default function Home() {
    return (
        <Layout>
            <MainHero/>
            <Customers/>
            <Features/>
            <Docs/>
            <Pricing/>
            <CTA/>
        </Layout>
    )
}
