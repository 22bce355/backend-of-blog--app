# Backend Blog API

A backend API for managing a blogging platform, built using Node.js and MongoDB with Mongoose.

## Features

- **Create Post**: Allows users to create new blog posts.
- **Like Post**: Users can like or dislike posts.
- **Create Comment**: Users can add comments to posts.

## Models

### `Post`

- **title**: `String` (required, max length: 20)
- **body**: `String` (required)
- **likes**: `[ObjectId]` (references `like` model)
- **comments**: `[ObjectId]` (references `comment` model, default: "no comments")
- **createdate**: `Date` (required, default: current date)

### `Comment`

- **post**: `ObjectId` (references `post` model)
- **user**: `String` (required)
- **body**: `String` (required)

### `Like`

- **post**: `ObjectId` (references `post` model)
- **user**: `String` (required)

## Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/yourusername/your-repository.git
    ```

2. **Navigate to the project directory**

    ```sh
    cd your-repository
    ```

3. **Install dependencies**

    ```sh
    npm install
    ```

4. **Set up environment variables**

    Create a `.env` file in the root directory with the following content:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

5. **Start the server**

    ```sh
    npm start
    ```
