import { FC } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { Navbar, SideMenu } from "../components/ui";
import { BreadCrumbs } from "../components/ui/BreadCrumbs";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: JSX.Element | JSX.Element[];
  breadcrumbs: JSX.Element | JSX.Element[];
  queryType: string;
}

export const ContentLayout: FC<Props> = ({
  title,
  pageDescription,
  imageFullUrl,
  children,
  breadcrumbs,
  queryType,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>
      <SideMenu />
      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        <Container>
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          {children}
        </Container>
      </main>
    </>
  );
};
