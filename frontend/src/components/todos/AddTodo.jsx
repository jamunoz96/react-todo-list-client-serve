import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../store/actions/todoActions';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddTodo = ({ todo, setTodo }) => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(todo._id){
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,    
                date: todo.date,
                author: todo.author,
                uid: todo.uid
            }
            
            dispatch(updateTodo(updatedTodo, id));

        } else{
            const newTodo = {
                ...todo,
                date: new Date()
            }

            dispatch(addTodo(newTodo));
        }

        setTodo({ name: '', isComplete: false});
    }

    return ( 
        <>
        <Form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit} >
                <Row>

                    <Col md="10">

                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Enter todo"
                                value={todo.name}
                                onChange={(e) => setTodo({ ...todo, name: e.target.value })} />
                        </Form.Group>
                        
                    </Col>

                    <Col md="2">
                        <Button
                            variant="primary"
                            type="submit" >
                            Send
                        </Button>
                    </Col>

                </Row>

        </Form>
        </>
     );
}
 
export default AddTodo;