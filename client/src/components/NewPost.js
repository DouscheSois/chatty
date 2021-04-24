// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
//
// import { addEntry } from "../actions/entry";
//
// import { Row, Col, Container, Form, Button } from "react-bootstrap";
//
// const NewPost = () => {
//   const [text, setText] = useState("");
//   const dispatch = useDispatch();
//
//   const submit = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       dispatch(addEntry({ text }));
//       setText("");
//     }
//   };
//
//   return (
//     <Row>
//       <Col xs={12} md={12}>
//         <Container>
//           <h1 className="text-center">Create New Post</h1>
//           <Form
//             onSubmit={(e) => {
//               e.preventDefault();
//               dispatch(addEntry({ text }));
//               setText("");
//             }}
//           >
//             <Form.Group controlId="exampleForm.ControlTextarea1">
//               <Form.Control
//                 as="textarea"
//                 rows="4"
//                 placeholder="type here..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyPress={submit}
//               />
//               <Button type="submit" variant="primary">
//                 Share
//               </Button>
//             </Form.Group>
//           </Form>
//         </Container>
//       </Col>
//     </Row>
//   );
// };
//
// export default NewPost;
