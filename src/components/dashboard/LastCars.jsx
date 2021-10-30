import React, {useContext, useState, useEffect} from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";

//Context
import carContext from "../../context/cars/carContext";
import brandContext from "../../context/brands/brandContext";

function LastCars() {

  const carsContext = useContext(carContext);
  const { cars } = carsContext;

  const [lasts, setLasts] = useState(cars.slice(cars.length -4, cars.length - 1));

  const brandsContext = useContext(brandContext);
  const { brands } = brandsContext;

  const getBrand = id => (
    brands.find((element) => element._id === id)
  )

  
  
  return (
    <div>
      <Fade in={true}>
      <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Marca</TableCell>
                  <TableCell>Modelo</TableCell>
                  <TableCell>Año</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {lasts.map(last => (
                  <TableRow>
                    <TableCell>
                    <Avatar src={getBrand(last.brandCar).logoBrand}/>
                    </TableCell>
                  <TableCell>{getBrand(last.brandCar).nameBrand}</TableCell>
                  
                <TableCell>{last.modelCar}</TableCell>
                <TableCell>{last.yearCar}</TableCell>
                </TableRow>
                ))}
              
              </TableBody>
            </Table>
          </TableContainer>
          </Fade>
    </div>
  )
}

export default LastCars
