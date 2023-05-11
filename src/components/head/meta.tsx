import Head from "next/head";

const Meta = ({ title, keyword, description }: any) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={keyword} />
            </Head>
        </div>
    );
};



export default Meta;