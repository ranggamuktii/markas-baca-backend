import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Author from '../models/authorModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, '../uploads/author');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  },
});

export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }

    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await Author.findById(req.params.id);

    if (!deletedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }

    deletedAuthor.isDeleted = true;
    await deletedAuthor.save();

    res.status(200).json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const uploadProfileAuthor = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const authorId = req.body.authorId;
  const profileImagePath = req.file.path;

  try {
    const author = await Author.findById(authorId);
    if (!author) return res.status(404).json({ message: 'Author not found' });

    author.profileImage = profileImagePath;
    await author.save();

    res.status(200).json({ message: 'Profile image uploaded successfully', profileImagePath });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
