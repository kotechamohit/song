const apiUrl = 'http://localhost:8080/songs'; // Change if your API runs on a different port

// Fetch and display songs
function fetchSongs() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const songTableBody = document.getElementById('songTableBody');
            songTableBody.innerHTML = ''; // Clear existing data

            data.forEach(song => {
                let row = `<tr>
                    <td>${song.songId}</td>
                    <td>${song.songName}</td>
                    <td>${song.lyricist}</td>
                    <td>${song.singer}</td>
                    <td>${song.musicDirector}</td>
                    <td>
                        <button onclick="editSong(${song.songId})">Edit</button>
                        <button onclick="deleteSong(${song.songId})">Delete</button>
                    </td>
                </tr>`;
                songTableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching songs:', error));
}

// Add or update song
function addOrUpdateSong() {
    const songId = document.getElementById('songId').value;
    const songName = document.getElementById('songName').value;
    const lyricist = document.getElementById('lyricist').value;
    const singer = document.getElementById('singer').value;
    const musicDirector = document.getElementById('musicDirector').value;

    const song = { songName, lyricist, singer, musicDirector };
    
    const method = songId ? 'PUT' : 'POST';
    const url = songId ? `${apiUrl}/${songId}` : apiUrl;
    
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
    })
    .then(response => {
        if (response.ok) {
            fetchSongs();
            clearForm();
        } else {
            console.error('Error saving song');
        }
    });
}

// Delete song
function deleteSong(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            fetchSongs();
        } else {
            console.error('Error deleting song');
        }
    });
}

// Edit song
function editSong(id) {
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(song => {
        document.getElementById('songId').value = song.songId;
        document.getElementById('songName').value = song.songName;
        document.getElementById('lyricist').value = song.lyricist;
        document.getElementById('singer').value = song.singer;
        document.getElementById('musicDirector').value = song.musicDirector;
    });
}

// Clear form after submission
function clearForm() {
    document.getElementById('songId').value = '';
    document.getElementById('songName').value = '';
    document.getElementById('lyricist').value = '';
    document.getElementById('singer').value = '';
    document.getElementById('musicDirector').value = '';
}

// Load songs when the page loads
window.onload = fetchSongs;

// Hiding the "Print This Page" button after being clicked
document.getElementById("printButton").addEventListener("click", function () {
    const printButton = this;

    // Temporarily hide the button
    printButton.style.display = "none";

    // Print the page
    window.print();

    // Restore the button after printing
    setTimeout(() => {
        printButton.style.display = "block";
    }, 0); // Delay to ensure print dialog has closed
});

