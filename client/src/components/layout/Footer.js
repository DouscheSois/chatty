import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              Made by <a href="https://cruip.com">Cruip</a>. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

// import React from "react";
// import { Container, Row, Col, Navbar } from "react-bootstrap";
//
// const Footnote = () => {
//   return (
//     <footer className="bg-dark py-4">
//       <Container>
//         <Row>
//           <Col className="text-center my-4">
//             <Navbar.Brand>
//               Made by: <a href="https://www.douschesois.com/">Douschesois</a>
//             </Navbar.Brand>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center">
//             <Navbar.Text>Copyright &copy; 2021</Navbar.Text>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };
//
// export default Footnote;
