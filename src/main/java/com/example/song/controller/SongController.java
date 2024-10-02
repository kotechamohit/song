package com.example.song.controller;

import com.example.song.model.Song;
import com.example.song.service.SongJpaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/songs")
public class SongController {

    @Autowired
    private SongJpaService songJpaService;

    @GetMapping
    public List<Song> getAllSongs() {
        return songJpaService.getSongs();
    }

    @GetMapping("/{id}")
    public Song getSongById(@PathVariable int id) {
        return songJpaService.getSongById(id);
    }

    @PostMapping
    public Song addSong(@RequestBody Song song) {
        return songJpaService.addSong(song);
    }

    @PutMapping("/{id}")
    public Song updateSong(@PathVariable int id, @RequestBody Song song) {
        return songJpaService.updateSong(id, song);
    }

    @DeleteMapping("/{id}")
    public void deleteSong(@PathVariable int id) {
        songJpaService.deleteSong(id);
    }
}
