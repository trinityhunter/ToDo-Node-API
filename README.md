# To-Do App API

This is the documentation for the To-Do App API hosted at [Render](https://todo-node-api-3.onrender.com).

## Base URL
https://todo-node-api-3.onrender.com

## API Endpoints

### 1. Get All To-Dos

**Endpoint**: `GET /todo/`\
**Description**: Retrieve all the to-do tasks.  

**Example Response**:
```json
[
  {
    "_id": "66dfcea91982b2ca3b4770cf",
    "title": "Grocery shopping",
    "description": "Buy fruits, vegetables, and dairy products.",
    "dueDate": "2024-09-16T00:00:00.000Z",
    "completed": false,
    "priority": "Medium",
    "userId": "64f8e59f2b7e970f3421d786",
    "createdAt": "2024-09-10T04:44:25.871Z",
    "__v": 0
  },
  {
    "_id": "66dfcec01982b2ca3b4770d1",
    "title": "Schedule team meeting",
    "description": "Set up a meeting with the team to discuss the new project.",
    "dueDate": "2024-09-18T00:00:00.000Z",
    "completed": false,
    "priority": "High",
    "userId": "64f8e59f2b7e970f3421d786",
    "createdAt": "2024-09-10T04:44:48.354Z",
    "__v": 0
  },
  {
    "_id": "66dfcec81982b2ca3b4770d3",
    "title": "Doctor's appointment",
    "description": "Visit the doctor for a regular check-up.",
    "dueDate": "2024-09-22T00:00:00.000Z",
    "completed": false,
    "priority": "Low",
    "userId": "64f8e59f2b7e970f3421d786",
    "createdAt": "2024-09-10T04:44:56.271Z",
    "__v": 0
  }
]
```

### 2. Add a New To-Do

**Endpoint**: `POST /todo/add/`\
**Description**: Add a new to-do task.  

**Request Body**:
```json
{
  "title": "Complete project proposal",
  "description": "Prepare and submit the project proposal to the client.",
  "dueDate": "2024-09-20",
  "priority": "High",
  "userId": "user123"
}
```

**Example Response**:
```json
{
  "message": "Todo added successfully",
  "todo": {
    "_id": "64f8e59f2b7e970f3421d786",
    "title": "Complete project proposal",
    "description": "Prepare and submit the project proposal to the client.",
    "dueDate": "2024-09-20",
    "priority": "High",
    "completed": false,
    "userId": "user123"
  }
}
```

### 3. Update a To-Do

**Endpoint**: `PUT /todo/update/:id`\
**Description**: Update an existing to-do task by its ID.  

**Request Body**:
```json
{
  "title": "Updated project proposal",
  "description": "Submit the updated project proposal.",
  "dueDate": "2024-09-22",
  "priority": "Medium",
  "completed": true
}
```

**Example Response**:
```json
{
  "message": "Todo updated successfully",
  "todo": {
    "_id": "64f8e59f2b7e970f3421d786",
    "title": "Updated project proposal",
    "description": "Submit the updated project proposal.",
    "dueDate": "2024-09-22",
    "priority": "Medium",
    "completed": true
  }
}
```

### 4. Delete a To-Do

**Endpoint**: `DELETE /todo/delete/:id`  
**Description**: Delete a to-do task by its ID.  

#### URL Parameters:

- **id**: The unique identifier of the to-do task you want to delete.

#### Example Request:

To delete a to-do with ID `64f8e59f2b7e970f3421d786`, send a DELETE request:


#### Example Response:

```json
{
  "message": "Todo deleted successfully",
  "todo": {
    "_id": "64f8e59f2b7e970f3421d786",
    "title": "Update the task",
    "description": "New description here",
    "dueDate": "2024-09-20T00:00:00.000Z",
    "completed": true,
    "priority": "Medium",
    "userId": "66dfdcc7e20c46ddaa424205",
    "createdAt": "2024-09-10T05:44:39.513Z",
    "__v": 0
  }
}
```


 
