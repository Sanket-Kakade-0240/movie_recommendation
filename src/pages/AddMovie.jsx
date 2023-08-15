import React, { useState }  from 'react'
// import Navbar from '../components/Navbar'
import styled from "styled-components";

const Container = styled.div`

`;
const Title = styled.h2`
`
const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
padding: 8px;
margin-top: 0.4rem;
width: 60vh;
border: 1px solid lightgray;
`
const Textarea = styled.textarea`
padding: 8px;
margin-top: 0.4rem;
width: 60vh;
border: 1px solid lightgray;
`
const AddMovie = ({ onMovieAdded , onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        year: '',
        cast: '',
        genre: '',
        rating: '',
        director: '',
        writer: '',
        imageURL: '',
      });
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        onMovieAdded(formData);
        setFormData({
          title: '',
          summary: '',
          year: '',
          cast: '',
          genre: '',
          rating: '',
          director: '',
          writer: '',
          imageURL: '',
        });
      };
      
      const handleCancel = () => {
        onClose();
        setFormData({
          title: '',
          summary: '',
          year: '',
          cast: '',
          genre: '',
          rating: '',
          director: '',
          writer: '',
          imageURL: '',
        });
      };
    return (
    <div className="form-overlay">
        
        <Container className="form-content">
        <Title>Add New Product</Title>
          <Form onSubmit={handleSubmit}>
            <label>
              Title: <br />
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Summary: <br />
              <Textarea
                type="text"
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Year: <br />
              <Input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Cast: <br />
              <Input
                type="text"
                name="cast"
                value={formData.cast}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Genre: <br />
              <Input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Rating: <br />
              <Input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Director: <br />
              <Input
                type="text"
                name="director"
                value={formData.director}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Writer:  <br />
              <Input
                type="text"
                name="writer"
                value={formData.writer}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Image URL:  <br />
              <Input
                type="text"
                name="image"
                value={formData.imageURL}
                onChange={handleInputChange}
              />
            </label>
            
            <button type="submit" > Add Movie </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </Form>
        </Container>
    </div>
  )
}

export default AddMovie