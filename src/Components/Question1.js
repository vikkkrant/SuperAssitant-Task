import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./commonStyles.css";

const Question1 = () => {
  const [companies, setCompanies] = useState([
    { id: 'company-1', name: 'Accenture' },
    { id: 'company-2', name: 'Infosys' },
    { id: 'company-3', name: 'Wipro' },
    { id: 'company-4', name: 'Amazon' },
    { id: 'company-5', name: 'Apple' },
    { id: 'company-6', name: 'Google' },
  ]);

  const [serviceBased, setServiceBased] = useState([]);
  const [productBased, setProductBased] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.source.droppableId === 'companies') {
      const draggedCompany = companies.find((company) => company.id === result.draggableId);

      if (result.destination.droppableId === 'serviceBased') {
        setCompanies(companies.filter((company) => company.id !== result.draggableId));
        setServiceBased([...serviceBased, draggedCompany]);
      } else if (result.destination.droppableId === 'productBased') {
        setCompanies(companies.filter((company) => company.id !== result.draggableId));
        setProductBased([...productBased, draggedCompany]);
      }
    } else if (result.source.droppableId === 'serviceBased') {
      const draggedCompany = serviceBased.find((company) => company.id === result.draggableId);

      if (result.destination.droppableId === 'companies') {
        setServiceBased((prevServiceBased) =>
          prevServiceBased.filter((company) => company.id !== result.draggableId)
        );
        setCompanies([...companies, draggedCompany]);
      }
    } else if (result.source.droppableId === 'productBased') {
      const draggedCompany = productBased.find((company) => company.id === result.draggableId);

      if (result.destination.droppableId === 'companies') {
        setProductBased((prevProductBased) =>
          prevProductBased.filter((company) => company.id !== result.draggableId)
        );
        setCompanies([...companies, draggedCompany]);
      }
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>Question 1: Categorize the Companies</h2>
      <div style={styles.container}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div style={styles.companiesContainer}>
            <Droppable droppableId="companies" direction="horizontal">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {companies.map((company, index) => (
                    <Draggable key={company.id} draggableId={company.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={styles.company}
                        >
                          {company.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div style={styles.cartContainer}>
            <Droppable droppableId="serviceBased" direction="horizontal">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.cart}>
                  <h3 style={styles.subHeading}>Service Based</h3>
                  {serviceBased.map((company, index) => (
                    <Draggable key={company.id} draggableId={company.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={styles.cartItem}
                        >
                          {company.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="productBased" direction="horizontal">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.cart}>
                  <h3 style={styles.subHeading}>Product Based</h3>
                  {productBased.map((company, index) => (
                    <Draggable key={company.id} draggableId={company.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={styles.cartItem}
                        >
                          {company.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    width: '80%', // Adjust the width here
  },
  heading: {
    color: 'white',
    fontSize: '24px',
    marginBottom: '10px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  companiesContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  company: {
    backgroundColor: '#444',
    padding: '1rem',
    marginBottom: '0.5rem',
    cursor: 'grab',
    color: 'white',
    borderRadius: '4px',
    marginRight: '10px',
  },
  cartContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  cart: {
    backgroundColor: '#444',
    padding: '1rem',
    margin: '0 20px',
    flex: 1,
    borderRadius: '8px',
  },
  subHeading: {
    color: 'white',
    fontSize: '18px',
    marginBottom: '5px',
  },
  cartItem: {
    backgroundColor: 'white',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    color: 'black',
    borderRadius: '4px',
    textAlign: 'center',
  },
};

export default Question1;
