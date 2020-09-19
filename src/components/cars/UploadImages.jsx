import React, { useState, useEffect, useContext } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import HeaderCar from "./HeaderCar";
import SendIcon from '@material-ui/icons/Send';
import './UploadImages.css';

//Importando el Context de User
import authContex from '../../context/authentication/authContext';


//Configuración Filepond
// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);



const useStyles = makeStyles((theme) => ({
  root: {
    height: 800,
  },
  container: {
    backgroundColor: "#FFF",
    padding: 16,
  },
}));

function UploadImages({setStep}) {
  const classes = useStyles();

  const authsContext = useContext(authContex);
  const { token } = authsContext;

  const [files, setFiles] = useState([]);

  //Manejando visibilidad del boton de continuar
  const [continuar, setContinuar] = useState(true);

  useEffect(() => {

    if(files.length > 4){
      setContinuar(false)
    }else{
      setContinuar(true)
    }

    console.log(options.process.onload);
    
  }, [files])

  

  const options = {
    url: `${process.env.REACT_APP_API_URL}`,
    process: {
      url: "/api/images/5f60b86025f2009459e096ab",
      method: "POST",
      headers: {
        "x-auth-token": `${token}`
        
      },
      onload: (response) => response.key,
    }
  };

  const type = ["image/jpeg"];

  const onClick = e  => {
    e.preventDefault();
    setStep(2);
  } 
  return (
    <div className={classes.root}>
      <Box className={classes.container} my={2} mx={2} flex={1} boxShadow={2}>
        <HeaderCar titulo="Imagenes del coche" />

        <Box my={4}>
        <Button
              onClick={onClick}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              
            >
              Listo, continuar...
            </Button>
        </Box>
        <Box>
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            acceptedFileTypes={type}
            allowMultiple={true}
            allowRevert={false}
            maxParallelUploads={5}
            maxFiles={5}
            instantUpload={false}
            server={options}
            name="image"
            labelIdle='Arrastre y suelte aquí las imágenes o <span class="filepond--label-action">Cargue desde archivo</span>. DEBEN SER 5 IMAGES'
          />
        </Box>
      </Box>
    </div>
  );
}

export default UploadImages;
