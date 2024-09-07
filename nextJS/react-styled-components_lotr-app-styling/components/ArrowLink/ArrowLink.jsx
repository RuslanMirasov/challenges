import styled from "styled-components";
import Link from "next/link";
import PrevArrow from "../../public/icons/arrow-left.svg";
import NextArrow from "../../public/icons/arrow-right.svg";
import BackArrow from "../../public/icons/chevron-left.svg";

const StyledLink = styled(Link)`
  display: inline-flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: ${({ $align }) =>
    $align === "right" ? "flex-end" : "flex-start"};
  align-items: center;
  gap: 0px;
  color: var(--color-earth);
  text-decoration: none;
  white-space: nowrap;
  text-align: ${({ $align }) => ($align === "right" ? "right" : "left")};
  padding-left: ${({ $align }) => ($align === "right" ? "0px" : "20px")};
  padding-right: ${({ $align }) => ($align === "right" ? "20px" : "0px")};
  margin-left: ${({ $align }) => ($align === "right" ? "auto" : "0px")};
  p,
  i {
    display: block;
    width: 100%;
  }
  svg {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    left: ${({ $align }) => ($align === "right" ? "auto" : "0px")};
    right: ${({ $align }) => ($align === "right" ? "0px" : "auto")};
  }
`;

const ArrowLink = ({ href, arrow, children }) => {
  return (
    <StyledLink href={href} $align={arrow}>
      {!arrow && <BackArrow />}
      {arrow === "left" && <PrevArrow />}
      {children}
      {arrow === "right" && <NextArrow />}
    </StyledLink>
  );
};

export default ArrowLink;
