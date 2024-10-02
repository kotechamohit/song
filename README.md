Here's an updated `README.md` that includes both the existing backend Spring Boot features and the new frontend features you've added.

---

# Music Library Manager

This project is a Spring Boot application for managing a music library. It includes a backend RESTful API for handling CRUD operations for songs and a simple frontend to interact with the API.

## Table of Contents

- [Features](#features)
- [Backend Structure](#backend-structure)
  - [Song.java](#songjava)
  - [SongJpaRepository.java](#songjparepositoryjava)
  - [SongRepository.java](#songrepositoryjava)
  - [SongJpaService.java](#songjpaservicejava)
  - [SongController.java](#songcontrollerjava)
- [Frontend Structure](#frontend-structure)
  - [index.html](#indexhtml)
  - [style.css](#stylecss)
  - [script.js](#scriptjs)
- [Setup Instructions](#setup-instructions)

## Features

### Backend (Spring Boot)
- RESTful API for managing a song playlist.
- CRUD operations for songs: Create, Read, Update, and Delete.
- Layered architecture: Model, Repository, Service, and Controller.
- JPA (Java Persistence API) for database integration.

### Frontend
- Responsive UI to interact with the song library.
- Add and update songs.
- List all songs with details like Name, Lyricist, Singer, and Music Director.
- Edit and delete functionality for each song.

---

## Backend Structure

### 1. Song.java
The `Song` model represents a song entity in the music library. It contains fields such as:
- `songId`: Unique identifier for each song.
- `songName`: Name of the song.
- `lyricist`: Name of the lyricist.
- `singer`: Name of the singer.
- `musicDirector`: Name of the music director.

It uses JPA annotations to map the fields to a database table.

### 2. SongJpaRepository.java
This interface extends `JpaRepository` and provides out-of-the-box CRUD methods like:
- `findAll()`
- `findById()`
- `save()`
- `delete()`

### 3. SongRepository.java
An abstraction layer for managing songs. It declares custom methods for adding, retrieving, updating, and deleting songs.

### 4. SongJpaService.java
This class implements `SongRepository` using JPA and provides the necessary business logic. It's marked with the `@Service` annotation, making it a Spring-managed service.

### 5. SongController.java
A REST API controller to handle HTTP requests:
- `GET /songs`: Retrieve all songs.
- `POST /songs`: Add a new song.
- `PUT /songs/{id}`: Update an existing song.
- `DELETE /songs/{id}`: Delete a song by ID.

---

## Frontend Structure

### 1. index.html
A simple HTML page for managing the song library. Features:
- A form to add or update songs.
- A table to display the list of songs fetched from the API.
- Edit and Delete buttons for each song.

### 2. style.css
Basic CSS for styling the UI. It includes:
- A responsive layout.
- Styled form elements and buttons.
- A table for displaying songs with alternating row colors for better readability.

### 3. script.js
JavaScript to handle:
- Fetching the list of songs from the API and displaying them in the table.
- Adding or updating a song via form input.
- Editing or deleting a song by interacting with the buttons in the table.

#### Key Functions:
- `fetchSongs()`: Fetches all songs from the API and populates the table.
- `addOrUpdateSong()`: Adds or updates a song using the form data.
- `deleteSong(id)`: Deletes a song by ID.
- `editSong(id)`: Populates the form with song details for editing.
- `clearForm()`: Clears the form after submission.

---

## Setup Instructions

### Prerequisites
- Java 11+
- Maven
- Node.js (optional for frontend development)

### Backend Setup
1. Clone the repository.
2. Navigate to the backend directory.
3. Run the application using:
   ```bash
   mvn spring-boot:run
   ```
4. The API will be available at `http://localhost:8080/songs`.

### Frontend Setup
1. Open `index.html` in a browser.
2. The frontend interacts with the backend API to perform CRUD operations.

### API Endpoints

- `GET /songs`: Retrieve all songs.
- `POST /songs`: Add a new song.
- `PUT /songs/{id}`: Update an existing song.
- `DELETE /songs/{id}`: Delete a song by ID.

---

### Screenshots
![image](https://github.com/user-attachments/assets/201e7f1a-64e3-48e8-af3e-9bc187144676)

---

This README now reflects both the backend API and frontend features of the project. Let me know if you'd like to add or change anything!
