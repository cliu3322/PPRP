import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import FileDetail from './models/FileDetail';
const fileUploadMiddleware = require('./file-upload-middleware')



export default function (app) {

const apiRoutes = express.Router();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file)
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

// var upload = multer({ storage: storage })

var upload = multer({
  storage: storage,
  onError : function(err, next) {
    console.log('error', err);
    next(err);
  }
});

//apiRoutes.post("/uploadFile", upload.single('file'),fileUploadMiddleware);



apiRoutes.post("/uploadFile", upload.single('file'), function (req, res, next) {
   if (req.file==undefined) {
    return res.status(422).send({ error: 'You must select a file to upload.' });
  }
  //console.log(req.body.author)
  const product = new FileDetail({
    _id: new mongoose.Types.ObjectId(),
    // uploader: req.body.uploader,
    uploader: "Ajay",
    filePath: req.file.path,
    fileName:req.file.originalname,
    author:req.body.author
  });
  product.save().then(result => {
  	FileDetail.find({}).exec(function (err, files) {

  		if (files) {
  			res.status(201).json({
  				message: "File uploaded successfully",
  				allFilesDetail: files

  			});
  		} else {
  			res.status(204).json({
  				message: "No file detail exist",
  				allFilesDetail: files

  			});
  		}
  	});
  }).catch(err => {
  	console.log('err');
  	res.status(500).json({
  		error: err
  	});
  });
});


apiRoutes.get('/getFileDetails', function (req, res) {

    FileDetail.find({ }).exec(function(err, files) {
        if (files) {

          res.status(201).json({

        allFilesDetail:files

      });
        } else {
          res.status(204).json({

        allFilesDetail:files

      });
        }
      });
  });


  app.use('/api', apiRoutes);
};
