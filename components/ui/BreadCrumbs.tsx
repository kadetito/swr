import { Breadcrumb, Nav, Button } from "react-bootstrap";

import { FC } from "react";
import NextLink from "next/link";

interface Props {
  breadcrumbs: JSX.Element | JSX.Element[];
}

export const BreadCrumbs: FC<Props> = ({ breadcrumbs }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{breadcrumbs}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
