const router = require('express').Router();
let Notes = require('../models/notes.model');

router.post('/', (req, res) => {
    const newNote = new Notes(req.body);
    newNote.save((error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(newNote);
      }
    });
  });
  
  // GET route to retrieve all notes from the collection
router.get('/', (req, res) => {
    Notes.find((error, notes) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(notes);
      }
    });
  });
  
  // GET route to retrieve a specific note by ID
  router.get('/:id', (req, res) => {
    Notes.findById(req.params.id, (error, note) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(note);
      }
    });
  });
  
  // PUT route to update a specific note by ID
  router.put('/:id', (req, res) => {
    Notes.findByIdAndUpdate(req.params.id, req.body, (error, note) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(note);
      }
    });
  });
  
  // DELETE route to delete a specific note by ID
  router.delete('/:id', (req, res) => {
    Notes.findByIdAndDelete(req.params.id, (error, note) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(note);
      }
    });
  });

  router.get('/', (req, res) => {
    const title = req.query.title;
   console.log(req)
    Notes.findOne({ title }, (error, note) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(note);
      }
    });
  });
  
  module.exports = router;
  