import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
                                   children,
                                   title = 'Screenshot Landing Page'
                               }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>{title}</title>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta name="author" content=""/>
            </Head>
            <div className="gradient leading-relaxed tracking-wide flex flex-col">
                <Header/>
                {children}
                <Footer/>
            </div>
        </>
    )
}
